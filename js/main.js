/*setInterval(function(){
	alert("hola mundo");
},1000);*/

$(document).ready(function(){
  $('.slider2').bxSlider({
    slideWidth: 500,
    minSlides: 2,
    maxSlides: 2,
    slideMargin: 10
  });
});
$(document).ready(function(){
  $('.slider5').bxSlider({
    slideWidth: 380, /*anchura de cada diapositiva*/
    minSlides: 3,/*El número mínimo de diapositivas para mostrar*/
    maxSlides: 3,/*El número maximo de diapositivas para mostrar*/
    moveSlides: 3,/*El número de diapositivas se mueva en la transición.*/
    slideMargin: 10/*tamaño del margen entre el borde de la diapositiva y la imagen en miniatura.*/
  });
});


function toggleVolumen()
			{
				var video = document.getElementById('video');
				var boton = document.getElementById('boton');
				console.log(video.volume);
				if(video.muted == false)
				{
					video.muted = true;
					boton.innerHTML = '<i class="icon-volume-medium"></i>';
				}else{
					video.muted = false;
					boton.innerHTML = '<i class="icon-volume-mute2"></i>';

				}
			}
