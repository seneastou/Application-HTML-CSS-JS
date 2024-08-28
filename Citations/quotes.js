  const quotes = [
        "La vie est ce qui arrive quand vous êtes occupé à faire d'autres plans. - John Lennon",
        "L'important n'est pas de convaincre, mais de donner à réfléchir. - Bernard Werber",
        "L'éducation est l'arme la plus puissante pour changer le monde. - Nelson Mandela",
        "Il n'y a qu'une réussite : être capable de vivre sa vie à sa manière. - Christopher Morley",
        "Le plus grand risque est de ne prendre aucun risque. - Mark Zuckerberg",
        "Le succès c'est se promener d'échecs en échecs tout en restant motivé. - Winston Churchill",
        "La seule façon de faire du bon travail est d'aimer ce que vous faites. - Steve Jobs",
        "Croyez en vous et en tout ce que vous êtes. Sachez qu'il y a quelque chose en vous qui est plus grand que n'importe quel obstacle. - Christian D. Larson",
        "Le bonheur n'est pas quelque chose de prêt à l'emploi. Il vient de vos propres actions. - Dalai Lama",
        "Faites de votre vie un rêve, et d'un rêve, une réalité. - Antoine de Saint-Exupéry"
    ];

    const quoteText = document.getElementById("quoteText");
    const newQuote = document.getElementById("newQuote");
    const copyQuote = document.getElementById("copyQuote");

    
    newQuote.addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.textContent = quotes[randomIndex];
    });

    copyQuote.addEventListener("click", function() {
        const textToCopy = quoteText.textContent;
        navigator.clipboard.writeText(textToCopy).then(function() {
            alert("Citation copiée dans le presse-papier !");
        }).catch(function(error) {
            console.error("Erreur lors de la copie de la citation : ", error);
        });
    });

    fetch('../Header/header.html')
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

