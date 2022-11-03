const list = document.querySelector("ul");
const url = `./data.json`;
async function getSomething() {
  let respons = await fetch(url);
  console.log(respons);

  if (respons.ok) {
    let data = await respons.json();
    console.log(data);
    data.todo.forEach((element) => {
      let listItem = document.createElement("li");
      listItem.innerHTML = element.title;
      if (element.finish) {
        listItem.classList.add("isdone");
        console.log("done");
      }

      list.appendChild(listItem);
    });

    //hämta vald data (objekt, array)

    //Lägg till DOM efter preferenser
  } else {
    console.log("HTTP-Error:" + respons.status);
  }
}

getSomething();
