$('document').ready(function() {
    $pick = $("#pick");
    $describe = $("#describe");
    $miesto = $("#miesto");
    $label_type = $("#label_type");
    $label_cat = $("#label_cat");
    $label_datum = $("#label_datum");
    $lat = $('.lat');
    $location = $('.location');

    $pick.change(function(){
        labelCahnge()
    });
    if(add_error == 1){
        labelCahnge();
    }
});