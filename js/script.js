const $artist = $('#artist');
const $genre = $('#genre');
const $bornyear = $('#bornyear');
const $birthplace = $('#birthplace');
const $biography = $('#biography');
const $input = $('input[type="text"]');

let audioData, userInput;


$('form').on('submit', handleGetData);

function handleGetData(event) {
    event.preventDefault();
   // calling preventDefault() on a 'submit' event will prevent a page refresh  
   
   userInput = $input.val();
    // getting the user input

   $.ajax({
         url:`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${userInput}`      
        }).then(
        (data) => {
         audioData = data.artists[0];
         console.log(userInput);
         console.log(audioData);
         render();
        },
        (error) => {
         console.log('bad request', error);
        }
    );    
}
    

function render() {
    $artist.text(audioData.strArtist);
    $genre.text(audioData.strGenre);
    $bornyear.text(audioData.intBornYear);
    $birthplace.text(audioData.strCountry);
    $biography.text(audioData.strBiographyEN);
 }