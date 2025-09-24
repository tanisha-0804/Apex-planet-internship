// Feature Data
document.addEventListener("DOMContentLoaded", () => {
    const features = [
        { id: 1, title: "Responsive Layout" },
        { id: 2, title: "Cross-Browser Compatible" },
        { id: 3, title: "Optimized Performance" },
        { id: 4, title: "Interactive Forms" },
        { id: 5, title: "Creative Design" }
    ];

    const container = document.getElementById("featureContainer");

    features.forEach(feature => {
        const card = document.createElement("div");
        card.classList.add("feature-card");
        card.innerHTML = `<h3>${feature.title}</h3>`;
        container.appendChild(card);
    });

    // Form Submission
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", e => {
        e.preventDefault();
        alert("Message submitted! (Demo only)");
        form.reset();
    });
});
