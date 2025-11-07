document.addEventListener("DOMContentLoaded", async () => {
    // Cargar includes
    const includes = document.querySelectorAll("[data-include]");
    for (const el of includes) {
        const file = el.getAttribute("data-include");
        const res = await fetch(file);
        if (res.ok) {
            el.innerHTML = await res.text();
        } else {
            el.innerHTML = `<p>Error al cargar ${file}</p>`;
        }
    }

    // Formulario de contacto con EmailJS
    if (document.getElementById('contact-form')) {
        const emailjsScript = document.createElement('script');
        emailjsScript.src = 'https://cdn.jsdelivr.net/npm/emailjs-com@2.6.4/dist/email.min.js';
        document.head.appendChild(emailjsScript);

        emailjsScript.onload = function () {
            emailjs.init('tY5CCOvHo8ye6Mg8d'); // Reemplaza con tu User ID real

            document.getElementById('contact-form').addEventListener('submit', function (event) {
                event.preventDefault();

                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.disabled = true;
                submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Enviando...`;

                emailjs.sendForm('service_4dowrsu', 'template_ghm2jm8', this)
                    .then(function () {
                        submitBtn.innerHTML = `<i class="fas fa-check"></i> Enviado con éxito`;
                        document.getElementById('contact-form').reset();

                        setTimeout(() => {
                            submitBtn.disabled = false;
                            submitBtn.textContent = originalText;
                        }, 3000);
                    }, function (error) {
                        submitBtn.innerHTML = `<i class="fas fa-exclamation-circle"></i> Error`;
                        console.error('Error al enviar:', error);
                        alert('Ocurrió un error al enviar el mensaje. Por favor intenta nuevamente.');

                        setTimeout(() => {
                            submitBtn.disabled = false;
                            submitBtn.textContent = originalText;
                        }, 3000);
                    });
            });
        };
    }

    // Cursor personalizado
    const cursor = document.getElementById('cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, input, textarea').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.borderColor = '#0af';
        });

        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.borderColor = '#0af';
        });
    });

    // Menú móvil
    const mobileBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Partículas de fondo con interacción al cursor
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#0af", "#f0f", "#0f0"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#0af",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false
                }
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse" // REACCIÓN AL CURSOR
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "repulse": {
                    "distance": 100,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });

    // Año actual en el footer
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Botón "Cargar más proyectos"
    const loadMore = document.getElementById('load-more');
    if (loadMore) {
        loadMore.addEventListener('click', function () {
            alert('Implementar aquí la carga dinámica de más proyectos desde una API o base de datos.');
        });
    }
});
