const spaceContainerISS = document.getElementById("craft-iss");
const spaceContainerTian = document.getElementById("craft-tiangong");
const allCrafts = document.querySelectorAll(".craft");

function consult the stars(button) {
  button.style.display = "none"; // hide button

  //   The line below will pull the data from the API
  fetch(
    "astros.json"
  )
    //   The line below will pull the data from the locally stored JSON file
    //   fetch("/ex-json/astros.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);

      // Update the Message
      document.getElementById(
        "status"
      ).innerHTML = `Whoa there are ${data.number} people out in orbit!!`;

      // Add each Astronaut to their craft
      var astros = data.people;
      astros.forEach(astro => {
        AddAstro(astro);
      });
    })
    .catch(error => {
      console.error("Error loading JSON:", error);
    });
}

function AddAstro(astro) {
  let div = document.createElement("div");
  div.classList.add("astro");
  div.innerHTML = astro.name;
  if (astro.iss == true) {
    spaceContainerISS.appendChild(div);
  } else {
    spaceContainerTian.appendChild(div);
  }
}
