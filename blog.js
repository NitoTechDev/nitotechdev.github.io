const popupDescripters = {
    "register": "Registeres are placing within the CPU that hold values",
    "architecture": "The design and structure of a CPU. Which outlines how it functions and interacts with other parts of a computer system.",
    "static address": "A static address, is an address isn't allocated dynamically upon launch of a process. This address can be found at the same address everytime.",
    "anti-cheat": "A software or system designed to prevent cheating in online video games.",
    "direct3d 9": "Direct3D 9 is a Graphics API developed by Microsoft. It provides a way for game developers and applications to communicate with a computer's GPU to render complex 3D graphics and animations.",
    "directx": "A collection of APIs for managing multimedia such as sound, input, and Direct3D.",
    "sdk": "Software Development Kit (SDK), is a collection of tools and libraries that developers can use to build applications for a specific platform, operating system, or programming language.",
    "ide": "Integrated Development Environment (IDE), is a software application that offers a collection of tools and a graphical interface to assist with the coding process.",
    "api": "Application Programming Interface (API), is a software interface that allows for connections between different computers or computer programs in order to communicate information to one another.",
    "graphics api": "A graphics API allows us to use software to communicate with our GPU in order to render 3D graphics and animations.",
    "graphic api": "A graphics API allows us to use software to communicate with our GPU in order to render 3D graphics and animations.",
    "iso": "Named after the ISO 9660 standard file system, is an uncompressed digital copy of an entire optical desk (Ex. CD, DVD, Blu-ray) into a single file.",
    "splunk": "A powerful data platform used to help organizations collect, analyze, and act on machine-generated data in real time.",
    "suricata": "A high performance Network IDS, IPS, and Network Security Monitoring engine.",
    "user-agents":"A computer program representing a person, such as a download manager, another application, or a browser.",
    "zeek":"An open-source network security monitoring tool.",
    "cloudtrail":"A service that enables governance, compliance, operaitonal auditing, and auditing of AWS accounts. Allowing you to track user activity and API usage on AWS.",
    "elastic":"An open-source platform for search, observability, and security that utilizes a variety of AI implementations to increase its analytic capabilities.",
    "pygame":"Python Library for making 2d video games and multimedia applications. Provides modules for graphics, sounds, and user input.",
};

document.addEventListener("DOMContentLoaded", () => {
    const wordsToBeHovered = document.getElementsByClassName("hover-word");
    for (let i = 0; i < wordsToBeHovered.length; i++) {
        wordsToBeHovered[i].id = `hover-word-${i}`;

        let hoverTimer;

        wordsToBeHovered[i].addEventListener('mouseenter', function() {
            hoverTimer = setTimeout(() => {
                const popup = document.createElement("span");
                popup.className = "hover-popup";
                popup.id = `hover-popup-${i}`;
                popup.style.display = 'block';

                const word = (wordsToBeHovered[i].textContent).toLowerCase();
                popup.textContent = popupDescripters[word];

                let position = wordsToBeHovered[i].getBoundingClientRect();
                popup.style.top = `${(position.top + window.pageYOffset) + 20}px`;
                popup.style.left = `${(position.left + window.pageXOffset)+ 15}px`;
                
                wordsToBeHovered[i].append(popup);
                }, 650);
        })
        wordsToBeHovered[i].addEventListener('mouseleave', function() {
            const parent = document.getElementById(`hover-word-${i}`)
            if (parent.lastChild.id == `hover-popup-${i}`) {
                parent.lastChild.remove();
            }

            clearTimeout(hoverTimer);
        })
    };
})