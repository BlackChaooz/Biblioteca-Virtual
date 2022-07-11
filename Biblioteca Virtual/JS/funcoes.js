function redirecionarLogin() {
  window.alert("Agora, faça o login")
  window.location.href = "\login.html"
}
function redirecionar() {
  window.alert("Você está logado a partir de agora")
  window.location.href = "\main.html"
}

// CPF 
var cpfInput = document.querySelector('#inputCpf')

cpfInput.addEventListener('keypress', () => {
  let dataLength = cpfInput.value.length
  
  if(dataLength === 3 || dataLength === 7){
    cpfInput.value += '.'
  } else if(dataLength === 11){
    cpfInput.value += '-'
  }
});

//CEP
var cepInput = document.querySelector('#inputCep')

cepInput.addEventListener('keypress', () => {
	let dataLength = cepInput.value.length

	if(dataLength === 2 ){
		cepInput.value += '.'
	} else if(dataLength === 6){
		cepInput.value += '-'
	}
});

function validaDados(){
  let inputNome = document.getElementById('validaNome');
  let inputEmail = document.getElementById('validaEmail');
  let inputCpf = document.getElementById('validaCpf');
  let inputCep = document.getElementById('validaCep');
  let inputSenha = document.getElementById('validaSenha');
  let inputConSenha = document.getElementById('validaConSenha');
  let alfabeto = 'abcdefghijklmnopqrstuvwxyz';
  let alfabetoMaiusculo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  if(inputNome.value.length == 0 || inputEmail.value.length == 0 || inputCpf.value.length == 0 || inputCep.value.length == 0 ||inputSenha.value.length == 0 || inputConSenha.value.length == 0){
    alert('Preencha todos os campos antes de enviar o formulário');
    return false
  }
  
  if(inputCpf.value.includes(alfabeto) || inputCep.value.includes(alfabeto) || inputCpf.value.includes(alfabetoMaiusculo) || inputCep.value.includes(alfabetoMaiusculo)){
    alert('Verifique se os campos de CEP ou CPF possuem apenas números')
    inputCpf.focus();
    return false
  } 
  
  if(inputSenha.value != inputConSenha){
    alert('As senhas não conferem')
    inputSenha.focus();
    return false
  }
  
  return redirecionarLogin();
}