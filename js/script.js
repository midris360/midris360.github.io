const $artist = $('#artist');
const $genre = $('#genre');
const $bornyear = $('#bornyear');
const $input = $('input[type="text"]');

let audioData, userInput;


$('form').on('submit', handleGetData);

function handleGetData(event) {
    event.preventDefault();
   // calling preventDefault() on a 'submit' event will prevent a page refresh  
   
   userInput = $input.val();
    // getting the user input

   $.ajax({
         url:'theaudiodb.com/api/v1/json/9973533/artist.php?s=' + userInput
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
    $artist.text(audioData.artists.strArtist);
    $genre.text(audioData.artists.strGenre);
    $bornyear.text(audioData.artists.intBornYear);
 }