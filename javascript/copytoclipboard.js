// Change to checkmark //

function changeImg(objImg, newSrc) {
  const originalSrc = objImg.getAttribute("src");
  const originalSrcBase = objImg.getAttribute("data-original-src");
  if (!originalSrcBase) {
    objImg.setAttribute("data-original-src", originalSrc);
  }
  objImg.setAttribute("src", newSrc);

  setTimeout(() => {
    objImg.setAttribute("src", originalSrc);
  }, 1000);
}

// Copy button //

const copyButton = document.getElementById("btn-copy");
copyButton.addEventListener("click", (event) => {
  // getting the text content that we want to copy
  const content = document.getElementById("copyaddress").textContent;
  // loading the content into our clipboard
  navigator.clipboard.writeText(content);
});

// Copy button //

const copyCaButton = document.getElementById("copytoclipboardca");
copyCaButton.addEventListener("click", (event) => {
  // getting the text content that we want to copy
  const content = document.getElementById("copyaddress").textContent;
  // loading the content into our clipboard
  navigator.clipboard.writeText(content);
});
