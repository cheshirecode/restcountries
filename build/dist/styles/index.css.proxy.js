// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"/dist/styles/fonts.css\");@import url(\"/dist/styles/modern-reset.css\");body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:16px}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}