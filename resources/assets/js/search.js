$('#name').autocomplete({
    source: '/hladat/firmu/name',
    minlenght: 1,
    focus: function(e, ui) {
        $id = ui.item.id;
        if ($id == "error") {
            $('.ui-menu-item').addClass('none');
            $('.ui-state-focus').css('text-decoration', 'none')
        }
    },
    autoFocus: true,
    select: function(e, ui) {
        $id = ui.item.id;
        $name = ui.item.name;
        $('#id').val($id);
        $('#name').val($name);
        $.ajax({
            url: search,
            type: 'GET',
            cache: false,
            data: {
                id: $id,
                name: $name
            },
            success: function(response) {
                window.location = response.route
            }
        })
    }
});