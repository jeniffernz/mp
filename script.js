const mensagens = [
    "A pior jogadora de Roblox do mundo!",
    "mas que tem uma beleza estonteante!",
    "Sapatona!",
    "Nunca admite que eu tô certa e vc errada",
    "Pq essa que e a verdade né!",
    "mas...mesmo vc sendo louca de pedra",
    "I love you!",
    "e morena em frânces já que vc ñ habla"
    
  ];
  
  function mostrarBaloes() {
    const container = document.getElementById('baloes');
    container.innerHTML = '';
  
    mensagens.forEach(msg => {
      const balao = document.createElement('div');
      balao.classList.add('balao');
      balao.innerText = "🎈";
  
      balao.addEventListener('click', function () {
        balao.classList.add('estourado');
        balao.innerText = msg;
      });
  
      container.appendChild(balao);
    });
  }
  
  // Confetes
  const canvas = document.getElementById("confete");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  let confetes = [];
  for (let i = 0; i < 150; i++) {
    confetes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 50,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      tilt: Math.floor(Math.random() * 10) - 10,
      tiltAngleIncremental: Math.random() * 0.07 + 0.05,
      tiltAngle: 0
    });
  }
  
  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetes.forEach(c => {
      ctx.beginPath();
      ctx.lineWidth = c.r;
      ctx.strokeStyle = c.color;
      ctx.moveTo(c.x + c.tilt + c.r / 2, c.y);
      ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 2);
      ctx.stroke();
    });
    updateConfetti();
  }
  
  function updateConfetti() {
    confetes.forEach(c => {
      c.tiltAngle += c.tiltAngleIncremental;
      c.y += (Math.cos(c.d) + 1 + c.r / 2) / 2;
      c.tilt = Math.sin(c.tiltAngle - (Math.PI / 3)) * 15;
  
      if (c.y > canvas.height) {
        c.x = Math.random() * canvas.width;
        c.y = -10;
      }
    });
  }
  
  setInterval(drawConfetti, 30);
  