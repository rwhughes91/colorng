export default (image: string) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.3.0/color-thief.umd.js"></script>
    </head>
    <body>
        <img src='data:image/jpeg;base64, ${image}'
          id='__colorPickerCanvasImage'
          width='100%'
          height='100%'
          onload='getColorPalettes()' />
    </body>
    <script defer>
      const colorThief = new ColorThief();
      const img = document.querySelector('img');
      if (img.complete) {
        const res = colorThief.getPalette(img, 5);
        window.ReactNativeWebView.postMessage(JSON.stringify({colors: res}));
      } else {
        img.addEventListener('load', function() {
          const res = colorThief.getPalette(img, 5);
          window.ReactNativeWebView.postMessage(JSON.stringify({colors: res}));
        });
      }
    </script>
  </html>
  `;
};
