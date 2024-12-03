let isBlownOut = false; // Track the state of the animation

document.getElementById('blowOutButton').addEventListener('click', function () {
    if (!isBlownOut) {
        // Animate the flame shrinking and disappearing
        document.querySelector('.flicker-flame').style.animation = 'shrinkDisappear 1s forwards';
        document.querySelector('.flicker-flame2').style.animation = 'shrinkDisappear 1s forwards';

        // Replace the images and change background after the animation completes
        setTimeout(() => {
            document.querySelector('.candle24').src = 'img/a24.svg';
            document.querySelector('.flowerblue').src = 'img/ablueflower.svg';
            document.querySelector('.layer-bottom').src = 'img/abottoml.svg';
            document.querySelector('.flame2').src = 'img/acandle2.svg';
            document.querySelector('.flame4').src = 'img/acandle4.svg';
            document.querySelector('.dirt').src = 'img/adirt.svg';
            document.querySelector('.flower-line').src = 'img/aline.svg';
            document.querySelector('.layer-middle').src = 'img/amidl.svg';
            document.querySelector('.plate').src = 'img/aplate.svg';
            document.querySelector('.icing').src = 'img/aroof.svg';
            document.querySelector('.flowerpurple').src = 'img/asaffron.svg';
            document.querySelector('.sprinkles').src = 'img/asprinkles.svg';
            document.querySelector('.layer-top').src = 'img/atopl.svg';

            // Change the background color
            document.body.style.background = 'linear-gradient(0deg, rgba(144,141,209,1) 0%, rgba(255,222,222,1) 100%)';

            // Start confetti
            startConfetti();
        }, 1000); // Matches the duration of the animation

        isBlownOut = true;
        this.textContent = "Light Candle"; // Update button text
    } else {
        // Reset to original state
        document.querySelector('.flicker-flame').style.animation = 'growAppear 1s forwards';
        document.querySelector('.flicker-flame2').style.animation = 'growAppear 1s forwards';

        setTimeout(() => {
            document.querySelector('.candle24').src = 'img/24.svg';
            document.querySelector('.flowerblue').src = 'img/blueflower.svg';
            document.querySelector('.layer-bottom').src = 'img/bottom-l.svg';
            document.querySelector('.flame2').src = 'img/candle2.svg';
            document.querySelector('.flame4').src = 'img/candle4.svg';
            document.querySelector('.dirt').src = 'img/dirt.svg';
            document.querySelector('.flower-line').src = 'img/line.svg';
            document.querySelector('.layer-middle').src = 'img/mid-l.svg';
            document.querySelector('.plate').src = 'img/plate.svg';
            document.querySelector('.icing').src = 'img/roof.svg';
            document.querySelector('.flowerpurple').src = 'img/saffron.svg';
            document.querySelector('.sprinkles').src = 'img/sprinkles.svg';
            document.querySelector('.layer-top').src = 'img/top-l.svg';

            // Reset the background color
            document.body.style.background = 'linear-gradient(0deg, rgba(9,4,13,1) 0%, rgba(74,34,54,1) 100%)';

            // Stop confetti
            stopConfetti();
        }, 1000); // Matches the duration of the animation

        isBlownOut = false;
        this.textContent = "Blow Out Flame"; // Update button text
    }
});

// Keyframes for the flame shrinking and disappearing
document.styleSheets[0].insertRule(`
@keyframes shrinkDisappear {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(0);
        opacity: 0;
    }
}`, document.styleSheets[0].cssRules.length);

// Keyframes for the flame growing and appearing
document.styleSheets[0].insertRule(`
@keyframes growAppear {
    0% {
        transform: scale(0);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}`, document.styleSheets[0].cssRules.length);

// Confetti logic
function startConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.backgroundColor = getRandomColor();
        confettiContainer.appendChild(confetti);
    }
}

function stopConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    if (confettiContainer) confettiContainer.remove();
}

function getRandomColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#F3FF33'];
    return colors[Math.floor(Math.random() * colors.length)];
}
