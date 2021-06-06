const url = 'https://exam-api.wibedev.com/wp-json/wp/v2/posts';
const postsContainer = document.querySelector('.posts');
const loadMore = document.querySelector('#moreResults');

let perPage = 10;

async function getPosts() {
    try {
        let response = await fetch(url + `?per_page=${perPage}`);

        const posts = await response.json();

        postsContainer.innerHTML = '';

        createHTML(posts)
    }
    catch (error) {
        postsContainer.innerHTML = error;
    }
}

getPosts();

const loadMorePosts = async () => {    
    perPage += 10;
    await getPosts();
    window.scrollTo();
}

loadMore.addEventListener('click', loadMorePosts)


function createHTML(posts) {
   
    for (let i = 0; i < posts.length; i++) {

        const formatDate = new Date(posts[i].date).toLocaleString("en-GB", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        });

        postsContainer.innerHTML += `<a href="spesific-post.html?id=${posts[i].id}" class="card">
                                        <img class="image" src="${posts[i].better_featured_image.source_url}" alt="${posts[i].better_featured_image.alt_text}">
                                        <div class="preview">
                                            <h2 class="title">${posts[i].title.rendered}</h2>
                                            <p class="preview-text">${posts[i].excerpt.rendered}</p>
                                            <h3 class="date">${formatDate}</h3>
                                            <p class="read-more">Read more</p>
                                        </div>
                                    </a>`;
    }

}
