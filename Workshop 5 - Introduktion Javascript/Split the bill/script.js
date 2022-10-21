// Läser in referens till DOM-element

let result = document.getElementById("result");
let showSum = document.getElementById("showSum");
let inputForm = document.getElementById("inputForm");

function parseToTwoDecimals(string) {
  const result = parseFloat(string).toFixed(2);
  return parseFloat(result);
}

// Kommer att köras när användaren klickar på knappen (onclick på knappen)
function calculate() {
  // Hämta värdet från varje element (3st)
  let totalSum = parseToTwoDecimals(document.getElementById("sum").value);
  let numberOfGuests = parseToTwoDecimals(
    document.getElementById("numberOfFriends").value
  );
  let totalTips = parseToTwoDecimals(document.getElementById("tip").value);

  // Beräkna vad varje person ska betala (en formel)
  const toPayPerPerson = parseToTwoDecimals((totalSum + totalTips) / numberOfGuests);

  console.log(`Sum: ${totalSum} ${typeof totalSum}`);
  console.log(`Guests: ${numberOfGuests} ${typeof numberOfGuests}`);
  console.log(`Tips: ${totalTips} ${typeof totalTips}`);
  console.log(`To pay: ${toPayPerPerson} ${typeof toPayPerPerson}`);

  result.append(`Varje person ska betala: ${toPayPerPerson}`);

  showSum.classList.toggle("hide");
  inputForm.classList.toggle("hide");

  // Visa id="showSum", Dölj id="inputForm" genom att använda classList.toggle
}
