/* EDIT THE PROFILE AND CONTENT HERE. No build tools or internet connection needed. */

/* =====================================================
   ORBIT — GRADUATE PORTFOLIO
   Main content and page interactions
   ===================================================== */


/* =====================================================
   1. GRADUATE PROFILE
   Edit the information here to update the profile.
   ===================================================== */

const profile = {
  name: "Jane Doe",
  initials: "JD",
  subject: "Bachelor of Science in Environmental and Sustainability Studies",
  year: "2040",

  quote: "I'm interested in how people and communities can create more sustainable ways of living.",

  interests: [
    "Sustainable food systems",
    "Community-led innovation",
    "Environmental design"
  ],

  stats: [
    ["12", "Projects"],
    ["8", "Collabs"],
    ["3", "Eco advocacy score"],
    ["1", "Volunteer campaigns"],
    ["4", "Skills developed"]
  ],

  strengths: [
    "Curious thinker",
    "Collaborative",
    "Innovative"
  ]
};


/* =====================================================
   2. COLLABORATION INFORMATION
   Example data for the visual collaboration network.
   ===================================================== */

const collaborators = {
  alex: {
    name: "Alex Morgan",
    collaborations: 12,
    projects: [
      "Community garden design — 5 times",
      "Food-sharing initiative — 4 times",
      "Biodiversity mapping — 3 times"
    ]
  },

  sam: {
    name: "Sam Williams",
    collaborations: 8,
    projects: [
      "Urban planting — 4 times",
      "Waste reduction project — 3 times",
      "Community workshops — 1 time"
    ]
  },

  taylor: {
    name: "Taylor Smith",
    collaborations: 5,
    projects: [
      "Ecological research — 3 times",
      "Campus biodiversity — 2 times"
    ]
  },

  jamie: {
    name: "Jamie Parker",
    collaborations: 3,
    projects: [
      "Campus biodiversity project — 2 times",
      "Food-sharing initiative — 1 time"
    ]
  }
};


/* =====================================================
   3. PROJECT INFORMATION
   Student and teacher perspectives are kept separate.
   ===================================================== */

const projectDetails = {

  food: {
    year: "Year 4 · Final project",
    title: "A more sustainable food future",

    description:
      "Jordan researched ways to reduce food waste through a community-led university initiative.",

    contribution:
      "Coordinated interviews, mapped food-sharing opportunities and presented recommendations.",

    reflection:
      "Good solutions need to be shaped with the people who will use them.",

    teacher:
      "Jordan demonstrated thoughtful engagement with community needs, listened to different perspectives and adapted the original proposal in response to feedback."
  },

  garden: {
    year: "Year 3 · Volunteering",
    title: "Community garden",

    description:
      "Jordan worked with local residents to plan shared growing spaces and accessible activities.",

    contribution:
      "Helped coordinate ideas and adapt plans around residents' needs.",

    reflection:
      "I learned that local knowledge can change what a successful project looks like.",

    teacher:
      "Jordan showed an appreciation for local knowledge and demonstrated an ability to consider how people, plants and shared spaces depend on one another."
  }

};


/* =====================================================
   4. PAGE CONTENT
   Each function generates the content for one page.
   ===================================================== */

