
const DATA = {
  nom: "Basile Nguyen",
  specialites: "Software Engineer · Video Game Developper Gameplay · UI/UX · Mobile",
  photo: "Images/backgrd_img/Header.png",
  favicon: "Images/backgrd_img/favicon.ico",
  cv: "Documents/CV_Basile_NGUYEN.pdf",
  presentation:
    "Portfolio",
  contact: {
    telephone: "+33 7 81 81 45 60",
    email: "ngy.b@hotmail.com",
    github: "https://github.com/BasileNgy",
    linkedin: "https://www.linkedin.com/in/basile-nguyen-481995134/",
  },

  projets: [
    {
      titre: "Playing Cards Collection Manager",
      categorie: "Personal",
      role: "Personal project",
      meta: ["2026", ".NET", "ASP.NET Core Web API", "React", "MySQL"],
      desc: [
        "A full-stack application to register and manage a collection of playing cards. A REST API built with ASP.NET Core handles the cards and stores them in a MySQL database, and a React frontend lets users browse, add and edit their cards.",
        "I started this project to practice building a complete .NET application end to end, with a focus on professional architecture: worked with Postman tests and created a dedicated CI/CD pipeline.",
      ],
      travail: [
        "Design and implementation of a REST API with ASP.NET Core Web API",
        "Connection to a MySQL database to store and retrieve the cards",
        "Postman collections to test every endpoint of the API",
        "CI/CD pipeline with automated test execution on each push",
        "React frontend consuming the API to display and manage the cards",
      ],
      images: [
        { src: "Images/Cards_img/screen1_640x360.png", alt: "" },
      ],
      liens: [
        
      ],
    },
    {
      titre: "Wildfire",
      categorie: "Professional",
      role: "Developer at Exkee",
      meta: ["2024/2026", "Unreal Engine"],
      desc: [
        "Rescue Ops: Wildfire is an immersive firefighter simulation game where you step into the boots of a frontline responder battling massive wildfires around the globe. Whether solo or in co-op with up to four players, you’ll face unpredictable megafires shaped by dynamic weather and terrain conditions.",
        "Your mission? Save lives and contain the blaze. Fly helicopters, drive French wildland fire engines, and use realistic tools, from hoses and clearing gear to tactical backfires. Rescue civilians, assess injuries, and coordinate support like water bombers or ground reinforcements.",
      ],
      travail: [
        "Gameplay Ability System (GAS) features and abilities, managing networked input handling, audio synchronization, and client-server replication.",
        "CI/CD pipelines Integration, automating build, testing, and deployment processes on Steam and Epic Games platforms.",
        "Worked in an Agile environment, sprint planning sessions, backlog refinement, and long-term planning.",
      ],
      images: [
        { src: "Images/Wildfire_img/Wildfire_1.png", alt: "The team" },
        { src: "Images/Wildfire_img/Wildfire_2.png", alt: "Fire truck" },
      ],
      liens: [
        { label: "Exkee", url: "https://www.exkee.com/" },
        { label: "Steam", url: "https://store.steampowered.com/app/2915770/Rescue_Ops_Wildfire/" },
      ],
    },
    {
      titre: "Buddy Arena",
      categorie: "Professional",
      role: "Developer at Exkee",
      meta: ["2023", "Unity"],
      desc: [
        "Buddy Arena is a fast-paced MOBA (Multiplayer Online Battle Arena) game set in the magical NEXUS World. Players, known as Crushers, team up with their quirky Buddies, each possessing unique abilities and combat styles. The game features intense 2-3 minute battles where strategy and choice of Buddies, weapons, and abilities are crucial.",
        "This project was distributed by Affyn. Originally created as a minigame, it progressively became the main game during development. Buddy Arena takes place in a metaverse: as intended, players can pay for loot through NFT and cryptocurrency. On this project, I worked as UI/UX developer, creating UI structures and menu screens.",
      ],
      travail: [
        "Use of Playfab database to manage players’ inventories",
        "Use of GraphQL requests to manage players’ data through Apollo",
        "Implementation of a generic cards system, with selection, interaction and sorting",
        "Creation of menu interfaces managed with a state machine",
      ],
      images: [
        { src: "Images/BuddyArena_img/MainMenu_640x360.png", alt: "Main menu" },
        { src: "Images/BuddyArena_img/BuddiesSelection_640x360.png", alt: "Buddies selection" },
        { src: "Images/BuddyArena_img/BuddiesInfo_640x360.png", alt: "Buddies loadout" },
        { src: "Images/BuddyArena_img/EquipmentWeapon_640x360.png", alt: "Equipment menu" },
        { src: "Images/BuddyArena_img/EquipmentSkin_640x360.png", alt: "Skin menu" },
      ],
      liens: [
        { label: "Exkee", url: "https://www.exkee.com/" },
        { label: "Buddy Arena", url: "https://www.buddyarena.com/" },
      ],
    },
    {
      titre: "Andy vs the Aliens",
      categorie: "Game jam",
      role: "Game jam",
      meta: ["01/2025", "48h", "Unity", "8 persons"],
      desc: [
        "This project was a 48h game jam with an 8-person team: 3 graphic artists, 1 sound designer, 2 developers and 2 game designers. Andy vs the Aliens is an arcade game where the objective is to stay alive on a planet as long as possible. To succeed, you need to protect yourself from the aliens coming around you and keep an eye on your oxygen bar. You can use your bubble gun or throw a large bubble to blow away your enemies.",
      ],
      travail: [
        "Spherical movements for players, enemies, projectiles...",
        "Animations implementation",
        "UI/UX integration",
        "Enemies behaviour, spawning rate through time",
      ],
      images: [
        { src: "Images/Andy_img/AndyMenu_640x360.png", alt: "Main menu" },
        { src: "Images/Andy_img/AndyBattle_640x360.png", alt: "Battle" },
      ],
      liens: [
        { label: "Itch.io", url: "https://marine-millot.itch.io/bubble?secret=Hux3OK3TtoykXsGBhP5OvDsLtA" },
      ],
    },
    {
      titre: "Geopolitical Simulator 4 Edition 2022 & 4th Generation Warfare",
      categorie: "Internship",
      role: "Internship in Eversim Simulation & Serious Gaming studio",
      meta: ["10/2021 - 03/2022", "6 months", "C++"],
      desc: [
        "4th Generation Warfare is the transcription of modern 21st-century conflicts into a turn-based strategy video game. As the leader of a nation, control and deploy dozens of characters on the world map to destabilize your adversaries and establish your supremacy. Play as you want: hacking, sabotage, political interference, military attacks, corruption, assassination, energy domination, information theft…",
        "Power & Revolution, Geopolitical Simulator 4 is a simulation of our current world that reproduces its functioning in depth. The player can choose to manage a single country or multiple nations simultaneously and develop collaborative strategies to change the world’s destiny. All countries of the world are represented with their own variables and functioning.",
      ],
      travail: [
        "Implementation of a summary tab of possible actions for the player",
        "Participation in game design meetings about the summary tab",
        "Improvement of the game’s contract interface and creation of a new contract",
        "Creation of a test menu for the economic engine (reserved for testers)",
        "Implementation of new game mechanics with the mercenary DLC",
        "Creation of new actions and interactions with the xls databases",
      ],
      images: [
        { src: "Images/Eversim_img/screen0_640x360.png", alt: "4th Generation Warfare poster" },
        { src: "Images/Eversim_img/screen1_640x360.png", alt: "Gameplay on the city of Paris" },
        { src: "Images/Eversim_img/screen4_640x360.png", alt: "Commercial contract interface" },
        { src: "Images/Eversim_img/screen3_640x360.png", alt: "Summary panel of actions" },
        { src: "Images/Eversim_img/screen2_640x360.png", alt: "Economic test panel" },
      ],
      liens: [
        { label: "Eversim", url: "https://eversim-sas.com/" },
        { label: "GPS 4", url: "http://www.power-and-revolution.com/store_p20.php" },
        { label: "4th GW", url: "https://4th-generation-warfare.com/news.php" },
      ],
    },
    {
      titre: "Nimbus",
      categorie: "Personal",
      role: "Personal project",
      meta: ["2022", "1 month", "Unity"],
      desc: [
        "Action game where the player is a hero with many abilities. The objective is to go through the level and fight the boss. I started this project to challenge my knowledge and track my skill progress.",
      ],
      travail: [
        "Animation management with Animator Controller",
        "State machine AI",
        "Cinemachine",
        "AI management with a NavMesh Agent",
        "Shader Graph",
        "Post processing",
      ],
      images: [
        { src: "Images/Nimbus_img/Screen3_640x360.png", alt: "Nimbus screenshot 1" },
        { src: "Images/Nimbus_img/Screen2_640x360.png", alt: "Nimbus screenshot 2" },
      ],
      liens: [{ label: "Video", url: "https://www.youtube.com/watch?v=gyzbqArPdqg&ab_channel=BasileNgy" }],
    },
    {
      titre: "Flaunted",
      categorie: "Game jam",
      role: "Game jam",
      meta: ["03/2021", "48h", "Unity", "5 persons"],
      desc: [
        "The player is chased by a reaper in a dark mansion. They have exactly 30 seconds to move and perform all the actions they want to escape: open a chest, open a door, use an item from their inventory. However, each action costs time. At the end of their turn, the player can no longer move; it is now the reaper’s turn to move and try to catch them. The lamp’s lighting is proportional to the player’s mental resistance, which varies according to the items used and found.",
      ],
      travail: [
        "Creation and management of animations with Animator Controller",
        "Management of movements with a NavMesh Agent",
        "Implementation of inventory and item drop rates",
        "UI display for obtaining items and integrating their effects",
        "UI indicator to know the direction of the reaper (not integrated)",
      ],
      images: [
        { src: "Images/Flaunted_img/screen4_640x360.png", alt: "Flaunted screenshot 1" },
        { src: "Images/Flaunted_img/screen1_640x360.png", alt: "Flaunted screenshot 2" },
        { src: "Images/Flaunted_img/screen2_640x360.png", alt: "Flaunted screenshot 3" },
        { src: "Images/Flaunted_img/screen3_640x360.png", alt: "Flaunted screenshot 4" },
        { src: "Images/Flaunted_img/screen6_640x360.png", alt: "Flaunted screenshot 5" },
        { src: "Images/Flaunted_img/screen5_640x360.png", alt: "Flaunted screenshot 6" },
      ],
      liens: [
        { label: "Repository", url: "https://github.com/florianB42/WonderJamSansArtisteFixe" },
        { label: "Itch.io", url: "https://aboulange.itch.io/flaunted" },
      ],
    },
    {
      titre: "Speller",
      categorie: "Personal",
      role: "Personal project",
      meta: ["2021", "Unity"],
      desc: [
        "The game is a turn-based duel on a 2D chessboard. The concept is quite similar to Dofus fights, but attacks are not immediate: spells progress across the board at their own pace. To defeat your opponent, you need to develop a strategy over several turns to dodge their spells and trap them in yours. I chose to leave the game at the prototype stage to start another project and explore new challenges.",
      ],
      travail: [
        "Animation management with Animator Controller",
        "Turn-based game system",
        "UI/UX interface for menus & spells",
        "Added shaders as UX feedback",
      ],
      images: [
        { src: "Images/Speller_img/Screen5_640x360.png", alt: "Chessboard / arena" },
        { src: "Images/Speller_img/Screen6_640x360.png", alt: "Spells display" },
        { src: "Images/Speller_img/Screen7_640x360.png", alt: "Spell orientations" },
        { src: "Images/Speller_img/Screen8_640x360.png", alt: "Damage effect" },
      ],
      liens: [
        { label: "Repository", url: "https://github.com/BasileNgy/SpellerUnity" },
        { label: "Prototype", url: "https://drive.google.com/drive/folders/1jYp2nUW6u7H0EswJYsN0aS6OmH2ara-F?usp=sharing" },
      ],
    },
    {
      titre: "Medicines Listing",
      categorie: "University",
      role: "University project",
      meta: ["05/2020", "1 month", "Java", "5 persons"],
      desc: [
        "The project’s objective was to set up a website listing all the medications in circulation, with additional information available for each product. We used an MVC architecture with a database connection, displayed on the client side with PHP/HTML. A desktop client is available to manage the administration of the site as well as requests for the creation of professional accounts.",
      ],
      travail: [
        "Setting up MySQL database and DAO",
        "Creating pages and servlets for presentations, compositions, and peer reviews",
        "Integration of graphical statistics with PowerBI",
        "Private text chat rooms",
      ],
      images: [
        { src: "Images/Medicament_img/screen1_640x360.png", alt: "Medicines Listing screenshot 1" },
        { src: "Images/Medicament_img/screen2_640x360.png", alt: "Medicines Listing screenshot 2" },
        { src: "Images/Medicament_img/screen3_640x360.png", alt: "Medicines Listing screenshot 3" },
        { src: "Images/Medicament_img/screen6_640x360.png", alt: "Medicines Listing screenshot 4" },
      ],
      liens: [{ label: "Repository", url: "https://github.com/BasileNgy/MedicamentLightClient" }],
    },
  ],
};

