import { computed, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Workday } from '@app/core/entity/workday';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { Subject, takeUntil, timer } from 'rxjs';
import { MAXIMUM_POMODORO_DURATION, Task } from './task.model';
 

interface WorkdayState {
  workday: Workday
  progress: number;
}

export const WorkdayStore = signalStore(
  withState<WorkdayState>({
    workday: Workday.createEmpty(),
    progress: 0
  }),
  withProps(() => ({
    destroyRef: inject(DestroyRef),
    pomodoroCompleted: new Subject<void>(),
  })),
  withComputed((state) => {
    const taskCount = computed(() => state.workday().taskCount);
    const hasNoTaskPlanned = computed(() => state.workday().hasNoTaskPlanned);
    const hasTaskPlanned = computed(() => state.workday().hasTaskPlanned);
    const isEditMode = computed(() => state.workday().isEditMode);
    const isExecutionMode = computed(() => state.workday().isExecutionMode);
    const pomodoroProgress = computed(() => {
      return Math.floor((state.progress() / MAXIMUM_POMODORO_DURATION) * 100);
    });

    const isButtonDisplayed = computed(() => taskCount() < Workday.MAX_TASKS_PER_DAY);

    return {
      taskCount,
      isButtonDisplayed,
      hasNoTaskPlanned,
      hasTaskPlanned,
      isEditMode,
      isExecutionMode,
      pomodoroProgress
    };
  }),
  withMethods(({ destroyRef, pomodoroCompleted, ...store }) => ({
    startWorkday() {
      patchState(store, ({ workday}) => ({
        workday: workday.setExecutionMode()
      }));
      console.log('Workday started!');
      timer(0, 1000)
        .pipe(takeUntil(pomodoroCompleted), takeUntilDestroyed(destroyRef))
        .subscribe((elapsedSeconds: number) => {
          console.log('elapsedSeconds', elapsedSeconds);

          patchState(store, { progress: elapsedSeconds });
          patchState(store, ({ workday }) => {
            return { workday: workday.tick() };
          });

          // Check completed state
          if (elapsedSeconds === MAXIMUM_POMODORO_DURATION) {
            pomodoroCompleted.next();
            patchState(store, (state) => ({
              workday: state.workday.setExecutionMode(),
              progress: 0,
            }));
          }
        });
    },
    addTask() {
      patchState(store, ({ workday }) => ({
        workday: workday.addEmptyTask(),
      }));
    },
    removeTask(index: number) {
      patchState(store, ({ workday }) => ({
        workday: workday.removeTask(index),
      }));
    },
    updateDate(event: Event) {
      const date = (event.target as HTMLInputElement).value;
      patchState(store, ({ workday }) => ({
        workday: workday.createEmptyAtDate(date),
      }));
    },
    updateTask(index: number, updatedTask: Task) {
      patchState(store, ({ workday }) => ({
        workday: workday.updateTask(index, updatedTask),
      }));
    },
  }))
);