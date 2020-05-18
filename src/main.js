/*
 * 入口文件, 应用入口
 * */

import Vue from "vue"; // 导入Vue构造函数
import App from "./App.vue"; // 导入App.vue组件, 作为根组件

// 引入组件

import { DatePicker } from "ant-design-vue";
Vue.use(DatePicker);

// 引入 antd 脚手架
import Antd from "ant-design-vue";
Vue.use(Antd); // 显示地声明使用组件

// 引入全部样式
// TODO 可能影响前端性能 使用按需加载时注释该行代码
import "ant-design-vue/dist/antd.css"; // or 'ant-design-vue/dist/antd.less'

// 引入按钮组件
import { Button } from "ant-design-vue";
Vue.use(Button);

Vue.config.productionTip = false; //是否生产模式
// Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app");