const pages = {


  /* ---------------------------------------------------
     4.1 OVERVIEW
     --------------------------------------------------- */

  overview: () => `
    <div class="eyebrow">Graduate portfolio · Overview</div>

    <h1>Graduate Passport</h1>

    <div class="profile graduate-profile">

      <div class="avatar graduate-avatar">
        ${profile.initials}
      </div>

      <div class="graduate-details">

        <div class="mini">CLASS OF ${profile.year}</div>

        <h1>${profile.name}</h1>

        <p class="muted">${profile.subject}</p>

        <div class="tags">
          ${profile.strengths.map(s =>
            `<span class="tag">${s}</span>`
          ).join("")}
        </div>

      </div>
    </div>

    <p class="muted graduate-bio">
      “${profile.quote}”
    </p>


    <!-- Graduate statistics -->

    <div class="grid stats-grid">

      ${profile.stats.map(([number, label]) => `
        <div class="card stat-card">
          <div class="stat">${number}</div>
          <div class="mini">${label}</div>
        </div>
      `).join("")}

    </div>


    <!-- Main feature cards -->

    <div class="grid passport-grid">


      <!-- Uni Wrapped -->

      <button
        type="button"
        class="card passport-feature feature-link"
        data-open-page="wrapped"
      >

        <h2>Uni Wrapped</h2>

        <p class="mini">
          A snapshot of your learning journey
        </p>

        <div class="wrapped-bars" aria-hidden="true">

          ${[
            38,62,48,82,55,72,42,90,60,76,
            46,96,58,70,40,86,64,78,52,92,
            44,68,84,57,74,98,49,65,88,54
          ].map(h => `
            <i style="height:${h}%"></i>
          `).join("")}

        </div>

        <span class="mini">Explore your journey ↗</span>

      </button>


      <!-- Assessing and Monitoring -->

      <button
        type="button"
        class="card passport-feature bracelet-feature feature-link"
        data-open-page="monitoring"
      >

        <h2>Assessing &amp; Monitoring</h2>

        <p class="mini">
          Your wearable sustainability companion
        </p>

        <img
          class="bracelet-image"
          src="bracelet.svg"
          alt="Illustration of a smart monitoring bracelet"
        >

        <span class="mini">View collaboration network ↗</span>

      </button>


      <!-- Recent Milestones -->

      <section class="card passport-feature milestone-feature">

        <h2>Recent Milestones</h2>

        <div class="milestone-content">

          <div class="milestone-copy">

            <p class="milestone-quote">
              “Co-designed a shared growing space with local residents.”
            </p>

            <span class="tag">
              Community garden project
            </span>

          </div>

          <img
            class="milestone-art"
            src="orbit-trophy.svg"
            alt="Lavender trophy with a star"
          >

        </div>

      </section>

    </div>


    <!-- Note from Orbit -->

    <div class="card section orbit-note">

      <div class="orbit-note-heading">

        <img
          class="orbit-avatar note-avatar"
          src="orbit-robot.svg"
          alt="Orbit robot avatar"
        >

        <div class="eyebrow">Note from Orbit</div>

      </div>

      <p class="muted" style="margin-top:10px">
        “Your projects show a growing interest in bringing
        community perspectives into environmental problem-solving.”
      </p>

    </div>
  `,


  /* ---------------------------------------------------
     4.2 MY STORY
     --------------------------------------------------- */

  story: () => `
    <div class="eyebrow">01 / About me</div>

    <h1>My story</h1>

    <p class="muted">
      Written by ${profile.name}, with help organising
      reflections gathered throughout university.
    </p>

    <div class="card section">

      <div class="eyebrow">In my own words</div>

      <p style="font-size:15px;line-height:1.9;margin-top:12px">
        “I started university knowing I cared about the environment,
        but I wasn't sure what I could contribute. Working with
        different communities helped me realise sustainability
        is as much about people as it is about technology.”
      </p>

    </div>

    <div class="card section">

      <div class="eyebrow">What matters to me</div>

      <div class="tags">
        <span class="tag">Community</span>
        <span class="tag">Sustainability</span>
        <span class="tag">Curiosity</span>
        <span class="tag">Shared learning</span>
      </div>

    </div>

    <div class="card section">

      <div class="eyebrow">Looking ahead</div>

      <p class="muted" style="margin-top:8px">
        I want to work on projects that help communities
        shape their own sustainable futures.
      </p>

    </div>
  `,


  /* ---------------------------------------------------
     4.3 LEARNING JOURNEY
     --------------------------------------------------- */

  journey: () => `
    <div class="eyebrow">02 / Four years of development</div>

    <h1>Learning journey</h1>

    <p class="muted">
      A timeline of experiences and changing interests —
      not a ranking of performance.
    </p>

    <div class="timeline section">

      <div class="entry">
        <span class="dot"></span>
        <b>Year 1 · Discovery</b>
        <p>
          Explored environmental issues and discovered
          an interest in community-led change.
        </p>
        <span class="tag">New interests</span>
      </div>

      <div class="entry">
        <span class="dot"></span>
        <b>Year 2 · Development</b>
        <p>
          Joined a group project investigating waste
          reduction across campus.
        </p>
        <span class="tag">Teamwork</span>
      </div>

      <div class="entry">
        <span class="dot"></span>
        <b>Year 3 · Application</b>
        <p>
          Volunteered with a community garden and learned
          to adapt ideas to local needs.
        </p>
        <span class="tag">Practical experience</span>
      </div>

      <div class="entry">
        <span class="dot"></span>
        <b>Year 4 · Integration</b>
        <p>
          Designed a sustainable food initiative,
          bringing research and community perspectives together.
        </p>
        <span class="tag">Final-year project</span>
      </div>

    </div>
  `,


  /* ---------------------------------------------------
     4.4 PROJECTS AND EXPERIENCES
     --------------------------------------------------- */

  projects: () => `
    <div class="eyebrow">03 / Evidence of learning</div>

    <h1>Projects and experiences</h1>

    <p class="muted">
      Select a project to explore the evidence behind it.
    </p>

    <div class="grid two">

      <button
        type="button"
        class="card project"
        data-project="food"
      >

        <span class="tag">Year 4 · Final project</span>

        <h2 style="margin-top:12px">
          A more sustainable food future
        </h2>

        <p class="muted">
          A community-led approach to reducing food waste.
        </p>

        <span class="mini">View project ↗</span>

      </button>


      <button
        type="button"
        class="card project"
        data-project="garden"
      >

        <span class="tag">Year 3 · Volunteering</span>

        <h2 style="margin-top:12px">
          Community garden
        </h2>

        <p class="muted">
          Planning shared growing spaces with local residents.
        </p>

        <span class="mini">View experience ↗</span>

      </button>

    </div>


    <div id="project-detail" class="card section">

      <div class="eyebrow">Project details</div>

      <p class="muted" style="margin-top:8px">
        Choose a project above to see Jordan's contribution,
        evidence and reflection.
      </p>

    </div>
  `,


  /* ---------------------------------------------------
     4.5 UNI WRAPPED
     Five simple highlights celebrating the journey.
     --------------------------------------------------- */

  wrapped: () => `
    <div class="eyebrow">04 / Your university journey</div>

    <h1>Uni Wrapped ✨</h1>

    <p class="muted">
      A celebration of the people, places and ecosystems
      that shaped your journey.
    </p>


    <div class="grid wrapped-summary">


      <div class="card wrapped-card">

        <div class="mini">MOST ATTENDED CLASS</div>

        <h2>Ecological Design</h2>

        <div class="stat">28</div>

        <p class="mini">Classes attended</p>

      </div>


      <div class="card wrapped-card">

        <div class="mini">MOST COLLABORATED WITH</div>

        <h2>Alex Morgan</h2>

        <div class="stat">12</div>

        <p class="mini">Collaborations</p>

      </div>


      <div class="card wrapped-card">

        <div class="mini">MOST TIME SPENT ON</div>

        <h2>Community gardening</h2>

        <div class="stat">46 hrs</div>

        <p class="mini">Shared growing activities</p>

      </div>


      <div class="card wrapped-card">

        <div class="mini">MOST EXPLORED ECOSYSTEM</div>

        <h2>Urban biodiversity</h2>

        <div class="stat">9</div>

        <p class="mini">Explorations and activities</p>

      </div>


      <div class="card wrapped-card">

        <div class="mini">MEANINGFUL COMMUNITY CONTRIBUTIONS</div>

        <h2>Food-sharing initiatives</h2>

        <div class="stat">6</div>

        <p class="mini">Community contributions</p>

      </div>

    </div>


    <p class="mini section">
      These highlights celebrate participation, relationships
      and contributions rather than academic rankings.
    </p>
  `,


  /* ---------------------------------------------------
     4.6 ASSESSING AND MONITORING
     Visual collaboration network and class recording.
     --------------------------------------------------- */

  monitoring: () => `
    <div class="eyebrow">05 / Assessing & Monitoring</div>

    <h1>Collaboration Network</h1>

    <p class="muted">
      A visual map of the people and shared work
      that shaped your journey.
    </p>


    <!-- Class recording display -->

    <div class="card section">

      <div class="mini">CLASS ACTIVITY</div>

      <div class="record-row">

        <button class="action" type="button">
          View Class
        </button>

        <button class="action" type="button">
          Record Class
        </button>

        <span class="record-indicator">
          <span class="record-dot"></span>
          REC
        </span>

      </div>


      <!-- Decorative recording waveform -->

      <div class="waveform" aria-label="Decorative recording waveform">

        ${[
          12,25,16,35,18,45,22,32,14,40,
          20,30,12,38,17,27,14,42,19,30
        ].map(height => `
          <i style="height:${height}px"></i>
        `).join("")}

      </div>

      <p class="mini">
        Class recording interface · Visual demonstration only
      </p>

    </div>


    <!-- Collaboration network -->

    <div class="card section">

      <h2>People you've collaborated with</h2>

      <p class="mini">
        Thicker connections represent more frequent collaboration.
      </p>


      <div class="network">

        <svg
          viewBox="0 0 320 220"
          class="network-lines"
          aria-hidden="true"
        >

          <line
            x1="160" y1="110"
            x2="65" y2="45"
            stroke-width="8"
          />

          <line
            x1="160" y1="110"
            x2="260" y2="45"
            stroke-width="5"
          />

          <line
            x1="160" y1="110"
            x2="65" y2="180"
            stroke-width="3"
          />

          <line
            x1="160" y1="110"
            x2="260" y2="180"
            stroke-width="2"
          />

        </svg>


        <button
          class="person-node main-node"
          type="button"
        >
          You
        </button>


        <button
          class="person-node node-one"
          type="button"
          data-person="alex"
        >
          Alex
        </button>


        <button
          class="person-node node-two"
          type="button"
          data-person="sam"
        >
          Sam
        </button>


        <button
          class="person-node node-three"
          type="button"
          data-person="taylor"
        >
          Taylor
        </button>


        <button
          class="person-node node-four"
          type="button"
          data-person="jamie"
        >
          Jamie
        </button>

      </div>


      <!-- Selected collaborator details -->

      <div id="person-detail" class="reply">

        <p class="muted">
          Select a person in the network to explore
          your shared work.
        </p>

      </div>

    </div>


    <p class="mini section">
      This network is an illustrative representation of
      collaboration and shared learning.
    </p>
  `,


  /* ---------------------------------------------------
     4.7 FEEDBACK
     --------------------------------------------------- */

  feedback: () => `
    <div class="eyebrow">06 / Multiple perspectives</div>

    <h1>Perspectives and feedback</h1>

    <p class="muted">
      Different people can understand the same experience differently.
      These perspectives stay separate.
    </p>

    <div class="card section">

      <div class="eyebrow">Jordan · Self-reflection</div>

      <p style="margin-top:9px">
        “I learned to listen before proposing solutions.
        I hadn't realised how much local knowledge already existed.”
      </p>

    </div>


    <div class="card section">

      <div class="eyebrow">Peer perspective</div>

      <p style="margin-top:9px">
        “Jordan helped the group bring different opinions together
        and made sure everyone's ideas were heard.”
      </p>

    </div>


    <div class="card section">

      <div class="eyebrow">Educator perspective</div>

      <p style="margin-top:9px">
        “The final project showed thoughtful engagement with
        community feedback and an ability to adapt the original proposal.”
      </p>

    </div>


    <p class="mini section">
      Feedback is contextual, not converted into a popularity score.
    </p>
  `,


  /* ---------------------------------------------------
     4.8 AI REFLECTIONS
     --------------------------------------------------- */

  ai: () => `
    <div class="eyebrow">07 / Your learning companion</div>

    <h1>Orbit reflections</h1>

    <p class="muted">
      Orbit helps ${profile.name} organise evidence and ask questions.
      It does not decide what a person is worth.
    </p>


    <div class="card section">

      <div class="orbit-card">

        <img
          class="orbit-avatar"
          src="orbit-robot.svg"
          alt="Orbit robot avatar"
        >

        <div>
          <b>Orbit</b>
          <div class="mini">Personal AI learning companion</div>
        </div>

      </div>


      <div class="line"></div>

      <p>
        “Across your projects, I noticed you increasingly included
        community perspectives in your planning.”
      </p>

      <p style="color:#b4d8fa;margin-top:12px">
        Would you say this reflects a change in how you
        approach problem-solving?
      </p>


      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:12px">

        <button class="action" data-reflect="yes">
          Yes, my approach has changed
        </button>

        <button class="action" data-reflect="no">
          I see it differently
        </button>

      </div>


      <div id="orbit-reply" class="reply" hidden></div>

    </div>


    <p class="mini section">
      Jordan can challenge, correct or leave out Orbit's interpretations.
    </p>
  `,


  /* ---------------------------------------------------
     4.9 PRIVACY
     --------------------------------------------------- */

  privacy: () => `
    <div class="eyebrow">08 / Your data, your decisions</div>

    <h1>Privacy and sharing</h1>

    <p class="muted">
      Jordan decides what is included and who can see it.
    </p>


    <div class="card section">

      <div style="display:flex;justify-content:space-between;gap:10px">

        <b>Portfolio sharing</b>

        <span class="tag">Student-controlled</span>

      </div>


      <div class="setting">
        <span>Projects and experiences</span>
        <span class="status">Approved to share</span>
      </div>


      <div class="setting">
        <span>Personal reflections</span>
        <span style="font-size:11px;color:#f1c77b">Private</span>
      </div>


      <div class="setting">
        <span>Peer feedback</span>
        <span style="font-size:11px;color:#f1c77b">Permission required</span>
      </div>

    </div>


    <div class="card section">

      <b>Your controls</b>

      <p class="muted" style="margin-top:8px">
        Review, edit or remove information. Choose what to share.
        Challenge an AI interpretation at any time.
      </p>

      <button
        class="action"
        style="margin-top:12px"
        data-privacy
      >
        Review sharing settings
      </button>

      <div id="privacy-reply" class="reply" hidden></div>

    </div>
  `

};


