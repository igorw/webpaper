$(function() {
  Hyphenator.config({
    minwordlength: 4
  });
  Hyphenator.run();
  
  MathJax.Hub.Config({
    extensions: ["tex2jax.js","TeX/AMSmath.js","TeX/AMSsymbols.js"],
    jax: ["input/TeX","output/HTML-CSS"],
    tex2jax: {
      inlineMath: [['$','$'],["\\(","\\)"]],
      processEscapes: true,
    },
    menuSettings: {
      context: "Browser"
    }
  });
});