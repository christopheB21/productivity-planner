import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Task, TaskList } from './task.model';


interface WorkdayState {
  date: string;
  taskList: TaskList;
  progress: number;
  mode: 'edit' | 'exectution';
}

const getEmptyTask = (): Task => ({
  type: 'Hit the target',
  title: 'Nouvelle tâche',
  status: 'Not started',
  pomodoroCount: 1,
  pomodoroList: [0],
  statusEmoji: '🏁',
});

const WORKDAY_TASK_LIMIT = 6;

export const WorkdayStore = signalStore(
  withState<WorkdayState>({
    date: '2019-02-28',
    taskList: [getEmptyTask()],
    progress: 0,
    mode: 'edit',
  }), 
  withComputed((state) => {
    const taskCount = computed(() => state.taskList().length);
    const isButtonDisplayed = computed(() => taskCount() < WORKDAY_TASK_LIMIT);
    const hasNoTaskPlanned = computed(() => taskCount() === 0);
    const hasTaskPlanned = computed(() => taskCount() > 0);
    const isEditMode = computed(() => state.mode() === 'edit');
    const isExecutionMode = computed(() => state.mode() === 'exectution');

    return {
      taskCount,
      isButtonDisplayed,
      hasNoTaskPlanned,
      hasTaskPlanned,
      isEditMode,
      isExecutionMode,
    };
  }),
  withMethods((store) => ({
    startWorkday() {
      patchState(store, { mode: 'exectution' });
    },
    addTask() {
      patchState(store, (state) => ({
        taskList: [...state.taskList, getEmptyTask()],
      }));
    },
    removeTask($index: number) {
      patchState(store, (state) => ({
        taskList: state.taskList.toSpliced($index, 1),
      }));
    },
    updateDate(event: Event) {
      const date = (event.target as HTMLInputElement).value;
      patchState(store, () => ({ date }));
    },
    updateTask(index: number, updatedTask: Task) {
      patchState(store, (state) => {
        const taskList: TaskList = state.taskList.toSpliced(
          index,
          1,
          updatedTask
        );
        return { taskList };
      });
    },
  }))
);