var cuBtn = document.getElementById("contact-submit");
var cuLoading = document.getElementById("contact-loading");
var cuError = document.getElementById("contact-error");
var cuSent = document.getElementById("contact-sent");

cuBtn.addEventListener("click", function (e) {
  e.preventDefault();

  cuLoading.classList.remove("d-none");

  // Get the values of the form fields
  var v_name = document.getElementById("name").value;
  var v_email = document.getElementById("email").value;
  var v_mobile = document.getElementById("mobile").value;
  var v_message = document.getElementById("message").value;

  // Create a FormData object to send the data as form-encoded
  const formData = new FormData();
  formData.append("bId", "MTAwMDAwMjkw");
  formData.append("name", v_name);
  formData.append("email", v_email);
  formData.append("mobile", v_mobile);
  formData.append("message", v_message);

  console.log("Contact Us: ", formData);

  // Make the POST request to /api/contact.php
  fetch("/api/contact.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    // .then((result) => result)
    .then((data) => {
      if (data == true) {
        cuBtn.disabled = true;
        cuSent.classList.remove("d-none");
        cuLoading.classList.add("d-none");
      } else {
        cuBtn.disabled = true;
        cuError.innerHTML = "Response not submitted";
        cuError.classList.remove("d-none");
        cuLoading.classList.add("d-none");
      }
    })
    .catch((error) => console.error("Error:", error));
});
