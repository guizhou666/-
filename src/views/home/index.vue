<template>
  <div class="home-box">
    <div class="box-header">
      <li
        v-for="item in headerData"
        :key="item.id"
        :style="{ backgroundColor: item.backgroundColor }"
      >
        <span class="name-value">
          <span
            >{{ item.name }} <br />
            <span class="value">{{ item.value }}</span></span
          >
        </span>
      </li>
    </div>
    <div class="box-bottom">
        <div class="layout-container">
          <div :class="key" v-for="(item, key) in mainData" :key="key">
            <draggable
              v-bind="dragOptions"
              class="list-group"
              :list="item"
              @end="onEnd"
              @start="onStart"
            >
              <transition-group name="list">
                <div
                  class="list-group-item"
                  v-for="(element, index) in item"
                  :key="index"
                >
                  <div class="drag-handle">
                      <span class="drag-handle-title">{{ element.title }}</span>
                      <span class="more-opraciton"><i class="iconfont icon-daohanggengduo1"></i></span>
                  </div>
                  <div class="component-box" v-if="!dragging">
                    <component :is="element.name" />
                  </div>
                </div>
              </transition-group>
            </draggable>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
// import commonFun from "./components/commonFun";
// import enterAndOutPeople from "./components/enterAndOutPeople";
// import hellPeople from "./components/hellPeople";
// import todayNeedDo from "./components/todayNeedDo";
import {commonFun,enterAndOutPeople, hellPeople,todayNeedDo} from './components'
export default {
  components: {
    draggable,
    commonFun,
    enterAndOutPeople,
    hellPeople,
    todayNeedDo,
  },
  data() {
    return {
      headerData: [
        { name: "地府人数", value: 1968, id: 0, backgroundColor: "#3cdb86" },
        { name: "今日入境", value: 10, id: 1, backgroundColor: "#4480f4" },
        { name: "今日出境", value: 16, id: 2, backgroundColor: "#083045" },
        { name: "管理员", value: 20, id: 3, backgroundColor: "#f66932" },
      ],
      dragging: false,
      componentList: [
        { name: "commonFun", title: "常用功能导航", id: "1" },
        { name: "enterAndOutPeople", title: "地府出入境人数", id: "2" },
        { name: "hellPeople", title: "各层地狱人数", id: "3" },
        { name: "todayNeedDo", title: "今日待办", id: "4" },
      ],
      layout: {
        left: ["1", "2"],
        right: ["3", "4"],
      },
      mainData: {},
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 30,
        handle: ".drag-handle-title",
        group: "description",
        ghostClass: "ghost",
        chosenClass: "sortable",
        forceFallback: true,
      };
    },
  },
  //监控data中的数据变化
  watch: {},
  created() {},
  mounted() {
    this.getLayout();
  },
  methods: {
    onStart() {
         this.dragging = true;
    },
    onEnd() {
      this.dragging = false;
      this.setLayout();
    },
    getLayout() {
      let myLayout = JSON.parse(window.localStorage.getItem("kon"));
      if (!myLayout || Object.keys(myLayout).length === 0) myLayout = this.layout;
      const newLayout = {};
      for (const side in myLayout) {
        newLayout[side] = myLayout[side].map((i) => {
          return this.componentList.find((c) => c.id === i);
        });
      }
      this.mainData = newLayout;
    },
    setLayout() {
      const res = {};
      for (const side in this.mainData) {
        const item = this.mainData[side].map((i) => i.id);
        res[side] = item;
      }
      window.localStorage.setItem("kon", JSON.stringify(res));
    },
  },
};
</script>
<style lang="scss" scoped>
.home-box {
  width: 100%;
  background-color: #ffffff;
  height: 100%;
  .box-header {
    height: 200px;
    display: flex;
    justify-content: space-between;
    li {
      width: 24%;
      list-style-type: none;
      height: 100%;
      line-height: 200px;
      text-align: center;
      .name-value {
        color: #ffffff;
        line-height: 40px;
        position: relative;
        top: 20px;
        display: inline-block;
        .value {
          font-size: 20px;
        }
      }
    }
  }
  .box-bottom {
    width: 100%;
    margin-top: 20px;
  }
}
.layout-container {
  height: 100%;
  display: flex;
  .left {
    flex: 1;
    margin-right: 40px;
  }
  .right {
    max-width: 550px;
    width: 550px;
  }
  .list-group-item {
    margin-bottom: 20px;
    // border-radius: 6px;
    overflow: hidden;
    background: #fff;
    border: 1px solid #cccccc;
  }
  .component-box {
    padding: 20px;
  }
  .drag-handle {
    height: 40px;
    line-height: 40px;
    // color: #fff;
    font-weight: 700;
    font-size: 16px;
    padding: 0 20px;
    // background: #6cf;
    display: flex;
    justify-content: space-between;
    span {
        display: inline-block;
    }
    span.drag-handle-title{
        width: 95%;
        cursor: move;
    }
    span.more-opraciton{
        width: 5%;
        cursor: pointer;
        text-align: center;
    }
  }
}
.drag {
  .component-box {
    display: none;
  }
}

.list-enter-active {
  transition: all 0.3s linear;
}
.list-enter,
.list-leave-to {
  opacity: 0.5;
}

.sortable {
  .component-box {
    display: none;
    height: 0;
  }
}
.list-group {
  > span {
    display: block;
    min-height: 20px;
  }
}

.ghost {
  .drag-handle {
    background: rgb(199, 219, 230);
  }
}
</style>
