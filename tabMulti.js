// var nbr = prompt('entrez valeur')

// var parag = document.querySelector('.para')
// function tabMulti(param){
    
//     for(var i = 1; i<=10 ; i++){
//       var result = console.log(param + " multiplié par " + i + " est egale " + param * i) ;

      
//       parag.append(param + " multiplié par " + i + " est egale " + param * i ) + " </br>";
//     }
//     return result  
// }

// tabMulti(nbr)

// *************************version 2***************************


function tabMulti(param){
    var result = "";
    for(var i = 1; i<=10 ; i++){
      result += (param + " multiplié par " + i + " est egale " + param * i + '\n')
    }
    return result;
}
var nbr = prompt('entrez valeur')
console.log(tabMulti(nbr));