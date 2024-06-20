
function forgotpasswordModal(){
	let fade = document.querySelector('#fade')
	let modal_card= document.querySelector('#page')
	
	fade.classList.toggle('hide')
	modal_card.classList.toggle('hide')
}

let cont=0

function registerLogin(){
	let login = localstorage.getItem("login")
	if(login === null){
		localStorage.setItem("login","icet2024")
		
	}
}

