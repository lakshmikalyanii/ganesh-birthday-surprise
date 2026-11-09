(() => {
  const welcome = document.getElementById("welcome");
  const memories = document.getElementById("memories");
  const openButton = document.getElementById("openSurprise");
  const replayButton = document.getElementById("replay");
  let topZ = 10;

  function openStory() {
    welcome.classList.add("hidden");
    memories.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
    burstHearts(18);
  }
  openButton.addEventListener("click", openStory);
  replayButton.addEventListener("click", () => {
    memories.classList.add("hidden");
    welcome.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Pointer Events support mouse, trackpad, stylus and touch with one implementation.
  document.querySelectorAll(".draggable").forEach(card => {
    let active = false, startX = 0, startY = 0, originX = 0, originY = 0;
    let x = 0, y = 0;
    const initialRotation = (Math.random() * 8 - 4);
    card.style.transform = `translate(0px, 0px) rotate(${initialRotation}deg)`;

    card.addEventListener("pointerdown", event => {
      if (event.target.closest("button")) return;
      active = true;
      card.setPointerCapture(event.pointerId);
      card.style.zIndex = ++topZ;
      startX = event.clientX; startY = event.clientY;
      originX = x; originY = y;
      card.style.transition = "none";
    });
    card.addEventListener("pointermove", event => {
      if (!active) return;
      x = originX + event.clientX - startX;
      y = originY + event.clientY - startY;
      card.style.transform = `translate(${x}px, ${y}px) rotate(${initialRotation}deg)`;
    });
    const release = () => {
      active = false;
      card.style.transition = "box-shadow .2s";
    };
    card.addEventListener("pointerup", release);
    card.addEventListener("pointercancel", release);
    card.addEventListener("lostpointercapture", release);
  });

  function burstHearts(amount) {
    for (let i = 0; i < amount; i++) {
      const heart = document.createElement("span");
      heart.className = "heart-float";
      heart.textContent = Math.random() > .5 ? "♥" : "♡";
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.fontSize = `${12 + Math.random() * 22}px`;
      heart.style.animationDelay = `${Math.random() * 1.5}s`;
      document.body.appendChild(heart);
      heart.addEventListener("animationend", () => heart.remove(), { once: true });
    }
  }

  const birthdaySong = document.getElementById("birthdaySong");
  const musicToggle = document.getElementById("musicToggle");
  const musicIcon = document.getElementById("musicIcon");
  const musicButtonText = document.getElementById("musicButtonText");
  const musicStatus = document.getElementById("musicStatus");
  const musicPlayer = document.querySelector(".music-player");

  function updateMusicButton(isPlaying) {
    musicIcon.textContent = isPlaying ? "Ⅱ" : "▶";
    musicButtonText.textContent = isPlaying ? "Pause" : "Play";
    musicStatus.textContent = isPlaying ? "Now playing for you ♥" : "Ready when you are";
    musicToggle.setAttribute("aria-label", isPlaying ? "Pause birthday song" : "Play birthday song");
    musicToggle.setAttribute("aria-pressed", String(isPlaying));
    musicPlayer.classList.toggle("playing", isPlaying);
  }

  musicToggle.addEventListener("click", async () => {
    if (birthdaySong.paused) {
      try {
        await birthdaySong.play();
        updateMusicButton(true);
      } catch (error) {
        musicStatus.textContent = "Please tap Play again";
        updateMusicButton(false);
      }
    } else {
      birthdaySong.pause();
      updateMusicButton(false);
    }
  });

  birthdaySong.addEventListener("play", () => updateMusicButton(true));
  birthdaySong.addEventListener("pause", () => updateMusicButton(false));
  birthdaySong.addEventListener("error", () => {
    musicStatus.textContent = "Song file could not load — check music folder";
    updateMusicButton(false);
  });
  birthdaySong.addEventListener("waiting", () => {
    musicStatus.textContent = "Loading song…";
  });
  birthdaySong.addEventListener("canplay", () => {
    if (birthdaySong.paused) musicStatus.textContent = "Ready when you are";
  });

})();
