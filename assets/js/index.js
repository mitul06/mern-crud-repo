$("#add_rest").submit(function(event){
    alert("Data Inserted Successfully")
});

$("#update_rest").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();

    var data = {}

    $.map(unindexed_array, function(n,i){
        data[n['name']]=n['value']
    })

    var req = {

       'url': `http://localhost:4000/api/rest/${data.id}`,
        'method': 'PUT',
        'data':data
    }

    $.ajax(req).done(function(res){
        alert('Data Updated Successfully')
    })
})


if(window.location.pathname == '/'){
    $ondelete = $('.table tbody td a.delete')
    $ondelete.click(function(){
        var id = $(this).attr('data-id')

        var req = {

            'url': `http://localhost:4000/api/rest/${id}`,
             'method': 'DELETE',
         }

         if(confirm('Are You Sure Delete ?')){
             $.ajax(req).done(function(res){
                 alert('Data Deleted Successfully')
                 location.reload()
             })
         }
    })
}