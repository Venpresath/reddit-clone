
    const newLocal = $.get(`https://www.reddit.com/r/all/.json`, (data) => {

        for (i = 0; i < 18; i++) {
            let title = data.data.children[i].data.title;
            let image = data.data.children[i].data.thumbnail;
            let link = `https://reddit.com${data.data.children[i].data.permalink}`;
            let mainImage = data.data.children[i].data.preview.images[0].source.url;
            function np() {
                let newPost = $(`<div class="post">
                            <div class="articleTitle">
                                <h1>${title}</h1>
                            </div>
                            <div class="articleLink">
                                <a href="${link}">Click here for article</a>
                            </div>
                            <div class="articleImage">
                                <img src="${mainImage}">
                            </div>
                        </div>`);
                $(".posts").append(newPost);
            }
            np();
            
        }
    });
    let posts = newLocal;

