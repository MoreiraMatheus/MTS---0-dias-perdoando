const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const modalBackground = document.querySelector('dialog')
const modal = document.getElementById('modal')
const modalMessage = document.querySelector('p')

minus.onclick = () => {
  modalMessage.innerText = 'não é possivel diminuir a quantidade de dias'
  modalBackground.show()
  setTimeout(()=>{
    modalBackground.close()
  }, 4000)
}

plus.onclick = () => {
  modalMessage.innerText = 'KKKK como se os cara perdoasse por 1 dia pelo menos'
  modalBackground.show()
  setTimeout(()=>{
    modalBackground.close()
  }, 4000)
}