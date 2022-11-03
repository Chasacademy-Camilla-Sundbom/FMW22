//let.url = ./data.json"
let url = "https://dog.ceo/api/breeds/image/random";

async function getSomething() {
  let respons = await fetch(url);

  if (respons.ok) {
    let data = await respons.json();
    console.log(data);

    //hämta vald data (objekt, array)

    //Lägg till DOM efter preferenser
  } else {
    console.log("HTTP-Error:" + respons.status);
  }
}

getSomething();
