$(function () {
    $('ul.mySummary').addClass('my-3 p-2 pl-5 border border-warning');
    $('.container h1').after(`
<div class="d-flex justify-content-between">运行环境：vue-2.5.17.js，Chrome71+ 
<ul>
<li class="d-inline-block"><a class="btn btn-outline-primary btn-sm " href="../index.html">目录</a></li>
<li class="d-inline-block"><a class="btn btn-outline-warning btn-sm font-italic" href="http://e-art.top/" title='关中刀客在青岛的博客' target="_blank">去往博客首页</a></li>
</ul>

`)
});
