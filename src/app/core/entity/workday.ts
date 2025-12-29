import { TaskList } from '@app/membership/workday/task.model';
import { Entity } from '../domain/entity.class';

interface WorkdayProps {
      // date: string;
      taskList: TaskList;
      progress: number;
      mode: 'edit' | 'execution';
}

export class Workday extends Entity<WorkdayProps> {
    static readonly MAX_TASKS_PER_DAY = 6;

    static create(props: WorkdayProps, date: string): Workday {
        //Validation
        return new Workday(props, date);
    }

    static createEmpty(): Workday {
        const now = new Date().toLocaleString();
        const emptyPros: WorkdayProps = {
            taskList: [],
            progress: 0,
            mode: 'edit',
        };
        return Workday.create(emptyPros, now);
    }

    get taskCount(): number {
        return this.props.taskList.length;
    }

}


// export class Interval extends ValueObject<IntervalProps> {
//   static create(value: IntervalName): Interval {
//     if (!this.isValid(value)) {
//       throw new Error('A valid interval name is required.');
//     }
//     return new Interval({ value });
//   }

//   private isValid(value: unknown): value is IntervalName {
//     return IntervalList.includes(value);
//   }

//   get value(): IntervalName {
//     return this.props.value;
//   }
// }
