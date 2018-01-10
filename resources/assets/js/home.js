$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
hvidth = $(window).height();
hHeader = $('.navbar-fixed-top').height();
headerH = hvidth - hHeader;
$(window).resize(function() {
    hvidth = $(window).height();
    hHeader = $('.navbar-fixed-top').height();
    headerH = hvidth - hHeader;
    $(".header-home").css("min-height",headerH);
});

$(".header-home").css("min-height",headerH);
$('document').ready(function() {

    $(".home-buttons").hover(function () {
        $(this).find('.buttons-desc').clearQueue()
            .stop();
        $(this).find('.buttons-desc').fadeIn( "slow" );
    },function () {
        $(this).find('.buttons-desc').fadeOut("slow");
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    var truck_hover = $("#truck-pluss");
    var add_trucks = $("#add-trucks");

    $(".autocomplete").change(function(){
        var that = $(this);
        setTimeout(
            function()
            {
                $lat = that.siblings('.lat').val();
                $lng = that.siblings('.lng').val();
                $alert = that.hasClass('alert-autocomplete');
                if(($lat == '' || $lng == '') && $alert != true){
                    that.before(' <span style="color: #ff0500 !important" class="help-block"><strong>'+googleText+'</strong></span>');
                    that.addClass('alert-autocomplete');
                }else if($lat != '' || $lng != ''){
                    that.siblings('.help-block').remove();
                    that.removeClass('alert-autocomplete');
                }
            }, 300);
    });

    truck_hover.click(function(){
        add_trucks.slideToggle('slow');
    });

    $pick = $("#pick");

    if(truck_errror == 1){
        $('#form').find("input,textarea,select").removeAttr('disabled');
        $truck.siblings().find("input,textarea,select").attr('disabled','disabled');
        $('#pick option[value="truck"]').attr("selected", "selected");

    }
    if(product_error == 1){
        $product.find("input,textarea,select").removeAttr('disabled');
        $product.siblings().find("input,textarea,select").attr('disabled','disabled');
        $('#pick option[value="product"]').attr("selected", "selected");
    }
    $('.profile-choice div').click(function(){
        $id_hover = $(this).attr('id');
        $id_hide = $(this).siblings('.hover').attr('id');
        $('.'+$id_hide).hide(1200);
        $('.'+$id_hover).show(1200);
        $(this).addClass('hover');
        $(this).siblings().removeClass('hover');
    });
    $('.close-modal').click(function(){
        $(".modal-backdrop").hide(1000);
        $(this).parents('.modal').hide(1000);
    });
});
