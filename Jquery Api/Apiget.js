
$.get("https://api.spotify.com/v1/artists/2CCqizWr7RQhtABnxW9epA", 
     function(data){
      console.dir(data)
        $("#id").text(data.id)
        $("#name").text(data.name)
        $("#type").text(data.type)
        $("#uri").text(data.uri)
       });