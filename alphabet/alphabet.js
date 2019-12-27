let obj = {};
fetch("/alphabet/alphabet.json")
  .then(response => response.json())
  .then(json => (obj = json));

  searchFunc = () => {
    let getResultDiv = document.getElementById("result");
    let alphabet = document.getElementById("alphabet").value;
    getResultDiv.innerHTML = Object.keys(obj[alphabet.toLowerCase()]);
    if (alphabet in obj)
    // checks if json is present and contains necessary values
    emptyForm = () => {
      let alphabet = document.getElementById("alphabet").value;
      if (alphabet === "") {
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