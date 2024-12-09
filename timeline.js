// JavaScript for Interactive Timeline
document.addEventListener("DOMContentLoaded", function() {
    const timelineEvents = document.querySelectorAll(".event");

    timelineEvents.forEach(event => {
        event.addEventListener("click", function() {
            const details = this.querySelector(".details");
            details.classList.toggle("hidden");
        });
    });
});
