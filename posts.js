const posts = [
    {
        "title": "What is Fuzzing - Concept Study",
        "description": "Concept study on Fuzzing",
        "date": "Jan 11, 2026",
        "link": "./posts/what-is-fuzzing",
        "image": "./images/logos/WhatisFuzzingLogo.png"
    },
    {
        "title": "Raspberry Pi Christmas Slot Machine",
        "description": "Christmas themed slot machine hosted on a Raspberry Pi",
        "date": "Dec 28, 2025",
        "link": "./posts/raspberry-pi-christmas-slot-machine",
        "image": "./images/christmas-project/gamescreen.png"
    },
    {
        "title": "AzureHunt - Writeup",
        "description": "Cyberdefenders AzureHunt Lab Walkthrough",
        "date": "Dec 2, 2025",
        "link": "./posts/cyberdefenders/azurehunt",
        "image": "./images/cyberdefenders/azurehunt/elastic-search-newuser.png"
    },
    {
        "title": "AWSRaid - Writeup",
        "description": "Cyberdefenders AWSRaid Lab Walkthrough",
        "date": "Oct 25, 2025",
        "link": "./posts/cyberdefenders/awsraid",
        "image": "./images/cyberdefenders/awsraid/splunk-createuser-query.png"
    },
    {
        "title": "NerisBot - Writeup",
        "description": "Cyberdefenders NerisBot Lab Walkthrough",
        "date": "Oct 22, 2025",
        "link": "./posts/cyberdefenders/nerisbot",
        "image": "./images/cyberdefenders/nerisbot/splunk-md5-query.png"
    },
    {
        "title": "Create your own Malware Analysis Lab",
        "description": "Malware Analysis Lab Walkthrough",
        "date": "Oct 5, 2025",
        "link": "./posts/create-your-own-malware-analysis-lab/",
        "image": "./images/logos/MalwareLabCreationLogo.png"
    },
    {
        "title": "Creating an External Cheat Overlay with Direct3D 9",
        "description": "Direct3D 9 Overlay Code Writeup",
        "date": "Sep 21, 2025",
        "link": "./posts/creating-an-external-cheat-overlay/",
        "image": "./images/logos/D3D9OverlayCodeLogo.png"
    },
    {
        "title": "How do Cheat Overlays Work? (Direct3D 9 Overlay Concept)",
        "description": "Direct3D 9 Overlay Concept",
        "date": "Sep 14, 2025",
        "link": "./posts/how-do-cheat-overlays-work/",
        "image": "./images/logos/D3D9OverlayConceptsLogo.PNG"
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