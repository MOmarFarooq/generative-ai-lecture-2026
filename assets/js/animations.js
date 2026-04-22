// Intersection Observer for scroll-triggered animations
const animatedElements = document.querySelectorAll('.animated-code, .animated-text');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translate(0)';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.5s ease';
    observer.observe(el);
});

// Typewriter effect for code blocks
const codeBlocks = document.querySelectorAll('.animated-code code');
codeBlocks.forEach(block => {
    const text = block.textContent;
    block.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
        if (i < text.length) {
            block.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 15);
        }
    };
    
    typeWriter();
});
