$(function () {
    let slideShow = $(".slide-show");
    let slideCount = $(".single-slide").length;
    let slideWidth = 100 / slideCount;
    let index = 0;


    //ustawić szerokosc kontenera(dynamicznie)

    slideShow.css("width", slideCount + "00%");

    slideShow.find(".single-slide").each(function (indexTablicy) {
        $(this).css({ width: slideWidth + "%", marginLeft: indexTablicy * slideWidth + "%" });

    })

    //nawigacja - obsluga zdarzen dla prawej i lewej strzalki

    $(".prev-slide").click(function () {
        slide(index - 1);

    });

    $(".next-slide").click(function () {
        slide(index + 1);

    });

    //glowna funkcja slidera

    function slide(newSlideIndex) {
        if (newSlideIndex < 0 || newSlideIndex > slideCount - 1) {
            return;
        };


        //chowamy napis na kolejnym slajdzie

        let slideCaption = slideShow.find(".slide-caption").eq(newSlideIndex);
        slideCaption.hide();

        let marginLeft = (newSlideIndex * (-100)) + "%";

        slideShow.animate({ marginLeft: marginLeft }, 1000, function () {
            slideCaption.show();
            index = newSlideIndex;

        });

    }

});