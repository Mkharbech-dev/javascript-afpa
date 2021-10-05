
var questions = [
    {
    question: 'Est-ce que tu aimes le JavaScript ?',
    reponse : 'Oui'
    },
    {
    question: 'Le JavaScript est une évolution du Java ?',
    reponse : 'Non'
    },
    {
    question: 'Le JavaScript est proche du Java ?',
    reponse : 'Non'
    },
    {
    question: 'Le JavaScript est un langage d\'objet par prototypage ?',
    reponse : 'Oui'
    },
    {
    question: 'Le JavaScript est souvent utilisé coté client ?',
    reponse : 'Oui'
    },
    {
    question: 'Le JavaScript peut être utilisé coté client et serveur ?',
    reponse : 'Oui'
    }
    ];

    var comtBonneReponse = "";
    var comtMauvaisReponse = "";

    for(i=0 ; i< questions.length; i++){
        var saisie = prompt(questions[i].question);
        // var saisie_2 = saisie.charAt(0).toUpperCase() + saisie.substring(1).toLowerCase();
        if (saisie.toLocaleLowerCase() === (questions[i].reponse).toLocaleLowerCase()) {
            alert("Bonne réponse pour la question" + " " + questions[i].question)
            conteurBonne++;
        }else{
            alert("Faux! La bonne réponse à la question " + " " + questions[i].question+ " etait " + questions[i].reponse)
            conteurMauvais++;
        }
    }
    // Afficher le resultat dans les compteur
    document.writeln(comtBonneReponse)
    document.writeln(comtMauvaisReponse)



// ********************************************************************************

