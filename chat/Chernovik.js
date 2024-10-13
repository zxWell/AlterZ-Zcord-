// function sendMessage(event) {
//     if(event.key === 'Enter') {
//         const message = chatInput.value.trim();
//         if(message) {
//             message.push = (message);
//             displayMessage();
//             chatInput.value = '';
//         }
//     }
// }

// function displayMessage(message) {
//     const messageDiv = document.createElement(`div`);
//     messageDiv.textContent = message;
//     chatMessages.appendChild(messageDiv);
//     chatMessages.scrollTop = chatMessages.scrollHeight;
// }

// function sendMessage() {
//     const message = chatInput.value.trim();
//     if(message) {
//         chatHistory.push(message);
//         displayMessage(message);
//         chatInput.value = '';
//     }
// }
//--------------------------------------
//<script src="chat.js"></script>
//--------------------------------------
<input type="text"
            id="chat-input"
            placeholder="ник"/>