<template>
  <div class="hello">
    <div class="container">
      <header class="main-header" >
          <div class="main-header-box">
            <a class="header-avatar" href="#" title="shenliyang">
            <img src="@/assets/github.jpg"  class="img-responsive center-block"></a>
            <div class="branding">
              <span>桐原的个人博客</span>
            </div>
          </div>
      </header>
      <!-- 导航栏 -->
      <div  class="navgo" ref="navRef">
        <div class="list" >
            <li  class="text-center"><a href="#"><i></i> 首页</a></li>
            <li  class="text-center"><a href="#"><i></i> 前端</a></li>
            <li  class="text-center"><a href="#"><i></i> 后端</a></li>
            <li  class="text-center"><a href="#"><i></i> 工具</a></li>
            <li  class="text-center"><a href="#"><i></i> 时间轴</a></li>
        </div>
      </div>
      <main class="container__main">
          <!-- Left sidebar -->
          <aside class="container__left">...</aside>

          <!-- Main content -->
          <article class="container__middle">...</article>

          <!-- Right sidebar -->
          <nav class="container__right">...</nav>
      </main>
      <footer class="foot">
          ...
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      widthFlag:false,
    }
  },
  created() {
     
  },
  methods:{

  }
}
</script>

<style scoped>
div
{
   padding:0px; 
    margin:0px;
}
.main-header{
    position: relative;
    text-align: center;
    line-height: 0;
    height: 180px;
    width: 100%;
    background: url(https://www.zzp.world/img/banner.jpg) #fff;
    overflow: hidden;
}
body{
  margin: 0;
  height: 100%;
}
.main-header-box {
    position: relative;
    width: 100%;
    padding-top: 30px;
}
.main-header .main-header-box a.header-avatar img {
    width: 82px;
    height: 82px;
    max-width: 100%;
    border-radius: 50%;
}
.center-block {
    display: block;
    margin-right: auto;
    margin-left: auto;
}
.branding{
  margin-top: 30px;
  color: #fff;
  font-size: 18px;
  font-family: Cursive;
}
.navgo{
    min-height:60px;
    min-width:390px;
    text-align: center;
    background: #fff;
    border-top: 1px solid #ebebeb;
    margin-bottom: 20px;
    border-bottom: 2px solid #e1e1e1;
    align-items: center;
    display: flex;
    justify-content: center;
}
.list{
  /* display: inline-block; */
}
.container {
    display: flex;
    flex-direction: column;
    background: #ebebeb;
}

.container__main {
    /* Take the remaining height */
    flex-grow: 1;

    /* Layout the left sidebar, main content and right sidebar */
    display: flex;
    flex-direction: row;
    background: #ebebeb;
    min-height: 1010px;
}

.container__left {
    width: 25%;
}

.container__middle {
    /* Take the remaining width */
    flex-grow: 1;
}

.container__right {
    width: 20%;
}

li a{    
    text-decoration:none;
    color: #505050;
    
}

.text-center{
  float:left;
  list-style-type:none;
  padding:0 21px 0 21px;
}
.foot{
    background: #111;
    font-size: 13px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 1px solid #303030;
    min-height: 24px;
}
</style>
