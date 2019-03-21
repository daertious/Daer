$(function() {
    var choosenLang = localStorage.getItem('lang') || 'en';
    $('#' + choosenLang + '-sw').addClass('active');
    $('.' + choosenLang).show();
    $('.lang').on('click', function () {
        $('.active').removeClass('active');
        $(this).addClass('active');
        var lang = $(this).data('lang');
        $('.lang-div').hide();
        $('.' + lang).show();
       localStorage.setItem('lang', lang);
    });
});