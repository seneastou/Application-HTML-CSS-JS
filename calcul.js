   const inputBox = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('button');
    let calcul = "";

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.innerText;
            
          if (value === 'AC') {
                inputBox.value = '';
                calcul = '';

            } else if (value === 'DE') {
                inputBox.value = inputBox.value.slice(0, -1);
                calcul = calcul.slice(0, -1);
            } else if (value === '=') {
                try {
                    // Vérification de division par zéro
                    if (calcul.includes('/0')) {
                        throw new Error('Division par zéro');
                    }
                    inputBox.value = eval(calcul);
                } catch (e) {
                    inputBox.value = 'Erreur';
                    calcul = '';
                }
            
            } else if(button.classList.contains('operator')){
                calcul += value;
            }
            
            else {
                inputBox.value += value;
                calcul += value;
            }
        });
    });
     
       const menuBurger = document.getElementById("menuBurger");
    const menu = document.getElementById("menu");
    menuBurger.addEventListener("click", function() {
        menu.classList.toggle("show");
    });


