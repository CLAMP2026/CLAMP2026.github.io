'use strict';

// The research content and result tables remain readable without JavaScript.
if (navigator.clipboard && window.isSecureContext) {
  document.querySelectorAll('[data-copy]').forEach((button) => {
    button.hidden = false;
    button.addEventListener('click', async () => {
      const source = document.getElementById(button.dataset.copy);
      const status = document.getElementById('copy-status');
      if (!source || !status) return;
      try {
        await navigator.clipboard.writeText(source.textContent);
        status.textContent = 'BibTeX copied.';
      } catch (_) {
        status.textContent = 'Copy unavailable. Select the BibTeX text below to copy it.';
      }
    });
  });
}
