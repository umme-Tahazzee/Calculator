let screen = document.getElementById('screen');
let screenValue = '';
buttons = document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
         console.log('Botton text is', buttonText);
         if(buttonText == 'X'){
             buttonText = '*';
             screenValue += buttonText;
             screen.value =  screenValue;
         }
         else if(buttonText == 'C'){
            screen.value = "";
            screen.value =  screenValue;
         }
         else if(buttonText == '='){
            screen.value = eval(screenValue);
        } 
        else{
            screenValue += buttonText;
            screen.value =  screenValue;
        } 
    })
}
