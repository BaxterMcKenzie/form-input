// Getting the user input elements
const fullnameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const contactPhoneInput = document.getElementById('contact-phone');
const ageInput = document.getElementById('age');
const genderInput = document.getElementById('gender');
const programmingExperienceInput = document.getElementById('programming-experience');
const workshopSessionsInput = document.getElementById('workshop-sessions');
const commentsQuestionsInput = document.getElementById('commments-questions');

const results = document.getElementById('results');
const submitButton = document.getElementById('submitBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

// Event listener for the submit button
submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    // Collect user data
    let userData = {
        fullname: fullnameInput.value,
        email: emailInput.value,
        contactPhone: contactPhoneInput.value,
        age: ageInput.value,
        gender: genderInput.value,
        programmingExperience: programmingExperienceInput.value,
        workshopSessions: workshopSessionsInput.value,
        commentsQuestions: commentsQuestionsInput.value
    };
    populateResults(userData);

    modal.style.display = 'block';
});

// Function to populate the results in the modal
function populateResults(userData) {
    results.innerHTML = `
        <h2>${userData.fullname}</h2>
        <h3>${userData.email}</h3>
        <p>Contact Phone: ${userData.contactPhone}</p>
        <p>Age: ${userData.age}</p>
        <p>Gender: ${userData.gender}</p>
        <p>Programming Experience: ${userData.programmingExperience}</p>
        <p>Workshop Sessions: ${userData.workshopSessions}</p>
        <p>Comments/Questions: ${userData.commentsQuestions}</p>
    `;
}

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});
