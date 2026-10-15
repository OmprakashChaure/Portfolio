(() => {
    const menuButton = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (menuButton && menu) {
        menuButton.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('is-open');
            menuButton.setAttribute('aria-expanded', String(isOpen));
            menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
        });

        menu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                menu.classList.remove('is-open');
                menuButton.setAttribute('aria-expanded', 'false');
                menuButton.setAttribute('aria-label', 'Open navigation');
            });
        });
    }

    const revealItems = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
        revealItems.forEach((item) => observer.observe(item));
    } else {
        revealItems.forEach((item) => item.classList.add('visible'));
    }

    const filters = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');
    filters.forEach((button) => {
        button.addEventListener('click', () => {
            filters.forEach((filter) => filter.classList.toggle('active', filter === button));
            const selected = button.dataset.filter;
            projects.forEach((project) => {
                const tags = (project.dataset.tags || '').split(',').map((tag) => tag.trim());
                const visible = selected === 'all' || tags.includes(selected);
                project.classList.toggle('hidden', !visible);
            });
        });
    });

    const header = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const sections = [...document.querySelectorAll('main section[id]')];
    const updateActiveLink = () => {
        const current = sections.filter((section) => section.getBoundingClientRect().top < 150).at(-1);
        navLinks.forEach((link) => link.classList.toggle('is-active', current && link.hash === `#${current.id}`));
        if (header) header.classList.toggle('has-scrolled', window.scrollY > 16);
    };
    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();
})();
