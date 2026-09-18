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

  // ===== Syntax Highlighting (safe tokenizer approach) =====
  function highlightCode(element) {
    // Use textContent to get raw text, avoiding any HTML in the source
    var text = element.textContent;

    // Escape HTML entities first
    text = text.replace(/&/g, '&amp;')
               .replace(/</g, '&lt;')
               .replace(/>/g, '&gt;');

    var keywords = ['def', 'class', 'import', 'from', 'return', 'if', 'else', 'elif', 'for', 'while', 'with', 'as', 'try', 'except', 'finally', 'raise', 'yield', 'lambda', 'None', 'True', 'False', 'and', 'or', 'not', 'in', 'is', 'pass', 'break', 'continue', 'global', 'nonlocal', 'assert', 'del', 'async', 'await'];

    // Use placeholders to extract strings and comments first,
    // so later regexes don't touch their contents
    var placeholders = [];

    // 1. Extract triple-quoted strings
    text = text.replace(/("""[\s\S]*?"""|'''[\s\S]*?''')/g, function(m) {
      placeholders.push('<span class="str">' + m + '</span>');
      return '\x00' + (placeholders.length - 1) + '\x00';
    });

    // 2. Extract single-line comments
    text = text.replace(/(#[^\n]*)/g, function(m) {
      placeholders.push('<span class="cmt">' + m + '</span>');
      return '\x00' + (placeholders.length - 1) + '\x00';
    });

    // 3. Extract single/double quoted strings
    text = text.replace(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g, function(m) {
      placeholders.push('<span class="str">' + m + '</span>');
      return '\x00' + (placeholders.length - 1) + '\x00';
    });

    // 4. Now apply keyword highlighting on remaining text (strings/comments are placeholders)
    var kwPattern = new RegExp('\\b(' + keywords.join('|') + ')\\b', 'g');
    text = text.replace(kwPattern, '<span class="kw">$1</span>');

    // 5. Numbers
    text = text.replace(/\b(\d+\.?\d*)\b/g, '<span class="num">$1</span>');

    // 6. Self
    text = text.replace(/\b(self)\b/g, '<span class="var">$1</span>');

    // 7. Restore placeholders (strings and comments)
    text = text.replace(/\x00(\d+)\x00/g, function(m, idx) {
      return placeholders[parseInt(idx, 10)];
    });

    return text;
  }

  // Apply highlighting to all code blocks
  document.querySelectorAll('.code-block code').forEach(function(block) {
    block.innerHTML = highlightCode(block);
  });

  // Also highlight code blocks that might be rendered dynamically later
  // Use a MutationObserver to catch dynamically added code blocks
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      mutation.addedNodes.forEach(function(node) {
        if (node.nodeType !== 1) return;
        var codeBlocks = node.querySelectorAll ? node.querySelectorAll('.code-block code') : [];
        codeBlocks.forEach(function(block) {
          if (!block.getAttribute('data-highlighted')) {
            block.innerHTML = highlightCode(block);
            block.setAttribute('data-highlighted', 'true');
          }
        });
      });
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
});
