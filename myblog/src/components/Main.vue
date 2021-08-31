<template>
  <div class="hello">
      <header class="main-header" style="background-image:url(http://my.zzp.world/img/banner.jpg)">
        <div class="main-header-box">
          <a class="header-avatar" href="#" title="shenliyang">
            <img src="@/assets/github.jpg"  class="img-responsive center-block"></a>
            <div class="branding">
              <span>桐原的个人博客</span>
            </div>
        </div>
    </header>
    <div class="main-body">
       <div class="main-body-left"></div>  
       <div class="main-body-right"></div> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-header{
    position: relative;
    text-align: center;
    line-height: 0;
    height: 180px;
    width: 100%;
    background: url(http://my.zzp.world/img/banner.jpg) #fff;
    overflow: hidden;
}
body{
  margin: 0;
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
.main-body{
  padding: 20px 20px 20px 20px;
  display: flex;
  width:100%; 
  height:100%; 
  display:-webkit-flex; 
  justify-content:center; 
  align-items:center; 
}
.main-body-left{
  width: 300px;
}
.main-body-right{
    
}
</style>
