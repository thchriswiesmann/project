/**
*@author Christoph Wiesmann
*/


$('#btn1').bind("click", function(event, ui){
    alert("Hallo")
    TTS.speak({
        text: 'Schreit das Schwein am Morgen, wird das Wetter nicht so schön.',
        locale: 'de-DE',
        rate: 0.75});
});

$('#myCanvas').bind("click", function(event, ui){
    let posx = event.clientX;
    let posy = event.clientY;
    
    var c = document.getElementById('myCanvas');
    
    let dim = c.getBoundingClientRect();
    
    let posxx = event.clientX - dim.left;
    let posyy = posy - 100;

    
    console.log(posxx+posyy);
    
    var image = new Image();
    image.src = "./img/otter.jpg";
    var context = c.getContext("2d");
    context.drawImage(image, posxx, posyy);
})

/**
* Timerfunktion
*/
function myTimer() {
    
    var c = $('#myCanvas')[0];
    var context = c.getContext('2d');
    var image = new Image();
    image.src = "./img/otter.jpg";
    
    
    
}