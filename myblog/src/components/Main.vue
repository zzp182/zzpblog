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
              <ul class="menu">
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <section class="content-wrap" style="min-height:100%;height:auto">
      <div class="container">
        <div class="row">
          <main class="col-md-8 main-content">
            <div class="carousel">
              <a href="https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=xs0pypd2" target="_blank">
                <img src="/./img/head-img.jpg" alt />
              </a>
            </div>
            <article class="post">
              <div class="post-content">
                <div class="post-head home-post-head">
                  <h1 class="post-title">
                    <a href="/2021/06/29/hello-world/">Hello World</a>
                  </h1>
                  <div class="post-meta">
                    &bull;
                    <time class="post-date" datetime title>2021年06月29日</time>
                  </div>
                </div>
                <p
                  class="brief"
                >Welcome to Hexo! This is your very first post. Check documentation for more info. If you get any problems when using ...</p>
              </div>
              <footer class="post-footer clearfix">
                <div class="pull-left tag-list">
                  <div class="post-meta">
                    <span class="categories-meta fa-wrap">
                      <i class="fa fa-folder-open-o"></i>
                    </span>
                    <span class="fa-wrap">
                      <i class="fa fa-tags"></i>
                      <span class="tags-meta"></span>
                    </span>
                  </div>
                </div>
                <div class="post-permalink">
                  <a href="/2021/06/29/hello-world/" class="btn btn-default">Read</a>
                </div>
              </footer>
            </article>
          </main>
          <aside class="col-md-4 sidebar">
            <div class="widget">
              <h3 class="title">Search</h3>
              <div id="search-form">
                <div id="result-mask" class="hide"></div>
                <div class="search-area">
                  <input  id="search-key"  type="search"  autocomplete="off"  placeholder="Search What？" />
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

            <div class="widget">
              <h3 class="title">Notification</h3>
              <div class="notification">
                <p>
                  主题下载：
                  <a
                    href="https://github.com/shenliyang/hexo-theme-snippet"
                    title="fork me"
                    target="_blank"
                  >Snippet主题</a>
                  <br />主题使用：
                  <a
                    href="https://github.com/shenliyang/hexo-theme-snippet/blob/master/README.md#常见问题"
                    title
                    target="_blank"
                  >常见使用问题</a>
                  <br />支持主题：
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://github.com/shenliyang/hexo-theme-snippet/stargazers"
                  >Star一下</a>
                </p>
              </div>
            </div>

            <div class="widget">
              <h3 class="title">Social</h3>
              <div class="content social">
                <a
                  href="//github.com/shenliyang"
                  rel="external nofollow"
                  title="Github"
                  target="_blank"
                >
                  <i class="git fa fa-git"></i>
                </a>

                <a href="mailto:snippet@91h5.cc" rel="external nofollow" title="邮箱" target="_blank">
                  <i class="envelope-o fa fa-envelope-o"></i>
                </a>

                <a href="/" rel="external nofollow" title="联系QQ" target="_blank">
                  <i class="qq fa fa-qq"></i>
                </a>

                <a href="/" rel="external nofollow" title="微信" target="_blank">
                  <i class="weixin fa fa-weixin"></i>
                </a>

                <a href="/" rel="external nofollow" title="QQ群" target="_blank">
                  <i class="users fa fa-users"></i>
                </a>

                <a href="/atom.xml" rel="external nofollow" title="RSS" target="_blank">
                  <i class="feed fa fa-feed"></i>
                </a>
              </div>
            </div>

            <div class="widget">
              <h3 class="title">Archives</h3>
              <ul class="archive-list">
                <li class="archive-list-item">
                  <a class="archive-list-link" href="/archives/2021/06/">
                    <i class="fa" aria-hidden="true">2021年06月</i>
                  </a>
                  <span class="archive-list-count">1</span>
                </li>
              </ul>
            </div>

            <div class="widget">
              <h3 class="title">Friends</h3>
              <div class="content friends-link">
                <a href="https://hexo.io/zh-cn/" class="fa" target="_blank">Hexo官网</a>
              </div>
            </div>
          </aside>
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
      widthFlag: false
    };
  },
  created() {},
  methods: {}
};
</script>
<style src="../assets/css/style.css"></style>
<style src="../assets/css/font-awesome.min.css"></style>
<style src="../assets/css/bootstrap.min.css"></style>

