$(function () {
    let slideShow = $(".slide-show");
    let slideCount = $(".single-slide").length;
    let slideWidth = 100 / slideCount;
    let index = 0;


    // dynamic width of container

    slideShow.css("width", slideCount + "00%");

    slideShow.find(".single-slide").each(function (indexTablicy) {
        $(this).css({ width: slideWidth + "%", marginLeft: indexTablicy * slideWidth + "%" });

    })

    //event handling for arrows

    $(".prev-slide").click(function () {
        slide(index - 1);

    });

    $(".next-slide").click(function () {
        slide(index + 1);

    });

    //main slider function

    function slide(newSlideIndex) {
        if (newSlideIndex < 0 || newSlideIndex > slideCount - 1) {
            return;
        };


        //hide caption

        let slideCaption = slideShow.find(".slide-caption").eq(newSlideIndex);
        slideCaption.hide();

        let marginLeft = (newSlideIndex * (-100)) + "%";

        slideShow.animate({ marginLeft: marginLeft }, 1000, function () {
            slideCaption.show();
            index = newSlideIndex;

        });

    }

});