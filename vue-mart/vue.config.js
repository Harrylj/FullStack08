module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false
    }
  },
  // 配置让可访问
  configureWebpack: {
    devServer: {
      before(app) {
        // 模拟后台服务器express
        // 这个地址对应 servece/user.js 里的地址
        app.get("/api/login",function(req, res){
          const { username,passwd } = req.query;
          console.log(username,passwd);
          if (username == "kaikeba" && passwd == "123") {
              res.json({code: 1, token: "jilei"});
              console.log('登录成功')
          } else {
            alert('用户账号或密码错误1')
            res.status(401).json({code: 0, message: "用户名或者密码错误"});
            console.log('用户账号或密码错误2')
          }
        });
      }
    }
  }
}
