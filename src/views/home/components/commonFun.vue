<template>
  <div class="container-box">
      <div class="box-header">
          <div class="sectorization" v-for="item in menuList1" :key="item.id">
          <span class="icon">
              <i :class="item.icon"></i>
          </span>
          <span class="text">{{item.name}}</span>
      </div>
      </div>
      <div class="box-bottom">
          <div class="sectorization" v-for="item in menuList2" :key="item.id">
          <span class="icon">
              <i :class="item.icon"></i>
          </span>
          <span class="text">{{item.name}}</span>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
        menuList1:[
            {name:'生死簿',id:0,icon:'iconfont icon-shu'},
            {name:'生死簿',id:1,icon:'iconfont icon-shu'},
            {name:'生死簿',id:2,icon:'iconfont icon-shu'},
            {name:'生死簿',id:3,icon:'iconfont icon-shu'},
            {name:'生死簿',id:4,icon:'iconfont icon-shu'},
            {name:'生死簿',id:5,icon:'iconfont icon-shu'},
           
        ],
        menuList2:[
             {name:'生死簿',id:6,icon:'iconfont icon-shu'},
            {name:'生死簿',id:7,icon:'iconfont icon-shu'},
            {name:'生死簿',id:8,icon:'iconfont icon-shu'},
            {name:'生死簿',id:9,icon:'iconfont icon-shu'},
            {name:'生死簿',id:10,icon:'iconfont icon-shu'},
            {name:'生死簿',id:11,icon:'iconfont icon-shu'},
        ]
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
    .container-box{
        .box-header,.box-bottom{
            display: flex;
            justify-content: space-between;
        }
        .sectorization{
            width: 100px;
            height: 100px;
            display: flex;
            flex-direction:column;
            text-align: center;
            span{
                display: block;
            }
            .icon{
                line-height: 60px;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                border: 1px solid #cccccc;
                margin: 0 auto;
                i{
                    font-size: 25px;
                }
            }
            .text{
                margin-top: 10px;
            }
        }
    }
</style>
