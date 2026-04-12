document.addEventListener("DOMContentLoaded", function() {
  var body = document.body;
  var nav = document.getElementById("mainNav");
  var html = document.documentElement;
  
  // Determine if we are on the homepage
  var path = window.location.pathname;
  var base = "{{ site.baseurl }}/";
  var normPath = path.endsWith('/') ? path : path + '/';
  var normBase = base.endsWith('/') ? base : base + '/';
  var isHome = normPath === normBase || path === base + "index.html" || path === "/";

  // Reveal page (Fade In)
  setTimeout(function() {
    body.classList.add("page-loaded");
    
    // On the homepage, we remove the blocking shrink class so it can go back to transparent.
    // On sub-pages, the navbar-force-shrink class will keep it opaque and shrunk.
    if (isHome) {
      html.classList.remove("nav-should-shrink");
    }
  }, 10);

  // Force navbar state ONLY on sub-pages
  if (!isHome) {
    if (nav) {
      nav.classList.add("navbar-force-shrink");
    }
  }

  // Highlight "Blogs" tab if on a sub-page with blogging categories
  if (window.location.pathname.includes('/blog/') || window.location.pathname.includes('/_posts/')) {
    var navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(function(link) {
      if (link.textContent.trim() === "Blogs" || link.getAttribute("href").includes("#blogs")) {
        link.classList.add("active-section");
      }
    });
  }

  // Global Fade-out for internal links
  var internalLinks = document.querySelectorAll('a:not([target="_blank"]):not([href^="mailto:"]):not([href^="tel:"])');
  
  internalLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      var href = this.getAttribute("href");
      var url = new URL(this.href, window.location.origin);
      
      // Only transition if it's an internal link and NOT just an anchor on current page
      var isInternal = url.origin === window.location.origin && url.pathname.startsWith('{{ site.baseurl }}');
      var isSamePageAnchor = url.pathname === window.location.pathname && url.hash !== "";

      if (isInternal && !isSamePageAnchor && !href.startsWith('#')) {
        e.preventDefault();
        body.classList.remove("page-loaded");
        body.classList.add("page-fade-out");
        
        setTimeout(function() {
          window.location.href = href;
        }, 400);
      }
    });
  });
});
