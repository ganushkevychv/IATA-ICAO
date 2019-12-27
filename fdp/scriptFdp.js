let obj = {};
fetch("/fdp/fdp.json")
  .then(response => response.json())
  .then(json => (obj = json));

function ChangeFunc() {
  let format = "H:mm";

  let getResultDiv = document.getElementById("result");
  let fdpSelect = document.getElementById("fdpSelect");
  let fdpValue = fdpSelect.options[fdpSelect.selectedIndex].value;
  let sectorSelect = document.getElementById("sectorSelect");
  let timeSelect = document.getElementById("time");
  let timeValue = timeSelect.options[timeSelect.selectedIndex].value;
  let getResultTimeDiv = document.getElementById("resultTime");
  let getResultTimeFdp = document.getElementById("resultFdp");

  let sectorValue = sectorSelect.options[sectorSelect.selectedIndex].value;
  if (fdpValue in obj && sectorValue in obj[fdpValue])
    // checks if json is present and contains necessary values
    getResultDiv.innerHTML =
      "Allowable FDP: " + moment(obj[fdpValue][sectorValue], format).format(format);

  getResultTimeDiv.innerHTML =
    "Duty time till: " +
    moment(obj[fdpValue][sectorValue], format)
      .add(moment(timeValue, format).hours(), "hours")
      .add(moment(timeValue, format).minutes(), "minutes")
      .add(20, "m")
      .format(format);
  getResultTimeFdp.innerHTML =
    "FDP till: " +
    moment(obj[fdpValue][sectorValue], format)
      .add(moment(timeValue, format).hours(), "hours")
      .add(moment(timeValue, format).minutes(), "minutes")
      .format(format) +
    "<br>" +
    "Extension not included";
  //add 1h to duty time and fdp
  document.getElementById("addBtn").addEventListener("click", incrementBtn);
  function incrementBtn() {
    getResultTimeDiv.innerHTML =
      "Duty time till: " +
      moment(obj[fdpValue][sectorValue], format)
        .add(moment(timeValue, format).hours(), "hours")
        .add(1, "H")
        .add(moment(timeValue, format).minutes(), "minutes")
        .add(20, "m")
        .format(format);
    getResultTimeFdp.innerHTML =
      "FDP till: " +
      moment(obj[fdpValue][sectorValue], format)
        .add(moment(timeValue, format).hours(), "hours")
        .add(1, "H")
        .add(moment(timeValue, format).minutes(), "minutes")
        .format(format);
  }
  //add 2h to duty time and fdp
  document
    .getElementById("addBtnTwo")
    .addEventListener("click", incrementBtnTwo);
  function incrementBtnTwo() {
    getResultTimeDiv.innerHTML =
      "Duty time till: " +
      moment(obj[fdpValue][sectorValue], format)
        .add(moment(timeValue, format).hours(), "hours")
        .add(2, "H")
        .add(moment(timeValue, format).minutes(), "minutes")
        .add(20, "m")
        .format(format);
    getResultTimeFdp.innerHTML =
      "FDP till: " +
      moment(obj[fdpValue][sectorValue], format)
        .add(moment(timeValue, format).hours(), "hours")
        .add(2, "H")
        .add(moment(timeValue, format).minutes(), "minutes")
        .format(format);
  }
}

let timeSelection = document.getElementById("time");
timeSelection.length = 0;

let defaultOption = document.createElement("option");
defaultOption.text = "Check-in time";
timeSelection.add(defaultOption);
timeSelection.selectedIndex = 0;

fetch("/fdp/time.json").then(function(response) {
  response.json().then(function(data) {
    let option;

    for (let i = 0; i < data.length; i++) {
      option = document.createElement("option");
      option.text = data[i].time ;
      timeSelection.add(option);
    }
  });
});
// alert msg
alert = () => {
  swal({
    title: "User guide",
    text:
    "1. First two selectors (TIME and SECTORS) helps you to find out your Max FDP\n(chose your check-in time and number of sectors)\n2. 3rd selector (Check-in time) helps you to select your exact check-in time\n(won't work if you not select first two selectors)\n3. Extension buttons (Extension +1h and Extension +2h)\n(add 1 or 2 hours to FDP and Duty time)\n4. Installation\n(To install App on your device, open browser menu and save web page as application to Home screen)"
  });
};