/* =====================================================
   5. PAGE NAVIGATION
   Displays the requested page and updates the sidebar.
   ===================================================== */

const content = document.getElementById("content");


function showPage(id) {

  content.innerHTML = (pages[id] || pages.overview)();

  document.querySelectorAll(".nav").forEach(button => {

    const active = button.dataset.page === id;

    button.classList.toggle("active", active);

    button.setAttribute(
      "aria-current",
      active ? "page" : "false"
    );

  });

}


/* Existing sidebar navigation */

document.querySelectorAll(".nav").forEach(button => {

  button.addEventListener("click", () => {
    showPage(button.dataset.page);
  });

});


/* =====================================================
   6. CLICK INTERACTIONS
   All page interactions are handled here.
   ===================================================== */

content.addEventListener("click", event => {


  /* ---------------------------------------------------
     6.1 Open Uni Wrapped or Monitoring
     --------------------------------------------------- */

  const openPage = event.target.closest("[data-open-page]");

  if (openPage) {

    showPage(openPage.dataset.openPage);

    return;

  }


  /* ---------------------------------------------------
     6.2 Select a collaborator
     --------------------------------------------------- */

  const person = event.target.closest("[data-person]");

  if (person) {

    const selectedPerson = collaborators[person.dataset.person];

    if (!selectedPerson) return;

    const detail = document.getElementById("person-detail");

    detail.innerHTML = `

      <div class="eyebrow">COLLABORATION DETAILS</div>

      <h2>${selectedPerson.name}</h2>

      <div class="stat">
        ${selectedPerson.collaborations}
      </div>

      <p class="mini">Shared collaborations</p>

      <div class="line"></div>

      <b>What we worked on</b>

      <ul>
        ${selectedPerson.projects.map(project => `
          <li>${project}</li>
        `).join("")}
      </ul>

    `;

    return;

  }


  /* ---------------------------------------------------
     6.3 Open project details
     --------------------------------------------------- */

  const project = event.target.closest("[data-project]");

  if (project) {

    const selectedProject = projectDetails[project.dataset.project];

    if (!selectedProject) return;

    const detail = document.getElementById("project-detail");

    detail.dataset.currentProject = project.dataset.project;

    detail.dataset.currentPerspective = "student";

    renderProjectDetail(detail);

    return;

  }


  /* ---------------------------------------------------
     6.4 Switch between student and teacher perspective
     --------------------------------------------------- */

  const perspectiveButton = event.target.closest("[data-perspective]");

  if (perspectiveButton) {

    const detail = document.getElementById("project-detail");

    if (!detail) return;

    detail.dataset.currentPerspective = perspectiveButton.dataset.perspective;

    renderProjectDetail(detail);

    return;

  }


  /* ---------------------------------------------------
     6.5 Orbit reflection buttons
     --------------------------------------------------- */

  const reflect = event.target.closest("[data-reflect]");

  if (reflect) {

    const box = document.getElementById("orbit-reply");

    box.hidden = false;

    box.textContent =
      reflect.dataset.reflect === "yes"
        ? "That's useful context. Would you like to add an example from your experience? Your own explanation remains part of your story."
        : "Thanks for correcting me. My interpretation is only a suggestion, and your perspective takes priority.";

    return;

  }


  /* ---------------------------------------------------
     6.6 Privacy settings
     --------------------------------------------------- */

  if (event.target.closest("[data-privacy]")) {

    const box = document.getElementById("privacy-reply");

    box.hidden = false;

    box.textContent =
      "In the full system, Jordan would choose exactly which sections to share and with whom.";

  }

});


