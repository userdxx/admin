/* eslint-disable */
/**
 *- Gantt toolbar
 * 
 * Taken from vanilla advanced example with imports
 * from the bryntum-gantt package.
 */
import { Toolbar, Toast, DateHelper, CSSHelper } from 'bryntum-gantt';

/**
 * @module GanttToolbar
 */

/**
 * @extends Core/widget/Toolbar
 */
export default class GanttToolbar extends Toolbar {

    static get $name() {
        return 'GanttToolbar';
    }

    construct(config) {
        const
            me = this,
            gantt = me.gantt = me.owner = config.gantt,
            project = gantt.project;

        project.on({
            load: me.updateStartDateField,
            propagationComplete: me.updateStartDateField,
            thisObj: me
        });

        const stm = project.stm;

        stm.on({
            recordingstop: me.updateUndoRedoButtons,
            restoringstop: me.updateUndoRedoButtons,
            queueReset: me.updateUndoRedoButtons,
            thisObj: me
        });

        super.construct(config);

        me.styleNode = document.createElement('style');
        document.head.appendChild(me.styleNode);
    }

    static get defaultConfig() {
        return {
            items: [
                {
                    type: 'buttonGroup',
                    items: [
                        {
                            type: 'button',
                            color: 'b-green',
                            ref: 'addTaskButton',
                            icon: 'b-fa b-fa-plus',
                            text: '新增',
                            tooltip: '新增任务',
                            onAction: 'up.onAddTaskClick'
                        }
                    ]
                },
                {
                    type: 'buttonGroup',
                    items: [
                        {
                            type: 'button',
                            color: 'b-green',
                            ref: 'saveButton',
                            icon: 'b-fa b-fa-plus',
                            text: '保存',
                            tooltip: '保存',
                            onAction: 'up.onSaveClick'
                        }
                    ]
                },
                {
                    type: 'buttonGroup',
                    items: [
                        {
                            type: 'button',
                            color: 'b-blue',
                            ref: 'editTaskButton',
                            icon: 'b-fa b-fa-pen',
                            text: '编辑',
                            tooltip: '编辑任务',
                            onAction: 'up.onEditTaskClick'
                        },
                        {
                            type: 'button',
                            color: 'b-blue',
                            ref: 'undoBtn',
                            icon: 'b-icon b-fa b-fa-undo',
                            tooltip: '撤销',
                            disabled: true,
                            width: '2em',
                            onAction: 'up.onUndoClick'
                        },
                        {
                            type: 'button',
                            color: 'b-blue',
                            ref: 'redoBtn',
                            icon: 'b-icon b-fa b-fa-redo',
                            tooltip: '退回',
                            disabled: true,
                            width: '2em',
                            onAction: 'up.onRedoClick'
                        }
                    ]
                },
                {
                    type: 'buttonGroup',
                    items: [
                        {
                            type: 'button',
                            color: 'b-blue',
                            ref: 'expandAllButton',
                            icon: 'b-fa b-fa-angle-double-down',
                            tooltip: '展开全部',
                            onAction: 'up.onExpandAllClick'
                        },
                        {
                            type: 'button',
                            color: 'b-blue',
                            ref: 'collapseAllButton',
                            icon: 'b-fa b-fa-angle-double-up',
                            tooltip: '折叠全部',
                            onAction: 'up.onCollapseAllClick'
                        }
                    ]
                },
                {
                    type: 'buttonGroup',
                    items: [
                        {
                            type: 'button',
                            color: 'b-blue',
                            ref: 'zoomInButton',
                            icon: 'b-fa b-fa-search-plus',
                            tooltip: '放大',
                            onAction: 'up.onZoomInClick'
                        },
                        {
                            type: 'button',
                            color: 'b-blue',
                            ref: 'zoomOutButton',
                            icon: 'b-fa b-fa-search-minus',
                            tooltip: '缩小',
                            onAction: 'up.onZoomOutClick'
                        },
                        {
                            type: 'button',
                            color: 'b-blue',
                            ref: 'zoomToFitButton',
                            icon: 'b-fa b-fa-compress-arrows-alt',
                            tooltip: '适中大小',
                            onAction: 'up.onZoomToFitClick'
                        },
                        {
                            type: 'button',
                            color: 'b-blue',
                            ref: 'previousButton',
                            icon: 'b-fa b-fa-angle-left',
                            tooltip: '上一阶段',
                            onAction: 'up.onShiftPreviousClick'
                        },
                        {
                            type: 'button',
                            color: 'b-blue',
                            ref: 'nextButton',
                            icon: 'b-fa b-fa-angle-right',
                            tooltip: '下一阶段',
                            onAction: 'up.onShiftNextClick'
                        }
                    ]
                },
                {
                    type: 'buttonGroup',
                    items: [
                        {
                            type: 'button',
                            color: 'b-blue',
                            ref: 'featuresButton',
                            icon: 'b-fa b-fa-tasks',
                            text: '功能',
                            tooltip: '快捷功能',
                            toggleable: true,
                            menu: {
                                onItem: 'up.onFeaturesClick',
                                onBeforeShow: 'up.onFeaturesShow',
                                items: [
                                    {
                                        text: '依赖项',
                                        feature: 'dependencies',
                                        checked: false
                                    },
                                    {
                                        text: '任务名称',
                                        feature: 'labels',
                                        checked: false
                                    },
                                    {
                                        text: '产品线',
                                        feature: 'projectLines',
                                        checked: false
                                    },
                                    {
                                        text: '非工作时间',
                                        feature: 'nonWorkingTime',
                                        checked: false
                                    },
                                    {
                                        text: '单元格编辑',
                                        feature: 'cellEdit',
                                        checked: false
                                    },
                                    {
                                        text: '基线',
                                        feature: 'baselines',
                                        checked: false
                                    },
                                    {
                                        text: '汇总',
                                        feature: 'rollups',
                                        checked: false
                                    },
                                    {
                                        text: '进度线',
                                        feature: 'progressLine',
                                        checked: false
                                    },
                                    {
                                        text: '时间表',
                                        cls: 'b-separator',
                                        subGrid: 'normal',
                                        checked: true
                                    }
                                ]
                            }
                        },
                        {
                            type: 'button',
                            color: 'b-blue',
                            ref: 'settingsButton',
                            icon: 'b-fa b-fa-cogs',
                            text: '设置',
                            tooltip: 'Adjust settings',
                            toggleable: true,
                            menu: {
                                type: 'popup',
                                anchor: true,
                                layoutStyle: {
                                    flexDirection: 'column'
                                },
                                onBeforeShow: 'up.onSettingsShow',

                                items: [
                                    {
                                        type: 'slider',
                                        ref: 'rowHeight',
                                        text: '行高',
                                        width: '12em',
                                        showValue: true,
                                        min: 30,
                                        max: 70,
                                        style: 'margin-bottom: .5em',
                                        onInput: 'up.onSettingsRowHeightChange'
                                    },
                                    {
                                        type: 'slider',
                                        ref: 'barMargin',
                                        text: '条间隔',
                                        width: '12em',
                                        showValue: true,
                                        min: 0,
                                        max: 10,
                                        onInput: 'up.onSettingsMarginChange'
                                    },
                                    {
                                        type: 'slider',
                                        ref: 'duration',
                                        text: '动画周期',
                                        width: '12em',
                                        min: 0,
                                        max: 2000,
                                        step: 100,
                                        showValue: true,
                                        onInput: 'up.onSettingsDurationChange'
                                    }
                                ]
                            }
                        },
                        {
                            type: 'button',
                            color: 'b-blue',
                            ref: 'criticalPathsButton',
                            icon: 'b-fa b-fa-fire',
                            text: '关键路径',
                            tooltip: '关键路径标识',
                            toggleable: true,
                            onAction: 'up.onCriticalPathsClick'
                        }
                    ]
                },
                {
                    type: 'datefield',
                    ref: 'startDateField',
                    label: '项目开始日期',
                    format: 'YYYY/MM/DD',
                    required: true,
                    flex: '1 2 17em',
                    listeners: {
                        change: 'up.onStartDateChange'
                    }
                },
                {
                    type: 'textfield',
                    ref: 'filterByName',
                    cls: 'filter-by-name',
                    flex: '1 1 12.5em',
                    // Label used for material, hidden in other themes
                    label: '名称',
                    // Placeholder for others
                    placeholder: '根据名称查找任务',
                    clearable: true,
                    keyStrokeChangeDelay: 100,
                    triggers: {
                        filter: {
                            align: 'end',
                            cls: 'b-fa b-fa-filter'
                        }
                    },
                    onChange: 'up.onFilterChange'
                }
            ]
        };
    }

