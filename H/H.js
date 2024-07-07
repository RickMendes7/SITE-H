let boxBuscar = document.querySelector('.buscar-box');
let lupa = document.querySelector('.lupa-buscar');
let btnFechar = document.querySelector('.btn-fechar');

lupa.addEventListener('click', ()=> {
      boxBuscar.classList.add('ativar')

})

btnFechar.addEventListener('click', ()=> {
    boxBuscar.classList.remove('ativar')

})



var radio = document.querySelector('.manual-btn')
var cont = 1


document.getElementById('radio1').checked = true

setInterval(() =>{
    proximaImg()
}, 3000)

function proximaImg(){
   cont++

   if(cont > 3) {
      cont = 1
  }
  document.getElementById('radio' + cont).checked = true
}