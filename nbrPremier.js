
// ********************version1**************************
// var nbr = prompt('saisir un nombre')
// if (nbr == 2){
//     console.log(nbr + "est premier")
// }
// var estPremier = true;
// for (var i = 2; i< nbr ; i++){
//     if(nbr%i == 0){
//         console.log(nbr + " n'est pas premier")
        
//         break
//     }
//     if( i == nbr-1){
//         console.log(nbr + " est premier")
        
//         break
//     }
// }
// ********************version2**************************

var nbr = prompt('saisir un nombre')

var estPremier = true;
for (var i = 2; i< nbr ; i++){
        if(nbr%i == 0){
            console.log(nbr + " n'est pas premier car est divisible par ", i)
            estPremier = false
            break
        }
}

if(estPremier){
    console.log('est premier')
}

// ********************version3**************************
// var nbr = prompt('saisir un nombre')
// function estPremier(n){
//     if (n < 2){
//         alert("n'est pas premier")
//     } 

//     for(i=2 ; i<n ; i++){
//         if(n%i === 0){
//             alert("n'est pas premier")
//             break
//         }
//         alert("est premier")
//     }
// }


// estPremier(nbr);