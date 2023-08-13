let array = [
    {
      semester: "Semester 1",
      course: "outlines/1st sym outlines.pdf",
      Notes: "https://drive.google.com/drive/folders/1Uh3kV-QgKCdYkO0YQOnbM6lNizzyso03?usp=drive_link",
      papers: "https://drive.google.com/drive/folders/1myD5dTdL8BqJduhTxIZjqIofd3PRx7_7?usp=drive_link",
    },
    {
      semester: "Semester 2",
      course: "outlines/2nd sym outlines.pdf",
      Notes: "https://drive.google.com/drive/folders/140tI_dPWc2RvnNr0QKXU8Y09ou-xcEa9?usp=drive_link",
      papers: "https://drive.google.com/drive/folders/15xO8fMpdzP_WDcN06XQomx7hXWTwPvy_?usp=drive_link",
    },
    {
      semester: "Semester 3",
      course: "outlines/3rd sym outlines.pdf",
      Notes: "https://drive.google.com/drive/folders/12w67bi_VN0n4ArK2F7nAUeXBpqHnSY6f?usp=drive_link",
      papers: "https://drive.google.com/drive/folders/16BjWby9cUiIG48fxs2Fc_dBGaLdhrZhl?usp=drive_link",
    },
    {
      semester: "Semester 4",
      course: "outlines/4rth sym outlines.pdf",
      Notes: "https://drive.google.com/drive/folders/1fJYi6V1WpxV3ugHWnux35doA9kkdBe_j",
      papers: "https://drive.google.com/drive/folders/1FwdgoooSo6KykD-sO1Bs9MRs5YDQ1GjJ?usp=drive_link",
    },
  ];
  const container = document.querySelector(".container");
  const ham = document.querySelector(".hamburger");
  let nav = document.querySelector(".Nav-bar");
  const home = document.querySelector(".home");
  const body = document.getElementById("#body");
  const about = document.querySelector(".abouts");
  about.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
  home.addEventListener("click", () => {
    body.classList.toggle("hidden");
  });
  ham.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
  array.map((sem, i) => {
    let html = `<div class="card-${++i}">
<button class="btn">${sem.semester}</button>
<div class="button" data-tooltip="⬇">
<div class="button-wrapper">
  <div class="text"><a href="/${sem.course}" target="blank">Outline</a></div>
 <span class="icon">
  <a href="/${sem.course}" target="blank">Download⬇</a>
 </span>
  </div>
</div>
<div class="button" data-tooltip="⬇">
<div class="button-wrapper">
  <div class="text"><a href="${sem.papers}" target="blank">P-Papers</a></div>
 <span class="icon">
  <a href="${sem.papers}" target="blank">Download⬇</a>
 </span>
  </div>
</div>
<div class="button" data-tooltip="⬇">
<div class="button-wrapper">
  <div class="text"><a href="${sem.Notes}" target="blank">Notes</a></div>
 <span class="icon">
  <a href="${sem.Notes}" target="blank">Download⬇</a>
 </span>
  </div>
</div>
    </div>`;
    container.insertAdjacentHTML("beforeend", html);
  });