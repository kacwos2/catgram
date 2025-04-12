async function loadRandomCatForImage(imgElement) {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search', {
      headers: {
        'x-api-key': 'live_GWD4vAqrzUHK1pe4llsrNRrPyQ2Q8eLOyXbgeiCLbV9ARHECAL7KYHF2n61muHwL'
      }
    });
    const data = await response.json();
    imgElement.src = data[0].url;
  } catch (error) {
    console.error('Error loading cat image:', error);
  }
}

async function loadRandomCats() {
  const firstImg = document.querySelector('.img img');
  if (firstImg) {
    await loadRandomCatForImage(firstImg);
  }
}

window.onload = loadRandomCats;

window.addEventListener('scroll', async () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    const newPost = document.createElement('div');
    newPost.className = 'main';
    newPost.innerHTML = `
      <div class="user-name">NewUser</div>
      <div class="img">
        <img src="https://via.placeholder.com/300x300" alt="Cat Image" />
      </div>
      <div class="like-share">
        <button class="emoticon">🐱</button>
        <button class="share">🔗</button>
      </div>
    `;
    document.querySelector('.center').appendChild(newPost);

    const newImg = newPost.querySelector('.img img');
    await loadRandomCatForImage(newImg);
  }
});
