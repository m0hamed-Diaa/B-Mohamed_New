
let scrollTop = document.querySelector(".scroll-top-top");
let navBar = document.querySelector(".navbar");

window.onscroll = () => {
    if (window.scrollY >= 1000 || window.innerHeight > document.querySelector("#bigSkills").getBoundingClientRect().top) {
        scrollTop.classList.add("active");
        navBar.style.opacity = '1';
        document.querySelectorAll(".allSkills span").forEach((skill) => {
            skill.style.width = skill.dataset.skill;
        })
    }
    else {
        scrollTop.classList.remove("active")
    }
}
// Dark Mode
window.FontAwesomeConfig = {
    autoAddCss: false,
};

let darkMode = document.querySelector("#dark-mode");

if (window.localStorage.getItem("dark-mode") === "done") {
    document.documentElement.classList.add("dark");
    darkMode.setAttribute("aria-pressed", "true");
}
darkMode.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    let contains = document.documentElement.classList.contains("dark");
    window.localStorage.setItem("dark-mode", contains ?  "done": "notDone");
    darkMode.setAttribute("aria-pressed", contains ? "true": "false");
})



// ++++++++++++++++++++++++++++++++++++++++++

let linkLi = document.querySelectorAll("#link-content li");
let profileDiv = document.querySelectorAll("#profile-content .box-content");

if (window.localStorage.getItem("boxsSelected")) {
    linkLi.forEach((li) => {
        if (li.dataset.content === window.localStorage.getItem("boxsSelected")) {
            li.classList.add("active");
        }else {
            li.classList.remove("active");
        }
    })
    profileDiv.forEach((div) => {
        div.style.display = "none";
    })
    document.querySelectorAll(window.localStorage.getItem("boxsSelected")).forEach((div) => {
        div.style.display = "block";
    })
}

linkLi.forEach((li) => {
    li.addEventListener("click", (e) => {
        linkLi.forEach((li) => {
            li.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
        window.localStorage.setItem("boxsSelected", e.currentTarget.dataset.content);
        profileDiv.forEach((div) => {
            div.style.display = "none";
        })
        document.querySelectorAll(window.localStorage.getItem("boxsSelected")).forEach((div) => {
            div.style.display = "block";
        })
    })
})

// +++++++++++++++++++++++++++++++++++++
let scroller = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    scroller.style.width = `${(scrollTop / height) * 100}%`;
});
