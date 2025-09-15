// Maybe add a way to include hidden meta data for a website so instead of saving specific descriptions when we iterate over blog posts
// it will just pull the title and custom description itself.

// As well, without making a Node.JS environment at home I'll have to manually input everything for now.
const posts = [
    // {
    //     "title": "How to Hack Nioh",
    //     "description": "Hacking Nioh Writeup",
    //     "date": "Aug 12, 2025",
    //     "link": "./posts/2025-8-12-how-to-hack-nioh.html"
    // },
    {
        "title": "Creating an Overlay with Direct3D 9 (Concepts)",
        "description": "Direct3D 9 Overlay Writeup (Concept)",
        "date": "Sep 14, 2025",
        "link": "./posts/2025-9-14-creating-an-overlay-for-your-cheats-with-direct3d-9.html",
        "image": "./images/D3D9OverlayConceptsLogo.PNG"
    }
];


document.addEventListener("DOMContentLoaded", () => {
    const blogPostArea = document.getElementById("main");
    for (let post in posts) {
        console.log(post);
        const blogPost = document.createElement("div");
        blogPost.className = "big-posts";

        const blogPostTitle = document.createElement("div");
        blogPostTitle.className = "big-posts-title";

        const blogTitle = document.createElement("h2");
        const blogTitleLink = document.createElement("a");
        blogTitleLink.textContent = posts[post].title;
        blogTitleLink.setAttribute("href", posts[post].link);
        blogTitle.append(blogTitleLink);
        blogPostTitle.append(blogTitle);

        const blogShortDesc = document.createElement("h5");
        blogShortDesc.textContent = posts[post].description;
        blogShortDesc.className = "big-posts-shortDesc";
        blogPostTitle.append(blogShortDesc);

        const blogDate = document.createElement("h5");
        blogDate.textContent = posts[post].date;
        blogDate.className = "big-posts-date";
        blogPostTitle.append(blogDate);

        const blogPostImg = document.createElement("div");
        blogPostImg.className = "big-posts-img";

        const blogPhoto = document.createElement("img");
        blogPhoto.setAttribute("src", posts[post].image);
        blogPostImg.append(blogPhoto);

        blogPost.append(blogPostTitle);
        blogPost.append(blogPostImg);

        const spacer = document.createElement("br");

        blogPostArea.append(blogPost);
        //blogPostArea.append(spacer);
    }

})