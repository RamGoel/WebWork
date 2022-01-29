function Get(){

    document.getElementById('data').style.display="block";
    document.getElementById('data').innerHTML=`<img src="1.gif" width="30px">`
    
    fetch(`https://api.imgflip.com/get_memes`)
.then(data=>data.json())
.then( resData =>{
    var num=Math.floor(Math.random()*100);
    console.log(num)
    var resText= resData.data.memes[num].url;
    console.log(resText)
        document.getElementById('data').innerHTML=`<img src=${resText} >`
  
} )
}

