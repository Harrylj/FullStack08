<template>
  <div>
    your need login
    <cube-form
      :model="model"
      :schema="schema"
      @submit="handleLogin"
      @validate="haneldValidate"
    ></cube-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        username: "",
        passwd: ""
      },
      schema: {  //表单结构定义
        fields: [ // 字段数组
          {
            type: "input",
            modelKey: "username",
            label: "用户名",
            props: {
              placeholder: "请输入用户名"
            },
            rules: {
              // 校验规则
              required: true
            },
            trigger: "blur"
          },
          {
            type: "input",
            modelKey: "passwd",
            label: "密码",
            props: {
              type: "password",
              placeholder: "请输入密码",
              eye: {
                open: true
              }
            },
            rules: {
              required: true
            },
            trigger: "blur"
          },
          {
            type: "submit",
            label: "登录"
          }
        ]
      }
    }
  },
  methods: {
    // 登录函数
    handleLogin(e) {
      console.log('store: ',this.$store)
      // 组织表单的默认提交行为
      e.preventDefault();
      // 登录请求
      this.$store
          .dispatch('login', this.model)
          .then( code => {
            if (code) {
              // 登录成功重定向
              const path = this.$route.query.redirect || "/";
              this.$router.push(path);
              console.log(path)
            }
            console.log('已登录了吗,code:',code)
            
            // else{
            //   console.log('code:',code)
            // }
          })
          .catch(error => {
            console.log(3)
            // 有错误发生或者登陆失败
            // 登陆失败，弹出提示信息
            const toast = this.$createToast({
              time: 2000,
              txt: error.message || error.response.data.message || '登录失败',
              type: "error"
            });
            toast.show();
          });
    },
    // 登录验证
    haneldValidate(ret) {
      console.log(ret);
    }
  }
};
</script>

<style scoped>
</style>