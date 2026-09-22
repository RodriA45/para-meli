# 🌻 Sorpresa de Primavera para Meli

Una página web interactiva, romántica y cinemática creada como regalo sorpresa para el Día de la Primavera (21 de Septiembre).

## ✨ Características de la Página

*   **Pantalla de Inicio Interactiva:** Un modal estilo *Glassmorphism* que bloquea el scroll hasta que el usuario interactúa, activando la música y animaciones. Fondo animado con colores primaverales y burbujas.
*   **Música de Fondo:** Se reproduce automáticamente (tras la primera interacción) para crear una experiencia envolvente y romántica.
*   **Animación de Pétalos:** Lluvia continua de pétalos amarillos generados dinámicamente con JavaScript, con velocidades, tamaños y trayectorias aleatorias.
*   **Ramo de Flores Virtual:** Una sección interactiva con un botón que genera una explosión de emoticonos (🌻🌼💛) al ser clickeado.
*   **Galería Cinemática (Masonry):** Grilla dinámica que carga decenas de fotos ordenadas aleatoriamente. Utiliza efectos de *Stagger* (aparición escalonada) al hacer scroll.
*   **Efectos Visuales:**
    *   Diseño 100% *Mobile First* adaptado también a pantallas grandes.
    *   Animaciones *Scroll Reveal* (elementos que aparecen suavemente mientras bajas).
    *   *Cursor Trail*: Pequeñas estelas que siguen el puntero del mouse en pantallas de escritorio.
    *   Efecto *Ken Burns* (acercamiento extremadamente lento) en la foto principal.

## 🛠️ Tecnologías Usadas

El proyecto está construido íntegramente de forma nativa sin frameworks pesados, lo que permite una carga rápida e instantánea:

*   **HTML5:** Estructura semántica.
*   **CSS3 (Vanilla):** Variables nativas, flexbox, CSS Grid, Multi-column layout (para Masonry), keyframes y backdrop-filter.
*   **JavaScript (Vanilla JS):** Manipulación del DOM, eventos de scroll, control de audio y animaciones dinámicas basadas en matemáticas aleatorias.

## 🚀 Cómo verlo localmente

Dado que está construido con Vanilla JS, no hace falta instalar Node.js ni correr ningún servidor.

1.  Asegúrate de que haya un archivo llamado `music.mp3` en la misma carpeta que el `index.html`.
2.  Haz doble clic en `index.html` para abrirlo en tu navegador favorito.
3.  *Opcional: Abre las herramientas de desarrollador (F12) y activa la vista de celular para experimentar el diseño principal.*

## 🌐 Despliegue en GitHub Pages

Este proyecto está optimizado para funcionar en **GitHub Pages**. Solo tienes que subir los archivos a tu repositorio, ir a Configuración > Pages y desplegar desde la rama `main`.

---
*Desarrollado con amor 💛*
