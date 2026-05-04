
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav a");
    const currentUrl = window.location.href;
    links.forEach(link => {
        if (currentUrl.includes(link.getAttribute("href"))) {
            link.style.fontWeight = "bold";
            link.style.borderBottom = "2px solid var(--text-dark)";
        }
    });

    setTimeout(() => {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.book-card').forEach(card => {
            card.style.opacity = "0";
            card.style.transform = "translateY(30px)";
            card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
            observer.observe(card);
        });
    }, 500);
});

const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "↑";
scrollBtn.style.cssText = "position:fixed; bottom:30px; left:30px; width:45px; height:45px; border:none; background:var(--bg-header-footer); color:var(--text-dark); border-radius:50%; cursor:pointer; display:none; z-index:1000; box-shadow:0 4px 6px rgba(0,0,0,0.1); font-size:1.2rem; transition:0.3s;";
document.body.appendChild(scrollBtn);

const progressBar = document.createElement("div");
progressBar.style.cssText = "position:fixed; top:0; left:0; height:4px; background:var(--text-dark); z-index:9999; transition:width 0.2s; width:0%;";
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progressBar.style.width = `${(scrollTop / scrollHeight) * 100}%`;
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});





function toggleMenu() {
    const nav = document.getElementById('navMenu');
    nav.classList.toggle('active');
}