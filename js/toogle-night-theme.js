

function toogle(){
    let toogle = document.querySelector('.toggle-button');
    let style = document.getElementById('style');
    let style_text = document.querySelector('.text');
    if(toogle.checked){
        style.href="style-night.css";
        style_text.innerHTML = "Темная тема";
        
    }
    else{
        style.href="style.css"; 
        style_text.innerHTML = "Светлая тема";
    }
}