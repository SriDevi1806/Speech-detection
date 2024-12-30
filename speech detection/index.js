const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = true;
  recognition.continuous = true;

  const output = document.getElementById('output');
  const startBtn = document.getElementById('start');

  startBtn.addEventListener('click', () => {
    recognition.start();
    output.textContent = "Listening...";
 });

  recognition.addEventListener('result', (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0].transcript)
      .join('');
    output.textContent = transcript;
  });

  recognition.addEventListener('error', (event) => {
    output.textContent = `Error: ${event.error}`;
  });

  recognition.addEventListener('end', () => {
    output.textContent = "Click 'Start Listening' to begin again.";
  });
} else {
  alert('Speech Recognition is not supported in this browser. Try Google Chrome.');
}