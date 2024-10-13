// Объект с переводами для разных языков
const translations = {
    en: {
        verhushka: "Top",
        chat: "Chat",
        nicknamePlaceholder: "Nickname",
        chatPlaceholder: "Enter your message",
        sendButton: "Send"
    },
    ru: {
        verhushka: "Верхушка",
        chat: "Чат",
        nicknamePlaceholder: "Ник",
        chatPlaceholder: "Введите сообщение",
        sendButton: "Отправить"
    },
    zv: {
        verhushka: "ZVOЙ верх",
        chat: "Alter Z",
        nicknamePlaceholder: "никнаме",
        chatPlaceholder: "тVOё сOO",
        sendButton: "Харкнуть"
    }
};

// Функция для переключения языка
function changeLanguage(language) {
    // Получаем элементы, которые нужно перевести
    document.getElementById("verhushka").textContent = translations[language].verhushka;
    document.getElementById("chat").textContent = translations[language].chat;
    document.getElementById("nickname-input").placeholder = translations[language].nicknamePlaceholder;
    document.getElementById("chat-input").placeholder = translations[language].chatPlaceholder;
    document.getElementById("chat-send").textContent = translations[language].sendButton;
}

// Обработчик события для выбора языка
document.getElementById("language-select").addEventListener("change", function() {
    const selectedLanguage = this.value;
    changeLanguage(selectedLanguage);
});

// Устанавливаем начальный язык (по умолчанию, например, английский)
changeLanguage("en");
