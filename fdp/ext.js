let objTwo = {};
fetch("/fdp/ext.json")
  .then(response => response.json())
  .then(json => (objTwo = json));

  function Change() {
    let getResultExt = document.getElementById("resultExt");
    let fdpSelect = document.getElementById("fdpS");
  let fdpValue = fdpSelect.options[fdpSelect.selectedIndex].value;
  let sectorSelect = document.getElementById("sectorS");
  let sectorValue = sectorSelect.options[sectorSelect.selectedIndex].value;
  if (fdpValue in objTwo && sectorValue in objTwo[fdpValue])
  getResultExt.innerHTML = "Result: " + objTwo[fdpValue][sectorValue]
  }
  onChange()