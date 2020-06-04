/* eslint-disable */
/**
 *- Status column
 *
 * Taken from the vanilla example
 */
import { Column, ColumnStore } from 'bryntum-gantt';

/**
 * @module PriorityColumn
 */

/**
 * A column showing the status of a task
 *
 * @extends Gantt/column/Column
 * @classType statuscolumn
 */
export default class PriorityColumn extends Column {
    static get type() {
        return 'prioritycolumn';
    }

    static get isGanttColumn() {
        return true;
    }

    static get defaults() {
        return {
            // the column is mapped to "priority" field of the Task model
            field : 'priority',
            editor     : true,
            // the column title
            text  : '属性'
        }; 
    } 
} 
ColumnStore.registerColumnType(PriorityColumn);

// eof
