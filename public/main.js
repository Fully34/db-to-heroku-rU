$(function(){

    $('#hero-create').on('submit', function(event){
        event.preventDefault();

        $.ajax({

            method   : 'POST', //> HOW
            url      : '/create-hero', //> WHERE 
            data     : $(this).serialize(), //> WHAT TO SEND
            success  : function(data) { 
            //> what to do with the response 
            //> callback is async 
            //> WE GET THE DATA FROM A RES.SEND()

                $(this).children('input').val('');
            }
        });
    });

    $('#get-heroes').on('click', function(event){
        // event.preventDefault();

        $.ajax({
            method : 'GET',
            url    : '/get-heroes',
            success: function(data) {

                $('.hero-list').empty();

                // console.log(data);

                var arr = data.data;

                for (var i = 0; i < arr.length; i++) {
                    
                    var listItem = $('<li>').text(arr[i].name);

                    $('.hero-list').append(listItem, $('<hr>'));
                };
            }
        });
    });
});









