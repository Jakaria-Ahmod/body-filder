const animation = ScrollReveal({
    distance: '50px',
    duration: 1500,
    delay: 300,
    reset: true,
    easing: 'ease'
})

animation.reveal('.hero-content', {
    delay: 200,
    origin: 'left',
    distance: '100px'
})

animation.reveal('.advantages h2', {
    delay: 200,
    origin: 'bottom',
})

animation.reveal(".advantage-item", {
    delay: 300,
    origin: 'right',
    interval: 200
})

animation.reveal(".membership h2", {
    delay: 200,
    origin: 'bottom',
})

animation.reveal(".membership-grid", {
    delay: 300,
    origin: 'bottom',
    interval: 200
})

animation.reveal(".membership-card", {
    delay: 400,
    origin: 'bottom',
    interval: 200
})

animation.reveal('.about-text', {
    delay: 200,
    origin: 'left',
    distance: '100px'
});

animation.reveal('.about-slider', {
    delay: 400,
    origin: 'right',
    distance: '100px'
});

// Trainers Section
animation.reveal('.trainers h2', {
    delay: 200,
    origin: 'bottom'
});

animation.reveal('.trainers-grid', {
    delay: 300,
    origin: 'bottom'
});

animation.reveal('.trainer-card', {
    delay: 400,
    origin: 'bottom',
    interval: 200,
    distance: '30px',
    scale: 0.85
});

// Footer Section
animation.reveal('.footer-info', {
    delay: 200,
    origin: 'bottom'
});

animation.reveal('.footer-address', {
    delay: 300,
    origin: 'bottom'
});

animation.reveal('.footer-contact', {
    delay: 400,
    origin: 'bottom'
}); 