document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = 'Спасибо! Ваш вопрос отправлен.';
    this.reset();
}); 