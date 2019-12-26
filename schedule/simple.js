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
    let fromStorage = localStorage.getItem(fileKey);

        if (!fromStorage) return;


    typedArray = new Uint8Array(convertDataURIToBinary(fromStorage));
    pdfjsLib.getDocument(typedArray)
      .promise
      .then(pdf => {
        let pageNumber = 1;
        pdf.getPage(pageNumber).then(function(page) {
          console.log('Page loaded');
          
          /*let scale = 1.5;
          let viewport = page.getViewport({scale: scale});*/
          
          // Prepare canvas using PDF page dimensions
          let container = document.getElementById('pdfViewer')
          let canvas = document.getElementById('pdfRenderer');
          let context = canvas.getContext('2d');

          let viewport = page.getViewport(1);
          let scale = container.clientWidth / viewport.width;
          viewport = page.getViewport(scale);

          canvas.height = viewport.height;
          canvas.width = viewport.width;

          // Render PDF page into canvas context
          let renderContext = {
            canvasContext: context,
            viewport: viewport
          };
          let renderTask = page.render(renderContext);
          renderTask.promise.then(function () {
            console.log('Page rendered');
          });
        });
      });
  }

  displayPdf();


  

function convertDataURIToBinary(dataURI) {
  let BASE64_MARKER = ';base64,';
  let base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
  let base64 = dataURI.substring(base64Index);
  let raw = window.atob(base64);
  let rawLength = raw.length;
  let array = new Uint8Array(new ArrayBuffer(rawLength));

  for(i = 0; i < rawLength; i++) {
    array[i] = raw.charCodeAt(i);
  }
  return array;
}
})();





 