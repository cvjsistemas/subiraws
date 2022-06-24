function getuuid(){
    $.ajax({
        url:"http://localhost:8000/api/getuuid",
        type:"GET",
        success: function (res){ 
            console.log(res);
            $('#result').html(res);
        }, 
        error: function(xhr,ajaxOptions, thrownError){
            $('#result').html(`Error: ${xhr.status} ${thrownError} `)
        }
    });

}