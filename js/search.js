const search = document.querySelector(".search-form");
const contactNames = Array.from(contactCard.querySelectorAll("a"));

search.addEventListener("submit", (e) => {
    e.preventDefault()
});

search.addEventListener("keyup", (e) => {
    const value = search.search.value.toLowerCase().trim();

    //If the value does not mathches then display is none
    contactNames
        .filter(contactName => {
            return !contactName.innerText.toLowerCase().includes(value);
        })
        .forEach(contactName => {
            contactName.style.display = "none";
        })

    //If the value mathches but the display is none
    contactNames
        .filter(contactName => {
            return contactName.innerText.toLowerCase().includes(value);
        })
        .forEach(contactName => {
            contactName.style.display = "flex";
        })

})