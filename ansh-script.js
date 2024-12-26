window.onload = () => {
    // Show the Music Popup when the page loads
    document.getElementById('music-popup').style.visibility = 'visible';
    document.getElementById('music-popup').style.opacity = 1;

    // Music Popup - Yes Button Click
    document.getElementById('yes-btn').addEventListener('click', () => {
        // Play the audio
        document.getElementById('audio-player').play();
        // Hide the popup after selection
        document.getElementById('music-popup').style.opacity = 0;
        document.getElementById('music-popup').style.visibility = 'hidden';
        // Show the Surprise Button
        document.getElementById('surprise-btn').classList.remove('hidden');
    });

    // Music Popup - No Button Click
    document.getElementById('no-btn').addEventListener('click', () => {
        // Hide the popup without playing the music
        document.getElementById('music-popup').style.opacity = 0;
        document.getElementById('music-popup').style.visibility = 'hidden';
        // Show the Surprise Button
        document.getElementById('surprise-btn').classList.remove('hidden');
    });
};
