const clearBtn = document.querySelector('.clearBtn');
const memeVaultContainer = document.getElementById('memeVaultContainer');
const memeContainer = document.createElement('div');

document.addEventListener('DOMContentLoaded', function () {
  const savedMemes = JSON.parse(localStorage.getItem('memes')) || [];
  displayMemes(savedMemes);
});

function displayMemes(memes) {

  memes.forEach(meme => {
    memeContainer.className = 'meme-item';
    memeContainer.innerHTML = `
      <div class="meme-content">
        <h3 class="meme-joke">${meme.joke}</h3>
        <img class="meme-image" src="${meme.imageUrl}" alt="Saved Meme" width="100%" height="175px">
      </div>
    `;
    memeVaultContainer.appendChild(memeContainer);
  });
}

clearBtn.addEventListener('click', function () {
  localStorage.removeItem('memes');
  const memeVaultContainer = document.getElementById('memeVaultContainer');
  memeVaultContainer.innerHTML = '';
});