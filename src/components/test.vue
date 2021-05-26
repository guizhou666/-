<template>
  <div class="box">
    <div class="col-3">
      <h3>vuedraggable 1</h3>
      <vuedraggable class="list-group" :list="list1" group="people">
        <div
          class="list-group-item"
          v-for="(element, index) in list1"
          :key="element.name"
        >
          {{ element.name }} {{ index }}
        </div>
      </vuedraggable>
    </div>

    <div class="col-3">
      <h3>vuedraggable 2</h3>
      <vuedraggable class="list-group" :list="list2" group="people">
        <div
          class="list-group-item"
          v-for="(element, index) in list2"
          :key="element.name"
        >
          {{ element.name }} {{ index }}
        </div>
      </vuedraggable>
    </div>
  </div>
</template>

<script>
import vuedraggable from "vuedraggable";

export default {
  name: "HelloWorld",
  components: { vuedraggable },
  props: {},
  data() {
    return {
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 },
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 },
      ],
    };
  },
  updated() {
    console.log(this.list);
  },
  methods: {},
};
</script>
<style scoped>
.header,
.bottom {
  width: 200px;
  height: 800px;
  border: 1px solid #cccccc;
}
.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}
.item {
  width: 300px;
  height: 50px;
  background-color: #42b983;
  color: #ffffff;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  cursor: move;
}
.list-group-item:first-child {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
</style>
