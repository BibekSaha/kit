const contacts = JSON.parse(localStorage.getItem("contact"));
const uid = JSON.parse(localStorage.getItem("uid"));
const contactCard = document.querySelector(".contact-card");
const cards = Array.from(contactCard.children);

//creating the contact cards
contacts.forEach((contact, index) => {
    const firstNameChar = contact.firstName[0].toLowerCase();

    for (let i = 0; i < cards.length; i++) {
        cardClassName = cards[i].classList;
        if (cardClassName.contains(firstNameChar)) {
            html = `
                <div class="contact">
                    <a href="./perview.html">${contact.firstName} ${contact.lastName} <span id="uid">${uid[index]}</span> <i class="fas fa-trash fa-1x" style="color: rgba(255, 255, 255, 0.75);"></i></a>
                </div>
            `
            cards[i].style.display = "block";
            cards[i].innerHTML += html;
            break;
        }
    }
});


//making the delete button work
contactCard.addEventListener("click", e => {
    if (e.target.classList.contains("fa-trash")) {
        e.preventDefault();

        const cardChildPresent = e.target.parentElement.parentElement.parentElement;

        //removes the contact
        e.target.parentElement.parentElement.remove();

        //If no contacts are present in the card hide the card
        if (cardChildPresent.childElementCount === 1) {
            cardChildPresent.style.display = "none";
        }

        const id = e.target.parentElement.querySelector("span").textContent;
        const index = uid.indexOf(id);

        uid.splice(index, 1);
        contacts.splice(index, 1);

        localStorage.setItem("uid", JSON.stringify(uid));
        localStorage.setItem("contact", JSON.stringify(contacts));
    } else if (e.target.tagName === "A") {
        localStorage.setItem("index",e.target.querySelector("span").textContent);
    }
})