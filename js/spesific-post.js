const postContainer = document.querySelector('.post-container');

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get('id');

const url = 'https://exam-api.wibedev.com/wp-json/wp/v2/posts/' + id;

async function fetchPost() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        createHTML(details);
    }
    catch (error) {
        postContainer.innerHTML = error;
    }
}

fetchPost();

function createHTML(details) {

    document.title = 'Travel Abroad | ' + details.title.rendered;

    postContainer.innerHTML = `<div class="bookmark">
                                    <a href="index.html">Home</a>
                                    <i class="fas fa-chevron-right" id="arrow"></i>
                                    <a href="posts.html">Posts</a>
                                    <i class="fas fa-chevron-right" id="arrow"></i>
                                    <a href="spesific-post.html">${details.title.rendered}</a>
                               </div>
                               <div id="image" onclick="showModal()" style="background-image: url(${details.better_featured_image.source_url})"></div>
                               <div id="modal">
                                    <span onclick="closeModal()" class="close">&times;</span>                                  
                                    <img class="modal-image" src="${details.better_featured_image.source_url}"></img>
                               </div>
                               <h1 class="title">${details.title.rendered}</h1>
                               <h2 class="date">${details.date.split('T')}</h2>
                               <div class="content">
                                  <p>${details.content.rendered}</p>
                               </div>`;
}




