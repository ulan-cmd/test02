let formLogin = document.querySelector('#formLogin');
formLogin.onsubmit = function(){	
     for(let i = 0; i < formLogin.elements.length - 1; i++){
     	 let elementsName = formLogin.elements[i].name;
         let selector = `input[name="${elementsName}"]`;
     	 document.querySelector(selector).style.borderColor = "";
         if(formLogin.elements[i].value == ''){
            document.querySelector(selector).style.borderColor = "red";
         }
     }
}