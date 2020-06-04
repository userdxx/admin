const localeName = 'En',
  localeDesc = 'English';
const locale$1 = {
    localeName,
    localeDesc,
    Object: {
        Yes: "是",
        No: "否",
        Cancel: "取消",
        Custom: "自定义"
    },
    InstancePlugin: {
        fnMissing: function (e) {
            return "Trying to chain fn ".concat(e.plugIntoName, "#").concat(e.fnName, ", but plugin fn ").concat(e.pluginName, "#").concat(e.fnName, " does not exist")
        },
        overrideFnMissing: function (e) {
            return "Trying to override fn ".concat(e.plugIntoName, "#").concat(e.fnName, ", but plugin fn ").concat(e.pluginName, "#").concat(e.fnName, " does not exist")
        }
    },
    Field: {
        badInput: "无效字段值",
        patternMismatch: "输入值应与特定模式匹配",
        rangeOverflow: function (e) {
            return "输入值必须小于或等于 ".concat(e.max)
        },
        rangeUnderflow: function (e) {
            return "输入值必须大于或等于 ".concat(e.min)
        },
        stepMismatch: "输入值不符合当前步骤",
        tooLong: "输入内容太长",
        tooShort: "输入内容太短",
        typeMismatch: "值必须符合输入规则",
        valueMissing: "此字段必填",
        invalidValue: "无效字段值",
        minimumValueViolation: "最小值冲突",
        maximumValueViolation: "最大值冲突",
        fieldRequired: "此字段必填",
        validateFilter: "必须从列表中选择值"
    },
    DateField: {
        invalidDate: "无效的日期输入"
    },
    TimeField: {
        invalidTime: "无效的时间输入"
    },
    DateHelper: {
        locale: "en-CH",
        shortWeek: "周",
        shortQuarter: "季",
        week: "星期",
        weekStartDay: 0,
        unitNames: [{
            single: "毫秒",
            plural: "毫秒",
            abbrev: "ms"
        }, {
            single: "秒",
            plural: "秒",
            abbrev: "s"
        }, {
            single: "分钟",
            plural: "分",
            abbrev: "min"
        }, {
            single: "小时",
            plural: "时",
            abbrev: "h"
        }, {
            single: "天",
            plural: "天",
            abbrev: "d"
        }, {
            single: "周",
            plural: "周",
            abbrev: "w"
        }, {
            single: "月",
            plural: "月",
            abbrev: "mon"
        }, {
            single: "季度",
            plural: "季",
            abbrev: "q"
        }, {
            single: "年",
            plural: "年",
            abbrev: "yr"
        }],
        unitAbbreviations: [
            ["mil"],
            ["s", "sec"],
            ["m", "min"],
            ["h", "hr"],
            ["d"],
            ["w", "wk"],
            ["mo", "mon", "mnt"],
            ["q", "quar", "qrt"],
            ["y", "yr"]
        ],
        parsers: {
            L: "YYYY/MM/DD",
            LT: "HH:mm A"
        },
        ordinalSuffix: function (e) {
            return e + ({
                1: "st",
                2: "nd",
                3: "rd"
            }[e[e.length - 1]] || "th")
        }
    },
    PagingToolbar: {
        firstPage: "首页",
        prevPage: "上一页",
        page: "页",
        nextPage: "下一页",
        lastPage: "尾页",
        reload: "刷新当前页",
        noRecords: "无任何数据显示",
        pageCountTemplate: function (e) {
            return "of ".concat(e.lastPage)
        },
        summaryTemplate: function (e) {
            return "显示数据 ".concat(e.start, " - ").concat(e.end, " 至 ").concat(e.allCount)
        }
    },
    List: {
        loading: "加载中..."
    }
}
const locale$2 = {
    TemplateColumn: {
        noTemplate: "无可用模板",
        noFunction: "无可用函数"
    },
    ColumnStore: {
        columnTypeNotFound: function (e) {
            return "列类型 '".concat(e.type, "' 未注册")
        }
    },
    ColumnPicker: {
        columnsMenu: "列",
        hideColumn: "隐藏列",
        hideColumnShort: "隐藏"
    },
    Filter: {
        applyFilter: "应用筛选器",
        filter: "筛选器",
        editFilter: "编辑筛选器",
        on: "在",
        before: "之前",
        after: "之后",
        equals: "等于",
        lessThan: "小于",
        moreThan: "大于",
        removeFilter: "移除筛选器"
    },
    FilterBar: {
        enableFilterBar: "显示筛选器",
        disableFilterBar: "隐藏筛选器"
    },
    Group: {
        groupAscending: "分组升序",
        groupDescending: "分组降序",
        groupAscendingShort: "升序",
        groupDescendingShort: "降序",
        stopGrouping: "停止分组",
        stopGroupingShort: "停止"
    },
    Search: {
        searchForValue: "按输入值查找"
    },
    Sort: {
        sortAscending: "升序排序",
        sortDescending: "降序排序",
        multiSort: "多重排序",
        removeSorter: "删除排序",
        addSortAscending: "添加升序排序",
        addSortDescending: "添加降序排序",
        toggleSortAscending: "更改为升序",
        toggleSortDescending: "更改为降序",
        sortAscendingShort: "升序",
        sortDescendingShort: "降序",
        removeSorterShort: "删除",
        addSortAscendingShort: "+ 升序",
        addSortDescendingShort: "+ 降序"
    },
    Tree: {
        noTreeColumn: "若要使用树功能，必须为一列配置树"
    },
    Grid: {
        featureNotFound: function (e) {
            return "功能 '".concat(e, "' 不可用，请确保已导入")
        },
        invalidFeatureNameFormat: function (e) {
            return "无效的功能名称 '".concat(e, "', 必须以小写字母开头")
        },
        removeRow: "删除行数据",
        removeRows: "删除多行数据",
        moveColumnLeft: "移到左侧部分",
        moveColumnRight: "移到右侧部分"
    },
    GridBase: {
        loadFailedMessage: "数据加载失败!",
        syncFailedMessage: "数据同步失败!",
        serverResponseLabel: "服务器响应:",
        unspecifiedFailure: "未指定故障",
        unknownFailure: "未知错误",
        networkFailure: "网络错误",
        parseFailure: "无法分析服务器响应",
        loadMask: "加载中...",
        syncMask: "正在保存更改，请稍候...",
        noRows: "没有要显示的记录"
    },
    PdfExport: {
        "Waiting for response from server...": "正在等待服务器的响应...",
        "Export failed": "导出失败",
        "Server error": "服务器错误"
    },
    ExportDialog: {
        width: "40em",
        labelWidth: "12em",
        exportSettings: "导出设置",
        export: "导出",
        exporterType: "控件分页",
        cancel: "取消",
        fileFormat: "文件格式化",
        rows: "行",
        alignRows: "行对齐",
        columns: "列",
        paperFormat: "纸张格式",
        orientation: "方向"
    },
    ExportRowsCombo: {
        all: "所有行",
        visible: "可见行"
    },
    ExportOrientationCombo: {
        portrait: "画像",
        landscape: "风景"
    },
    SinglePageExporter: {
        singlepage: "单页"
    },
    MultiPageExporter: {
        multipage: "多页",
        exportingPage: function (e) {
            var t = e.currentPage,
                n = e.totalPages;
            return "导出页面".concat(t, "/").concat(n)
        }
    }
}
const locale$3 = {
    SchedulerCommon: {},
    ExcelExporter: {
        "No resource assigned": "无成员被分配"
    },
    ResourceInfoColumn: {
        eventCountText: function (e) {
            return e + " 事件" + (1 !== e ? "s" : "")
        }
    },
    Dependencies: {
        from: "起始",
        to: "目标",
        valid: "有效",
        invalid: "无效",
        Checking: "正在检查…"
    },
    DependencyEdit: {
        From: "起始",
        To: "目标",
        Type: "类型",
        Lag: "间隔",
        "Edit dependency": "编辑依赖项",
        Save: "确认",
        Delete: "删除",
        Cancel: "取消",
        StartToStart: "开始-开始",
        StartToEnd: "开始-结束",
        EndToStart: "结束-开始",
        EndToEnd: "结束-结束"
    },
    EventEdit: {
        Name: "名称",
        Resource: "成员",
        Start: "开始日期",
        End: "结束日期",
        Save: "确认",
        Delete: "删除",
        Cancel: "取消",
        "Edit Event": "编辑事件",
        Repeat: "重置"
    },
    EventDrag: {
        eventOverlapsExisting: "事件与此资源的现有事件重叠",
        noDropOutsideTimeline: "事件不能完成在时间范围之外"
    },
    Scheduler: {
        "Add event": "新增事件",
        "Delete event": "删除事件",
        "Unassign event": "未分配事件"
    },
    HeaderContextMenu: {
        pickZoomLevel: "缩放",
        activeDateRange: "日期范围",
        startText: "开始日期",
        endText: "结束日期",
        todayText: "今天"
    },
    EventFilter: {
        filterEvents: "筛选事件",
        byName: "按名称"
    },
    TimeRanges: {
        showCurrentTimeLine: "显示当前时间线"
    },
    PresetManager: {
        minuteAndHour: {
            topDateFormat: "ddd MM/DD, hA"
        },
        hourAndDay: {
            topDateFormat: "ddd MM/DD"
        },
        weekAndDay: {
            displayDateFormat: "hh:mm A"
        }
    },
    RecurrenceConfirmationPopup: {
        "delete-title": "您正在删除事件",
        "delete-all-message": "是否要删除当前事件的所有事件?",
        "delete-further-message": "是否要删除当前事件及其以后的所有事件，或仅删除选定的事件?",
        "delete-further-btn-text": "删除所有未来事件",
        "delete-only-this-btn-text": "仅仅删除当前事件",
        "update-title": "您正在更改一个重复事件",
        "update-all-message": "是否要更改当前事件的所有事件?",
        "update-further-message": "您只想更改当前事件，还是更改当前事件以及以后的所有事件?",
        "update-further-btn-text": "所有未来事件",
        "update-only-this-btn-text": "仅仅当前事件",
        Yes: "是",
        Cancel: "取消",
        width: 600
    },
    RecurrenceLegend: {
        " and ": " 和 ",
        Daily: "每日",
        "Weekly on {1}": function (e) {
            var t = e.days;
            return "每周 ".concat(t)
        },
        "Monthly on {1}": function (e) {
            var t = e.days;
            return "每月".concat(t)
        },
        "Yearly on {1} of {2}": function (e) {
            var t = e.days,
                n = e.months;
            return "每年 ".concat(t, " 至 ").concat(n)
        },
        "Every {0} days": function (e) {
            var t = e.interval;
            return "每 ".concat(t, " 天")
        },
        "Every {0} weeks on {1}": function (e) {
            var t = e.interval,
                n = e.days;
            return "每 ".concat(t, " 周 中 ").concat(n)
        },
        "Every {0} months on {1}": function (e) {
            var t = e.interval,
                n = e.days;
            return "每 ".concat(t, " 月 中 ").concat(n)
        },
        "Every {0} years on {1} of {2}": function (e) {
            var t = e.interval,
                n = e.days,
                o = e.months;
            return "每 ".concat(t, " 年 中 ").concat(n, " 至 ").concat(o)
        },
        position1: "第一次",
        position2: "第二次",
        position3: "第三次",
        position4: "第四次",
        position5: "第五次",
        "position-1": "最后一次",
        day: "天",
        weekday: "周",
        "weekend day": "周末",
        daysFormat: function (e) {
            var t = e.position,
                n = e.days;
            return "".concat(t, " ").concat(n)
        }
    },
    RecurrenceEditor: {
        "Repeat event": "重复事件",
        Cancel: "取消",
        Save: "确认",
        Frequency: "频率",
        Every: "每",
        DAILYintervalUnit: "天",
        WEEKLYintervalUnit: "星期",
        MONTHLYintervalUnit: "月",
        YEARLYintervalUnit: "年度",
        Each: "每次",
        "On the": "总体来说",
        "End repeat": "结束重复",
        "time(s)": "次数(s)"
    },
    RecurrenceDaysCombo: {
        day: "天",
        weekday: "工作日",
        "weekend day": "周末"
    },
    RecurrencePositionsCombo: {
        position1: "一",
        position2: "二",
        position3: "三",
        position4: "四",
        position5: "五",
        "position-1": "最近"
    },
    RecurrenceStopConditionCombo: {
        Never: "从未",
        After: "以后",
        "On date": "日期"
    },
    RecurrenceFrequencyCombo: {
        Daily: "每日的",
        Weekly: "每周的",
        Monthly: "每月的",
        Yearly: "每年的"
    },
    RecurrenceCombo: {
        None: "无",
        "Custom...": "自定义..."
    },
    ScheduleRangeCombo: {
        completeview: "完整的时间表",
        currentview: "可见日程",
        daterange: "日期范围",
        completedata: "完整时间表（所有活动）"
    },
    SchedulerExportDialog: {
        "Schedule range": "计划范围",
        "Export from": "起始",
        "Export to": "至"
    }
};

