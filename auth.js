(function () {
const modal = document.getElementById("authModal");
const profileBtn = document.getElementById("profileBtn");
const closeBtn = modal && modal.querySelector(".auth-close");
const backdrop = modal && modal.querySelector("[data-dismiss='backdrop']");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const showSignupBtn = document.getElementById("showSignup");
const showLoginBtn = document.getElementById("showLogin");

function openModal() {
    if (!modal) return;
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
    document.documentElement.style.overflow = "hidden";
    const f = loginForm.querySelector("input");
    if (f) f.focus();
}

function closeModal() {
    if (!modal) return;
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    document.documentElement.style.overflow = "";
}

function showSignup() {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
    modal.querySelector("#authTitle").textContent = "Create account";
}

function showLogin() {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    modal.querySelector("#authTitle").textContent = "Sign in";
}

if (profileBtn) profileBtn.addEventListener("click", openModal);
if (closeBtn) closeBtn.addEventListener("click", closeModal);
if (backdrop) backdrop.addEventListener("click", closeModal);

if (showSignupBtn) showSignupBtn.addEventListener("click", showSignup);
if (showLoginBtn) showLoginBtn.addEventListener("click", showLogin);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") closeModal();
});

if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); 
        window.location.href = "GuideProfile.html"; 
    });
}
})();