(function () {
  /* ---------- Styles ---------- */
  const css = `
  :root{
    --fond:#eef1f6; --surface:#f8f9fc; --texte:#14213d; --doux:#55607a; --trait:#c9d0de;
    --accent:#2f4bff; --sur-accent:#fff; --pied:#14213d; --sur-pied:#e8ecf5;
  }
  @media (prefers-color-scheme: dark){
    :root{ --fond:#0f1626; --surface:#161f35; --texte:#e8ecf5; --doux:#9aa5bf; --trait:#2a3550;
      --accent:#8fa2ff; --sur-accent:#0f1626; --pied:#0a1020; --sur-pied:#e8ecf5; }
  }
  *{box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{margin:0;background:var(--fond);color:var(--texte);
    font-family:"Bricolage Grotesque",system-ui,-apple-system,"Segoe UI",sans-serif;line-height:1.6}
  a{color:inherit}
  img{max-width:100%}
  :focus-visible{outline:3px solid var(--accent);outline-offset:3px;border-radius:4px}
  .wrap{max-width:1100px;margin:0 auto;padding:0 24px}

  .btn{display:inline-block;font:inherit;font-size:.95rem;font-weight:600;text-decoration:none;
    padding:8px 18px;border-radius:8px;border:1.5px solid var(--accent);cursor:pointer;
    background:transparent;color:var(--texte)}
  .btn:hover{background:color-mix(in srgb,var(--accent) 14%,transparent)}
  .btn.plein{background:var(--accent);color:var(--sur-accent)}
  .btn.plein:hover{background:var(--accent);filter:brightness(1.1)}

  /* Présentation */
  .hero{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;padding:56px 0 64px}
  .hero img{width:100%;height:auto;border-radius:12px;display:block}
  .hero h1{margin:0;font-weight:800;line-height:.95;letter-spacing:-.04em;
    font-size:clamp(2.8rem,7vw,5.2rem);animation:entree .8s cubic-bezier(.2,.7,.2,1) both}
  .hero .spec{margin:14px 0 0;color:var(--doux);font-size:1.15rem;font-weight:600}
  .hero p.pres{margin:20px 0 0;max-width:60ch}
  .hero .actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}
  @keyframes entree{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}

  /* Projets */
  #projets{padding:40px 0 72px}
  h2{margin:0 0 20px;font-size:1.8rem;letter-spacing:-.02em}
  .filtres{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:28px}
  .filtres button{font:inherit;font-size:.95rem;padding:6px 16px;border-radius:999px;cursor:pointer;
    background:transparent;color:var(--texte);border:1.5px solid var(--trait)}
  .filtres button:hover{border-color:var(--accent)}
  .filtres button[aria-pressed="true"]{background:var(--accent);border-color:var(--accent);color:var(--sur-accent)}

  .projet{display:grid;grid-template-columns:1.1fr 1fr;gap:36px;padding:32px;margin-bottom:28px;
    background:var(--surface);border:1.5px solid var(--trait);border-radius:14px}
  .projet h3{margin:0;font-size:clamp(1.5rem,3vw,2rem);letter-spacing:-.02em;line-height:1.15}
  .projet .role{margin:6px 0 0;font-weight:600;color:var(--accent)}
  .projet .meta{margin:2px 0 14px;color:var(--doux);font-size:.95rem}
  .projet p{margin:0 0 12px;max-width:68ch}
  .projet h4{margin:18px 0 6px;font-size:1rem}
  .projet ul{margin:0;padding-left:20px}
  .projet li{margin-bottom:4px}
  .projet .liens{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}

  /* Carrousel */
  .media{align-self:start}
  .carrousel{position:relative;overflow:hidden;border-radius:10px;background:var(--trait);aspect-ratio:16/9}
  .piste{display:flex;height:100%;transition:transform .45s cubic-bezier(.2,.7,.2,1)}
  .piste img{flex:0 0 100%;width:100%;height:100%;object-fit:cover;display:block}
  .carrousel .nav{position:absolute;top:50%;transform:translateY(-50%);width:40px;height:40px;
    border-radius:50%;border:0;cursor:pointer;font-size:1.3rem;line-height:1;
    background:rgba(15,22,38,.65);color:#fff}
  .carrousel .nav:hover{background:rgba(15,22,38,.9)}
  .carrousel .prec{left:10px} .carrousel .suiv{right:10px}
  .points{display:flex;justify-content:center;gap:8px;margin-top:12px}
  .points button{width:12px;height:12px;padding:0;border-radius:50%;cursor:pointer;
    border:1.5px solid var(--doux);background:transparent}
  .points button[aria-current="true"]{background:var(--accent);border-color:var(--accent)}
  .legende{margin:8px 0 0;text-align:center;font-size:.9rem;color:var(--doux)}

  /* Contact */
  footer{background:var(--pied);color:var(--sur-pied);padding:72px 0 56px}
  footer h2{font-size:clamp(2rem,5vw,3rem);margin-bottom:28px}
  footer dl{display:grid;grid-template-columns:max-content 1fr;gap:10px 28px;margin:0}
  footer dt{color:#9aa5bf}
  footer dd{margin:0}
  footer a{color:var(--sur-pied)}
  footer .haut{display:inline-block;margin-top:36px}

  @media (max-width:860px){
    .hero{grid-template-columns:1fr;gap:28px;padding-top:32px}
    .projet{grid-template-columns:1fr;padding:22px;gap:24px}
  }
  @media (prefers-reduced-motion: reduce){
    html{scroll-behavior:auto}
    .hero h1{animation:none}
    .piste{transition:none}
  }`;

  /* ---------- Police, titre, favicon ---------- */
  const police = document.createElement("link");
  police.rel = "stylesheet";
  police.href =
    "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&display=swap";
  document.head.appendChild(police);

  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  /*const icone = document.createElement("link");
  icone.rel = "icon";
  icone.href = DATA.favicon;
  document.head.appendChild(icone);*/

  document.documentElement.lang = "en";
  document.title = `PortFolio · ${DATA.nom}`;
  if (!document.querySelector('meta[name="viewport"]')) {
    const m = document.createElement("meta");
    m.name = "viewport";
    m.content = "width=device-width, initial-scale=1";
    document.head.appendChild(m);
  }

  /* ---------- Gabarits ---------- */
  const categories = ["All", ...new Set(DATA.projets.map((p) => p.categorie))];

  const carrousel = (p) => {
    const multi = p.images.length > 1;
    return `
    <div class="media">
      <div class="carrousel" role="group" aria-roledescription="carousel" aria-label="${p.titre} screenshots">
        <div class="piste">
          ${p.images.map((im) => `<img src="${im.src}" alt="${im.alt}" loading="lazy">`).join("")}
        </div>
        ${
          multi
            ? `<button type="button" class="nav prec" data-dir="-1" aria-label="Previous image">‹</button>
               <button type="button" class="nav suiv" data-dir="1" aria-label="Next image">›</button>`
            : ""
        }
      </div>
      ${
        multi
          ? `<div class="points">${p.images
              .map((im, i) => `<button type="button" data-slide="${i}" aria-label="Image ${i + 1}" aria-current="${i === 0}"></button>`)
              .join("")}</div>`
          : ""
      }
      <p class="legende" aria-live="polite">${p.images[0].alt}</p>
    </div>`;
  };

  const projet = (p) => `
    <article class="projet" data-index="0">
      <div>
        <h3>${p.titre}</h3>
        <p class="role">${p.role}</p>
        <p class="meta">${p.meta.join(", ")}</p>
        ${p.desc.map((d) => `<p>${d}</p>`).join("")}
        <h4>Work done</h4>
        <ul>${p.travail.map((t) => `<li>${t}</li>`).join("")}</ul>
        <div class="liens">
          ${p.liens
            .map((l, i) => `<a class="btn ${i === 0 ? "plein" : ""}" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`)
            .join("")}
        </div>
      </div>
      ${carrousel(p)}
    </article>`;

  const c = DATA.contact;
  const page = `
  <header class="wrap">
    <section class="hero" id="presentation">
      <img src="${DATA.photo}" alt="${DATA.nom}">
      <div>
        <h1>${DATA.nom}</h1>
        <p class="spec">${DATA.specialites}</p>
        <h2>${DATA.presentation}</h2>
        <div class="actions">
          <a href="#contact" class="btn plein">Contact me</a>
          <a href="${DATA.cv}" target="_blank" rel="noopener" class="btn">Download CV</a>
        </div>
      </div>
    </section>
  </header>

  <main class="wrap" id="projets">
    <h2>Projects</h2>
    <div class="filtres" role="group" aria-label="Filter projects by category">
      ${categories.map((t, i) => `<button type="button" data-cat="${t}" aria-pressed="${i === 0}">${t}</button>`).join("")}
    </div>
    <div id="liste"></div>
  </main>

  <footer id="contact">
    <div class="wrap">
      <h2>Contact</h2>
      <dl>
        <dt>Name</dt><dd>${DATA.nom}</dd>
        <dt>Phone</dt><dd><a href="tel:${c.telephone.replace(/\s/g, "")}">${c.telephone}</a></dd>
        <dt>Email</dt><dd><a href="mailto:${c.email}">${c.email}</a></dd>
        <dt>GitHub</dt><dd><a href="${c.github}" target="_blank" rel="noopener">My GitHub profile</a></dd>
        <dt>LinkedIn</dt><dd><a href="${c.linkedin}" target="_blank" rel="noopener">My LinkedIn profile</a></dd>
      </dl>
      <a href="#presentation" class="btn haut">Back to top</a>
    </div>
  </footer>`;

  const racine = document.getElementById("app") || document.body;
  racine.innerHTML = page;

  /* ---------- Comportement ---------- */
  const liste = racine.querySelector("#liste");
  const boutons = racine.querySelectorAll(".filtres button");

  function afficher(cat) {
    liste.innerHTML = DATA.projets
      .filter((p) => cat === "All" || p.categorie === cat)
      .map(projet)
      .join("");
  }

  // Carrousels : un seul écouteur pour tous les projets
  function aller(article, i) {
    const p = DATA.projets.find((x) => article.querySelector("h3").textContent === x.titre);
    const n = p.images.length;
    const idx = (i + n) % n;
    article.dataset.index = idx;
    article.querySelector(".piste").style.transform = `translateX(-${idx * 100}%)`;
    article.querySelectorAll(".points button").forEach((b, k) => b.setAttribute("aria-current", String(k === idx)));
    article.querySelector(".legende").textContent = p.images[idx].alt;
  }

  liste.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    const article = b.closest(".projet");
    const courant = Number(article.dataset.index);
    if (b.dataset.dir) aller(article, courant + Number(b.dataset.dir));
    if (b.dataset.slide) aller(article, Number(b.dataset.slide));
  });

  boutons.forEach((b) =>
    b.addEventListener("click", () => {
      boutons.forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      afficher(b.dataset.cat);
    })
  );

  afficher("All");
})();