const locale$4 = {
    SchedulerProCommon: {
        SS: "SS",
        SF: "SF",
        FS: "FS",
        FF: "FF",
        StartToStart: "开始-开始",
        StartToEnd: "开始-结束",
        EndToStart: "结束-开始",
        EndToEnd: "结束-结束",
        dependencyTypes: ["SS", "SF", "FS", "FF"],
        dependencyTypesLong: ["开始-开始", "开始-结束", "结束-开始", "结束-结束"]
    },
    ConstraintTypePicker: {
        muststarton: "必须开始于",
        mustfinishon: "必须结束于",
        startnoearlierthan: "开始不早于",
        startnolaterthan: "开始不晚于",
        finishnoearlierthan: "完成不早于",
        finishnolaterthan: "完成不晚于"
    },
    ProTaskEdit: {
        "Edit event": "编辑事件"
    },
    TaskEditorBase: {
        editorWidth: "45em",
        Information: "详细信息",
        Save: "确认",
        Cancel: "取消",
        Delete: "删除"
    },
    SchedulerGeneralTab: {
        labelWidth: "11.5em",
        General: "基本信息",
        Name: "名称",
        "% complete": "完成百分比（%）",
        Duration: "期限",
        Start: "开始日期",
        Finish: "结束日期",
        Effort: "用时",
        Dates: "日期",
        "Manually scheduled": "手动计划",
        Calendar: "日历"
    },
    GeneralTab: {
        labelWidth: "6.5em",
        General: "基本信息",
        Name: "名称",
        "% complete": "完成百分比（%）",
        Duration: "期限",
        Start: "开始日期",
        Finish: "结束日期",
        Effort: "用时",
        Dates: "日期",
    },
    AdvancedTab: {
        labelWidth: "11.5em",
        Advanced: "高级设置",
        Calendar: "日历",
        "Scheduling mode": "调度模式",
        "Effort driven": "有效时间",
        "Manually scheduled": "手动计划",
        "Constraint type": "约束类型",
        "Constraint date": "约束日期",
        Constraint: "约束",
        Rollup: "汇总"
    },
    DependencyTab: {
        Predecessors: "前置任务",
        Successors: "后置任务",
        ID: "ID",
        Name: "名称",
        Type: "类型",
        Lag: "间隔",
        "Cyclic dependency has been detected": "已检测到循环依赖项"
    },
    ResourcesTab: {
        unitsTpl: function (e) {
            var t = e.value;
            return "".concat(t, "%")
        },
        Resources: "成员",
        Resource: "成员",
        Units: "占比"
    },
    NotesTab: {
        Notes: "备注"
    },
    SchedulingModePicker: {
        Normal: "普通",
        "Fixed Duration": "固定周期",
        "Fixed Units": "固定占比",
        "Fixed Effort": "固定有效期"
    }
};

