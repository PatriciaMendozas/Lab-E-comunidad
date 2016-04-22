/*setInterval(function(){
	alert("hola mundo");
},1000);*/
$(document).ready(function(){
  $('.slider5').bxSlider({
    slideWidth: 300, /*anchura de cada diapositiva*/
    minSlides: 3,/*El número mínimo de diapositivas para mostrar*/
    maxSlides: 3,/*El número maximo de diapositivas para mostrar*/
    moveSlides: 3,/*El número de diapositivas se mueva en la transición.*/
    slideMargin: 10/*tamaño del margen entre el borde de la diapositiva y la imagen en miniatura.*/
  });
});
