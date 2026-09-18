// ===== Navigation =====
document.addEventListener('DOMContentLoaded', function() {
  var navbar = document.querySelector('.navbar');
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

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
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    var href = link.getAttribute('href');
    if (href === currentPath || (currentPath === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Tab functionality
  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      var target = this.getAttribute('data-tab');
      var tabGroup = this.closest('.tabs-container') || document;

      tabGroup.querySelectorAll('.tab').forEach(function(t) { t.classList.remove('active'); });
      this.classList.add('active');

      tabGroup.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });
      var panel = tabGroup.querySelector('#' + target);
      if (panel) panel.classList.add('active');
    });
  });

  // ===== Syntax Highlighting (single-pass tokenizer, no regex interference) =====
  function highlightCode(element) {
    var text = element.textContent;

    // Escape HTML entities
    text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    var kwSet = ['def','class','import','from','return','if','else','elif','for','while','with','as','try','except','finally','raise','yield','lambda','None','True','False','and','or','not','in','is','pass','break','continue','global','nonlocal','assert','del','async','await'];
    var kwMap = {};
    kwSet.forEach(function(k) { kwMap[k] = true; });

    // Single-pass: match tokens in priority order using alternation
    // Group 1: triple-quoted strings
    // Group 2: single/double quoted strings
    // Group 3: comments
    // Group 4: numbers
    // Group 5: identifiers/keywords
    // Group 6: everything else (operators, punctuation, whitespace)
    var masterRe = /("""[\s\S]*?"""|'''[\s\S]*?''')|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(#[^\n]*)|(\d+\.?\d*)|([A-Za-z_]\w*)|([\s\S])/g;

    var result = '';
    var match;
    while ((match = masterRe.exec(text)) !== null) {
      if (match[1]) {
        // Triple-quoted string
        result += '<span class="str">' + match[1] + '</span>';
      } else if (match[2]) {
        // Single/double quoted string
        result += '<span class="str">' + match[2] + '</span>';
      } else if (match[3]) {
        // Comment
        result += '<span class="cmt">' + match[3] + '</span>';
      } else if (match[4]) {
        // Number
        result += '<span class="num">' + match[4] + '</span>';
      } else if (match[5]) {
        // Identifier or keyword
        var word = match[5];
        if (kwMap[word]) {
          result += '<span class="kw">' + word + '</span>';
        } else if (word === 'self') {
          result += '<span class="var">' + word + '</span>';
        } else {
          // Check if followed by '(' for function call
          var afterIdx = masterRe.lastIndex;
          var nextChar = text.charAt(afterIdx);
          // Skip whitespace to find next non-whitespace
          while (nextChar === ' ' || nextChar === '\t' || nextChar === '\n' || nextChar === '\r') {
            afterIdx++;
            nextChar = text.charAt(afterIdx);
          }
          if (nextChar === '(') {
            result += '<span class="fn">' + word + '</span>';
          } else {
            result += word;
          }
        }
      } else if (match[6]) {
        // Everything else
        result += match[6];
      }
    }

    return result;
  }

  // Apply highlighting to all existing code blocks
  document.querySelectorAll('.code-block code').forEach(function(block) {
    if (!block.getAttribute('data-hl')) {
      block.innerHTML = highlightCode(block);
      block.setAttribute('data-hl', '1');
    }
  });

  // Watch for dynamically added code blocks (quiz page etc.)
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      mutation.addedNodes.forEach(function(node) {
        if (node.nodeType !== 1) return;
        var blocks = node.querySelectorAll ? node.querySelectorAll('.code-block code') : [];
        blocks.forEach(function(block) {
          if (!block.getAttribute('data-hl')) {
            block.innerHTML = highlightCode(block);
            block.setAttribute('data-hl', '1');
          }
        });
        // Also check if the node itself is a code block
        if (node.classList && node.classList.contains('code-block')) {
          var code = node.querySelector('code');
          if (code && !code.getAttribute('data-hl')) {
            code.innerHTML = highlightCode(code);
            code.setAttribute('data-hl', '1');
          }
        }
      });
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
});
