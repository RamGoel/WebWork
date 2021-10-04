function Get(){

    document.getElementById('data').style.display="block";
    document.getElementById('data').innerHTML=`Your Age is Loading...`
    var name=document.getElementById('name').value;
    fetch(`https://api.agify.io/?name=${name}`)
.then(data=>data.json())
.then( resData =>{
    var resText= resData.age;
    if(resText==null){
        const resText2=23
        document.getElementById('data').innerHTML=`Your Age is  ${resText2}`
    }
    else{

        document.getElementById('data').innerHTML=`Your Age is  ${resText}`
    }
} )
}

