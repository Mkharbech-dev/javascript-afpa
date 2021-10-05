const form = document.querySelector('.form');

// function getValue (){
// let salah = document.getElementById('message').value ;
// alert(salah)
// }
const element = create
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(document.getElementById('message').value);
})