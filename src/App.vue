<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <br />
    <a-button type="primary"> 按钮</a-button>
    <br />
    <input type="text" v-model="info" />
    <button @click="handleClick">添加</button>
    <ul>
      <todo-item v-for="item in list" :key="item" :item="item"></todo-item>
    </ul>
    <Hello></Hello>
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem";
import Hello from "./components/Hello";
export default {
  name: "app",
  data() {
    return {
      msg: "hello, 世界!",
      info: "",
      list: []
    };
  },
  methods: {
    handleClick() {
      this.list.push(this.info);
      this.info = "";
    }
  },
  components: {
    TodoItem,
    Hello
  }
};
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
