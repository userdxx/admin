/*!
 *
 * Bryntum Gantt 2.1.4
 *
 * Copyright(c) 2020 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("Ru",[],n):"object"==typeof exports?exports.Ru=n():(e.bryntum=e.bryntum||{},e.bryntum.locales=e.bryntum.locales||{},e.bryntum.locales.Ru=n())}(window,(function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var o={localeName:"Ru",localeDesc:"Русский",Object:{Yes:"Да",No:"Нет",Cancel:"Отмена",Custom:"обычай"},InstancePlugin:{fnMissing:function(e){return"Пытаемся связать метод ".concat(e.plugIntoName,"#").concat(e.fnName,", но в плагине не был найден метод ").concat(e.pluginName,"#").concat(e.fnName)},overrideFnMissing:function(e){return"Пытаемся перегрузить метод ".concat(e.plugIntoName,"#").concat(e.fnName,", но в плагине не был найден метод ").concat(e.pluginName,"#").concat(e.fnName)}},Field:{badInput:"Недопустимое значение поля",patternMismatch:"Значение должно соответствовать определенному шаблону",rangeOverflow:function(e){return"Значение должно быть меньше или равно ".concat(e.max)},rangeUnderflow:function(e){return"Значение должно быть больше или равно ".concat(e.min)},stepMismatch:"Значение должно соответствовать шагу",tooLong:"Значение должно быть короче",tooShort:"Значение должно быть длиннее",typeMismatch:"Значение должно быть в специальном формате",valueMissing:"Поле не может быть пустым",invalidValue:"Недопустимое значение поля",minimumValueViolation:"Нарушение минимального значения",maximumValueViolation:"Нарушение максимального значения",fieldRequired:"Поле не может быть пустым",validateFilter:"Выберите значение из списка"},DateField:{invalidDate:"Невернывй формат даты"},TimeField:{invalidTime:"Неверный формат времени"},DateHelper:{locale:"ru",shortWeek:"нед",shortQuarter:"квар",week:"Hеделя",weekStartDay:1,unitNames:[{single:"миллисек",plural:"миллисек",abbrev:"мс"},{single:"секунда",plural:"секунд",abbrev:"с"},{single:"минута",plural:"минут",abbrev:"мин"},{single:"час",plural:"часов",abbrev:"ч"},{single:"день",plural:"дней",abbrev:"д"},{single:"неделя",plural:"недели",abbrev:"нед"},{single:"месяц",plural:"месяцев",abbrev:"мес"},{single:"квартал",plural:"кварталов",abbrev:"квар"},{single:"год",plural:"лет",abbrev:"г"}],unitAbbreviations:[["мс","мил"],["с","сек"],["м","мин"],["ч"],["д","ден","дне"],["н","нед"],["мес"],["к","квар","квр"],["г"]],parsers:{L:"DD.MM.YYYY",LT:"HH:mm"},ordinalSuffix:function(e){return"".concat(e,"-й")}},PagingToolbar:{firstPage:"Перейти на первую страницу",prevPage:"Перейти на предыдущую страницу",page:"страница",nextPage:"Перейти на следующую страницу",lastPage:"Перейти на последнюю страницу",reload:"Перезагрузить текущую страницу",noRecords:"Нет записей для отображения",pageCountTemplate:function(e){return"из ".concat(e.lastPage)},summaryTemplate:function(e){return"Показаны записи ".concat(e.start," - ").concat(e.end," из ").concat(e.allCount)}},List:{loading:"Загрузка..."}},r={TemplateColumn:{noTemplate:"TemplateColumn необходим шаблон",noFunction:"TemplateColumn.template должен быть функцией"},ColumnStore:{columnTypeNotFound:function(e){return"Тип колонки '".concat(e.type,"' не зарегистрирован")}},ColumnPicker:{columnsMenu:"Колонки",hideColumn:"Спрятать колонку",hideColumnShort:"Спрятать"},Filter:{applyFilter:"Применить фильтр",filter:"Фильтр",editFilter:"Изменить фильтр",on:"В этот день",before:"До",after:"После",equals:"Равно",lessThan:"Меньше, чем",moreThan:"Больше, чем",removeFilter:"Убрать фильтр"},FilterBar:{enableFilterBar:"Показать панель фильтров",disableFilterBar:"Спрятать панель фильтров"},Group:{groupAscending:"Группа по возрастанию",groupDescending:"Группа по убыванию",groupAscendingShort:"Возрастание",groupDescendingShort:"Убывание",stopGrouping:"Убрать группу",stopGroupingShort:"Убрать"},Search:{searchForValue:"Найти значение"},Sort:{sortAscending:"Сортировать по возрастанию",sortDescending:"Сортировать по убыванию",multiSort:"Сложная сортировка",removeSorter:"Убрать сортировку",addSortAscending:"Добавить сортировку по возрастанию",addSortDescending:"Добавить сортировку по убыванию",toggleSortAscending:"Сортировать по возрастанию",toggleSortDescending:"Сортировать по убыванию",sortAscendingShort:"Возрастание",sortDescendingShort:"Убывание",removeSorterShort:"Убрать",addSortAscendingShort:"+ Возраст...",addSortDescendingShort:"+ Убыв..."},Tree:{noTreeColumn:"Чтобы использовать дерево необходимо чтобы одна колонка имела настройку tree: true"},Grid:{featureNotFound:function(e){return"Опция '".concat(e,"' недоступна, убедитесь что она импортирована")},invalidFeatureNameFormat:function(e){return"Неверное имя функциональности '".concat(e,"', так как оно должно начинаться с маленькой буквы")},removeRow:"Удалить запись",removeRows:"Удалить записи",moveColumnLeft:"Передвинуть в левую секцию",moveColumnRight:"Передвинуть в правую секцию"},GridBase:{loadFailedMessage:"Не удалось загрузить!",syncFailedMessage:"Не удалось cинхронизировать!",serverResponseLabel:"Ответ сервера:",unspecifiedFailure:"Неуказанная ошибка",unknownFailure:"Неизвестная ошибка",networkFailure:"Ошибка сети",parseFailure:"Не удалось разобрать ответ сервера",loadMask:"Загрузка...",syncMask:"Сохраняю данные, пожалуйста подождите...",noRows:"Нет записей для отображения"},PdfExport:{"Waiting for response from server...":"Ожидание ответа от сервера...","Export failed":"Не удалось экспортировать","Server error":"На сервере произошла ошибка"},ExportDialog:{width:"40em",labelWidth:"13em",exportSettings:"Настройки",export:"Экспорт",exporterType:"Разбивка на страницы",cancel:"Отмена",fileFormat:"Формат файла",rows:"Строки",alignRows:"Выровнять строки",columns:"Колонки",paperFormat:"Размер листа",orientation:"Ориентация"},ExportRowsCombo:{all:"Все строки",visible:"Видимые строки"},ExportOrientationCombo:{portrait:"Портретная",landscape:"Ландшафтная"},SinglePageExporter:{singlepage:"Одна страница"},MultiPageExporter:{multipage:"Многостраничный",exportingPage:function(e){var n=e.currentPage,t=e.totalPages;return"Экспорт страницы ".concat(n,"/").concat(t)}}};for(var a in o)r[a]=o[a];var i=r,l={SchedulerCommon:{},ExcelExporter:{"No resource assigned":"Ресурс не назначен"},ResourceInfoColumn:{eventCountText:function(e){return e+" "+(e>=2&&e<=4?"события":1!==e?"событий":"событие")}},Dependencies:{from:"От",to:"К",valid:"Верная",invalid:"Неверная",Checking:"Проверяю…"},EventEdit:{Name:"Название",Resource:"Ресурс",Start:"Начало",End:"Конец",Save:"Сохранить",Delete:"Удалить",Cancel:"Отмена","Edit Event":"Изменить событие",Repeat:"Повтор"},DependencyEdit:{From:"От",To:"К",Type:"Тип",Lag:"Запаздывание","Edit dependency":"Редактировать зависимость",Save:"Сохранить",Delete:"Удалить",Cancel:"Отменить",StartToStart:"Начало к Началу",StartToEnd:"Начало к Окончанию",EndToStart:"Окончание к Началу",EndToEnd:"Окончание к Окончанию"},EventDrag:{eventOverlapsExisting:"Событие перекрывает существующее событие для этого ресурса",noDropOutsideTimeline:"Событие не может быть отброшено полностью за пределами графика"},Scheduler:{"Add event":"Добавить событие","Delete event":"Удалить событие","Unassign event":"Убрать назначение с события"},HeaderContextMenu:{pickZoomLevel:"Выберите масштаб",activeDateRange:"Диапазон дат",startText:"Начало",endText:"Конец",todayText:"Сегодня"},EventFilter:{filterEvents:"Фильтровать задачи",byName:"По имени"},TimeRanges:{showCurrentTimeLine:"Показать текущую шкалу времени"},PresetManager:{minuteAndHour:{topDateFormat:"ddd DD.MM, HH:mm"},hourAndDay:{topDateFormat:"ddd DD.MM"},weekAndDay:{displayDateFormat:"HH:mm"}},RecurrenceConfirmationPopup:{"delete-title":"Вы удаляете повторяющееся событие","delete-all-message":"Хотите удалить все повторения этого события?","delete-further-message":"Хотите удалить это и все последующие повторения этого события или только выбранное?","delete-further-btn-text":"Удалить все будущие повторения","delete-only-this-btn-text":"Удалить только это событие","update-title":"Вы изменяете повторяющееся событие","update-all-message":"Изменить все повторения события?","update-further-message":"Изменить только это повторение или это и все последующие повторения события?","update-further-btn-text":"Все будущие повторения","update-only-this-btn-text":"Только это событие",Yes:"Да",Cancel:"Отменить",width:600},RecurrenceLegend:{" and ":" и ",Daily:"Ежедневно","Weekly on {1}":function(e){var n=e.days;return"Еженедельно (".concat(n,")")},"Monthly on {1}":function(e){var n=e.days;return"Ежемесячно (день: ".concat(n,")")},"Yearly on {1} of {2}":function(e){var n=e.days,t=e.months;return"Ежегодно (день: ".concat(n,", месяц: ").concat(t,")")},"Every {0} days":function(e){var n=e.interval;return"Каждый ".concat(n," день")},"Every {0} weeks on {1}":function(e){var n=e.interval,t=e.days;return"Каждую ".concat(n," неделю, день: ").concat(t)},"Every {0} months on {1}":function(e){var n=e.interval,t=e.days;return"Каждый ".concat(n," месяц, день: ").concat(t)},"Every {0} years on {1} of {2}":function(e){var n=e.interval,t=e.days,o=e.months;return"Каждый ".concat(n," год, день: ").concat(t," месяц: ").concat(o)},position1:"первый",position2:"второй",position3:"третий",position4:"четвертый",position5:"пятый","position-1":"последний",day:"день",weekday:"будний день","weekend day":"выходной день",daysFormat:function(e){var n=e.position,t=e.days;return"".concat(n," ").concat(t)}},RecurrenceEditor:{"Repeat event":"Повторять событие",Cancel:"Отменить",Save:"Сохранить",Frequency:"Как часто",Every:"Каждый(ую)",DAILYintervalUnit:"день",WEEKLYintervalUnit:"неделю по:",MONTHLYintervalUnit:"месяц",YEARLYintervalUnit:"год/лет в:",Each:"Какого числа","On the":"В следующие дни","End repeat":"Прекратить","time(s)":"раз(а)"},RecurrenceDaysCombo:{day:"день",weekday:"будний день","weekend day":"выходной день"},RecurrencePositionsCombo:{position1:"первый",position2:"второй",position3:"третий",position4:"четвертый",position5:"пятый","position-1":"последний"},RecurrenceStopConditionCombo:{Never:"Никогда",After:"После","On date":"В дату"},RecurrenceFrequencyCombo:{Daily:"Каждый день",Weekly:"Каждую неделю",Monthly:"Каждый месяц",Yearly:"Каждый год"},RecurrenceCombo:{None:"Не выбрано","Custom...":"Настроить..."},ScheduleRangeCombo:{completeview:"Полное расписание",currentview:"Текущая видимая область",daterange:"Диапазон дат",completedata:"Полное расписание (по всем событиям)"},SchedulerExportDialog:{"Schedule range":"Диапазон расписания","Export from":"С","Export to":"По"}};for(var u in i)l[u]=i[u];var s=l,c={SchedulerProCommon:{SS:"НН",SF:"НО",FS:"ОН",FF:"ОО",StartToStart:"Начало-Начало",StartToEnd:"Начало-Окончание",EndToStart:"Окончание-Начало",EndToEnd:"Окончание-Окончание",dependencyTypes:["НН","НО","ОН","ОО"],dependencyTypesLong:["Начало-Начало","Начало-Окончание","Окончание-Начало","Окончание-Окончание"]},ConstraintTypePicker:{muststarton:"Фиксированное начало",mustfinishon:"Фиксированное окончание",startnoearlierthan:"Начало не раньше",startnolaterthan:"Начало не позднее",finishnoearlierthan:"Окончание не раньше",finishnolaterthan:"Окончание не позднее"},ProTaskEdit:{"Edit event":"Изменить событие"},TaskEditorBase:{editorWidth:"60em",Information:"Информация",Save:"Сохранить",Cancel:"Отменить",Delete:"Удалить"},SchedulerGeneralTab:{labelWidth:"18em",General:"Основные",Name:"Имя","% complete":"% выполнено",Duration:"Длительность",Start:"Начало",Finish:"Окончание",Effort:"Трудозатраты",Dates:"Даты","Manually scheduled":"Ручное планирование",Calendar:"Календарь"},GeneralTab:{labelWidth:"9em",General:"Основные",Name:"Имя","% complete":"% выполнено",Duration:"Длительность",Start:"Начало",Finish:"Окончание",Effort:"Трудозатраты",Dates:"Даты"},AdvancedTab:{labelWidth:"18em",Advanced:"Дополнительные",Calendar:"Календарь","Scheduling mode":"Тип планирования","Effort driven":"Управляемое трудозатратами","Manually scheduled":"Ручное планирование","Constraint type":"Тип ограничения","Constraint date":"Дата ограничения",Constraint:"Ограничение",Rollup:"Сведение"},DependencyTab:{Predecessors:"Предшественники",Successors:"Последователи",ID:"Идентификатор",Name:"Имя",Type:"Тип",Lag:"Запаздывание","Cyclic dependency has been detected":"Обнаружена цикличная зависимость"},ResourcesTab:{unitsTpl:function(e){var n=e.value;return"".concat(n,"%")},Resources:"Ресурсы",Resource:"Ресурс",Units:"% Занятости"},NotesTab:{Notes:"Заметки"},SchedulingModePicker:{Normal:"Нормальный","Fixed Duration":"Фиксированная длительность","Fixed Units":"Фиксированные единицы","Fixed Effort":"Фиксированные трудозатраты"}};for(var d in s)c[d]=s[d];var m=c,p={AddNewColumn:{"New Column":"Добавить столбец..."},EarlyStartDateColumn:{"Early Start":"Раннее начало"},EarlyEndDateColumn:{"Early End":"Раннее окончание"},LateStartDateColumn:{"Late Start":"Позднее начало"},LateEndDateColumn:{"Late End":"Позднее окончание"},TotalSlackColumn:{"Total Slack":"Общий временной резерв"},MilestoneColumn:{Milestone:"Веха"},EffortColumn:{Effort:"Трудозатраты"},CalendarColumn:{Calendar:"Календарь"},ConstraintDateColumn:{"Constraint Date":"Дата ограничения"},ConstraintTypeColumn:{"Constraint Type":"Тип ограничения"},DeadlineDateColumn:{Deadline:"Крайний срок"},DependencyColumn:{"Invalid dependency found, change is reverted":"Найдена неверная зависимость, изменение отменено"},DurationColumn:{Duration:"Длительность"},EndDateColumn:{Finish:"Конец"},NameColumn:{Name:"Наименование задачи"},NoteColumn:{Note:"Примечание"},PercentDoneColumn:{"% Done":"% завершения"},PredecessorColumn:{Predecessors:"Предшествующие"},ResourceAssignmentColumn:{"Assigned Resources":"Назначенные ресурсы","more resources":"ресурсов"},RollupColumn:{Rollup:"Сведение"},SchedulingModeColumn:{"Scheduling Mode":"Режим"},SequenceColumn:{Sequence:"#"},StartDateColumn:{Start:"Начало"},ShowInTimelineColumn:{"Show in timeline":"Показать на временной шкале"},SuccessorColumn:{Successors:"Последующие"},WBSColumn:{WBS:"СДР"},EventModeColumn:{"Event mode":"Режим расчёта",Manual:"Ручной",Auto:"Автоматический"},ManuallyScheduledColumn:{"Manually scheduled":"Ручное планирование"},ProjectLines:{"Project Start":"Начало проекта","Project End":"Окончание проекта"},TaskTooltip:{Start:"Начинается",End:"Заканчивается",Duration:"Длительность",Complete:"Выполнено"},AssignmentGrid:{Name:"Имя ресурса",Units:"Занятость","%":"%",unitsTpl:function(e){var n=e.value;return n?n+"%":""}},AssignmentPicker:{Save:"Сохранить",Cancel:"Отменить"},AssignmentEditGrid:{Name:"Имя ресурса",Units:"Единицы"},Gantt:{Edit:"Редактировать задачу",Indent:"Понизить уровень",Outdent:"Повысить уровень","Convert to milestone":"Преобразовать в веху",Add:"Добавить...","New task":"Новая задача","New milestone":"Новая веха","Task above":"Задачу выше","Task below":"Задачу ниже","Delete task":"Удалить задачу(и)",Milestone:"Веху","Sub-task":"Под-задачу",Successor:"Последующую задачу",Predecessor:"Предшествующую задачу",changeRejected:"Планирование двигателя отклонило изменения"},GanttCommon:{},Indicators:{Indicators:"Индикаторы",earlyDates:"Раннее начало/окончание",lateDates:"Позднее начало/окончание",constraintDate:"Ограничение",deadlineDate:"Крайний срок"}};for(var f in m)p[f]=m[f];n.default=p}]).default}));