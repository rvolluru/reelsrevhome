document.addEventListener('DOMContentLoaded', function () {
  var revealElements = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealElements.forEach(function (element) {
      observer.observe(element);
    });
    return;
  }

  revealElements.forEach(function (element) {
    element.classList.add('visible');
  });
});
