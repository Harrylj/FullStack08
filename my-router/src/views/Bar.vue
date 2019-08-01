<template>
    <div>
        this is bar, {{id}}
        <h4>url add /test，可显示嵌套路由</h4>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Bar",
        props: ['id'],
        mounted(){
            // console.log(this.id)
        }
        /*
        created() {
            console.log(this.$route)
        }
        */
        /*
        computed: {
            username () {
                // 我们很快就会看到 `params` 是什么
                return this.$route.params.username
            }
        },
        methods: {
            goBack () {
                window.history.length > 1
                    ? this.$router.go(-1)
                    : this.$router.push('/')
            }
        }
         */
    }
</script>

<style scoped>

</style>