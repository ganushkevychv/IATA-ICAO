(function() {
  let fileKey = 'crwsche.pdf';
  let typedArray = null;
 
  document.querySelector('#fileUpload').addEventListener('change', handleFileUpload, false);
 
  let reader = new FileReader();
  reader.onload = handleFileRead;

  function handleFileUpload(event) {
    let file = event.target.files[0];
    reader.readAsArrayBuffer(file);
  }

  function handleFileRead(event) {
    typedArray = new Uint8Array(event.target.result);
    pdfjsLib.getDocument(typedArray)
      .promise
      .then(pdf => {
        let pageNumber = 1;
        pdf.getPage(pageNumber).then(function(page) {
          console.log('Page loaded');
          
          let scale = 1.5;
          let viewport = page.getViewport({scale: scale});

          // Prepare canvas using PDF page dimensions
          let canvas = document.getElementById('pdfRenderer');
          let context = canvas.getContext('2d');
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
})();





 

 