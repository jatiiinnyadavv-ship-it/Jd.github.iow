const steps = [
  {
    emoji: "🌸",
    title: "Hey Cutiepie",
    message:
      "Can we talk for a moment? There’s something important I want to tell you.",
    primaryText: "Continue",
    secondaryText: "",
  },
  {
    emoji: "🥺",
    title: "I messed up…",
    message:
      "Mujhe pata hai maine galti ki hai, aur shayad tum hurt ho. Main bas itna bolna chahta/chahti hoon ki tum mere liye bohot zyada important ho.",
    primaryText: "I'm listening",
    secondaryText: "Hmm…",
  },
  {
    emoji: "💛",
    title: "I’m really sorry",
    message:
      "Main sachme dil se sorry hoon. No excuses, no drama. Bas ek genuine sorry, because you deserve better from me.",
    primaryText: "Forgive me? 🥺",
    secondaryText: "Let me think",
  },
  {
    emoji: "🤍",
    title: "You mean a lot to me",
    message:
      "Tumhare bina sab kuch thoda ajeeb sa lagta hai. I want to fix things, slowly, patiently – jitna time tum chaho.",
    primaryText: "Let’s start fresh",
    secondaryText: "",
  },
  {
    emoji: "✨",
    title: "Last thing…",
    message:
      "Chahe tum reply karo ya nahi, bas yaad rakhna: I truly care about you, and I’m always grateful for you. Thank you for even reading this.",
    primaryText: "Send me a message 💌",
    secondaryText: "",
  },
];

let currentStep = 0;

const emojiEl = document.getElementById("emoji");
const titleEl = document.getElementById("title");
const messageEl = document.getElementById("message");
const primaryBtn = document.getElementById("primary-btn");
const secondaryBtn = document.getElementById("secondary-btn");

function renderStep(index) {
  const step = steps[index];

  emojiEl.textContent = step.emoji;
  titleEl.textContent = step.title;
  messageEl.textContent = step.message;
  primaryBtn.textContent = step.primaryText || "Next";

  if (step.secondaryText) {
    secondaryBtn.textContent = step.secondaryText;
    secondaryBtn.classList.remove("hidden");
  } else {
    secondaryBtn.classList.add("hidden");
  }
}

primaryBtn.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    renderStep(currentStep);
  } else {
    // Last step pe kuch cute sa effect
    primaryBtn.disabled = true;
    primaryBtn.textContent = "💌 Check your messages?";
  }
});

secondaryBtn.addEventListener("click", () => {
  // Secondary button pe thoda fun text change
  secondaryBtn.textContent = "Okay, take your time 🕰️";
});

// Pehla step show karo
renderStep(currentStep);
