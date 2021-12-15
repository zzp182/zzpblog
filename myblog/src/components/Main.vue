<template>
  <div class="hello">
    <header  class="main-header" style="background-image:url(https://hexo-theme-snippet-1251680922.cos.ap-beijing.myqcloud.com/img/banner.jpg)">
      <div class="main-header-box">
        <a class="header-avatar" href="/" title="John Doe">
          <img src="@/assets/github.jpg" alt="logo头像" class="img-responsive center-block" />
        </a>
        <div style="margin-top: 30px;color:#fff;font-size:18px;font-family:Cursive;">
          <span>桐原的个人博客</span>
        </div>
      </div>
    </header>
    <nav class="main-navigation">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="navbar-header">
              <span  class="nav-toggle-button collapsed pull-right"  data-toggle="collapse" data-target="#main-menu"  id="mnav">
                <span class="sr-only"></span>
                <i class="fa fa-bars"></i>
              </span>
              <a class="navbar-brand" href="http://example.com">Hexo</a>
            </div>
            <div class="collapse navbar-collapse" id="main-menu">
              <!-- <ul class="menu">
                <li role="presentation" class="text-center">
                  <a href="/"> <i class="fa"></i>  Home  </a>
                </li>
                <li role="presentation" class="text-center">
                  <a href="/"> <i class="fa"></i>  前端  </a>
                </li>
                <li role="presentation" class="text-center">
                  <a href="/"> <i class="fa"></i>  后端  </a>
                </li>
                <li role="presentation" class="text-center">
                  <a href="/"> <i class="fa"></i>  算法  </a>
                </li>
                <li role="presentation" class="text-center">
                  <a href="/"> <i class="fa"></i>  工具  </a>
                </li>
              </ul> -->
              <el-menu
              :default-active="this.$route.path"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              router
              background-color="#fff"
              text-color="#333"
              active-text-color="#0084ff"
              >
                <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
                      <template slot="title">
                        <span> {{ item.navItem }}</span>
                      </template>
                </el-menu-item>
              </el-menu>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <section class="content-wrap" style="height:82.09%;">
      <div class="main">
        <div class="main-content">
          <div class="carousel">
            <img src="../assets/head-img.jpg" alt="">
          </div>
          <div>
            <article class="post">
                <div class="post-content">
                    <div class="post-head home-post-head">
                        <h1 class="post-title">
                            <a href="/2021/09/17/%E5%BC%A0%E6%AD%A3%E9%B9%8F%E7%9A%84%E7%AC%AC%E4%B8%89%E7%AF%87%E5%8D%9A%E5%AE%A2/">
                                张正鹏的第一篇博客</a>
                        </h1>
                        <div class="post-meta"> &bull;
                            <time class="post-date" datetime="" title="">
                                2021年09月17日
                            </time>
                        </div>
                    </div>
                    <p class="brief"> 
                    </p>
                </div>
                <footer class="post-footer clearfix">
                  <div class="pull-left tag-list">
                      <div class="post-meta" style="display:flex">
                        <p>标签：</p>
                       <span class="categories-meta fa-wrap">
                          前端 css
                       </span>  
                    </div>
                  </div>
                  <div class="post-permalink">
                      <a href="#" class="btn btn-default">
                          Read</a>
                  </div>
                </footer>
            </article>
          </div>
        </div>
        <div class="main-nav">
          <div class="widget">
            <h3 class="title">
                Search
            </h3>
            <div id="search-form">
                <div id="result-mask" class="hide"></div>
                <div class="search-area">
                    
                    <input id="search-key" type="search" autocomplete="off" placeholder="Search What？">
                    <button type="button" class="search-form-submit" id="search-local">
                        localSearch</button>
                </div>
                <div id="result-wrap" class="hide">
                    <div id="search-result"></div>
                </div>
                <div class="hide">
                    <template id="search-tpl">
                        <div class="item">
                            <a href="/{path}" title="{title}">
                                <div class="title">{title}</div>
                                <div class="content">{content}</div>
                            </a>
                        </div>
                    </template>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="main-footer">
      <div class="container">
        <div class="row"></div>
      </div>
    </footer>
    <a id="back-to-top" class="icon-btn hide">
        <i class="fa fa-chevron-up"></i>
    </a>
    <div class="copyright">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="busuanzi">

                    </div>
                </div>
                <div class="col-sm-12">
                    <span>Copyright &copy;
                        2017
                    </span> |
                    <span>
                        Powered by <a href="//hexo.io" class="copyright-links" target="_blank" rel="nofollow">Hexo</a>
                    </span> |
                    <span>
                        Theme by <a href="//github.com/shenliyang/hexo-theme-snippet.git" class="copyright-links"
                            target="_blank" rel="nofollow">Snippet</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      navList:[
             {name:'/', navItem:'Home'},
             {name:'/report/companyRisk',navItem:'前端'},
             {name:'/report/companyManager',navItem:'后端'},
             {name:'/report/companyRisk',navItem:'算法'},
             {name:'/report/companyManager',navItem:'工具'},
        ]
    };
  },
  created() {},
  methods: {}
};
</script>
<style  scoped>
.hello{
  height: 100%;
  box-sizing: border-box;
  padding-top: 100px;
  background: #ebebeb;
}
.main-header{
  margin-top: -100px;
}
.content-wrap{
  margin-top: 20px;
  background: #ebebeb;
}
.main{
  width: 1170px;
  margin:0 auto; 
  height: 100%;
  display: flex;
}
.main-content{
  width: 66.66%;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
}
.main-nav{
  width: 33.33%;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
}
.widget{
  background: #fff;
  padding: 16px 25px;
}
.el-menu.el-menu--horizontal {
      margin-left: 370px;
      border: 0;
}
</style>
<style src="../assets/css/style.css"></style>
<style src="../assets/css/font-awesome.min.css"></style>
<style src="../assets/css/bootstrap.min.css"></style>

