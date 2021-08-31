// ���´���������layui��չģ���Ŀ¼���Լ�����adminģ��
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

    // �˳���¼����¼�
    $('#btnLogout').click(function () {
        layer.confirm('ȷ���˳���¼��', function () {
            location.replace('login.html');
        });
    });

    // �޸��������¼�
    $('#setPsw').click(function () {
        admin.open({
            type: 2,
            title: '�޸�����',
            content: getProjectUrl() + 'page/tpl/tpl-password.html'
        });
    });

    // ������Ϣ����¼�
    $('#setInfo').click(function () {

    });

    // ��Ϣ����¼�
    $('#btnMessage').click(function () {
        admin.popupRight({
            type: 2,
            content: getProjectUrl() + 'page/tpl/tpl-message.html'
        });
    });

    // �������õ�����
    var theme = layui.data('easyweb').theme;
    if (theme) {
        layui.link(getThemeDir() + theme + '.css');
    }

    // �Ƴ�loading����
    setTimeout(function () {
        $('.page-loading').addClass('layui-hide');
    }, 100);
});

// �Ƴ�����
function removeTheme() {
    var app = 'layuicss-' + getThemeDir().replace(/\.|\//g, '');
    layui.jquery('link[id^="' + app + '"]').remove();
}

// ��ȡ����css��·��
function getThemeDir() {
    return getProjectUrl() + 'assets/css/theme/';
}

// ��ȡ��ǰ��Ŀ�ľ���·��
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