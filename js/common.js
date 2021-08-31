// 以下代码是配置layui扩展模块的目录，以及加载admin模块
layui.config({
    base: getProjectUrl() + 'module/'
}).extend({
    formSelects: 'formSelects/formSelects-v4',
    treetable: 'treetable-lay/treetable',
    dropdown: 'dropdown/dropdown',
    notice: 'notice/notice',
    step: 'step-lay/step'
}).use(['layer', 'admin', 'element'], function () {
    var $ = layui.jquery;
    var layer = layui.layer;
    var admin = layui.admin;
    var element = layui.element;

    // 退出登录点击事件
    $('#btnLogout').click(function () {
        layer.confirm('确定退出登录？', function () {
            location.replace('login.html');
        });
    });

    // 修改密码点击事件
    $('#setPsw').click(function () {
        admin.open({
            type: 2,
            title: '修改密码',
            content: getProjectUrl() + 'page/tpl/tpl-password.html'
        });
    });

    // 个人信息点击事件
    $('#setInfo').click(function () {

    });

    // 消息点击事件
    $('#btnMessage').click(function () {
        admin.popupRight({
            type: 2,
            content: getProjectUrl() + 'page/tpl/tpl-message.html'
        });
    });

    // 加载设置的主题
    var theme = layui.data('easyweb').theme;
    if (theme) {
        layui.link(getThemeDir() + theme + '.css');
    }

    // 移除loading动画
    setTimeout(function () {
        $('.page-loading').addClass('layui-hide');
    }, 100);
});

// 移除主题
function removeTheme() {
    var app = 'layuicss-' + getThemeDir().replace(/\.|\//g, '');
    layui.jquery('link[id^="' + app + '"]').remove();
}

// 获取主题css的路径
function getThemeDir() {
    return getProjectUrl() + 'assets/css/theme/';
}

// 获取当前项目的绝对路径
function getProjectUrl() {
    var layuiDir = layui.cache.dir;
    if (!layuiDir) {
        var js = document.scripts, last = js.length - 1, src;
        for (var i = last; i > 0; i--) {
            if (js[i].readyState === 'interactive') {
                src = js[i].src;
                break;
            }
        }
        var jsPath = src || js[last].src;
        layuiDir = jsPath.substring(0, jsPath.lastIndexOf('/') + 1);
    }
    return layuiDir.substring(0, layuiDir.indexOf('assets'));
}