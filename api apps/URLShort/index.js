function Get(){
    
    document.getElementById('data').style.display="block";
    document.getElementById('data').innerHTML=`<img src="1.gif" width="30px">`
    var url=document.getElementById('link').value;
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
.then(data=>data.json())
.then( resData =>{
    var resText= resData.result.short_link;
    console.log(resText)
    document.getElementById('data').style.display="none";
        document.getElementById('link').value=`${resText}`

  
} )
}



function Val(){
    var url=document.getElementById('link').value;
    var ext=url.split('.');
   var dom=ext[ext.length-1]
   var dom2=dom[0]
    if(dom2=='o'){
        Get()
    }
    else if(dom2=='c'){
        Get()
    }
    else if(dom2=='i'){
        Get()
    }
    else if(dom2=='m'){
        Get()
    }
    else if(dom2=='h'){
        Get()
    }
    else if(dom2=='a'){
        Get()
    }
    else if(dom2=='s'){
        Get()
    }
    else if(url==''){
        alert('Enter a Link')
    }
   
    else{
        alert('Enter valid Link')
    }
}
