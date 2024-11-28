function parseSOSIFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function(event) {
            const content = event.target.result;
            // Her kan du implementere parsing av SOSI innholdet.
            // For eksempel:
            const parsedData = {}; // Resultatet av parsing
            resolve(parsedData);
        };
        reader.onerror = function() {
            reject('Feil ved lesing av fil');
        };
        reader.readAsText(file);
    });
}