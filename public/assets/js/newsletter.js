var nlBtn = document.getElementById("nl-submit");
var nlLoading = document.getElementById("nl-loading");
var nlError = document.getElementById("nl-error");
var nlSent = document.getElementById("nl-sent");

nlBtn.addEventListener("click", function (e) {
  e.preventDefault();

  nlLoading.classList.remove("d-none");

  // Get the values of the form fields
  var v_email = document.getElementById("email").value;

  // Create a FormData object to send the data as form-encoded
  const formData = new FormData();
  formData.append("bId", "MTAwMDAwMjkw");
  formData.append("email", v_email);

  console.log("newsletter: ", formData);

  // Make the POST request to /api/contact.php
  fetch("/api/newsletter.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    // .then((result) => result)
    .then((data) => {
      if (data == true) {
        nlBtn.disabled = true;
        nlSent.classList.remove("d-none");
        nlLoading.classList.add("d-none");
      } else {
        nlBtn.disabled = true;
        nlError.innerHTML = "Response not submitted";
        nlError.classList.remove("d-none");
        nlLoading.classList.add("d-none");
      }
    })
    .catch((error) => console.error("Error:", error));
});
