const url = 'https://exam-api.wibedev.com/wp-json/wp/v2/posts/';
const latestContainer = document.querySelector('.slider');

async function getLatestPosts() {
    try {
        const response = await fetch(url)
        const posts = await response.json();

        latestContainer.innerHTML = '';

        createHTML(posts)
    }
    catch (error) {
        latestContainer.innerHTML = error;
    }
}

getLatestPosts();

function createHTML(posts) {
   
    for (let i = 0; i < posts.length; i++) {

        if(i === 8) {
            break;
        }

        
        latestContainer.innerHTML += `<a href="spesific-post.html?id=${posts[i].id}" class="card">
                                        <div class="image" style="background-image: url(${posts[i].better_featured_image.source_url})"></div>
                                        <h3 class="title">${posts[i].title.rendered}</h3>
                                    </a>`;
    }
}