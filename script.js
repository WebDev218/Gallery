var modalContainer = document.getElementById("modalContainer");
var modalContent = document.getElementById("modalContent");
var modalClose = document.getElementById("modalClose");
var modal = document.getElementById("modal");
var image = document.createElement("img");
var iHeight;
var img = document.getElementById("modalImage");	

var lChanger = document.getElementById("iChangeLeft");
var rChanger = document.getElementById("iChangeRight");
var modalMenu = document.getElementById("modalMenuWrapper");

var modalType = "arrows";

function openModal(largeImage) {	
	modalContent.appendChild(image);	
	image.setAttribute("src", largeImage);
	image.setAttribute("id", "modalImage");

	galleryIndex = largeImage.charAt(7);
	console.log(largeImage);	
	console.log(galleryIndex);	

	modalContainer.style.display = "block";

	if (modalType == "arrows") {
		modalMenu.style.visibility = "hidden";

		lChanger.style.display = "block";
		rChanger.style.display = "block";
	} else if (modalType == "menu") {
		lChanger.style.display = "none";
		rChanger.style.display = "none";

		modalMenu.style.visibility = "visible";
	} else if (modalType == "both") {
		modalMenu.style.visibility = "visible";
		lChanger.style.display = "block";
		rChanger.style.display = "block";
	}
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

/*
   	if (image.naturalWidth > image.naturalHeight) {
   		isWider = true;   		   		
   	}


   	if (isWider == true && image.naturalWidth > winWidth) {   		
   		image.style.width = (winWidth - 40) + "px";

		if (image.height > (winHeight - 40)) {
			var i = 10;
			while (image.height > (winHeight - 40)) {
				image.style.width = (winWidth - (40 + i)) + "px";				
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

   	}*/




   	// Alternate way of achieving. 
	var i = 10;

	if (image.naturalHeight >= (window.innerHeight - 60) || image.naturalWidth >= (window.innerWidth - 60)) {

		if (image.naturalWidth > image.naturalHeight) {
			
			image.style.width = (window.innerWidth - 80) + "px";

			i = 10;
			while (image.height >= (window.innerHeight - 60)) {
				image.style.width = (window.innerWidth - (80 + i)) + "px";
				i = i + 10;				
			}
			
		}
            
		if (image.naturalHeight >= image.naturalWidth) {
			image.style.height = (window.innerHeight - 80) + "px";

			i = 10;
			while (image.width >= (window.innerWidth - 60)) {			
				image.style.height = (window.innerHeight - (80 + i)) + "px";
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

   	lChanger.style.top = ((image.height - 400) / 2) + "px";
   	rChanger.style.top = ((image.height - 400) / 2) + "px";
   	/*
	Finds the heigh of the image, then deducts 400, the height of the arrow. Then divides by 2. 
	This puts the arrow in the middle of the resized image. naturalHeight cannot be used as larger
	images will put the arrows off screen. 
   	*/

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


/* =============== Gallery Index ================== */

/* ==== Temporary code ==== */

var galleryLength = 4;
var galleryIndex;
var nextImage;


function clickRight() {
	var nextImage;

	galleryIndex++;

	if (galleryIndex > galleryLength) {
		galleryIndex = 1;
	}

	console.log(galleryIndex);
	nextImage = "images/" + galleryIndex + "_large.png";
	openModal(nextImage);		
}

function clickLeft() {


	galleryIndex--;

	if (galleryIndex < 1) {
		galleryIndex = galleryLength;
	}

	console.log(galleryIndex);
	
	nextImage = "images/" + galleryIndex + "_large.png";
	openModal(nextImage);	
}

/* ================== Modal Selector ==================== */



function selectModal(type) {	
	modalType = type;	
}