function updateSelection() {
    var fileList = document.getElementById("fileSelect");
    var selectedFile = fileList.options[fileList.selectedIndex];
    var waveFile = loadFile("data/" + selectedFile.innerText, displayAudioFile);
}

window.onload = function () {
    var waveFile = loadFile("data/tada.wav", displayAudioFile);
};
