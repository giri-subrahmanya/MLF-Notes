function load(path, element) {
  const container = document.getElementById("content");
  
  // Reset scroll offsets for both desktop pane and mobile window layout
  container.scrollTop = 0;
  window.scrollTo(0, 0);

  clearActiveStates();
  if (element) {
    element.classList.add("active");
  } else {
    const buttons = document.querySelectorAll(".nav-btn");
    buttons.forEach(btn => {
      if (btn.getAttribute("onclick") && btn.getAttribute("onclick").includes(path)) {
        btn.classList.add("active");
      }
    });
  }

  // Append parameters to hide tools AND force horizontal fitting
  const cleanPdfPath = `${path}#toolbar=0&navpanes=0&view=FitH`;

  container.innerHTML = `
    <div class="note-page-content">
      <iframe 
        src="${cleanPdfPath}" 
        type="application/pdf" 
        width="100%" 
        style="border: none; flex-grow: 1; min-height: 85vh;">
       iframe>
    </div>
  `;

  // Automatically collapse the mobile menu navigation drawer after clicking a note selection
  const nav = document.getElementById("sidebar-nav");
  const toggle = document.getElementById("menu-toggle");
  if (nav.classList.contains("mobile-open")) {
    nav.classList.remove("mobile-open");
    toggle.classList.remove("active");
  }
}

function clearActiveStates() {
  document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));
}

function home() {
  clearActiveStates();
  const container = document.getElementById("content");
  window.scrollTo(0, 0);

  container.innerHTML = `
    <div class="home">
        <div class="pb-4">
            <h1>Machine Learning Foundations</h1>

            <p class="intro">
                This website contains the notes for all the weeks of the Machine Learning Foundations offered at IIT Madras BS Data Science and Applications.
            </p>

            <h2>Note to Readers</h2>

            <p class="note">
                These notes were prepared by the course teaching assistants and are maintained as a supplementary resource for
                learning and revision. While considerable care was taken in preparing the material, errors or inconsistencies
                may still remain.
                <br><br>
                Students are advised to use these notes with discretion and to refer primarily to the official course material,
                lectures, announcements, and instructor guidelines whenever necessary. In case of any discrepancy, the official
                course material shall take precedence.
                <br><br>
                Please note that errors in this document shall not be considered grounds for awarding marks or claims during
                evaluations. Readers are encouraged to report any mistakes or ambiguities to the course team for correction in
                future versions.
            </p>
        </div>
        <br>
        <h1>All Topics</h1>
        <br>
        <div class="page">
            <div class="card-grid">

                <div class="card-row">
                    <div class="card" onclick="load('Notes/Maths 2 Linear Algebra.pdf')">
                        <h3>Maths 2 Linear Algebra</h3>
                    </div>

                    <div class="card" onclick="load('Notes/Week 2.pdf')">
                        <h3>Week 2</h3>
                    </div>

                    <div class="card" onclick="load('Notes/Week 3.pdf')">
                        <h3>Week 3</h3>
                    </div>
                </div>

                <div class="card-row">
                    <div class="card" onclick="load('Notes/Week 4.pdf')">
                        <h3>Week 4</h3>
                    </div>

                    <div class="card" onclick="load('Notes/Week 5.pdf')">
                        <h3>Week 5</h3>
                    </div>

                    <div class="card" onclick="load('Notes/Week 6.pdf')">
                        <h3>Week 6</h3>
                    </div>
                </div>

                <div class="card-row">
                    <div class="card" onclick="load('Notes/Week 7.pdf')">
                        <h3>Week 7</h3>
                    </div>

                    <div class="card" onclick="load('Notes/Week 8.pdf')">
                        <h3>Week 8</h3>
                    </div>

                    <div class="card" onclick="load('Notes/Week 9 & 10.pdf')">
                        <h3>Week 9 & 10</h3>
                    </div>
                </div>

                <div class="card-row center-last">
                    <div class="card" onclick="load('Notes/Stats 2 Probability.pdf')">
                        <h3>Stats 2 Probability</h3>
                    </div>

                    <div class="card" onclick="load('Notes/Week 11 & 12.pdf')">
                        <h3>Week 11 & 12</h3>
                    </div>
                </div>

            </div>
        </div>
      
        <footer class="site-footer">
            Prepared by B.R.Giri Subrahmanya
        </footer>
    </div>
  `;

  // Auto close mobile drawer menu if clicking home brand logo
  const nav = document.getElementById("sidebar-nav");
  const toggle = document.getElementById("menu-toggle");
  if (nav && nav.classList.contains("mobile-open")) {
    nav.classList.remove("mobile-open");
    toggle.classList.remove("active");
  }
}

// Mobile Navbar Hamburger Setup Runtime Listener
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("sidebar-nav");
  
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navMenu.classList.toggle("mobile-open");
      toggleBtn.classList.toggle("active");
    });
  }
});

// Initial load
home();