document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const id = link.getAttribute("href");
            document.querySelector(id).scrollIntoView({
                'behavior': 'smooth',
                'block': 'start'
            });
        })
    });
});