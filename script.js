var modalContainer = document.getElementById("modalContainer");
var modalContent = document.getElementById("modalContent");
var modalClose = document.getElementById("modalClose");
var modal = document.getElementById("modal");
var image = document.createElement("img");
var iHeight;
var img = document.getElementById("modalImage");	

function openModal(largeImage) {	
	modalContent.appendChild(image);	
	image.setAttribute("src", largeImage);
	image.setAttribute("id", "modalImage");	

	modalContainer.style.display = "block";
}


image.onload = function()  {	
   	console.log("It worked!!");
   	sizeModal()
}

function sizeModal() {
	var iWidth = image.width;
   	var iHeight = image.height;
   	var winWidth = window.innerWidth;
   	var winHeight = window.innerHeight;

   	modal.style.marginLeft = ((winWidth - iWidth) / 2) + "px";
   	modal.style.marginTop = ((winHeight - iHeight) / 2) + "px";
   	modal.style.width = iWidth + "px";
   	modal.style.height = iHeight + "px";
}

function closeModal() {
	image.setAttribute("src", "");
	modalContainer.style.display = "none";	
}

window.onclick = function(event) {
	if (event.target == modalContainer) {		
		closeModal();		
	}
}

window.addEventListener("resize", sizeModal);


// document.getElementById("image").onload = function() {
// 	console.log("It worked");
// };



