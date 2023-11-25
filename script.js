function playText() {
    const inputText = document.getElementById('inputText').value;

    // Using the Web Speech API
    const utterance = new SpeechSynthesisUtterance(inputText);
    speechSynthesis.speak(utterance);

    // If you still want to display an audio element
    document.getElementById('audio').src = `https://api.voicerss.org/?key=e322aba026494fb798c6bbae5a645328&hl=en-us&src=${encodeURIComponent(inputText)}`;
}

function downloadAudio() {
    const inputText = document.getElementById('inputText').value;

    // Using the VoiceRSS API to generate and download audio
    const downloadLink = document.createElement('a');
    downloadLink.href = `https://api.voicerss.org/?key=e322aba026494fb798c6bbae5a645328&hl=en-us&src=${encodeURIComponent(inputText)}`;
    downloadLink.download = 'audio.mp3';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
