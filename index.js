function showgifs () {
    let xhr = new XMLHttpRequest();

    var c = document.getElementById('search').value;
    console.log(c);
    
    xhr.open('GET', "https://api.giphy.com/v1/gifs/search?api_key=R5TVIntHPiDEwqp0OW1tyac3wvj039xj&q="+ c +"&limit=25&offset=0&rating=g&lang=en", true)
   
    xhr.onload = function(){
       
        if(xhr.status == 200){
            console.log("huihui")
            let gifs = JSON.parse(this.response);
            


            
           for(var i=0;i<3;i++)
           {
            var img = document.createElement("img");
           
            
            var a = gifs.data[i].images.downsized.url.toString();
           
            img.src = a;
            img.style.height = "275px";
            img.style.width = "320px";
            img.style.marginLeft = "165px"
            var src = document.getElementById("feed");
            src.appendChild(img);

           }    

                
           document.getElementById('feed').scrollIntoView();    
        }

    }


    xhr.send()
}