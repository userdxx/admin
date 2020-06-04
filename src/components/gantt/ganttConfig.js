/* eslint-disable */
/**
 *- Gantt configuration
 */
import { ProjectModel, DateHelper, WidgetHelper } from 'bryntum-gantt';
import Task from '../../lib/Task';
import '../../lib/StatusColumn';
import '../../lib/PriorityColumn';
// import '../../lib/ColorField';
// const myViewPreset = new ViewPreset({
//     id   : 'myPreset',              // Unique id value provided to recognize your view preset. Not required, but having it you can simply set new view preset by id: scheduler.viewPreset = 'myPreset'

//     name : 'My view preset',        // A human-readable name provided to be used in GUI, e.i. preset picker, etc.

//     tickWidth  : 24,                // Time column width in horizontal mode
//     tickHeight : 50,                // Time column height in vertical mode
//     displayDateFormat : 'HH:mm',    // Controls how dates will be displayed in tooltips etc

//     shiftIncrement : 1,             // Controls how much time to skip when calling shiftNext and shiftPrevious.
//     shiftUnit      : 'day',         // Valid values are 'millisecond', 'second', 'minute', 'hour', 'day', 'week', 'month', 'quarter', 'year'.
//     defaultSpan    : 12,            // By default, if no end date is supplied to a view it will show 12 hours

//     timeResolution : {              // Dates will be snapped to this resolution
//         unit      : 'minute',       // Valid values are 'millisecond', 'second', 'minute', 'hour', 'day', 'week', 'month', 'quarter', 'year'.
//         increment : 15
//     },

//     headers : [                     // This defines your header rows from top to bottom
//         {                           // For each row you can define 'unit', 'increment', 'dateFormat', 'renderer', 'align', and 'thisObj'
//             unit       : 'day',
//             dateFormat : 'ddd DD/MM'
//         },
//         {
//             unit       : 'hour',
//             dateFormat : 'HH:mm'
//         }
//     ],

//     columnLinesFor : 1              // Defines header level column lines will be drawn for. Defaults to the last level.
// });
const ganttConfig = {

    project: new ProjectModel({
        // Let the Project know we want to use our own Task model with custom fields / methods
        taskModelClass: Task,
        transport: {
            load: {
                url: '../datasets/constraints.json'
            }
            // load : {
            //     url       : 'http://mycool-server.com/load.php',
            //     method    : 'GET',
            //     // HTTP request parameter used to pass serialized "load"-requests
            //     paramName : 'data',
            //     // pass extra HTTP request parameter
            //     params    : {
            //         foo : 'bar'
            //     }
            // },
            // sync : {
            //     url           : 'http://mycool-server.com/sync.php',
            //     // specify Content-Type for requests
            //     headers        : {
            //         'Content-Type' : 'application/json'
            //     },
            //     // Fetch API options
            //     fetchOptions   : {
            //         credentials : 'include'
            //     }
            // }
        }
    }),

    startDate: '2019-01-12',
    endDate: '2019-03-24',
    resourceImageFolderPath: '../users/',
   
    taskRenderer : ({ taskRecord, tplData }) => {
        if (taskRecord.color) {
            tplData.style += `background-color:${taskRecord.color}`;
        }
    },
    columns: [
        { type: 'wbs' },
        { type: 'name', width: 250 },
        { type: 'startdate' },
        { type: 'duration' },
        { type: 'resourceassignment', width: 120, showAvatars: true },
        { type: 'percentdone', showCircle: true, width: 70 },
        {
            type: 'predecessor',
            width: 112
        },
        {
            type: 'successor',
            width: 112
        },
        { type: 'schedulingmodecolumn' },
        { type: 'calendar' },
        { type: 'constrainttype' },
        { type: 'constraintdate' },
        { type: 'prioritycolumn' },
        { type: 'statuscolumn' },
        {
            type: 'date',
            text: 'Deadline',
            field: 'deadline'
        },
        { type: 'addnew' }
    ],
    subGridConfigs: {
        locked: {
            flex: 3
        },
        normal: {
            flex: 4
        }
    },
    columnLines: true,
    features: {
         
        rollups: {
            disabled: true
        },
        baselines: {
            disabled: true
        },

        progressLine: {
            disabled: true,
            statusDate: new Date(2019, 0, 25)
        },
        taskEdit: {
            editorConfig: {
                height: '35em',
                extraItems: {
                    generaltab: [
                        {
                            type: 'text', 
                            label: '测试',
                            clearable: true, 
                            name: 'priority',// name of the field matches data field name, so value is loaded/saved automatically
                            cls: 'b-name'
                          },
                          {
                            html    : '',
                            dataset : {
                                text : 'Custom fields'
                            },
                            cls  : 'b-divider',
                            flex : '1 0 100%'
                        },
                        {
                            type  : 'datefield',
                            ref   : 'deadlineField',
                            name  : 'deadline',
                            label : 'Deadline',
                            format:'YYYY/MM/DD',
                            flex  : '1 0 50%',
                            cls   : 'b-inline'
                        },
                          {
                            type  : 'colorfield',
                            ref   : 'colorField',
                            name  : 'color',
                            label : 'Color',
                            flex  : '1 0 50%',
                            cls   : 'b-inline'
                        } 
                    ]
                }
            },
            tabsConfig: { 
                successorstab: false
            }
        },
        taskContextMenu: {
            // Our items is merged with the provided defaultItems
            // So we add the provided convertToMilestone option.
            items: {
                moveToNextDay: {
                    icon: 'b-fa b-fa-calendar',
                    text: '查看详情',
                    cls: 'b-separator',
                    weight: 200,
                    onItem({ taskRecord }) {
                        console.log(taskRecord)
                        window.$vm.drawer=true
                        // taskRecord.setStartDate(DateHelper.add(taskRecord.startDate, 1, 'day'));
                    }
                },
                convertToMilestone: true
            },
            processItems({ taskRecord, items }) {
                if (taskRecord.isMilestone) {
                    items.convertToMilestone = false;
                }
            }
        },
        filter: true,
        dependencyEdit: true,
        timeRanges: {
            showCurrentTimeLine: true
        },
        labels: {
            left: {
                field: 'name',
                editor: {
                    type: 'textfield'
                }
            }
        }
    }

} // eo ganttConfig

export default ganttConfig;

// eof
