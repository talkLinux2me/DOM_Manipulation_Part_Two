const mainEl = document.querySelector("main");

console.log(mainEl);

//setting the background color using var method to grab item from the root
mainEl.style.backgroundColor = "var(--main-bg)";
//creating an HTML Element
const h1 = document.createElement("h1")

//attaching text to the h1 we created
h1.innerHTML = "DOM Manipulation";

//appending my h1 i created to my main container
mainEl.appendChild(h1);

//add a class name to a html element
mainEl.classList.add("flex-ctr");

const topMenuEl = document.querySelector("#top-menu");

//set the height to 100%
topMenuEl.style.height = "100%"

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

topMenuEl.classList.add("flex-around");

const menuLinks = [
    { text: "about", href: "/about"},
    { text: "catalog", href: "/catalog"},
    { text: "orders", href: "/orders"},
    { text: "account", href: "/account"},
];


menuLinks.forEach((link) => {
    //create anchor element
    const aElement = document.createElement("a");
    //added href
    aElement.href = link.href;
    //added text content
    aElement.textContent = link.text;
    //appended to topmenu
    topMenuEl.appendChild(aElement);
});
