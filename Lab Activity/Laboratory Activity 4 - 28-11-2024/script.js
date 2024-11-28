document.addEventListener('DOMContentLoaded', (event) => {
    // Dark mode toggle
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
            document.body.classList.add('dark-mode');
        }
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }    
    }

    toggleSwitch.addEventListener('change', switchTheme, false);

    // Staggered animation for cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Interactive hover effect for contact links
    const contactLinks = document.querySelectorAll('#contact a');
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.05)';
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1)';
        });
    });

    // Color change on hover for cards
    cards.forEach(card => {
        const originalColor = getComputedStyle(card).getPropertyValue('--accent-color');
        const hoverColor = card.dataset.color === 'accent' ? 'var(--hover-color)' : 
                           card.dataset.color === 'secondary' ? 'var(--secondary-color)' : 
                           'var(--tertiary-color)';

        card.addEventListener('mouseenter', () => {
            card.style.setProperty('--accent-color', hoverColor);
        });

        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--accent-color', originalColor);
        });
    });

    // Subtle background animation
    document.body.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        document.body.style.backgroundPosition = `${x * 20}px ${y * 20}px, ${20 + x * 20}px ${20 + y * 20}px`;
    });
});

