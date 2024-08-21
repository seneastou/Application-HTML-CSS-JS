document.addEventListener("DOMContentLoaded", function calc() {
    const inputBox = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.innerText;

            if (value === 'AC') {
                inputBox.value = '';
            } else if (value === 'DE') {
                inputBox.value = inputBox.value.slice(0, -1);
            } else if (value === '=') {
                try {
                    // Vérification de division par zéro
                    if (inputBox.value.includes('/0')) {
                        throw new Error('Division par zéro');
                    }
                    inputBox.value = eval(inputBox.value);
                } catch (e) {
                    inputBox.value = 'Erreur';
                }
            
            } else {
                inputBox.value += value;
            }
        });
    });
     
       const menuBurger = document.getElementById("menuBurger");
    const menu = document.getElementById("menu");
    menuBurger.addEventListener("click", function() {
        menu.classList.toggle("show");
    });
});

