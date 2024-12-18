

document.addEventListener("DOMContentLoaded", function () {
    document.body.style.opacity = "1";
    const toc = document.querySelector(".toc"); 
    const tocLinks = toc ? toc.querySelectorAll("a") : [];
    const sections = Array.from(tocLinks).map(link => {
      const targetId = link.getAttribute("href").substring(1);
      return document.getElementById(targetId);
    });

    
    if (toc && tocLinks.length === 0) {
      toc.style.display = "none";
    }

    
    tocLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

          
          tocLinks.forEach(link => link.classList.remove("active"));
          this.classList.add("active");
        }
      });
    });

    
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            
            const targetId = entry.target.id;
            const activeLink = Array.from(tocLinks).find(link => link.getAttribute("href").substring(1) === targetId);

            if (activeLink) {
              tocLinks.forEach(link => link.classList.remove("active"));
              activeLink.classList.add("active");
            }
          }
        });
      },
      {
        rootMargin: "0px 0px -50% 0px", 
        threshold: 0.5 
      }
    );

    
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;

      
      if (scrollTop === 0) {
        tocLinks.forEach(link => link.classList.remove("active"));
        return;
      }

      
      if (window.innerHeight + scrollTop >= document.body.offsetHeight - 5) {
        tocLinks.forEach(link => link.classList.remove("active"));
        if (tocLinks.length > 0) {
          tocLinks[tocLinks.length - 1].classList.add("active");
        }
      }
    });
  });