function Get(){

    document.getElementById('data').style.display="block";
    document.getElementById('data').innerHTML=`<img src="1.gif" width="30px">`
    
    fetch(`https://www.boredapi.com/api/activity`)
.then(data=>data.json())
.then( resData =>{
    var resText= resData.activity;
        document.getElementById('data').innerHTML=`Your Task is  ${resText}`
  
} )
}

