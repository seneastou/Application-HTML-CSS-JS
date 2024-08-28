   const inputBox = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('button');
    let expression = "";      
    let isOperatorActive = false;
    let operatorhover = null;
    let resetExpression = false;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.innerText;
            
            if (value === 'AC') {
                inputBox.value = ''
                expression = ''
                isOperatorActive = false;

                if (operatorhover) {
                operatorhover.classList.remove('active');
            }
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
                    resetExpression = true;

                } catch (exception) {
                    inputBox.value = 'Erreur';
                    console.log(exception)
                    expression = '';
                }
                if (operatorhover) {
                operatorhover.classList.remove('active');
            }
            } 
            else if(button.classList.contains('operator')){
                if (isOperatorActive) {
                // Supprimer le dernier opérateur si un nouveau est saisi immédiatement après
                expression = expression.slice(0, -1);
            }

            // Ajouter le nouvel opérateur pour faire le calcul
            expression += value;

            if (operatorhover) {
                operatorhover.classList.remove('active');
            }
               button.classList.add('active');
               operatorhover = button;

               isOperatorActive = true;
               
            }else {
            // Réinitialiser l'expression si un chiffre est cliqué après un résultat
            if (resetExpression) {
                inputBox.value = value;
                expression = value; // Réinitialiser l'expression avec le nouveau chiffre
                resetExpression = false;

            } else {
                if(isOperatorActive){
                    
                    inputBox.value = value;
                    isOperatorActive = false;
                }
                else {
                    inputBox.value += value;
                }
                expression += value;
                if (operatorhover) {
                operatorhover.classList.remove('active');
            }
            }
            }
         });
    });
     
        fetch('/Header')
            .then(response => response.text())
            .then(data => {
                
                document.getElementById('header').innerHTML = data;

                const menuBurger = document.getElementById("menuBurger");
                const menu = document.getElementById("menu");

                if (menuBurger && menu) {
                    menuBurger.addEventListener("click", function() {
                        menu.classList.toggle("show");
                    });
                } else {
                    console.error("Erreur");
                }
            })
            .catch(error => console.error('Erreur de chargement du header:', error));