/* =====================================================
   7. PROJECT DETAIL RENDERER
   Changes the displayed perspective without losing
   the selected project.
   ===================================================== */

function renderProjectDetail(detail) {

  const project = projectDetails[detail.dataset.currentProject];

  const perspective = detail.dataset.currentPerspective;

  if (!project) return;


  const isTeacher = perspective === "teacher";


  detail.innerHTML = `

    <div class="eyebrow">${project.year}</div>

    <h2 style="margin-top:8px">${project.title}</h2>

    <p class="muted">${project.description}</p>

    <div class="line"></div>


    <div class="perspective-switch">

      <button
        type="button"
        class="action ${!isTeacher ? "active" : ""}"
        data-perspective="student"
        aria-pressed="${!isTeacher}"
      >
        Student perspective
      </button>

      <button
        type="button"
        class="action ${isTeacher ? "active" : ""}"
        data-perspective="teacher"
        aria-pressed="${isTeacher}"
      >
        Teacher's perspective
      </button>

    </div>


    ${isTeacher ? `

      <div class="eyebrow" style="margin-top:18px">
        Educator observation
      </div>

      <p class="muted">${project.teacher}</p>

    ` : `

      <b>Contribution</b>

      <p class="muted">${project.contribution}</p>

      <b>Reflection</b>

      <p class="muted">“${project.reflection}”</p>

    `}

  `;

}


/* =====================================================
   8. INITIAL PAGE
   Open the Overview when the website first loads.
   ===================================================== */

showPage("overview");
