document.addEventListener("DOMContentLoaded", () => {
    // ========== Carrusel ==========
    const slides = document.querySelectorAll(".carousel-slide");
    let current = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("hidden", i !== index);
        });
    }

    const prev = document.getElementById("prevBtn");
    const next = document.getElementById("nextBtn");

    if (prev && next && slides.length > 0) {
        prev.addEventListener("click", () => {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        });

        next.addEventListener("click", () => {
            current = (current + 1) % slides.length;
            showSlide(current);
        });

        showSlide(current); // Mostrar la primera imagen
    }

    // ========== Efecto de escritura en títulos con clase .neon-text ==========
    const title = document.querySelector('.neon-text');
    if (title) {
        const text = title.textContent;
        title.textContent = '';

        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 100);
    }

    // ========== Efectos de hover para botones con clase .neon-button ==========
    document.querySelectorAll('.neon-button').forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
            button.style.boxShadow = '0 0 20px #0ff, 0 0 40px #0ff inset';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
            button.style.boxShadow = '0 0 10px #0ff, 0 0 20px #0ff inset';
        });

        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.95)';
        });

        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1.05)';
        });
    });

    /* document.querySelectorAll('button').forEach(button => {
        const texto = button.textContent.trim().toLowerCase();

        if (texto.includes('ver demo')) {
            button.addEventListener('click', () => {
                alert('⚠️ Esta funcionalidad aún no está disponible. ¡Muy pronto estará en línea!');
            });
        }

        if (texto.includes('desarrollar desde cero')) {
            button.addEventListener('click', () => {
                alert('🚧 La plataforma de cursos está en etapa de diseño. Te avisaremos cuando esté lista.');
            });
        }
    }); */
});
