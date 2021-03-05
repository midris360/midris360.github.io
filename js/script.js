const $artist = $('#artist');
const $album = $('#album');
const $single = $('#single');
const $input = $('input[type="text"]');

let audioData, userInput;


$('form').on('submit', handleGetData);

function handleGetData(event) {
    event.preventDefault();
   // calling preventDefault() on a 'submit' event will prevent a page refresh  
   
   userInput = $input.val();
    // getting the user input

   $.ajax({
         url:'https://www.theaudiodb.com/api/v1/json/9973533/search.php?s=' + userInput
      }).then(
        (data) => {
         audioData = data;
         render();
        },
        (error) => {
         console.log('bad request', error);
        }
    );    
}
    

function render() {
    $artist.text(audioData.strArtist);
    $album.text(audioData.main.temp);
    $single.text(weatherData.main.feels_like);
 }