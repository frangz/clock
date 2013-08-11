!function ($) {
    $(function(){

        $('.row').height(Math.max($(window).height(), $('#clock').height()));
        
        $(window).resize(function() {
            $('.row').height(Math.max($(window).height(), $('#clock').height()));
        });
        
        var $root = $('html, body');

        $('button').click(function() {
            var href = $.attr(this, 'href');
            $root.animate({
                scrollTop: $(href).offset().top
            }, 500, function () {
                window.location.hash = href;
            });
            return false;
        });
    })
}(window.jQuery);
