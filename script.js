const form = document.getElementById("survey-form");
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");
const closePopup = document.getElementById("close-popup");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Perform validation here
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const option1 = document.querySelector("input[name='Is this the first time that you are using our service']:checked");
    const option2 = document.querySelector("input[name='Would you suggest to your Friends and Colleagues']:checked");
    const option3 = document.querySelector("input[name='How satisfied you are with our company overall']:checked");
    const feedback = document.querySelector("textarea[name='feedback']").value;

    // Check if required fields are filled
    if (!name || !email || !option1 || !option2 || !option3) {
        alert("Please fill in all required fields.");
        return;
    }

    // Create a submission details message
    const submissionDetails = `
        Name: ${name}
        Email: ${email}
        Is this the first time: ${option1.value}
        Would you suggest to your Friends and Colleagues: ${option2.value}
        Satisfaction: ${option3.value}
        Feedback: ${feedback}
    `;

    // Display the submission details in the popup
    popupContent.textContent = submissionDetails;
    popup.style.display = "block";
});

closePopup.addEventListener("click", function () {
    popup.style.display = "none";
});