let obj = {};
fetch("/alphabet/alphabet.json")
  .then(response => response.json())
  .then(json => (obj = json));
  console.log(obj)

  searchFunc = () => {
    let getResultDiv = document.getElementById("result");
      let alphabet = document.getElementById("alphabet").value 
      console.log(alphabet)
      getResultDiv.innerHTML = "Result: " + obj[alphabet];
      if (alphabet in obj){
        console.log("yo")
      }else(console.log("no"))
      // checks if json is present and contains necessary values
      emptyForm = () => {
        let alphabet = document.getElementById("alphabet").value
        if(alphabet === "") {
            Swal.fire({
                title: 'Error!',
                text: "You forgot to enter text",
                icon: 'error',
                confirmButtonText: 'OK'
              })
            return false;
        }
        return true;
      }
      emptyForm();
  }