

function toogle(){
    let toogle = document.querySelector('.toggle-button');
    let style = document.getElementById('style');
    if(toogle.checked){
        style.href="style-night.css";
    }
    else{
        style.href="style.css"; 
    }
}