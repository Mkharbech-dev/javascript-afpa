
// var questions = [
//     {
//     question: 'Est-ce que tu aimes le JavaScript ?',
//     reponse : 'Oui'
//     },
//     {
//     question: 'Le JavaScript est une évolution du Java ?',
//     reponse : 'Non'
//     },
//     {
//     question: 'Le JavaScript est proche du Java ?',
//     reponse : 'Non'
//     },
//     {
//     question: 'Le JavaScript est un langage d\'objet par prototypage ?',
//     reponse : 'Oui'
//     },
//     {
//     question: 'Le JavaScript est souvent utilisé coté client ?',
//     reponse : 'Oui'
//     },
//     {
//     question: 'Le JavaScript peut être utilisé coté client et serveur ?',
//     reponse : 'Oui'
//     }
//     ];

//     var conteurBonne = "";
//     var conteurMauvais = "";

//     for(i=0 ; i< questions.length; i++){
//         var saisie = prompt(questions[i].question);
//         var saisie_2 = saisie.charAt(0).toUpperCase() + saisie.substring(1).toLowerCase();
//         if (saisie_2 === questions[i].reponse ||saisie === questions[i].reponse) {
//             alert("Bonne réponse pour la question" + " " + questions[i].question)
//             conteurBonne++;
//         }else{
//             alert("Faux! La bonne réponse à la question " + " " + questions[i].question+ " etait " + questions[i].reponse)
//             conteurMauvais++;
//         }
//     }
//     // Afficher le resultat
//     document.writeln(conteurBonne)
//     document.writeln(conteurMauvais)



// ********************************************************************************

function nbrPremier(){
    var nbr;
    nbr = prompt('saisir un nombre')
    if(nbr%2 === 0){
        alert("nombre n'est pas premier");
    }else{
        alert("nombre premier")
    }
}
nbrPremier();