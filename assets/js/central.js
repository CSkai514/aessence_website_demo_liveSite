const toggleBtn = document.getElementById('whatsappToggle');
const chatbox = document.getElementById('whatsappChatbox');

toggleBtn.addEventListener('click', () => {
  chatbox.style.display = chatbox.style.display === 'block' ? 'none' : 'block';
});