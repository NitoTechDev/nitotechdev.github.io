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
    const blogHeadings = blogContainer.querySelectorAll("h1, h2, h3, h4"); // Gets the h1 - h3 headings. 
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
    let mostRecentUL = tocListContainer;
    let mostRecentSubUL = null;
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
                    mostRecentUL = document.createElement("ul");
                    mostRecentDetails.appendChild(mostRecentUL);
                } else {
                    mostRecentUL = tocListContainer
                    link.textContent = heading.text;
                    link.href = `#${heading.id}`;
                    li.appendChild(link);
                    mostRecentUL.appendChild(li);
                }
                break;
            case "3":
                try { if (displayedHeadings[index + 1].level === "4") {hasSubheading = true} else { hasSubheading = false} } catch (TypeError) {hasSubheading = false}
                if (hasSubheading) {
                    console.log("This heading 3 has a subheading of 4.")
                    mostRecentDetails = document.createElement("details");
                    const summary = document.createElement("summary");
                    mostRecentUL.appendChild(li);
                    li.appendChild(mostRecentDetails);
                    link.textContent = heading.text;
                    link.href = `#${heading.id}`;
                    summary.appendChild(link);
                    mostRecentDetails.appendChild(summary);
                    mostRecentSubUL = document.createElement("ul");
                    mostRecentDetails.appendChild(mostRecentSubUL);
                } else {
                    link.textContent = heading.text;
                    link.href = `#${heading.id}`;
                    li.appendChild(link);
                    mostRecentUL.appendChild(li);
                }
                break;
            case "4":
                link.textContent = heading.text;
                link.href = `#${heading.id}`;
                li.appendChild(link);
                mostRecentSubUL.appendChild(li);
                break;
        }
  });
}