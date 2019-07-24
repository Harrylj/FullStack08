<template>
  <div id="app">
      <h1>{{title}}</h1>
      <hr>
    <div>
      <h2>添加课程</h2>
      <div>
        <label>课程名称:</label>
        <input type="text" v-model="courseInfo.name">
      </div>
      <div>
        <label>课程价格:</label>
        <input type="text" v-model="courseInfo.price">
      </div>
      <div><button @click="addCourseToList">添加课程到列表</button></div>
    </div>
    <div>
      <h2>课程列表</h2>
      <table>
        <tr>
          <th>课程名称</th>
          <th>课程价格</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item,index) in courseList"  :key="item.id">
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>{{item.id}}</td>
          <td><button @click="addCourseToCart(index)">添加到购物车</button></td>
        </tr>
      </table>
    </div>
    <cart :courseCart="courseCart"></cart>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Cart from  './components/Cart.vue'
export default {
  name: 'app',
  components: {
    // HelloWorld
    Cart
  },
  methods:{
    addCourseToList(){
        this.courseList.push(this.courseInfo)
    },
    addCourseToCart(index){
        let item = this.courseList[index];
        let isHasCourse = this.courseCart.find(x => x.id == item.id);
        if(isHasCourse){
            isHasCourse.number += 1;
        }
        else{
            this.courseCart.push({
                ...item,
                number: 1,
                isActive: true,
            })
        }
      // this.courseCart.push(this.courseList[index])
    }
  },
  data : () => {
    return {
      title: '55555',
      courseCart:[
      ],
      courseInfo:[
        {
          name: '',
          price: ''
        }
      ],
      courseList:[
        {
          id:'0',
          name: 'web全栈工程师',
          price: '2000'
        },
        {
          id:'1',
          name: 'JAVA工程师',
          price: '3000'
        }

      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
