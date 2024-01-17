const jokeContainer = document.getElementById('jokeContainer');
const imageElement = document.getElementById('generatedImage');
const saveMessage = document.getElementById('saveMessage');
const query = 'funny';


function saveMeme() {
 
 if (jokeContainer.textContent.trim() === '' || imageElement.src.trim() === '') {
     jokeContainer.textContent = 'must pick both to save.';
     return;
 }

 saveMessage.textContent = 'Joke and image saved successfully!';
 saveMessage.style.display = 'block';

 const savedMeme = JSON.parse(localStorage.getItem('memes')) || [];
 const newMeme = {
     joke: jokeContainer.textContent.replace('Joke: ', ''),
     imageUrl: imageElement.src
 };

 savedMeme.push(newMeme);
 localStorage.setItem('memes', JSON.stringify(savedMeme));
}

function generateJoke() {
 
 saveMessage.style.display = 'none';

 fetch('https://v2.jokeapi.dev/joke/Programming')
     .then(response => response.json())
     .then(data => {
         if (data.type === 'twopart') {
             jokeContainer.textContent = `Joke: ${data.setup}`;
         } else {
             jokeContainer.textContent = `Joke: ${data.joke}`;
         }
     })
     .catch(error => console.error('Error fetching joke:', error));
}

function generateImage() {

 saveMessage.style.display = 'none';

 fetch(`https://api.unsplash.com/photos/random?client_id=fM-CfB5LIcQKdukVAbR-IdGgnGc4x4UO37VPujuAQsg&query=${query}`)
     .then(response => response.json())
     .then(data => {
         const imageUrl = data.urls.regular;
         const imageElement = document.getElementById('generatedImage');
         imageElement.src = imageUrl;
         imageElement.alt = 'Generated Image';
     })
     .catch(error => console.error('Error fetching image:', error));
}

function callBothFunctions() {
 generateJoke();
 generateImage();
}
