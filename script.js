document.addEventListener('DOMContentLoaded', (event) => {
    let clickCount = 0;
    const face = document.getElementById('face');
    const clickCountDisplay = document.getElementById('click-count');

    face.addEventListener('click', () => {
        clickCount++;
        clickCountDisplay.textContent = clickCount;
    });
});
