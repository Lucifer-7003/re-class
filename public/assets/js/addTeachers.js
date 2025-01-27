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
            <a href="/team.html">
              <div class="member">
                <div class="pic">
                  <img
                    src="/assets/img/team/${teacher.photo}"
                    class="img-fluid photo"
                    alt="${teacher.name}"
                  />
                  <div class="rating d-none">
                    <i class="bi bi-star-fill"></i>
                    ${teacher.rating}
                  </div>
                </div>
                <div class="member-info">
                  <h6 class="name">${teacher.name}</h6>
                  <span class="subject info-span">${teacher.subject}</span>
                  <span class="grade info-span">${grades}</span>
                </div>
              </div>
            </a>
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
