function playText() {
    const inputText = document.getElementById('inputText').value;
    const audio = new Audio(`https://api.voicerss.org/?key=YOUR_API_KEY&hl=en-us&src=${encodeURIComponent(inputText)}`);
    audio.play();
    document.getElementById('audio').src = audio.src;
}

function downloadAudio() {
    const inputText = document.getElementById('inputText').value;
    const audio = new Audio(`https://api.voicerss.org/?key=YOUR_API_KEY&hl=en-us&src=${encodeURIComponent(inputText)}`);
    const blob = new Blob([inputText], { type: 'audio/mpeg' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'audio.mp3';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}
