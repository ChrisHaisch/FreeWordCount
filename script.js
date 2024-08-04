document.getElementById('textBox').addEventListener('input', function() {
    let text = this.value;
    
    // Word count
    let wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    document.getElementById('wordCount').innerText = wordCount;

    // Character count
    let charCount = text.length;
    document.getElementById('charCount').innerText = charCount;

    // Sentence count
    let sentenceCount = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
    document.getElementById('sentenceCount').innerText = sentenceCount;

    // Paragraph count
    let paragraphCount = text.split(/\n+/).filter(paragraph => paragraph.trim().length > 0).length;
    document.getElementById('paragraphCount').innerText = paragraphCount;

    // Page count (assuming 500 words per page)
    let pageCount = Math.ceil(wordCount / 500);
    document.getElementById('pageCount').innerText = pageCount;

    // Reading time (assuming 200 words per minute)
    let readingTime = (wordCount / 200).toFixed(2);
    document.getElementById('readingTime').innerText = `${readingTime} min`;

    // Speaking time (assuming 150 words per minute)
    let speakingTime = (wordCount / 150).toFixed(2);
    document.getElementById('speakingTime').innerText = `${speakingTime} min`;

    // Update social media character counts
    updateProgress('facebookCount', 'facebookProgress', charCount, 250);
    updateProgress('twitterCount', 'twitterProgress', charCount, 280);
    updateProgress('googleCount', 'googleProgress', charCount, 300);
});

function updateProgress(countId, progressId, charCount, maxCount) {
    document.getElementById(countId).innerText = `${charCount}/${maxCount}`;
    const percentage = Math.min((charCount / maxCount) * 100, 100);
    document.getElementById(progressId).style.width = percentage + '%';

    if (charCount > maxCount) {
        document.getElementById(progressId).style.backgroundColor = 'red';
    } else {
        document.getElementById(progressId).style.backgroundColor = '#007bff';
    }
}