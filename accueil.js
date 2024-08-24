fetch('header.html')
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