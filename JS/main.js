$ (document).ready (function () {

    $('.content__buttons').on('click', 'button', function() {
        $('.content__slides > div').hide().eq($(this).index()).show();
      });
   
});