// ===== Navigation =====
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
  }

  // Highlight active nav link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Tab functionality
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      const target = this.getAttribute('data-tab');
      const tabGroup = this.closest('.tabs-container') || document;

      tabGroup.querySelectorAll('.tab').forEach(function(t) { t.classList.remove('active'); });
      this.classList.add('active');

      tabGroup.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });
      const panel = tabGroup.querySelector('#' + target);
      if (panel) panel.classList.add('active');
    });
  });
});

// ===== Syntax Highlighting =====
function highlightCode(code) {
  // Python keywords
  const keywords = ['def', 'class', 'import', 'from', 'return', 'if', 'else', 'elif', 'for', 'while', 'with', 'as', 'try', 'except', 'finally', 'raise', 'yield', 'lambda', 'None', 'True', 'False', 'and', 'or', 'not', 'in', 'is', 'pass', 'break', 'continue', 'global', 'nonlocal', 'assert', 'del', 'async', 'await'];

  let html = code.innerHTML;

  // Escape HTML
  html = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // Comments
  html = html.replace(/(#[^\n]*)/g, '<span class="cmt">$1</span>');

  // Strings
  html = html.replace(/("""[\s\S]*?"""|'''[\s\S]*?'''|"[^"]*"|'[^']*')/g, '<span class="str">$1</span>');

  // Keywords
  const kwPattern = new RegExp('\\b(' + keywords.join('|') + ')\\b', 'g');
  html = html.replace(kwPattern, '<span class="kw">$1</span>');

  // Numbers
  html = html.replace(/\b(\d+\.?\d*)\b/g, '<span class="num">$1</span>');

  // Function calls
  html = html.replace(/(\w+)\s*\(/g, '<span class="fn">$1</span>(');

  // Self
  html = html.replace(/\b(self)\b/g, '<span class="var">$1</span>');

  return html;
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.code-block code').forEach(function(block) {
    block.innerHTML = highlightCode(block);
  });
});
