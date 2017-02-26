var openwatherappid = '3db348938434011b82239668b6240a1b';
var openwatherurl = 'api.openweathermap.org/data/2.5/weather?q=London&appid=';


    $.get('api.openweathermap.org/data/2.5/weather?q=London&appid=3db348938434011b82239668b6240a1b',        
            function(data){
            console.log(data.name)
          });