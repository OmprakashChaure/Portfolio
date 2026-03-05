/* ═══════════════════════════════════════
   PORTFOLIO – JavaScript
   Omprakash Chaure | ML Engineer
═══════════════════════════════════════ */

// ─── 1. DARK MODE ───────────────────────
(function () {
    const html = document.getElementById('html-root');
    const btn = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');

    // Load saved theme or default to dark
    const saved = localStorage.getItem('theme') || 'dark';
    if (saved === 'dark') {
        html.classList.add('dark');
        icon.textContent = '☀️';
    } else {
        html.classList.remove('dark');
        icon.textContent = '🌙';
    }

    btn.addEventListener('click', () => {
        const isDark = html.classList.toggle('dark');
        icon.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        btn.style.transform = 'rotate(360deg)';
        setTimeout(() => btn.style.transform = '', 400);
    });
})();

// ─── 2. NAVBAR SCROLL ───────────────────
(function () {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active nav link highlight
        let current = '';
        sections.forEach(s => {
            if (window.scrollY >= s.offsetTop - 120) current = s.id;
        });
        links.forEach(l => {
            l.classList.remove('active');
            if (l.getAttribute('href') === '#' + current) l.classList.add('active');
        });
    });
})();

// ─── 3. MOBILE MENU ─────────────────────
(function () {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Close on link click
    menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => menu.classList.add('hidden'));
    });
})();

// ─── 4. TYPING ANIMATION ────────────────
(function () {
    const phrases = [
        'AI Systems 🤖',
        'Computer Vision 👁️',
        'NLP Pipelines 🧠',
        'ML Models 📊',
        'Real-time AI Apps ⚡',
        'Deep Learning 🔬',
    ];
    const el = document.getElementById('typing-text');
    if (!el) return;

    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let delay = 100;

    function type() {
        const current = phrases[phraseIdx];
        if (isDeleting) {
            el.textContent = current.substring(0, charIdx - 1);
            charIdx--;
            delay = 60;
        } else {
            el.textContent = current.substring(0, charIdx + 1);
            charIdx++;
            delay = 100;
        }

        if (!isDeleting && charIdx === current.length) {
            delay = 1800;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            delay = 400;
        }

        setTimeout(type, delay);
    }
    setTimeout(type, 800);
})();

// ─── 5. SCROLL REVEAL ───────────────────
(function () {
    const items = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    items.forEach(item => observer.observe(item));
})();

// ─── 6. PROJECT FILTER ──────────────────
(function () {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            projectCards.forEach(card => {
                const tags = card.dataset.tags ? card.dataset.tags.split(',') : [];
                const show = filter === 'all' || tags.some(t => t.trim() === filter);

                if (show) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.4s ease forwards';
                    card.classList.remove('hidden');
                } else {
                    card.style.display = 'none';
                    card.classList.add('hidden');
                }
            });
        });
    });
})();

// ─── 7. SMOOTH ANCHOR SCROLLING ─────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.getElementById(a.getAttribute('href').slice(1));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ─── 8. CARD TILT EFFECT ────────────────
(function () {
    document.querySelectorAll('.project-card-inner, .skill-category-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
})();

// ─── 9. PAGE LOAD ANIMATION ─────────────
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.4s ease';
    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });
});

console.log('%c Omprakash Chaure | ML Engineer Portfolio ', 'background: linear-gradient(90deg,#3b82f6,#7c3aed); color:white; padding:8px 16px; border-radius:8px; font-weight:bold; font-size:14px;');
