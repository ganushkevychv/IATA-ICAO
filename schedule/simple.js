(function() {
  let fileKey = 'crwsche.pdf';
  let typedArray = null;
 
  document.querySelector('#fileUpload').addEventListener('change', handleFileUpload, false);
 
  let reader = new FileReader();
  reader.onload = handleFileRead;

  function handleFileUpload(event) {
    let file = event.target.files[0];
    reader.readAsDataURL(file);
  }

  function handleFileRead(event) {
    localStorage.setItem(fileKey, event.target.result);

    displayPdf();
  }

  function displayPdf() {
    var fromStorage = localStorage.getItem(fileKey);

        if (!fromStorage) return;


    typedArray = new Uint8Array(convertDataURIToBinary(fromStorage));
    pdfjsLib.getDocument(typedArray)
      .promise
      .then(pdf => {
        var pageNumber = 1;
        pdf.getPage(pageNumber).then(function(page) {
          console.log('Page loaded');
          
          var scale = 1.0;
          var viewport = page.getViewport({scale: scale});

          // Prepare canvas using PDF page dimensions
          var canvas = document.getElementById('pdfRenderer');
          var context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          // Render PDF page into canvas context
          var renderContext = {
            canvasContext: context,
            viewport: viewport
          };
          var renderTask = page.render(renderContext);
          renderTask.promise.then(function () {
            console.log('Page rendered');
          });
        });
      });
  }

  displayPdf();


  

function convertDataURIToBinary(dataURI) {
  var BASE64_MARKER = ';base64,';
  var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
  var base64 = dataURI.substring(base64Index);
  var raw = window.atob(base64);
  var rawLength = raw.length;
  var array = new Uint8Array(new ArrayBuffer(rawLength));

  for(i = 0; i < rawLength; i++) {
    array[i] = raw.charCodeAt(i);
  }
  return array;
}
})();





 