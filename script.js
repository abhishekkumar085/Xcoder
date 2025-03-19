document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  const footerId = document.getElementById('footer_id');
  const trm = document.getElementById('trm');
  const pri = document.getElementById('pri');
  const date = new Date();
  const response = date.getFullYear();
  footerId.textContent = `© ${response - 1}-${response} Xcoder, Inc. · `;

  footerId.appendChild(trm);
  footerId.appendChild(pri);
  const spacer = document.createTextNode(' | ');
  footerId.insertBefore(spacer, pri);
});

// The existing code is fine as it is and does not need to be moved inside DOMContentLoaded
// it is working fine because the script is placed at the end of the body tag.
