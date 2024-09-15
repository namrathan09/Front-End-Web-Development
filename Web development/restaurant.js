// You can create a simple pop-up function to enhance feedback experience
document.addEventListener('DOMContentLoaded', () => {
    const feedbackLink = document.querySelector('.feedback-link');
    feedbackLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert("Thank you for visiting our menu. Now, please provide your feedback.");
        window.location.href = this.href;
    });
});
