
/* eslint-disable */
/**
 *- Custom task model
 *
 * Taken from the vanilla example
 */
import { TaskModel } from 'bryntum-gantt';

// here you can extend our default Task class with your additional fields, methods and logic
export default class Task extends TaskModel {
    static get $name() {
        return 'Task';
    }
    static get fields() {
        return [
            { name : 'deadline', type : 'date' },
            { name : 'priority', type : 'text' },
            { name : 'color' }
        ];
    }

    get isLate() {
        return this.deadline && Date.now() > this.deadline;
    }
    // construct(config) { 
    //     super.construct(config); 
    // }
}

// eof
