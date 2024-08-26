// Función para togglear la visualización del contenido de la etapa
document.querySelectorAll('.timeline-item h2').forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Función para mostrar la información adicional
document.querySelectorAll('.more-info1').forEach(button => {
    button.addEventListener('click', (e) => {
        const infoId = button.getAttribute('data-info');
        const infoBox = document.getElementById(infoId);
        infoBox.style.display = 'block';

        // Añadir listener para cerrar el infoBox al hacer clic fuera
        const closeInfoBox = (event) => {
            if (!infoBox.contains(event.target) && event.target !== button) {
                infoBox.style.display = 'none';
                document.removeEventListener('click', closeInfoBox);
            }
        };

        // Esperar un ciclo de evento para evitar el cierre inmediato
        setTimeout(() => {
            document.addEventListener('click', closeInfoBox);
        }, 0);
    });
});

document.querySelectorAll('.more-info2').forEach(button => {
    button.addEventListener('click', (e) => {
        const infoId = button.getAttribute('data-info');
        const infoBox = document.getElementById(infoId);
        infoBox.style.display = 'block';

        // Añadir listener para cerrar el infoBox al hacer clic fuera
        const closeInfoBox = (event) => {
            if (!infoBox.contains(event.target) && event.target !== button) {
                infoBox.style.display = 'none';
                document.removeEventListener('click', closeInfoBox);
            }
        };

        // Esperar un ciclo de evento para evitar el cierre inmediato
        setTimeout(() => {
            document.addEventListener('click', closeInfoBox);
        }, 0);
    });
});

document.querySelectorAll('.more-info3').forEach(button => {
    button.addEventListener('click', (e) => {
        const infoId = button.getAttribute('data-info');
        const infoBox = document.getElementById(infoId);
        infoBox.style.display = 'block';

        // Añadir listener para cerrar el infoBox al hacer clic fuera
        const closeInfoBox = (event) => {
            if (!infoBox.contains(event.target) && event.target !== button) {
                infoBox.style.display = 'none';
                document.removeEventListener('click', closeInfoBox);
            }
        };

        // Esperar un ciclo de evento para evitar el cierre inmediato
        setTimeout(() => {
            document.addEventListener('click', closeInfoBox);
        }, 0);
    });
});

document.querySelectorAll('.more-info4').forEach(button => {
    button.addEventListener('click', (e) => {
        const infoId = button.getAttribute('data-info');
        const infoBox = document.getElementById(infoId);
        infoBox.style.display = 'block';

        // Añadir listener para cerrar el infoBox al hacer clic fuera
        const closeInfoBox = (event) => {
            if (!infoBox.contains(event.target) && event.target !== button) {
                infoBox.style.display = 'none';
                document.removeEventListener('click', closeInfoBox);
            }
        };

        // Esperar un ciclo de evento para evitar el cierre inmediato
        setTimeout(() => {
            document.addEventListener('click', closeInfoBox);
        }, 0);
    });
});

document.querySelectorAll('.more-info5').forEach(button => {
    button.addEventListener('click', (e) => {
        const infoId = button.getAttribute('data-info');
        const infoBox = document.getElementById(infoId);
        infoBox.style.display = 'block';

        // Añadir listener para cerrar el infoBox al hacer clic fuera
        const closeInfoBox = (event) => {
            if (!infoBox.contains(event.target) && event.target !== button) {
                infoBox.style.display = 'none';
                document.removeEventListener('click', closeInfoBox);
            }
        };

        // Esperar un ciclo de evento para evitar el cierre inmediato
        setTimeout(() => {
            document.addEventListener('click', closeInfoBox);
        }, 0);
    });
});

document.querySelectorAll('.more-info6').forEach(button => {
    button.addEventListener('click', (e) => {
        const infoId = button.getAttribute('data-info');
        const infoBox = document.getElementById(infoId);
        infoBox.style.display = 'block';

        // Añadir listener para cerrar el infoBox al hacer clic fuera
        const closeInfoBox = (event) => {
            if (!infoBox.contains(event.target) && event.target !== button) {
                infoBox.style.display = 'none';
                document.removeEventListener('click', closeInfoBox);
            }
        };

        // Esperar un ciclo de evento para evitar el cierre inmediato
        setTimeout(() => {
            document.addEventListener('click', closeInfoBox);
        }, 0);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Mostrar y ocultar la ventana de información
    const infoButton = document.getElementById("info-button");
    const infoWindow = document.getElementById("info-window");

    infoButton.addEventListener("click", function () {
        infoWindow.style.display = "block";
    });

    document.addEventListener("click", function (e) {
        if (!infoWindow.contains(e.target) && e.target !== infoButton) {
            infoWindow.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Mostrar y ocultar la ventana de información
    const infoButton = document.getElementById("ref-button");
    const infoWindow = document.getElementById("ref-window");

    infoButton.addEventListener("click", function () {
        infoWindow.style.display = "block";
    });

    document.addEventListener("click", function (e) {
        if (!infoWindow.contains(e.target) && e.target !== infoButton) {
            infoWindow.style.display = "none";
        }
    });
});