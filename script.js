window.addEventListener('keydown', function(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const note = document.querySelector('.note');
    if (!key) return; // stop the function if the key isn't found
    key.classList.add('active');

    // Remove the active class after 70ms
    setTimeout(() => {
        key.classList.remove('active');
    }, 200);
});


// FALTA REBOTAR O MOUSE E SONS
//FUTURAMENTE TALVEZ BOTAR OUTROS INTRUMENTOS E OITAVAS