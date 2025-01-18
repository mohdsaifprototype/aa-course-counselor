import { courseCategories, courses } from './data.js';

let selectedCourse = null;
let filteredCourses = [];

// Function to show courses based on the selected duration
function showCategoriesByDuration() {
  const selectedDuration = document.getElementById("duration").value;
  const interestSelect = document.getElementById("interest");
  interestSelect.innerHTML = ""; // Clear previous options

  if (selectedDuration) {
    filteredCourses = courses.filter(course => course.duration === selectedDuration);
    const categories = courseCategories[selectedDuration];

    // Display categories based on the selected duration
    const allOption = document.createElement("option");
    allOption.value = "All";
    allOption.textContent = "All Courses";
    interestSelect.appendChild(allOption);

    categories.forEach((category) => {
      const categoryOption = document.createElement("option");
      categoryOption.value = category;
      categoryOption.textContent = category;
      interestSelect.appendChild(categoryOption);
    });

    displayCourses(filteredCourses);

    const resultText = document.getElementById("result-text");
    resultText.style.display = filteredCourses.length > 0 ? "block" : "none"; 
  } else {
    displayCourses([]); // Clear courses if no duration is selected
  }
}

// Function to filter and display courses based on selected category
function selectCategory() {
  const category = document.getElementById("interest").value;

  let filteredByCategory;
  if (category === "All") {
    filteredByCategory = filteredCourses;
  } else {
    filteredByCategory = filteredCourses.filter(course =>
      course.category === category
    );
  }

  displayCourses(filteredByCategory); // Display filtered courses

  const resultText = document.getElementById("result-text");
  resultText.style.display = filteredByCategory.length > 0 ? "block" : "none"; 

  if (filteredByCategory.length === 0) {
    const courseGrid = document.getElementById("course-grid");
    courseGrid.innerHTML = "<p>No courses found for the selected category.</p>";
  }
}

// Function to display the courses in the grid
function displayCourses(coursesToDisplay) {
  const courseGrid = document.getElementById("course-grid");
  courseGrid.innerHTML = ""; 

  if (coursesToDisplay.length > 0) {
    coursesToDisplay.forEach((course) => {
      const courseCard = document.createElement("div");
      courseCard.className = "course-card";
      courseCard.innerHTML = `
        <h4 onclick="showCourseDetail('${course.name}')">
          ${course.name} <i class="fa-solid fa-right-long fa-beat"></i>
        </h4>
      `;
      courseGrid.appendChild(courseCard);
    });
  } else {
    courseGrid.innerHTML = "<p>No courses found</p>";
  }
}

// Function to show the detailed course information
function showCourseDetail(courseName) {
  selectedCourse = courses.find(course => course.name === courseName);
  document.getElementById("course-detail-title").textContent = selectedCourse.name;

  // Update the first table with course details
  document.getElementById("course-detail-table1").innerHTML = `
    <td>${selectedCourse.courseCode}</td>
    <td>${selectedCourse.name}</td>
    <td>${selectedCourse.months} months</td> <!-- Duration in months -->
    <td>${selectedCourse.terms.filter(term => term).length || "N/A"}</td>
  `;

  if (selectedCourse.terms.filter(term => term).length > 0) {
    document.getElementById("course-detail-accordion").style.display = "block";
    const accordionContent = document.getElementById("course-detail-accordion-content");
    accordionContent.innerHTML = "";

    selectedCourse.terms.forEach((termContent, index) => {
      if (termContent) {
        accordionContent.innerHTML += `
          <div class="accordion-item">
            <button class="accordion-button">Term ${index + 1}</button>
            <div class="accordion-content">
              <ul>
                <li>${termContent}</li>
              </ul>
            </div>
          </div>
        `;
      }
    });
    setupAccordion();
  } else {
    document.getElementById("course-detail-accordion").style.display = "none";
  }

  document.getElementById("course-detail-table2").innerHTML = `
    <td>${selectedCourse.totalFees}</td>
    <td>${selectedCourse.registrationFees}</td>
    <td>${selectedCourse.downPayment}</td>
  `;

  document.getElementById("course-detail-table3").innerHTML = `
    <td>${selectedCourse.lumpSum}</td>
    <td>${selectedCourse.installments}</td>
    <td>${selectedCourse.month}</td>
    <td>${selectedCourse.totalSubmission}</td>
  `;

  document.getElementById("course-detail-table4").innerHTML = `
    <td>${selectedCourse.monthlyInstallments_1}</td>
    <td>${selectedCourse.monthlyInstallments_2}</td>
    <td>${selectedCourse.monthlyInstallments_3}</td>
  `;

  document.getElementById("course-detail-section").style.display = "block";
}

// Function to setup accordion behavior
function setupAccordion() {
  const accordionButtons = document.querySelectorAll(".accordion-button");
  accordionButtons.forEach(button => {
    button.addEventListener("click", function() {
      const content = this.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
}

// Function to go back to the course list
function goBack() {
  document.getElementById("course-detail-section").style.display = "none";
}

// Show dropdown when Search by Interest field is clicked
document.getElementById("interest").addEventListener("focus", function() {
  const dropdown = document.getElementById("dropdown");
  if (dropdown) {
    dropdown.style.display = "block";
  }
});

// Hide dropdown when clicking anywhere else
document.addEventListener("click", function(event) {
  const dropdown = document.getElementById("dropdown");
  if (dropdown && !event.target.closest("#interest") && !event.target.closest("#dropdown")) {
    dropdown.style.display = "none";
  }
});

// Show categories when Search by Interest field is changed
document.getElementById("interest").addEventListener("change", selectCategory);

// Ensure functions are accessible globally
window.showCategoriesByDuration = showCategoriesByDuration;
window.selectCategory = selectCategory;
window.showCourseDetail = showCourseDetail;
window.goBack = goBack;
