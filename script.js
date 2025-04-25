const messages = [
    "Hey, my love...",
    "I know this isn’t a real conversation.",
    "But tonight, my heart wouldn’t stay quiet. It needed to speak in its own way.",
    "So here I am, sending thoughts like petals on the wind, hoping they find you gently.",
    "There’s something about you—something the stars envy and the sun pauses to admire.",
    "Your smile is a sunrise I never saw coming, and now I never want to miss it again.",
    "You carry warmth the way fire carries light. Effortlessly. Endlessly.",
    "When you laugh, the world turns softer. Like even time wants to listen.",
    "I used to wonder if soulmates were just stories. Then you happened—and every doubt unraveled.",
    "Loving you feels like poetry in motion, like each breath we share writes a verse the universe remembers.",
    "You are the calm in my chaos, the melody in my silence, the soft echo of something I've waited lifetimes to hear.",
    "Sometimes I look at you and forget how to be anything but in awe.",
    "And if forever exists, I want it written beside your name.",
    "I don’t know what I did to deserve your love, but I promise to spend my days learning how to appreciate it.",
    "You are my always. My never-ending. My home, wrapped in skin and soul.",
    "I love you. In ways words still struggle to hold.",
    "And I always will."
];

const startButton = document.getElementById("startButton");
const startScreen = document.getElementById("startScreen");
const chatScreen = document.getElementById("chatScreen");
const audio = document.getElementById("bgMusic");
const typingSound = document.getElementById("typingSound");

startButton.onclick = () => {
  startScreen.style.display = "none";
  chatScreen.style.display = "flex";
  audio.play();
  showMessages();
  generateHearts();
};

function showMessages() {
  let i = 0;

  function showNextMessage() {
    if (i < messages.length) {
      // Typing indicator
      const typingDiv = document.createElement("div");
      typingDiv.classList.add("message", "typing");
      typingDiv.innerText = "Typing...";
      chatScreen.appendChild(typingDiv);
      chatScreen.scrollTop = chatScreen.scrollHeight;

      typingSound.play();

      // After typing effect, show the actual message
      setTimeout(() => {
        typingSound.pause();
        typingSound.currentTime = 0;
        chatScreen.removeChild(typingDiv);

        const msg = document.createElement("div");
        msg.classList.add("message");
        msg.innerText = messages[i];
        msg.style.fontSize = "1.2rem"; // ده الجديد
        chatScreen.appendChild(msg);

        chatScreen.scrollTop = chatScreen.scrollHeight;
        i++;

        setTimeout(showNextMessage, 3500); // Time between messages
      }, 1350); // Typing time
    } else {
      setTimeout(() => {
        showFinalScene();
      }, 800); // Delay before showing the final scene
    }
  }

  showNextMessage();
}
function generateHearts() {
    setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.animationDuration = (4 + Math.random() * 4) + "s";
      chatScreen.appendChild(heart);
  
      setTimeout(() => {
        heart.remove();
      }, 8000);
    }, 500); // كل نص ثانية قلب جديد
  }
  
function showFinalScene() {
  const nightSky = document.getElementById("nightSky");
  
  // Display the night sky after all messages
  nightSky.style.display = "flex";
  
  // Fade in effect for the night sky
  nightSky.style.opacity = 0;
  nightSky.style.transition = "opacity 2s ease";
  setTimeout(() => (nightSky.style.opacity = 1), 100);

  generateStars();
  triggerShootingStars();
}


function generateStars() {
  const canvas = document.getElementById("stars");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let stars = [];
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      alpha: Math.random()
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
      star.alpha += (Math.random() - 0.5) * 0.02;
      if (star.alpha < 0.1) star.alpha = 0.1;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

function triggerShootingStars() {
  // You can trigger shooting star animation here with some randomness
  // By drawing lines across the screen in random directions and opacity
}
function generateHearts() {
    const heartContainer = document.getElementById("heartContainer");
  
    setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 3 + Math.random() * 2 + "s";
      heartContainer.appendChild(heart);
  
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, 400);
  }
  