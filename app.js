function load(path, element) {
  const container = document.getElementById("content");
  container.scrollTop = 0;

  clearActiveStates();
  if (element) {
    element.classList.add("active");
  } else {
    const buttons = document.querySelectorAll(".nav-btn");
    buttons.forEach(btn => {
      if (btn.getAttribute("onclick").includes(path)) {
        btn.classList.add("active");
      }
    });
  }

  fetch(path)
    .then(res => res.text())
    .then(html => {
      container.innerHTML = `<div class="note-page-content">${html}</div>`;
    })
    .catch(() => {
      container.innerHTML = "<h2>Failed to load content</h2>";
    });
}

function clearActiveStates() {
  document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));
}

function home() {
  clearActiveStates();
  const container = document.getElementById("content");

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

        <!-- Row 1: 3 cards -->
        <div class="card-row">
            <div class="card" onclick="load('Notes/Maths 2 Linear Algebra/index.html')">
                <h3>Maths 2 Linear Algebra</h3>
            </div>

            <div class="card" onclick="load('Notes/Week 2/index.html')">
                <h3>Week 2</h3>
            </div>

            <div class="card" onclick="load('Notes/Week 3/index.html')">
                <h3>Week 3</h3>
            </div>
        </div>

        <!-- Row 2: 3 cards -->
        <div class="card-row">
            <div class="card" onclick="load('Notes/Week 4/index.html')">
                <h3>Week 4</h3>
            </div>

            <div class="card" onclick="load('Notes/Week 5/index.html')">
                <h3>Week 5</h3>
            </div>

            <div class="card" onclick="load('Notes/Week 6/index.html')">
                <h3>Week 6</h3>
            </div>
        </div>

        <!-- Row 3: 3 cards -->
        <div class="card-row">
            <div class="card" onclick="load('Notes/Week 7/index.html')">
                <h3>Week 7</h3>
            </div>

            <div class="card" onclick="load('Notes/Week 8/index.html')">
                <h3>Week 8</h3>
            </div>

            <div class="card" onclick="load('Notes/Week 9 & 10/index.html')">
                <h3>Week 9 & 10</h3>
            </div>
        </div>

        <!-- Row 4: 2 cards -->
        <div class="card-row center-last">
            <div class="card" onclick="load('Notes/Stats 2 Probability/index.html')">
                <h3>Stats 2 Probability</h3>
            </div>

            <div class="card" onclick="load('Notes/Week 11 & 12/index.html')">
                <h3>Week 11 & 12</h3>
            </div>
        </div>

    </div>

</div>
  
    <footer class="site-footer">
        Prepared by B.R.Giri Subrahmanya
    </footer>

  `;
}

home();