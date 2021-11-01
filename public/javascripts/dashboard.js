const divFiles = document.querySelector(".workouts");

function renderFile(file) {

  /*
  ADDING CODE FOR IF COMPLETED IS YES
  */

  const divFile = document.createElement("div");

  if(file.finish == "yes") {
    divFile.innerHTML = `
    <div class="card card-dashboard">
      <h5 class="card-header text-center">${file.type}</h5>
      <div class="card-body">
        <h5 class="completed card-title">Finish Exercise: ${file.finish}</h5>
        <p class = "card-text">${file.note}</p>
        <p class="card-text">Date: ${file.date}</p>
        <p class="card-text">Time: ${file.time}</p>
        <a href="#" class="btn btn-primary btn-dashboard">Edit</a>
      </div>
    </div>
    `;
  }
  else if (file.finish == "No") {
    divFile.innerHTML = `
    <div class="card card-dashboard">
      <h5 class="card-header text-center">${file.type}</h5>
      <div class="card-body">
        <h5 class="incompleted card-title">Finish Exercise: ${file.finish}</h5>
        <p class = "card-text">${file.note}</p>
        <p class="card-text">Date: ${file.date}</p>
        <p class="card-text">Time: ${file.time}</p>
        <a href="#" class="btn btn-primary btn-dashboard">Edit</a>
      </div>
    </div>
    `;
  }

  divFiles.appendChild(divFile);
}

async function loadFiles() {
  divFiles.innerHTML = "";
  const resRaw = await fetch("/user/dashboard");
  const res = await resRaw.json();
  res.files.forEach(renderFile);
}

loadFiles();