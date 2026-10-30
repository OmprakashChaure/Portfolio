(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const menuButton = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const closeMenu = () => {
        menu.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
    };
    if (menuButton && menu) {
        menuButton.addEventListener('click', () => {
            const open = menu.classList.toggle('is-open');
            menuButton.setAttribute('aria-expanded', String(open));
            menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
        });
        menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && menu.classList.contains('is-open')) {
                closeMenu();
                menuButton.focus();
            }
        });
    }

    const revealItems = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && !motion.matches) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08 });
        document.documentElement.classList.add('motion-ready');
        revealItems.forEach(item => observer.observe(item));
    } else {
        revealItems.forEach(item => item.classList.add('visible'));
    }

    const filters = document.querySelectorAll('.filter-btn');
    const projects = [...document.querySelectorAll('.project-card')];
    const filterStatus = document.querySelector('.filter-status');
    const filterProjects = selected => {
        filters.forEach(button => {
            const active = button.dataset.filter === selected;
            button.classList.toggle('active', active);
            button.setAttribute('aria-pressed', String(active));
        });
        let count = 0;
        projects.forEach(project => {
            const tags = (project.dataset.tags || '').split(',');
            project.hidden = selected !== 'all' && !tags.includes(selected);
            if (!project.hidden) {
                count += 1;
                project.classList.add('visible');
            }
        });
        filterStatus.textContent = `${count} ${count === 1 ? 'project' : 'projects'} shown`;
        requestUpdate();
    };
    document.querySelector('.project-filters').hidden = false;
    filters.forEach(button => button.addEventListener('click', () => filterProjects(button.dataset.filter)));

    const pathways = {
        jobquick: { type: 'LLM APPLICATION', input: 'Résumé', model: 'LLM + retrieval', output: 'Job matches', description: 'JobQuick turns résumés into structured profiles and ranked job matches.', title: 'Explore JobQuick', target: '#project-1' },
        autodim: { type: 'CAD / RETRIEVAL', input: 'DXF geometry', model: 'kNN + ezdxf', output: 'Dimensions', description: 'Autodim retrieves reference placements and computes dimensions for DXF drawings. In development.', title: 'Explore Autodim', target: '#project-2' },
        vision: { type: 'COMPUTER VISION', input: 'Mouth frames', model: 'CNN + LSTM', output: 'Predicted words', description: 'The lip reading system predicts words from video frames, without using audio.', title: 'Explore lip reading', target: '#project-3' }
    };
    const pathwayButtons = document.querySelectorAll('[data-pathway]');
    document.querySelector('.pathway-controls').hidden = false;
    pathwayButtons.forEach(button => button.addEventListener('click', () => {
        const pathway = pathways[button.dataset.pathway];
        pathwayButtons.forEach(control => control.setAttribute('aria-pressed', String(control === button)));
        document.querySelector('.pathway-label').textContent = pathway.type;
        document.querySelector('.label-input b').textContent = pathway.input;
        document.querySelector('.label-model b').textContent = pathway.model;
        document.querySelector('.label-output b').textContent = pathway.output;
        document.getElementById('pathway-description').textContent = pathway.description;
        const link = document.querySelector('.pathway-link');
        link.firstChild.textContent = `${pathway.title} `;
        link.href = pathway.target;
    }));
    document.querySelector('.pathway-link').addEventListener('click', () => filterProjects('all'));
    // A direct project URL must remain visible even after using a category filter.
    window.addEventListener('hashchange', () => {
        if (/^#project-[1-3]$/.test(location.hash)) filterProjects('all');
    });

    const header = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const sections = [...document.querySelectorAll('main section[id]')];
    const hero = document.getElementById('hero');
    const drawing = document.querySelector('.project-visual-2');
    const experience = document.querySelector('.experience-list');
    const clamp = value => Math.max(0, Math.min(1, value));
    let scheduled = false;
    function updateScroll() {
        scheduled = false;
        const current = sections.filter(section => section.getBoundingClientRect().top < 160).at(-1);
        navLinks.forEach(link => {
            const active = Boolean(current && link.hash === `#${current.id}`);
            link.classList.toggle('is-active', active);
            if (active) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
        });
        header.classList.toggle('has-scrolled', window.scrollY > 16);
        const travel = document.documentElement.scrollHeight - window.innerHeight;
        header.style.setProperty('--reading-progress', travel > 0 ? clamp(window.scrollY / travel) : 0);
        hero.style.setProperty('--hero-travel', motion.matches ? 0 : clamp(window.scrollY / hero.offsetHeight));
        if (drawing && !drawing.closest('[hidden]')) {
            const rect = drawing.getBoundingClientRect();
            drawing.style.setProperty('--drawing-progress', motion.matches ? 1 : clamp((window.innerHeight - rect.top) / (rect.height * .7)));
        }
        if (experience) {
            const rect = experience.getBoundingClientRect();
            experience.style.setProperty('--experience-progress', motion.matches ? 1 : clamp((window.innerHeight * .8 - rect.top) / rect.height));
        }
    }
    function requestUpdate() {
        if (!scheduled) {
            scheduled = true;
            window.requestAnimationFrame(updateScroll);
        }
    }
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    motion.addEventListener('change', () => {
        revealItems.forEach(item => item.classList.add('visible'));
        requestUpdate();
    });
    updateScroll();
})();
