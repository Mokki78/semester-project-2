createHTMLElement 


function renderPost(location, posts = [], options = {}) {
    const currentProfile = getUserName();
    posts.forEach(post) => {
        const { id, title, body, tags, _count, media, created, updated, author} = post;
        const { name, avatar } = author;
        const isUpdated = created !== updated;
        const isCurrentProfile = name === currentProfile;

        const postElement = createElement("li", "post");


    }
}