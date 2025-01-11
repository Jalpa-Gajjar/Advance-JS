document.addEventListener('DOMContentLoaded', (event) => {
    // const hoverArea = document.getElementById('hoverArea');
    const coordinates = document.getElementById('coordinates');

    // hoverArea.addEventListener('mousemove', (e) => {
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        coordinates.innerHTML = `X: ${x}, Y: ${y}`;
    });

    // hoverArea.addEventListener('mouseleave', () => {
    //     coordinates.textContent = 'X: 0, Y: 0';
    // });
});