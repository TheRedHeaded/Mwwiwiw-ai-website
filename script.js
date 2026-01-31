function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  if (input.value.trim() === "") return;

  // User message
  const userMsg = document.createElement("div");
  userMsg.className = "user";
  userMsg.textContent = input.value;
  chatBox.appendChild(userMsg);

  // Bot reply (demo)
  const botMsg = document.createElement("div");
  botMsg.className = "bot";
  botMsg.textContent = "I am a demo assistant 🤖";
  chatBox.appendChild(botMsg);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

