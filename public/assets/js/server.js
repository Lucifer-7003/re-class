document
  .getElementById("contact-form-submit")
  .addEventListener("click", function (e) {
    e.preventDefault();

    document.getElementById("contact-loading").classList.remove("d-none");

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

    // console.log(formData);

    // Make the POST request to ../../../forms/cc.php
    fetch("/api/contact.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      // .then((result) => result)
      .then((data) => {
        if (data == true) {
          document.getElementById("contact-sent").classList.remove("d-none");

          document.getElementById("contact-loading").classList.add("d-none");
        } else {
          document.getElementById("contact-error").classList.remove("d-none");

          document.getElementById("contact-loading").classList.add("d-none");
        }
      })
      .catch((error) => console.error("Error:", error));
  });
