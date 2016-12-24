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
   	sizeModal()
}

function sizeModal() {
   	var winWidth = window.innerWidth;
   	var winHeight = window.innerHeight;
   	var iWidth = image.width;
   	var iHeight = image.height;
   	var isWider = false;



   	image.style.width = "auto"; //This stops the modal sizing to the previous image
   	image.style.height = "auto";

   	if (image.naturalWidth > image.naturalHeight) {
   		isWider = true;   		   		
   	}


   	if (isWider == true && image.naturalWidth > winWidth) {   		
   		image.style.width = (winWidth - 40) + "px";

		if (image.height > (winHeight - 60)) {
			var i = 10;
			while (image.height > (winHeight - 40)) {
				image.style.width = (winWidth - (60 + i)) + "px";				
				i = i + 10;
			}
		}



   	} else if (isWider == false && image.naturalHeight > winHeight) {  		
		image.style.height = (winHeight - 40) + "px";

		if (image.width > (winWidth - 40)) {
			var i = 10;
			while (image.width > (winWidth - 40)) {
				image.style.height = (winHeight - (40 + i)) + "px";				
				i = i + 10;
			}
		}

   	}

   	iWidth = image.width;
   	iHeight = image.height;

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




