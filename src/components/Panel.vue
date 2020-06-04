<template>
  <div>
    <div class="panel" />
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>
<script>
/* eslint-disable */
import {
  Gantt,
  Panel,
  Menu,
  WidgetHelper,
  DateHelper,
  Popup,
  Toast,
  EffectResolutionResult
} from "bryntum-gantt";
import ganttConfig from "./gantt/ganttConfig.js";
import GanttToolbar from "../lib/GanttToolbar.js";
export default {
  name: "gantt-panel",
  data() {
    return {
      drawer: false,
      direction: "rtl",
      gantt: null,
      panel: null
    };
  },
  mounted() {
    window.$vm = this;
    this.init();
    document.addEventListener("keydown", this.handleEvent);
    // document.removeEventListener('keydown', this.handleEvent);
  }, 

  methods: {
    handleEvent() {
      console.log(event.keyCode);
       if (event.keyCode === 83 && event.ctrlKey) {
        console.log("拦截到83+ctrl"); //ctrl+s
        // this.saveData();
        console.log(this.gantt.project.taskStore.changes);
        event.preventDefault();
        event.returnValue = false;
        return false;
      } 
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    init() {
       
      const gantt = (this.gantt = new Gantt(ganttConfig)),
        project = gantt.project,
        stm = project.stm,
        panel = (this.panel = new Panel({
          items: [gantt],
          tbar: new GanttToolbar({ gantt })
        }))
      panel.render(this.$el);
      
      // load project
      project.load().then(() => {
        // let's track scheduling conflicts happened
        project.on("schedulingconflict", context => {
          // show notification to user
          Toast.show("修改存在冲突，最新修改将被恢复...");
          // as the conflict resolution approach let's simply cancel the changes
          context.continueWithResolutionResult(EffectResolutionResult.Cancel);
        });
        stm.enable();
        stm.autoRecord = true;
      });
    }
  }
};
</script>
<style scoped>
.b-color-picker-container {
  width: 18em !important;
  display: flex;
  flex-wrap: wrap;
  background-color: #f8f9fa;
}

.b-color-picker-container .b-color-picker-item {
  width: 3em;
  height: 3em;
  padding: 0.3em;
}

.b-color-picker-container .b-color-picker-item div {
  width: 100%;
  height: 100%;
}

.b-color-picker-container .b-color-picker-item:hover {
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.7);
}

.b-gantt .b-gantt-task .b-gantt-task-percent,
.b-gantt .b-gantt-task:hover .b-gantt-task-percent {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>