// Function to fetch and display the teacher profiles
async function loadTeacherProfiles() {
  try {
    // Fetch the JSON data from the file
    const response = await fetch("/assets/teachers.json"); // Adjust the path if needed
    if (!response.ok) {
      throw new Error("Failed to load the JSON file.");
    }

    const data = await response.json();

    // Select the container where the teacher profiles will be appended
    const container = document.querySelector("#teachers-container");

    // Iterate through the JSON data and generate the HTML dynamically
    data["data"].forEach((teacher) => {
      const grades = teacher.grades.join(", ");
      // Create the HTML structure for each teacher
      const teacherHTML = `
          <div
            class="col-xl-2 col-lg-3 col-md-4 col-sm-6 my-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="member">
              <div class="pic">
                <img
                  src="/assets/img/team/${teacher.photo}"
                  class="img-fluid photo"
                  alt="${teacher.name}"
                />
                <div class="rating">
                  <i class="bi bi-star-fill"></i>
                  ${teacher.rating}
                </div>
              </div>
              <div class="member-info">
                <div class="d-flex flex-column">
                  <h5 class="name">${teacher.name}</h5>
                  <span class="subject">${teacher.subject}</span>
                  <span class="grade line-below">${grades}</span>
                </div>
                <span class="description">${teacher.self_description}</span>
              </div>
            </div>
          </div>
        `;

      // Append the HTML to the container
      container.insertAdjacentHTML("beforeend", teacherHTML);
    });

    console.log("Teachers Profile Loaded");
  } catch (error) {
    console.error("Error loading teacher profiles:", error);
  }
}
