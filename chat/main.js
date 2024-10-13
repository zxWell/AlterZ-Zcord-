//z yt t,e? xj z yfgbcfk
// бля, ГОЙДА НАХООЙЙ.
//бля, я не ебу, чо я написал. (перевод первого)

const chatMessages = document.getElementById('chat-messages')
const chatInput = document.getElementById('chat-input')
const chatSendButton = document.getElementById('chat-send')

let chatHistory = [];
let chatLog = [];

function addMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  chatLog.push({ message,seder,timestamp:new Date().toISOString});
};

chatSendButton.addEventListener('click', () =>{
  const message = chatInput.value.trim();
  if(message) {
    sendMessage(message);
    chatInput.value = '';
  }
})

function sendMessage(message) {
  addMessage(message);
};

function saveChatLog() {
  localStorage.setItem('chatlog', JSON.stringify(chatLog));
};

function loadChatLog() {
  const savedLog= localStorage.getItem('chatLog');
  if(savedLog) {
    chatLog = JSON.parse(savedLog);
    chatLog.forEach(entry => addMessage(entry.message, entry.seder));
  }
}

loadChatLog();

window.addEventListener('beforeunload', saveChatLog);