const locale$5 = {
    AddNewColumn: {
        "New Column": "新列"
    },
    CalendarColumn: {
        Calendar: "日历"
    },
    EarlyStartDateColumn: {
        "Early Start": "提前开始"
    },
    EarlyEndDateColumn: {
        "Early End": "提前结束"
    },
    LateStartDateColumn: {
        "Late Start": "开始晚于"
    },
    LateEndDateColumn: {
        "Late End": "结束晚于"
    },
    TotalSlackColumn: {
        "Total Slack": "总时差"
    },
    ConstraintDateColumn: {
        "Constraint Date": "约束日期"
    },
    ConstraintTypeColumn: {
        "Constraint Type": "约束类型"
    },
    DeadlineDateColumn: {
        Deadline: "截至日期"
    },
    DependencyColumn: {
        "Invalid dependency found, change is reverted": "无效的依赖项，将还原更改"
    },
    DurationColumn: {
        Duration: "期限"
    },
    EffortColumn: {
        Effort: "有效期"
    },
    EndDateColumn: {
        Finish: "完成日期"
    },
    EventModeColumn: {
        "Event mode": "事件模式",
        Manual: "手动",
        Auto: "自动"
    },
    ManuallyScheduledColumn: {
        "Manually scheduled": "手动计划"
    },
    MilestoneColumn: {
        Milestone: "里程碑"
    },
    NameColumn: {
        Name: "名称"
    },
    NoteColumn: {
        Note: "备注"
    },
    PercentDoneColumn: {
        "% Done": "完成度（%）"
    },
    PredecessorColumn: {
        Predecessors: "前置任务"
    },
    ResourceAssignmentColumn: {
        "Assigned Resources": "已分配成员",
        "more resources": "更多成员"
    },
    RollupColumn: {
        Rollup: "汇总"
    },
    SchedulingModeColumn: {
        "Scheduling Mode": "调度模式"
    },
    SequenceColumn: {
        Sequence: "队列"
    },
    ShowInTimelineColumn: {
        "Show in timeline": "显示时间线"
    },
    StartDateColumn: {
        Start: "开始日期"
    },
    SuccessorColumn: {
        Successors: "后置任务"
    },
    WBSColumn: {
        WBS: "序号"
    },
    ProjectLines: {
        "Project Start": "项目开始日期",
        "Project End": "项目结束日期"
    },
    TaskTooltip: {
        Start: "开始日期",
        End: "结束日期",
        Duration: "期限",
        Complete: "完成度（%）"
    },
    AssignmentGrid: {
        Name: "成员名称",
        Units: "占比",
        "%": "%",
        unitsTpl: function (e) {
            var t = e.value;
            return t ? t + "%" : ""
        }
    },
    AssignmentPicker: {
        Save: "确认",
        Cancel: "取消"
    },
    AssignmentEditGrid: {
        Name: "姓名",
        Units: "占比"
    },
    Gantt: {
        Edit: "编辑任务",
        Indent: "升级",
        Outdent: "降级",
        "Convert to milestone": "转化为里程碑",
        Add: "新增...",
        "New task": "新任务",
        "New milestone": "新里程碑",
        "Task above": "新前任务",
        "Task below": "新后任务",
        "Delete task": "删除任务",
        Milestone: "里程碑",
        "Sub-task": "子任务",
        Successor: "后置任务",
        Predecessor: "前置任务",
        changeRejected: "拒绝更改,关联任务限制"
    },
    GanttCommon: {},
    Indicators: {
        Indicators: "指标",
        earlyDates: "提前开始/结束",
        lateDates: "延迟开始/结束",
        constraintDate: "约束日期",
        deadlineDate: "截至日期"
    }
};

export default { locale$2, locale$3, locale$4, locale$5, locale$1 }