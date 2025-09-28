import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkdayPageComponent } from './workday.page.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('WorkdayPageComponent', () => {
  let component: WorkdayPageComponent;
  let fixture: ComponentFixture<WorkdayPageComponent>;
  
    const getAddTaskButton = () =>
    fixture.nativeElement.querySelector('[data-testid=add-task-button]');

    beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkdayPageComponent],
      providers:[provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkdayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('when workday page load', () => {
      it('shuold diplay one task', () => {
        expect(component.store.taskCount()).toBe(1);
      })
      it('sould display "Add task" button', () => {
        const button = getAddTaskButton();
        expect(button).toBeDefined();
      });
    });

  describe('when user removes task', () => {
    beforeEach(() => {
      component.store.onAddTask();
      component.store.onAddTask();
      fixture.detectChanges();

    })
    it('should remove a task', () => {

      for (let i = 0; i < component.store.taskList().length; i++) {
        const taskItemElement = fixture.nativeElement.querySelector(`[data-testid="task${i}"]`);
        taskItemElement.value=i.toString();

        const inputEvent = new Event('input');
        taskItemElement.dispatchEvent(inputEvent);

        component.store.updateTaskTitle(i, inputEvent);
        expect(component.store.taskList()[i].title).toBe(i.toString());
      }
      component.store.removeTask(1);
      expect(component.store.taskList().length).toBe(2);
      expect(component.store.taskList()[0].title).toBe('0');
      expect(component.store.taskList()[1].title).toBe('2');

    })
  })

  describe('when there is 6 tasks planned for the current day', () => {
    beforeEach(() => {
      component.store.onAddTask();
      component.store.onAddTask();
      component.store.onAddTask();
      component.store.onAddTask();
      component.store.onAddTask();
      fixture.detectChanges();
    });
    it('sould hide "Add task" button', () => {
      const button = getAddTaskButton();
      expect(button).toBeNull();
    });
  });

});


