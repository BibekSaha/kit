const index = Number(localStorage.getItem("index"));
const contact = JSON.parse(localStorage.getItem("contact"))[index];
const preview = document.querySelector(".preview");
const edit = document.querySelector(".fa-edit");

const html = `
    <p>First Name:- <span id="first-name-view">${contact.firstName}</span></p>
    <p>Last Name:- <span id="last-name-view">${contact.lastName}</span></p>
    <p>Phone:- <span id="phone-view">${contact.phone}</span></p>
    <p>Address:- <span id="address-view">${contact.address}</span></p>
`;

preview.innerHTML = html;

edit.addEventListener("click", () => {
    localStorage.setItem("edit", "true");
})

