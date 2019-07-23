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
            <tr v-for="item in courseCart" :key="item.id">
                <td></td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </div>

</template>

<script>
    export default {
        name: "Cart",
        props: ['courseCart']
    }
</script>

<style scoped>

</style>