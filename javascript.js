document.addEventListener("scroll", inTheView)

function inTheView(){
let newBlock = document.getElementsByClassName("container")
	for(let i=0; i<newBlock.length; i++){
		let blockLocation = newBlock[i].getBoundingClientRect();
		console.log(blockLocation)		
			if(0 < blockLocation.top && blockLocation.top < window.innerHeight){
	//Check if it already has this class so we wont repeat animation
				if(!newBlock[i].classList.contains("seen")){
					newBlock[i].classList.add("seen")
				}
		}
	}
}

