const edit = localStorage.getItem("edit");
const index = Number(localStorage.getItem("index"));
const contacts = JSON.parse(localStorage.getItem("contact"));

const form = document.querySelector(".create-contact-form");

//If the link cam from edit
if(edit === "true") {
    const button = form.button;
    document.querySelector("#first-name").value = contacts[index].firstName;
    document.querySelector("#last-name").value = contacts[index].lastName;
    form.phone.value = contacts[index].phone;
    form.address.value = contacts[index].address;

    button.textContent = "Save";

    form.addEventListener("submit", (e) => {
        contacts[index].firstName = document.querySelector("#first-name").value.trim();
        contacts[index].lastName = document.querySelector("#last-name").value.trim();
        contacts[index].phone = form.phone.value.trim();
        contacts[index].address = form.address.value.trim();
    
        localStorage.setItem("contact", JSON.stringify(contacts));
    })
} else {
    class Contact {
        constructor(firstName, lastName, phone, address) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.phone = phone;
            this.address = address;
        }
    }
    
    let lsContact, lsUID;
    
    if (localStorage.getItem("contact") === null) {
        lsContact = [];
    } else {
        lsContact = JSON.parse(localStorage.getItem("contact"));
    }
    
    if (localStorage.getItem("uid") === null) {
        lsUID = [0];
    } else {
        lsUID = JSON.parse(localStorage.getItem("uid"));
    }
    
    form.addEventListener("submit", (e) => {
        const firstName = document.querySelector("#first-name").value.trim();
        const lastName = document.querySelector("#last-name").value.trim();
        const phone = form.phone.value.trim();
        const address = form.address.value.trim();
    
        const contact = new Contact(firstName, lastName, phone, address);
    
        lsContact.push(contact);
        lsUID.push(lsUID[lsUID.length - 1] + 1);
    
        localStorage.setItem("contact", JSON.stringify(lsContact));
        localStorage.setItem("uid", JSON.stringify(lsUID));
    
        form.reset();
    })
}

localStorage.setItem("edit", "false");