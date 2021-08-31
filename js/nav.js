/*
 * Project: FH Mega Menu
 * Author: ��������꾭���������ljj
 * Author URI: http://codecanyon.net/user/designingmedia
 * Description: A Bootstrap 3 Mega Drop Down Menu
 * License: GPL
 */
;(function ($, window, undefined) {
    var $allDropdowns = $();
    $.fn.dropdownHover = function (options) {
        if('ontouchstart' in document) return this;
        $allDropdowns = $allDropdowns.add(this.parent());
        return this.each(function () {
           //   console.log(11111); 
            var $this = $(this), 
                $parent = $this.parent(),
                defaults = {
                    delay: 400,
                    instantlyCloseOthers: true
                },
                data = {
                    delay: $(this).data('delay'),
                    instantlyCloseOthers: $(this).data('close-others')
                },
                showEvent   = 'show.bs.dropdown',
                hideEvent   = 'hide.bs.dropdown',
                settings = $.extend(true, {}, defaults, options, data),
                timeout;

            $parent.hover(function (event) {
                if(!$parent.hasClass('open') && !$this.is(event.target)) {
                    return true; 
                }
                if(settings.instantlyCloseOthers === true)
                    $allDropdowns.removeClass('open');
                window.clearTimeout(timeout);
                $parent.addClass('open');
                $this.trigger(showEvent);
            }, function () {
                timeout = window.setTimeout(function () {
                    $parent.removeClass('open');
                    $this.trigger(hideEvent);
                }, settings.delay);
            });
            $this.hover(function () {
                if(settings.instantlyCloseOthers === true)
                    $allDropdowns.removeClass('open');
                window.clearTimeout(timeout);
                $parent.addClass('open');
                $this.trigger(showEvent);
            });
            $parent.find('.dropdown-submenu').each(function (){
                var $this = $(this);
                var subTimeout;
                $this.hover(function () {
                    window.clearTimeout(subTimeout);
                    $this.children('.dropdown-menu').show();
                    // always close submenu siblings instantly
                    $this.siblings().children('.dropdown-menu').hide();
                }, function () {
                    var $submenu = $this.children('.dropdown-menu');
                    subTimeout = window.setTimeout(function () {
                        $submenu.hide();
                    }, settings.delay);
                });
            });
        });
    };
    $(document).ready(function () {
        $('[data-hover="dropdown"]').dropdownHover();
    });
    $('.dropdown-toggle').dropdownHover().dropdown();

    $('.navbar-toggle').on('click', function () {
        $('.navbar-collapse').collapse('toggle');
    });
})(jQuery, this);