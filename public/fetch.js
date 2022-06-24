

function iniciar (){

    let url ="localhost:8000/api/getuuid";

    fetch(url)
        .then((response)=>response.json)
        //.then((data)=>console.log(data))
        .then((data)=>mostrardata(data))
        .catch((error)=>console.log(error))


        const mostrardata = (data)=>{
            console.log(data);
            let body = data;
            
            document.getElementById('result').innerHTML = body;
        }


}

