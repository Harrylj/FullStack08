<template>
    <div id="Cart">
        <h2>我是购物车</h2>
        <table>
            <tr>
                <td>勾选</td>
                <td>课程名称</td>
                <td>课程价格</td>
                <td>数量</td>
                <td>价格</td>
            </tr>
            <tr v-for="(item,index) in courseCart" :key="item.id">
                <td><input type="checkbox" v-model="item.isActive"></td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>
                    <button @click="minus(index)">-</button>
                    {{item.number}}
                    <button @click="add(index)">+</button>
                </td>
                <td>{{item.price*item.number}}</td>
            </tr>
            <tr>
                <td>{{isActiveCourse}} / {{allActiveCourse}}</td>
                <td>{{allPrice}}</td>
            </tr>
        </table>
    </div>

</template>

<script>
    export default {
        name: "Cart",
        props: ['courseCart'],
        methods:{
            minus(index){
                let number = this.courseCart[index].number;
                if(number > 1){
                    this.courseCart[index].number -= 1;
                }
                else {
                    if(window.confirm('确定要删除么')) {
                        this.$emit('removeItem',this.courseCart[index]);
                        // console.log('删除');
                    }
                    else {
                        // console.log('不删除');
                    }
                }
            },
            add(index){
                this.courseCart[index].number += 1;
            },
        },
        computed:{
            isActiveCourse() {
              return this.courseCart.filter(item => item.isActive).length
            },
            allActiveCourse() {
              // console.log(this.courseCart)
              return this.courseCart.length
            },
            allPrice() {
                let num = 0;
                this.courseCart.forEach(item => {
                    if(item.isActive){
                        num += item.price * item.number
                    }
                })
                return num;
            }
        }
    }
</script>

<style scoped>

</style>