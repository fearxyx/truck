$('document').ready(function() {
    $("#products,#trucks,#hodnotenie,#reacts").click(function(){
        $(this).addClass('hover');
        $(this).siblings().removeClass('hover');
        $id = $(this).attr('id');
        $class = $('.'+$id);
        $class.siblings().hide();
        $class.show();
    });
    $('.references').click(function(){
        $(this).parent().next().toggle('slow');
    })
});
