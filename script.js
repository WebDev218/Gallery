var modal = document.getElementById("modalContainer");
var modalContent = document.getElementById("modalContent");
var modalClose = document.getElementById("modalClose");
var image = document.createElement("img");
var iHeight;	

function openModal(largeImage) {	
	modalContent.appendChild(image);	
	image.setAttribute("src", largeImage);
	image.setAttribute("id", "modalImage");	

	modal.style.display = "block";
	populateModal();	
}

function populateModal() {
	iHeight = document.getElementById("modalImage");
	console.log(iHeight.clientHeight);

	// var width = image.naturalWidth; //natural height will give the files actual height, not the height on the page. 
	// console.log(image.clientWidth);
	// var height = image.clientHeight; //client height is it's height in the client browser
	// console.log(height);
	// // modal.style.width = width;
	// // modal.style.width = height;


}



function closeModal() {
	image.setAttribute("src", "");
	modal.style.display = "none";	
}

window.onclick = function(event) {
	if (event.target == modal) {		
		closeModal();		
	}
}
