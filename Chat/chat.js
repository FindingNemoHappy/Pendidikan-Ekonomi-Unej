// Inisialisasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAoBihPUNjz8ySkweViFolBP9zWO8vSIco",
    authDomain: "chat-unej.firebaseapp.com",
    databaseURL: 'https://chat-unej-default-rtdb.asia-southeast1.firebasedatabase.app/',
    projectId: "chat-unej",
    storageBucket: "chat-unej.appspot.com",
    messagingSenderId: "624797139589",
    appId: "1:624797139589:web:daa7b7e1b52118cdbd9fec"
  };
  
  // Inisialisasi Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
  const loginContainer = document.getElementById('login-container');
  const chatContainer = document.getElementById('chat-container');
  const usernameInput = document.getElementById('username');
  const loginButton = document.getElementById('login-button');
  const chat = document.getElementById('chat');
  const messageInput = document.getElementById('message');
  const sendButton = document.getElementById('send-button');
  const logoutButton = document.getElementById('logout-button');
  
  let username = null;
  
  loginButton.addEventListener('click', () => {
    const enteredUsername = usernameInput.value;
    if (enteredUsername.trim() !== '') {
      username = enteredUsername;
      loginContainer.style.display = 'none';
      chatContainer.style.display = 'block';
      // Mulai mendengarkan pesan
      startListening();
    }
  });
  
 // Function untuk menyimpan informasi login dalam cookie
function setLoginCookie(username) {
    const now = new Date();
    now.setTime(now.getTime() + 24 * 60 * 60 * 1000); // 24 jam dalam milliseconds
    document.cookie = `username=${username};expires=${now.toUTCString()}`;
  }
  
  // Function untuk memeriksa apakah pengguna sudah login dari cookie
  function checkLoginCookie() {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'username') {
        username = value;
        return true;
      }
    }
    return false;
  }
  
  // Panggil checkLoginCookie() saat aplikasi dimuat
  if (checkLoginCookie()) {
    loginContainer.style.display = 'none';
    chatContainer.style.display = 'block';
    startListening();
  }
  
  loginButton.addEventListener('click', () => {
    const enteredUsername = usernameInput.value;
    if (enteredUsername.trim() !== '') {
      username = enteredUsername;
      loginContainer.style.display = 'none';
      chatContainer.style.display = 'block';
      setLoginCookie(username); // Simpan informasi login dalam cookie
      startListening();
    }
  });

  
  
  
  // ... kode lainnya seperti pengiriman pesan dan penerimaan pesan
  
  
  sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim() !== '' && username) {
      // Kirim pesan ke Firebase
      database.ref('messages').push({
        username: username,
        text: message
      });
      messageInput.value = '';
    }
  });
  
  function startListening() {
    // Mendengarkan perubahan pada Firebase
    database.ref('messages').on('child_added', (snapshot) => {
      const messageData = snapshot.val();
      const messageElement = document.createElement('div');
      messageElement.className = messageData.username === username ? 'sent-message' : 'received-message';
  
      const usernameElement = document.createElement('p');
      usernameElement.className = 'username';
      usernameElement.textContent = messageData.username;
  
      const textElement = document.createElement('p');
      textElement.textContent = messageData.text;
  
      messageElement.appendChild(usernameElement);
      messageElement.appendChild(textElement);
  
      chat.appendChild(messageElement);
      chat.scrollTop = chat.scrollHeight; // Auto-scroll ke pesan terbaru
    });
  }
  
