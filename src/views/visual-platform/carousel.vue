<template>
  <div class="content-box">
    <div class="triangle" @click="moveContent('top')"></div>
    <div class="content" v-for="(item, index) in carouselData" :key="index">
      <template v-if="index == 0">
        <div class="box header">
          {{ item.name }}
        </div>
      </template>
      <template v-else-if="index == 1">
        <div class="header">{{ item.name }}</div>
      </template>
      <template v-else>
        <div class="box2 header">
          {{ item.name }}
        </div>
      </template>
      <div class="bottom" v-if="index == 1">
        <dv-capsule :data="item.data" />
      </div>
    </div>
    <div class="triangle2" @click="moveContent('bottom')"></div>
  </div>
</template>

<script>
import dvCapsule from "./dv-capsule.vue";
export default {
  components: {
    dvCapsule,
  },
  data() {
    return {
      carouselData: [
        {
          name: "铁磨地狱",
          data: [
            { name: "本层人数", value: "10" },
            { name: "痛苦值", value: "20" },
            { name: "物资补给", value: "30" },
          ],
        },
        {
          name: "孤独地狱",
          data: [
            { name: "本层人数", value: "20" },
            { name: "痛苦值", value: "30" },
            { name: "物资补给", value: "40" },
          ],
        },
        {
          name: "畜牲地狱",
          data: [
            { name: "本层人数", value: "30" },
            { name: "痛苦值", value: "40" },
            { name: "物资补给", value: "50" },
          ],
        },
        {
          name: "剥皮地狱",
          data: [
            { name: "本层人数", value: "40" },
            { name: "痛苦值", value: "50" },
            { name: "物资补给", value: "60" },
          ],
        },
        {
          name: "沸屎地狱",
          data: [
            { name: "本层人数", value: "50" },
            { name: "痛苦值", value: "60" },
            { name: "物资补给", value: "70" },
          ],
        },
      ],
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {},
  mounted() {},
  methods: {
    moveContent(type) {
      if (type == "top") {
        const arr0 = this.carouselData[0];
        for (const index in this.carouselData) {
          if (index < this.carouselData.length - 1) {
            this.carouselData[index] = this.carouselData[Number(index) + 1];
            this.$forceUpdate();
          } else {
            this.carouselData[index] = arr0;
          }
        }
      } else {
        const arr0 = this.carouselData[0];
        for (const index in this.carouselData) {
          if (index > 0) {
            this.carouselData[this.carouselData.length - index] =
              this.carouselData.length - index == 1
                ? arr0
                : this.carouselData[this.carouselData.length - index - 1];
            this.$forceUpdate();
          } else {
            this.carouselData[index] = this.carouselData[this.carouselData.length - 1];
          }
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.content-box {
  background-color: #191919;
  padding: 10px 0px;
  .triangle {
    width: 0px; /*设置宽高为0，所以div的内容为空，从才能形成三角形尖角*/
    height: 0px;
    border-bottom: 20px solid #00a3af;
    border-left: 20px solid transparent; /*transparent 表示透明*/
    border-right: 20px solid transparent;
    margin: 0 auto;
    cursor: pointer;
  }
  .triangle2 {
    width: 0px; /*设置宽高为0，所以div的内容为空，从才能形成三角形尖角*/
    height: 0px;
    border-top: 20px solid #00a3af;
    border-left: 20px solid transparent; /*transparent 表示透明*/
    border-right: 20px solid transparent;
    margin: 0 auto;
    cursor: pointer;
  }
  .content {
    text-align: center;
    margin: 10px;
    font-size: 12px;
    .header {
      height: 30px;
      line-height: 30px;
      color: #07dab1;
      border: 2px solid #07dab1;
    }
    .bottom {
      height: 200px;
      line-height: 40px;
      border: 2px solid #07dab1;
      border-top: none;
      padding: 10px 0px;
    }
    .box {
      width: 222px;
      margin: 0 auto;
      height: 30px;
      border: 1px solid #156d5c;
      transform: perspective(2em) rotateX(-10deg);
    }
    .box2 {
      width: 222px;
      margin: 0 auto;
      height: 30px;
      border: 1px solid #156d5c;
      transform: perspective(2em) rotateX(10deg);
    }
  }
}
</style>
