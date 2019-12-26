let obj = {};
fetch("/sby/sby.json")
  .then(response => response.json())
  .then(json => (obj = json));

  searchFunc = () => {
    let getResultDiv = document.getElementById("result");
    let astandBy = document.getElementById("standBy").value;
    getResultDiv.innerHTML = "Result: " + Object.keys(obj[standBy.toLowerCase()]);
    if (standBy in obj)
    // checks if json is present and contains necessary values
    emptyForm = () => {
      let standBy = document.getElementById("standBy").value;
      if (standBy === "") {
        Swal.fire({
          title: "Error!",
          text: "You forgot to enter text",
          icon: "error",
          confirmButtonText: "OK"
        });
        return false;
      }
      return true;
    };
    emptyForm();
  };