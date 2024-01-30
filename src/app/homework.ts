import { Status } from './status.enum';
import { Priority } from './priority.enum';

export interface Homework {
  _id: string,
    title: string;
  status: Status;
  priority: Priority;
  dueDate: string;
  details: string;
}

