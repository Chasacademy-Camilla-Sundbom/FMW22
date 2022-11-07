async function fetchFromFile() {
  const data = await fetch("./data.json")
    .then((response) => response.json())
    .catch((error) => console.error(error));
  return data;
}

async function createEducationElements() {
  const response = await fetchFromFile();
  const parent = document.getElementById("info-parent");

  response.education.forEach((element) => {
    let wrapper = document.createElement("div");
    wrapper.id = "employmentWrapper";

    let title = document.createElement("h2");
    let subTitle = document.createElement("p");
    let description = document.createElement("p");

    title.innerHTML = element.school;
    subTitle.innerHTML = element.course;
    description.innerHTML = element.description;

    parent.appendChild(wrapper);
    wrapper.append(title, subTitle, description);
  });
}

async function createCareerElements() {
  const response = await fetchFromFile();
  const parent = document.getElementById("info-parent");

  response.employment.forEach((element) => {
    let wrapper = document.createElement("div");
    wrapper.id = "educationWrapper";

    let title = document.createElement("h2");
    let subTitle = document.createElement("p");
    let description = document.createElement("p");

    title.innerHTML = element.employer;
    subTitle.innerHTML = element.title;
    description.innerHTML = element.description;

    parent.appendChild(wrapper);
    wrapper.append(title, subTitle, description);
  });
}
