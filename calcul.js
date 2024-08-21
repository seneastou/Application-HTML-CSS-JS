   const inputBox = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('button');
    let expression = "";
    let isOperatorActive = false;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.innerText;
            
            if (value === 'AC') {
                inputBox.value = ''
                expression = ''
                isOperatorActive = false;
            }
            else if (value === 'DE') {
                inputBox.value = inputBox.value.slice(0, -1);
                expression = expression.slice(0, -1);
            } 
            else if (value === '=') {
                try {
                    // Vérification de division par zéro
                    if (expression.includes('/0')) {
                        throw new Error('Division par zéro');
                    }
                    inputBox.value = eval(expression);
                    expression = inputBox.value;

                } catch (exception) {
                    inputBox.value = 'Erreur';
                    console.log(exception)
                    expression = '';
                }
            } 
            else if(button.classList.contains('operator')){
                isOperatorActive = true;
                expression += value;
            }
            else
            {
                expression += value;
                if(isOperatorActive){
                    inputBox.value = expression.slice(-1);
                }
                else{
                    inputBox.value += value;
                }
            }

         });
    });
     
    const menuBurger = document.getElementById("menuBurger");
    const menu = document.getElementById("menu");
    menuBurger.addEventListener("click", function() {
        menu.classList.toggle("show");
    });