    onSaveClick() { 
        this.gantt.project.stm.resetQueue() 
        this.gantt.project.load()
        console.log(this.gantt.project.taskStore.changes)
    }
    updateUndoRedoButtons() {
        const
            { stm } = this.gantt.project,
            { undoBtn, redoBtn } = this.widgetMap,
            redoCount = stm.length - stm.position;
        undoBtn.badge = stm.position || '';
        redoBtn.badge = redoCount || '';
        undoBtn.disabled = !undoBtn.badge;
        redoBtn.disabled = !redoBtn.badge;
    }

    setAnimationDuration(value) {
        const
            me = this,
            cssText = `.b-animating .b-gantt-task-wrap { transition-duration: ${value / 1000}s !important; }`;

        me.gantt.transitionDuration = value;

        if (me.transitionRule) {
            me.transitionRule.cssText = cssText;
        }
        else {
            me.transitionRule = CSSHelper.insertRule(cssText);
        }
    }

    updateStartDateField() {
        this.widgetMap.startDateField.value = this.gantt.project.startDate;
    }

    // region controller methods

    async onAddTaskClick() {
        const
            { gantt } = this,
            added = gantt.taskStore.rootNode.appendChild({ name: '新增任务', duration: 1 });

        // run propagation to calculate new task fields
        await gantt.project.propagate();

        // scroll to the added task
        await gantt.scrollRowIntoView(added);

        gantt.features.cellEdit.startEditing({
            record: added,
            field: 'name'
        });
    }

