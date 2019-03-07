console.log('Landing')
// Validar el email ;D

var emailInputNode = document.getElementById('email')

emailInputNode.onblur = validateInputEmail


function validateInputEmail(event){

var inputNode = event.target


if (!inputNode.value || 
  inputNode.value.indexOf('@') === -1 || 
  inputNode.value.indexOf('.') === -1) 
  {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')

  } else{  
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
      }  

      validateButton()

    }







 
  
 






