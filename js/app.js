$('.dropdown-toggle').dropdown()

$('.collapse').collapse()

$('#myCollapsible').collapse({
    toggle: false
})

var rangeSlider = function () {
    var slider = $('.range-slider'),
        range = $('.range-slider__range'),
        value = $('.range-slider__value');

    slider.each(function () {

        value.each(function () {
            var value = $(this).prev().attr('value');
            $(this).html(value);
        });

        range.on('input', function () {
            $(this).next(value).html(this.value);
        });
    });
};

rangeSlider();


$('.steps .button__next').click(function () {
    let i = $('.steps .step.active').index();
    let $current = $('.steps .step').eq(i);
    let $currentNext = $('.steps .step').eq(i + 1);

    if ($currentNext.length == 0) return;

    let $headerCurrentNext = $('.stepper li').eq(i + 1);

    $headerCurrentNext.addClass('completed');

    $current.fadeOut(function () {
        $current.css('display', 'none');
        $current.removeClass('active');

        $currentNext.fadeIn(function () {
            $currentNext.css('display', 'block');
            $currentNext.addClass('active');
        })
    })
});

$('.steps .button__last').click(function () {
    let i = $('.steps .step.active').index();
    let $current = $('.steps .step').eq(i);
    let $currentLast = $('.steps .step').eq(i - 1);

    if ($currentLast.length == 0) return;

    let $headerCurrentLast = $('.stepper li').eq(i);

    $headerCurrentLast.removeClass('completed');

    $current.fadeOut(function () {
        $current.css('display', 'none');
        $current.removeClass('active');

        $currentLast.fadeIn(function () {
            $currentLast.css('display', 'block');
            $currentLast.addClass('active');
        })
    })
});

$('.bank-items .button__open_info').click(function () {
    $('.bank-items .button__open_info').removeClass('active');
    $(this).addClass('active');
    $(this).parent().parent().css('opacity', '0.5');

    $('#bank_info').css('display', 'block');
});
