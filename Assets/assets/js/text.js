document.addEventListener('DOMContentLoaded', function() {
    const words = [
        { text: "BUSINESS" },
        { text: "GROWTH" },
        { text: "STRATEGY" },
        { text: "LEADERSHIP" }
    ];
    let currentIndex = 0;
    const container = document.querySelector('.dynamic-text-container-1');

    const words2 = [
        { text: "EXCELLENCE" },
        { text: "SUCCESS" },
    ];
    let currentIndex2 = 0;
    const container2 = document.querySelector('.dynamic-text-container-2');

    function createLetterSpans(word) {
        return word.split('').map((letter, index, array) => {
            const percentage = (index / (array.length - 1)) * 100;
            return `<span class="letter" style="background: linear-gradient(90deg, #7209d4, #2832d4 33%, #00a5b2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-size: ${array.length * 100}% 100%; background-position: ${percentage}% 0;">${letter}</span>`;
        }).join('');
    }

    function animateLetters(container, inOrOut) {
        const letters = container.querySelectorAll('.letter');
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.classList.toggle(inOrOut === 'in' ? 'active' : 'fade-out');
            }, index * 50);
        });
        return (letters.length + 1) * 50; // Total animation time
    }

    async function changeWord(container, words, currentIndex) {
        if (container.children.length) {
            await new Promise(resolve => setTimeout(resolve, animateLetters(container, 'out')));
        }

        const nextWord = words[currentIndex];
        container.innerHTML = createLetterSpans(nextWord.text);

        await new Promise(resolve => setTimeout(resolve, 10)); // Small delay for DOM update
        animateLetters(container, 'in');

        return (currentIndex + 1) % words.length;
    }

    async function animateContainer1() {
        currentIndex = await changeWord(container, words, currentIndex);
        setTimeout(animateContainer1, 4000);
    }

    async function animateContainer2() {
        currentIndex2 = await changeWord(container2, words2, currentIndex2);
        setTimeout(animateContainer2, 4000);
    }

    // Initial calls
    if (container) {
        animateContainer1();
    } else {
        console.error('Dynamic text container 1 not found');
    }

    if (container2) {
        animateContainer2();
    } else {
        console.error('Dynamic text container 2 not found');
    }
});