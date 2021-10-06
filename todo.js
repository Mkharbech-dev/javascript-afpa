const form = document.querySelector('form');
// console.log(form)
const liste = document.querySelector('ul');
const input  = document.querySelector('input');
let toutesLesTaches = [];
// function getValue (){
// let salah = document.getElementById('message').value ;
// alert(salah)
// }

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    // console.log(input.value);
    // methode Trim enleve tout espace avant ou apres le text
    const text = input.value.trim();
    if(text !== ''){
        inserUneTache(text);
        input.value = '';
    }  
})
function inserUneTache(text){
    const objet = {
        text,
        id: Date.now()
    }
    afficherListe(objet)
}
function afficherListe(objet){
    const item = document.createElement('li')
    item.setAttribute('data-key', objet.id)

    const input = document.createElement('input')
    input.setAttribute('type', 'checkbox')
    input.addEventListener('click', tacheFaite)
    item.appendChild(input);

    const txt = document.createElement('span')
    txt.innerText = objet.text
    item.appendChild(txt)

    const btn = document.createElement('button')
    btn.addEventListener('click', supprimTache)

    const img = document.createElement('img')
    img.setAttribute('src', "./ressources/fermer.svg")
    img.addEventListener('click', supprimTache)
    btn.appendChild(img)
    item.appendChild(btn)

    liste.appendChild(item)
    toutesLesTaches.push(item)
}
function tacheFaite(event){
    event.target.parentNode.classList.toggle('finDeTache')
}



function supprimTache(e) {

    toutesLesTaches.forEach(el => {
  
      if(e.target.parentNode.getAttribute('data-key') === el.getAttribute('data-key')){
        el.remove();
        toutesLesTaches = toutesLesTaches.filter(li => li.dataset.key !== el.dataset.key);
      }
  
    })
  
  }