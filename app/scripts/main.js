!function ($) {
    $(function(){

        $(window).resize(function() {
            $('.row').height($(window).height());
        });
        
        var $root = $('html, body');
        $('button').click(function() {
            var href = $.attr(this, 'href');
            $root.animate({
                scrollTop: $(href).offset().top
            }, 500);
            return false;
        });
    })
}(window.jQuery);
