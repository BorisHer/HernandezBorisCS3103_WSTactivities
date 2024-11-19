document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const wordCount = document.getElementById('wordCount');
    const sentenceCount = document.getElementById('sentenceCount');

    textInput.addEventListener('input', () => {
        // Get and trim the text
        const text = textInput.value.trim();

        // Count words
        const words = text === '' ? [] : text.split(/\s+/).filter(word => word.length > 0);
        wordCount.textContent = `Words: ${words.length}`;

        // Count sentences
        const sentences = text === '' ? [] : text
            .split(/[.!?]+/)
            .filter(sentence => sentence.trim().length > 0);
        sentenceCount.textContent = `Sentences: ${sentences.length}`;
    });
});