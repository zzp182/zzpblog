<template>
    <div>
       <div class="main">
        <div class="main-content">
            <div class="carousel">
                <img src="../../assets/head-img.jpg" alt="">
            </div>
            <div>
                <article class="post">
                    <div class="post-content">
                        <div class="post-head home-post-head">
                            <h1 class="post-title">
                                <a href="/2021/09/17/%E5%BC%A0%E6%AD%A3%E9%B9%8F%E7%9A%84%E7%AC%AC%E4%B8%89%E7%AF%87%E5%8D%9A%E5%AE%A2/">张正鹏的第一篇博客</a>
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
                        <a href="#" class="btn btn-default">Read</a>
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
                    <button type="button" class="search-form-submit" id="search-local">localSearch</button>
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
    </div>
</template>

<script>
    export default {
        
    }
</script>
<style scoped>
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