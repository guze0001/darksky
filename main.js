var drk ={
    init: function(){
        var div= document.createElement("div");
        document.querySelector(".main").appendChild(div);
    },
    callApi :function(){
        let sky='https://api.darksky.net/forecast/';
        let key ='20cc9442d9c71dd219b4d36b4833e55f';
        let lat = 45.3483;
        let lng = -75.7584;
        let uri = sky+key+'/'+lat+','+lng;
        console.log(uri);
        uri = uri.concat('?units=ca&exclude=minutely,hourly&lang=tr');
        let options={
            method: 'GET',
            mode:'cors'
        }
        //let fetch = require('node-fetch');
        let req= new Request(uri,options);
        fetch(req)
            .then((response)=>{
                if (response.ok){
                    return response.json();
                }
                else{
                    throw Error('Bad HTTP!');
                }
            })
            .then((r)=>{
                console.log(r.currently.temperature,r.currently.summary);
                console.log(r.daily.data[1]);
            })
            .catch((err)=>{
                console.log('ERROR',err.message);
            })
        
    }
}

drk.callApi();