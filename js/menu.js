
  
(() => {
    const mobileRefs = {
      menuBtnRef : document.querySelector("[data-menu-btn]"),
      mobileMenuRef: document.querySelector("[data-menu]"),
      // modal: document.querySelector("[data-modal]"),
    };
  
    mobileRefs.menuBtnRef.addEventListener("click", toggleMobileMenu);
     
  function toggleMobileMenu() {
    const expanded =
      mobileRefs.menuBtnRef.getAttribute("aria-expanded") === "true" || false;
      mobileRefs.menuBtnRef.classList.toggle("is-open");
      mobileRefs.menuBtnRef.setAttribute("aria-expanded", !expanded);

      mobileRefs.mobileMenuRef.classList.toggle("is-open");

      document.body.classList.toggle("mobile-menu-open");
    }
  })();