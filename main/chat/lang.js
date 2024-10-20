const trans = require('../lang/langM.json');;

function changeLanguage(language) {
    document.getElementById("verhushka").textContent = trans[language].verhushka;
    document.getElementById("chat").textContent = trans[language].chat;
    document.getElementById("nickname-input").placeholder = trans[language].nicknamePlaceholder;
    document.getElementById("chat-input").placeholder = trans[language].chatPlaceholder;
    document.getElementById("chat-send").textContent = trans[language].sendButton;
    document.getElementById("participant").participant = trans[language].pidori;
};
    
document.getElementById("language-select").addEventListener("change", function() {
    const selectedLanguage = this.value;
    changeLanguage(selectedLanguage);
});

changeLanguage(trans.langM.en);
