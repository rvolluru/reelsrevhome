document.addEventListener('DOMContentLoaded', function () {
  var startInfluencerBtn = document.getElementById('start-influencer-btn');
  var influencerSignupBtn = document.getElementById('influencer-signup-btn');
  var revealElements = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  function handleInfluencerRedirect(event) {
    var host = window.location.hostname;
    var isProd = host === 'reelsrev.com' || host === 'www.reelsrev.com';
    if (!isProd) {
      return;
    }

    event.preventDefault();
    window.open('https://influencers.reelsrev.com', '_blank', 'noopener,noreferrer');
  }

  if (startInfluencerBtn) {
    startInfluencerBtn.addEventListener('click', handleInfluencerRedirect);
  }

  if (influencerSignupBtn) {
    influencerSignupBtn.addEventListener('click', handleInfluencerRedirect);
  }

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
