(function() {
  let FILE_KEY = 'crwsche.pdf';
 
  document.querySelector('#fileUpload').addEventListener('change', handleFileUpload, false);
 
  let reader = new FileReader();
  reader.onload = handleFileRead;

  function handleFileUpload(event) {
    var file = event.target.files[0];
    reader.readAsText(file);
  }

  function handleFileRead(event) {
    var save = event.target.result
    window.localStorage.setItem(FILE_KEY,save);
  }
 /*function retrieveSave() {
    return localStorage.getItem(FILE_KEY)
  }*/
})();