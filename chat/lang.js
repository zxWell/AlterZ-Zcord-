const translations = {
    en: {
        verhushka: "Guilds channel:",
        chat: "Chat",
        nicknamePlaceholder: "Nickname",
        chatPlaceholder: "Enter your message",
        sendButton: "Send",
        pidori: "Participants"
    },
    ru: {
        verhushka: "Каналы группы:",
        chat: "Чат",
        nicknamePlaceholder: "Ник",
        chatPlaceholder: "Введите сообщение",
        sendButton: "Отправить",
        pidori: "участники"
    },
    zv: {
        verhushka: "Наши слоны:",
        chat: "Alter Z",
        nicknamePlaceholder: "никнаме",
        chatPlaceholder: "тVOё сOO",
        sendButton: "Харкнуть",
        pidori: "наши слоны🐘"
    }
};

function changeLanguage(language) {
    document.getElementById("verhushka").textContent = translations[language].verhushka;
    document.getElementById("chat").textContent = translations[language].chat;
    document.getElementById("nickname-input").placeholder = translations[language].nicknamePlaceholder;
    document.getElementById("chat-input").placeholder = translations[language].chatPlaceholder;
    document.getElementById("chat-send").textContent = translations[language].sendButton;
    document.getElementById("participant").participant = translations[language].pidori;
}
    document.getElementById("language-select").addEventListener("change", function() {
    const selectedLanguage = this.value;
    changeLanguage(selectedLanguage);
});

changeLanguage("en");