    onEditTaskClick() {
        const { gantt } = this;

        if (gantt.selectedRecord) {
            gantt.editTask(gantt.selectedRecord);
        }
        else {
            Toast.show('请先选择需要编辑的任务');
        }
    }

    onExpandAllClick() {
        this.gantt.expandAll();
    }

    onCollapseAllClick() {
        this.gantt.collapseAll();
    }

    onZoomInClick() {
        this.gantt.zoomIn();
    }

    onZoomOutClick() {
        this.gantt.zoomOut();
    }

    onZoomToFitClick() {
        this.gantt.zoomToFit({
            leftMargin: 50,
            rightMargin: 50
        });
    }

    onShiftPreviousClick() {
        this.gantt.shiftPrevious();
    }

    onShiftNextClick() {
        this.gantt.shiftNext();
    }

    onStartDateChange({ value, oldValue }) {
        if (!oldValue) { // ignore initial set
            return;
        }

        this.gantt.startDate = DateHelper.add(value, -1, 'week');

        this.gantt.project.setStartDate(value);
    }

    onFilterChange({ value }) {
        if (value === '') {
            this.gantt.taskStore.clearFilters();
        }
        else {
            value = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

            this.gantt.taskStore.filter(task => task.name && task.name.match(new RegExp(value, 'i')));
        }
    }

    onFeaturesClick({ source: item }) {
        const { gantt } = this;

        if (item.feature) {
            const feature = gantt.features[item.feature];
            feature.disabled = !feature.disabled;
        }
        else if (item.subGrid) {
            const subGrid = gantt.subGrids[item.subGrid];
            subGrid.collapsed = !subGrid.collapsed;
        }
    }

    onFeaturesShow({ source: menu }) {
        const { gantt } = this;

        menu.items.map(item => {
            const { feature } = item;

            if (feature) {
                // a feature might be not presented in the gantt
                // (the code is shared between "advanced" and "php" demos which use a bit different set of features)
                if (gantt.features[feature]) {
                    item.checked = !gantt.features[feature].disabled;
                }
                // hide not existing features
                else {
                    item.hide();
                }
            }
            else {
                item.checked = gantt.subGrids[item.subGrid].collapsed;
            }
        });
    }

    onSettingsShow({ source: menu }) {
        const { gantt } = this,
            { widgetMap } = menu;

        widgetMap.rowHeight.value = gantt.rowHeight;
        widgetMap.barMargin.value = gantt.barMargin;
        widgetMap.barMargin.max = (gantt.rowHeight / 2) - 5;
        widgetMap.duration.value = gantt.transitionDuration;
    }

    onSettingsRowHeightChange({ value }) {
        this.gantt.rowHeight = value;
        this.widgetMap.settingsButton.menu.widgetMap.barMargin.max = (value / 2) - 5;
    }

    onSettingsMarginChange({ value }) {
        this.gantt.barMargin = value;
    }

    onSettingsDurationChange({ value }) {
        this.gantt.transitionDuration = value;
        this.styleNode.innerHTML = `.b-animating .b-gantt-task-wrap { transition-duration: ${value / 1000}s !important; }`;
    };

    onCriticalPathsClick({ source }) {
        this.gantt.features.criticalPaths.disabled = !source.pressed;
    }

    onUndoClick() {
        this.gantt.project.stm.canUndo && this.gantt.project.stm.undo();
    }

    onRedoClick() {
        this.gantt.project.stm.canRedo && this.gantt.project.stm.redo();
    }

    // endregion
};
