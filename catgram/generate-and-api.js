  async function loadRandomCatForImage(imgElement) {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      imgElement.src = data[0].url;
    } catch (error) {
      console.error('Error loading cat image:', error);
    }
  }

  async function loadRandomCats() {
    const catImgs = document.querySelectorAll('.img img');

    for (const img of catImgs) {
      // Ładuj losowy obraz dla każdego obrazka
      await loadRandomCatForImage(img);
    }
  }

  window.onload = loadRandomCats;

  window.addEventListener('scroll', async () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      // Dodaj nowy post
      const newPost = document.createElement('div');
      newPost.className = 'main';
      newPost.innerHTML = `
        <div class="user-name">NewUser</div>
        <div class="img">
          <img src="https://via.placeholder.com" alt="Cat Image" />
        </div>
        <div class="like-share">
          <button class="emoticon">🐱</button>
          <button class="share">🔗</button>
        </div>
      `;
      document.querySelector('.center').appendChild(newPost);

      // Załaduj losowego kota dla nowo dodanego obrazka
      const newImg = newPost.querySelector('.img img');
      await loadRandomCatForImage(newImg);
    }
  });
