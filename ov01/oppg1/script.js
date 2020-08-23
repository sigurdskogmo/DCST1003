function myFunc(){
  var name = prompt('Vennligst skriv inn ditt navn', 'Navn');
  var colour = prompt ('Vennligst skriv inn din favorittfarge', 'farge');
  var text = 'Hei, ' + name + ', liker du ' + colour + '-farge du?';
  document.getElementById('txt').innerHTML = text;
}
