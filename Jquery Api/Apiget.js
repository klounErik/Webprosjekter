var openwatherappid = '';
var openwatherurl = 'api.openweathermap.org/data/2.5/weather?q=London&appid=';


    $.get('api.openweathermap.org/data/2.5/weather?q=London&appid=',        
            function(data){
            console.log(data.name)
          });
