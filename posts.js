const posts = [
    {
        "title": "Create your own Malware Analysis Lab",
        "description": "Malware Analysis Lab Walkthrough",
        "date": "Oct 5, 2025",
        "link": "./posts/create-your-own-malware-analysis-lab/",
        "image": "./images/MalwareLabCreationLogo.png"
    },
    {
        "title": "Creating an External Cheat Overlay with Direct3D 9",
        "description": "Direct3D 9 Overlay Code Writeup",
        "date": "Sep 21, 2025",
        "link": "./posts/creating-an-external-cheat-overlay/",
        "image": "./images/D3D9OverlayCodeLogo.png"
    },
    {
        "title": "How do Cheat Overlays Work? (Direct3D 9 Overlay Concept)",
        "description": "Direct3D 9 Overlay Concept",
        "date": "Sep 14, 2025",
        "link": "./posts/how-do-cheat-overlays-work/",
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