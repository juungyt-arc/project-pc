document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.content_area .menu a');
    var sections = document.querySelectorAll('.content_area section[id]');
    if (!links.length || !sections.length) return;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            links.forEach(function (link) {
                link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
            });
        });
    }, { rootMargin: '-160px 0px -60% 0px', threshold: 0 });

    sections.forEach(function (section) {
        observer.observe(section);
    });
});
