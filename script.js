document.addEventListener('DOMContentLoaded', () => {
    // 1. Manejo del Audio y Pantalla de Inicio
    const startOverlay = document.getElementById('start-overlay');
    const startBtn = document.getElementById('start-btn');
    const bgMusic = document.getElementById('bg-music');
    const muteBtn = document.getElementById('mute-btn');
    const petalsContainer = document.getElementById('petals-container');
    
    let isMusicPlaying = false;

    startBtn.addEventListener('click', () => {
        // Ocultar modal
        startOverlay.classList.add('hidden');
        
        // Intentar reproducir música
        bgMusic.volume = 0.5; // Volumen agradable
        bgMusic.play().then(() => {
            isMusicPlaying = true;
            muteBtn.classList.remove('hidden');
        }).catch(e => {
            console.log("Autoplay de audio bloqueado o archivo no encontrado", e);
        });

        // Iniciar animación de pétalos
        iniciarPetalos();
        
        // Disparar reveals iniciales
        setTimeout(reveal, 500);
    });

    muteBtn.addEventListener('click', () => {
        if (isMusicPlaying) {
            bgMusic.pause();
            muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        } else {
            bgMusic.play();
            muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
        isMusicPlaying = !isMusicPlaying;
    });

    // 2. Animación de Pétalos
    function iniciarPetalos() {
        const numberOfPetals = window.innerWidth < 768 ? 35 : 70;
        for (let i = 0; i < numberOfPetals; i++) {
            createPetal();
        }
    }

    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        const size = Math.random() * 12 + 10;
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 6 + 6; // 6s to 12s, mas lento y cinemático
        const animationDelay = Math.random() * 5;
        
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        petal.style.left = `${left}vw`;
        petal.style.animationDuration = `${animationDuration}s`;
        petal.style.animationDelay = `${animationDelay}s`;
        
        const colors = ['#ffd700', '#ffeb73', '#ffc107', '#ffb300'];
        petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        petalsContainer.appendChild(petal);
        
        petal.addEventListener('animationend', () => {
            petal.remove();
            createPetal();
        });
    }

    // 3. Scroll Reveal Cinemático
    const reveals = document.querySelectorAll('.reveal');

    function reveal() {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        // Revela elementos estáticos
        reveals.forEach(revealElement => {
            const elementTop = revealElement.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                revealElement.classList.add('active');
            }
        });

        // Revela elementos de la galería de a uno (Staggered effect)
        const masonryItems = document.querySelectorAll('.masonry-item:not(.active)');
        masonryItems.forEach((item, index) => {
            const elementTop = item.getBoundingClientRect().top;
            if (elementTop < windowHeight - 50) {
                setTimeout(() => {
                    item.classList.add('active');
                }, index * 100); // 100ms delay entre cada foto
            }
        });
    }

    window.addEventListener('scroll', reveal);

    // 4. Galería Masonry Dinámica con 55 fotos
    const masonryGallery = document.getElementById('masonry-gallery');
    
    const images = [
        "WhatsApp Image 2026-09-21 at 23.01.07 (1).jpeg", "WhatsApp Image 2026-09-21 at 23.01.07 (2).jpeg", "WhatsApp Image 2026-09-21 at 23.01.07 (3).jpeg",
        "WhatsApp Image 2026-09-21 at 23.01.07 (4).jpeg", "WhatsApp Image 2026-09-21 at 23.01.07.jpeg", "WhatsApp Image 2026-09-21 at 23.07.07 (1).jpeg",
        "WhatsApp Image 2026-09-21 at 23.07.07 (2).jpeg", "WhatsApp Image 2026-09-21 at 23.07.07 (3).jpeg", "WhatsApp Image 2026-09-21 at 23.07.07 (4).jpeg",
        "WhatsApp Image 2026-09-21 at 23.07.07 (5).jpeg", "WhatsApp Image 2026-09-21 at 23.07.07 (6).jpeg", "WhatsApp Image 2026-09-21 at 23.07.08 (1).jpeg",
        "WhatsApp Image 2026-09-21 at 23.07.08 (2).jpeg", "WhatsApp Image 2026-09-21 at 23.07.08 (3).jpeg", "WhatsApp Image 2026-09-21 at 23.07.08 (4).jpeg",
        "WhatsApp Image 2026-09-21 at 23.07.08 (5).jpeg", "WhatsApp Image 2026-09-21 at 23.07.08 (6).jpeg", "WhatsApp Image 2026-09-21 at 23.07.08.jpeg",
        "WhatsApp Image 2026-09-21 at 23.07.09 (1).jpeg", "WhatsApp Image 2026-09-21 at 23.07.09 (10).jpeg", "WhatsApp Image 2026-09-21 at 23.07.09 (11).jpeg",
        "WhatsApp Image 2026-09-21 at 23.07.09 (12).jpeg", "WhatsApp Image 2026-09-21 at 23.07.09 (13).jpeg", "WhatsApp Image 2026-09-21 at 23.07.09 (14).jpeg",
        "WhatsApp Image 2026-09-21 at 23.07.09 (15).jpeg", "WhatsApp Image 2026-09-21 at 23.07.09 (16).jpeg", "WhatsApp Image 2026-09-21 at 23.07.09 (17).jpeg",
        "WhatsApp Image 2026-09-21 at 23.07.09 (18).jpeg", "WhatsApp Image 2026-09-21 at 23.07.09 (19).jpeg", "WhatsApp Image 2026-09-21 at 23.07.09 (2).jpeg",
        "WhatsApp Image 2026-09-21 at 23.07.09 (20).jpeg", "WhatsApp Image 2026-09-21 at 23.07.09 (21).jpeg", "WhatsApp Image 2026-09-21 at 23.07.09 (22).jpeg",
        "WhatsApp Image 2026-09-21 at 23.07.09 (23).jpeg", "WhatsApp Image 2026-09-21 at 23.07.09 (24).jpeg", "WhatsApp Image 2026-09-21 at 23.07.09 (25).jpeg",
        "WhatsApp Image 2026-09-21 at 23.07.09 (26).jpeg", "WhatsApp Image 2026-09-21 at 23.07.09 (27).jpeg", "WhatsApp Image 2026-09-21 at 23.07.09 (28).jpeg",
        "WhatsApp Image 2026-09-21 at 23.07.09 (29).jpeg", "WhatsApp Image 2026-09-21 at 23.07.09 (3).jpeg", "WhatsApp Image 2026-09-21 at 23.07.09 (30).jpeg",
        "WhatsApp Image 2026-09-21 at 23.07.09 (31).jpeg", "WhatsApp Image 2026-09-21 at 23.07.09 (32).jpeg", "WhatsApp Image 2026-09-21 at 23.07.09 (33).jpeg",
        "WhatsApp Image 2026-09-21 at 23.07.09 (34).jpeg", "WhatsApp Image 2026-09-21 at 23.07.09 (35).jpeg", "WhatsApp Image 2026-09-21 at 23.07.09 (4).jpeg",
        "WhatsApp Image 2026-09-21 at 23.07.09 (5).jpeg", "WhatsApp Image 2026-09-21 at 23.07.09 (6).jpeg", "WhatsApp Image 2026-09-21 at 23.07.09 (7).jpeg",
        "WhatsApp Image 2026-09-21 at 23.07.09 (8).jpeg", "WhatsApp Image 2026-09-21 at 23.07.09 (9).jpeg", "WhatsApp Image 2026-09-21 at 23.07.09.jpeg"
    ];

    // Mezclar las fotos
    const shuffledImages = images.sort(() => 0.5 - Math.random());

    shuffledImages.forEach((imgName, index) => {
        const div = document.createElement('div');
        div.classList.add('masonry-item');
        
        const img = document.createElement('img');
        img.src = `Img/${imgName}`;
        img.alt = `Recuerdo ${index + 1}`;
        img.loading = 'lazy'; // Muy importante para no trabar el celular con 55 fotos
        
        div.appendChild(img);
        masonryGallery.appendChild(div);
    });

});
