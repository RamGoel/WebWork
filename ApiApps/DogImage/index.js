function Get(){

    document.getElementById('data').style.display="block";
    document.getElementById('data').innerHTML=`<img src="1.gif" width="30px">`
    
    fetch(`https://dog.ceo/api/breeds/image/random`)
.then(data=>data.json())
.then( resData =>{
    var resText= resData.message;
        document.getElementById('data').innerHTML=`<img src=${resText} >`
  
} )
}

