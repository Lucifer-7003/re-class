// Function to fetch and display the teacher profiles
async function loadTeacher() {
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
    data["data"].forEach((teacher, index) => {
      const grades = teacher.grades.join(", ");

      // Create the HTML structure for each teacher
      const teacherHTML = `
          <div
            class="col-sm-6 col-12 my-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="member d-flex">
              <div class="pic col-sm-4 ">
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
              <div class="member-info ">
                <div class="d-flex flex-column">
                  <h6 class="name">${teacher.name}</h6>
                  <span class="subject info-span">${teacher.subject} (${grades})</span>
                  <span class="experience info-span">Experience: ${teacher.work_experience}</span>
                </div>
                <span class="description info-span">${teacher.self_description}</span>
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
