const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');
const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

let currentTheme = savedTheme || preferredTheme;

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;

    if (themeToggle) {
        const isDark = theme === 'dark';

        themeToggle.setAttribute('aria-pressed', String(isDark));
        themeToggle.setAttribute(
            'aria-label',
            isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'
        );
    }
}

setTheme(currentTheme);

themeToggle?.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    setTheme(currentTheme);
});

const siteHeader = document.querySelector('header');
const menuToggle = document.getElementById('menu-toggle');
const primaryNavigation = document.getElementById('primary-navigation');

function setMenuOpen(isOpen) {
    if (!siteHeader || !menuToggle) {
        return;
    }

    siteHeader.classList.toggle('is-menu-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute(
        'aria-label',
        isOpen ? 'Cerrar menú' : 'Abrir menú'
    );
}

menuToggle?.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    setMenuOpen(!isOpen);
});

primaryNavigation?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        setMenuOpen(false);
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        setMenuOpen(false);
    }
});

window.matchMedia('(min-width: 701px)').addEventListener('change', (event) => {
    if (event.matches) {
        setMenuOpen(false);
    }
});

const carouselAnimations = new WeakMap();

function moveCarousel(track, direction) {
    const cards = Array.from(track.querySelectorAll('.product-card'));

    if (cards.length === 0) {
        return;
    }

    const previousAnimation = carouselAnimations.get(track);
    const originalSnapType = previousAnimation
        ? previousAnimation.originalSnapType
        : track.style.scrollSnapType;

    if (previousAnimation) {
        cancelAnimationFrame(previousAnimation.frameId);
    }

    const trackRect = track.getBoundingClientRect();
    const firstVisibleIndex = cards.findIndex((card) => {
        return card.getBoundingClientRect().right > trackRect.left + 2;
    });

    if (firstVisibleIndex === -1) {
        return;
    }

    const targetIndex = Math.max(
        0,
        Math.min(cards.length - 1, firstVisibleIndex + direction)
    );

    if (targetIndex === firstVisibleIndex) {
        return;
    }

    const targetCardRect = cards[targetIndex].getBoundingClientRect();
    const maximumScroll = track.scrollWidth - track.clientWidth;
    const startPosition = track.scrollLeft;
    const targetPosition = Math.max(
        0,
        Math.min(
            maximumScroll,
            startPosition + targetCardRect.left - trackRect.left
        )
    );

    if (Math.abs(targetPosition - startPosition) < 1) {
        return;
    }

    track.style.scrollSnapType = 'none';

    const duration = 160;
    const startTime = performance.now();

    function animateFrame(currentTime) {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        track.scrollLeft =
            startPosition + (targetPosition - startPosition) * easedProgress;

        if (progress < 1) {
            const frameId = requestAnimationFrame(animateFrame);

            carouselAnimations.set(track, {
                frameId,
                originalSnapType,
            });
        } else {
            track.scrollLeft = targetPosition;

            requestAnimationFrame(() => {
                track.style.scrollSnapType = originalSnapType;
                carouselAnimations.delete(track);
            });
        }
    }

    const frameId = requestAnimationFrame(animateFrame);

    carouselAnimations.set(track, {
        frameId,
        originalSnapType,
    });
}

document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const section = carousel.closest('.featured-section');
    const previousButton = section?.querySelector('[data-carousel-prev]');
    const nextButton = section?.querySelector('[data-carousel-next]');

    if (!track) {
        return;
    }

    previousButton?.addEventListener('click', () => {
        moveCarousel(track, -1);
    });

    nextButton?.addEventListener('click', () => {
        moveCarousel(track, 1);
    });
});