
<template>
  <div>
    <FullCalendar
      ref="fullCalendar"
      default-view="timeGridDay"
      locale="zh-cn"
      :header="{
        left: 'prevYear,prev,today,next,nextYear',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      }"
      :editable="true"
      :button-text="buttonText"
      :plugins="calendarPlugins"
      :weekends="calendarWeekends"
      :events="getCalendarEvents"
      :drag-opacity="dragOpacity"
      :event-limit="true"
      event-limit-text="更多"
      @dateClick="handleDateClick"
      @eventClick="handleEventClick"
      @eventMouseover="eventMouseover"
      @eventDragStart="eventDragStart"
      @eventDragStop="eventDragStop"
      @eventResizeStart="eventResizeStart"
      @eventResizeStop="eventResizeStop"
    />
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import list from '@fullcalendar/list'
export default {
  name: 'FullcalendarPage',
  components: {
    FullCalendar
  },
  data() {
    return {
      buttonText: {
        today: '今天',
        month: '月',
        week: '周',
        day: '天',
        list: '列表'
      },
      dragOpacity: {
        agenda: 0.8, // 对于agenda试图
        '': 1.0 // 其他视图
      },
      calendarPlugins: [
        // plugins must be defined in the JS
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin,
        list // needed for dateClick
      ],
      calendarWeekends: true,
      calendarEvents: [
        // initial event data
        {
          title: 'Event Now',
          start: new Date(),
          color: '#eeeeee'
        }
      ],
      calendarApi: null
    }
  },
  mounted() {
    this.calendarApi = this.$refs.fullCalendar.getApi()
  },
  methods: {
    eventDragStart(event) {
      console.log(event)
    },
    eventResizeStart(event) {
      console.log(event)
    },
    eventResizeStop(event) {
      console.log(event)
    },
    eventDragStop(event) {
      console.log(event)
    },
    eventMouseover(event) {
      console.log(event)
    },
    getCalendarEvents(info, successCallback, failureCallback) {
      const events = [
        ...this.calendarEvents,
        {
          title: info.startStr,
          start: info.start.valueOf()
        }
      ]
      successCallback(events)
    },
    toggleWeekends() {
      this.calendarWeekends = !this.calendarWeekends // update a property
    },
    gotoPast() {
      this.calendarApi.gotoDate('2019-08-01') // call a method on the Calendar object
    },
    handleDateClick(arg) {
      if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
        this.calendarEvents.push({
          // add new event data
          title: 'New Event',
          start: arg.date,
          allDay: arg.allDay
        })
        const data = new Date()
        const newData = data.setMinutes(data.getMinutes() + 30)
        this.calendarEvents.push({
          // add new event data
          title: 'event2',
          start: data,
          end: newData,
          YOUR_DATA: { id: 1, name: 12 }
        })
      }
      this.calendarApi.refetchEvents()
    },
    handleEventClick(info) {
      console.log(info)
    }
  }
}
</script>
<style scoped>
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/daygrid/main.css";
@import "~@fullcalendar/timegrid/main.css";
</style>
