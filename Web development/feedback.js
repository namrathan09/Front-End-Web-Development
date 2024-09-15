document.querySelector('.feedback-form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('popup').style.display = 'block';
});

document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
});
