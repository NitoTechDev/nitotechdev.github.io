/*

I need a way to constantly keep track of parent headings and what children should be linked to them that aren't part of the blog itself.

So I need:
    - Keep track of all headings within the blog post
        - Keep track of what level they are (The number from the respective h1/2/3)
            - <heading>.tagName[1] Can keep track of the respective numbers
            - <heading>.textContent can keep track of the name of the section
    
    DONT DO UNTIL FIRST PART IS DONE!!!
    - Keep an extra file or a dictionary within this JS file that keeps track of:
        Parent ID
        Respective Children that it should link to
            Their respective file links
*/

let tocDisplayedHeadings = []

document.addEventListener("DOMContentLoaded", () => {
    const blogContainer = document.querySelector(".blog-main"); // Makes it so we only get the headings from within .blog-main
    const blogHeadings = blogContainer.querySelectorAll("h1, h2, h3, h4, h5"); // Gets the h1 - h3 headings. 
    createTOC(blogHeadings);
    renderTOC(tocDisplayedHeadings);
})

function createTOC(headings) {
    headings.forEach((heading) => {
        const node = {
            text: heading.textContent,
            level: heading.tagName[1],
            children: [],
            heading: heading,
            id: heading.id
        }
        tocDisplayedHeadings.push(node);
    })
}

function renderTOC(displayedHeadings) {
    const toc = document.getElementById("toc");
    const tocListContainer = document.getElementById("toc-list");
    let mostRecentH2UL = tocListContainer;
    let mostRecentH3UL = null;
    let mostRecentH4UL = null;
    let mostRecentDetails = null;
    displayedHeadings.forEach((heading, index) => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        let hasSubheading = null
        switch (heading.level) {
            case "1":
                const p = document.createElement("p");
                p.textContent = heading.text
                toc.prepend(p);
                break;
            case "2":
                try { if (displayedHeadings[index + 1].level === "3") {hasSubheading = true} else { hasSubheading = false} } catch (TypeError) {hasSubheading = false}
                if (hasSubheading) {
                    mostRecentDetails = document.createElement("details");
                    const summary = document.createElement("summary");
                    tocListContainer.appendChild(li);
                    li.appendChild(mostRecentDetails);
                    link.textContent = heading.text;
                    link.href = `#${heading.id}`;
                    summary.appendChild(link);
                    mostRecentDetails.appendChild(summary);
                    mostRecentH2UL = document.createElement("ul");
                    mostRecentDetails.appendChild(mostRecentH2UL);
                } else {
                    mostRecentH2UL = tocListContainer
                    link.textContent = heading.text;
                    link.href = `#${heading.id}`;
                    li.appendChild(link);
                    mostRecentH2UL.appendChild(li);
                }
                break;
            case "3":
                try { if (displayedHeadings[index + 1].level === "4") {hasSubheading = true} else { hasSubheading = false} } catch (TypeError) {hasSubheading = false}
                if (hasSubheading) {
                    mostRecentDetails = document.createElement("details");
                    const summary = document.createElement("summary");
                    mostRecentH2UL.appendChild(li);
                    li.appendChild(mostRecentDetails);
                    link.textContent = heading.text;
                    link.href = `#${heading.id}`;
                    summary.appendChild(link);
                    mostRecentDetails.appendChild(summary);
                    mostRecentH3UL = document.createElement("ul");
                    mostRecentDetails.appendChild(mostRecentH3UL);
                } else {
                    link.textContent = heading.text;
                    link.href = `#${heading.id}`;
                    li.appendChild(link);
                    mostRecentH2UL.appendChild(li);
                }
                break;
            case "4":
                try { if (displayedHeadings[index + 1].level === "5") {hasSubheading = true} else { hasSubheading = false} } catch (TypeError) {hasSubheading = false}
                if (hasSubheading) {
                    mostRecentDetails = document.createElement("details");
                    const summary = document.createElement("summary");
                    mostRecentH3UL.appendChild(li);
                    li.appendChild(mostRecentDetails);
                    link.textContent = heading.text;
                    link.href = `#${heading.id}`;
                    summary.appendChild(link);
                    mostRecentDetails.appendChild(summary);
                    mostRecentH4UL = document.createElement("ul");
                    mostRecentDetails.appendChild(mostRecentH4UL);
                } else {
                    link.textContent = heading.text;
                    link.href = `#${heading.id}`;
                    li.appendChild(link);
                    mostRecentH3UL.appendChild(li);
                }
                break;
            case "5":
                link.textContent = heading.text;
                link.href = `#${heading.id}`;
                li.appendChild(link);
                mostRecentH4UL.appendChild(li);
                break;
        }
  });
}