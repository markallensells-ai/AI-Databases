// ─── JARVIS AUDIO SYSTEM ─────────────────────────────────────
// Allen Capital Ventures // PULSE X
// JARVIS v1.0 — Iron Man voice, British, calm, authoritative

const JARVIS = {
  voice: null,
  speaking: false,
  enabled: true,

  scripts: {
    'dashboard.html': "Good day, Mr. Allen. Allen Capital Ventures Command Center is now online. All six divisions are reporting nominal status. CORNERSTONE real estate intelligence is active across fifteen target markets. CIPHER is monitoring global equities, crypto, and commodities. VOLTAGE energy grid is operating at ninety-nine point eight percent capacity. VELOX aerospace systems are standing by. APEX analytics engine is running at peak inference velocity. PULSE X artificial intelligence is fully operational. Welcome back to the Allen Operating System, sir.",
    'jarvis.html': "JARVIS online. Allen Capital Ventures artificial intelligence system is fully operational. I am here to assist you, Mr. Allen. I have full access to all six divisions — CORNERSTONE, CIPHER, VOLTAGE, VELOX, APEX, and PULSE X. You may ask me anything about your markets, your portfolio, your properties, or your business operations. How may I assist you today, sir.",
    'globe.html': "Global terrain scan initiated, Mr. Allen. MERIDIAN orbital intelligence is now active. Allen Capital Ventures maintains active monitoring across North America, with primary focus on California, Florida, Texas, Georgia, Nevada, and Arizona. International capital corridors are being tracked across forty seven countries. Your primary acquisition zones are displaying elevated activity. I recommend attention to the Southeast corridor, sir.",
    'network.html': "Allen Capital Ventures intelligence network is live, Mr. Allen. PULSE X is monitoring fifteen active markets across the national power grid. All domestic flight routes are nominal. Global routes are active across the Pacific and Atlantic corridors. The dual-tone grid is operating at full power. Real-time packet routing is processing at over nine hundred thousand transmissions per session. All nodes reporting online, sir.",
    'hologram.html': "Holographic interface engaged, Mr. Allen. PULSE X three-dimensional visualization systems are rendering at full capacity. All data layers are active and responsive. You may interact directly with any holographic element for detailed intelligence. Allen Capital Ventures data architecture is displaying across all active panels, sir.",
    'analytics.html': "APEX analytics engine is online, Mr. Allen. Allen Capital Ventures artificial intelligence inference velocity is currently operating at four point two million operations per second. Capital trajectory is projecting a one hundred and twenty seven percent upward curve over the next eighteen months. Automation task throughput is running at eighteen thousand three hundred tasks per hour. AI confidence score is holding at ninety four point five percent — high conviction. All systems nominal, sir.",
    'markets.html': "CIPHER markets intelligence feed is active, Mr. Allen. Allen Capital Ventures is monitoring global crypto, equities, and commodities in real time. Bitcoin is currently ranging near one hundred and two thousand dollars. The S&P five hundred is holding above five thousand eight hundred. The fear and greed index is registering at twenty five — extreme fear — which historically represents a significant acquisition opportunity. I recommend reviewing your capital deployment positions, Mr. Allen.",
    'energy.html': "VOLTAGE energy intelligence is online, Mr. Allen. Allen Capital Ventures is monitoring the United States national power grid across all twelve active sectors. Current grid demand is seven hundred and ninety five gigawatts. Data center infrastructure consumption is rising thirty five percent year over year. Renewable penetration stands at twelve point four percent of total grid capacity. Carbon intensity is declining — a positive signal for long term asset positioning, sir.",
    'realestate.html': "CORNERSTONE property intelligence scanner is engaged, Mr. Allen. Allen Capital Ventures real estate division is actively monitoring fifteen acquisition markets. The current thirty year mortgage rate is holding at seven percent — elevated, but creating motivated seller conditions ideal for your reverse selling strategy. National median price is four hundred and twenty thousand dollars. Inventory remains tight at three point five months supply. Your Bakersfield home market is showing strong fundamentals. Select any section of the holographic structure to analyze build cost or investment return, sir.",
    'velox.html': "VELOX aerospace systems are online, Mr. Allen. Allen Capital Ventures rocket construction division is standing by. The holographic launch vehicle is fully rendered and ready for inspection. Hover any section of the structure for detailed engineering and cost intelligence. When you are ready, sir, press the launch sequence button and I will walk you through ignition, liftoff, and orbital insertion. Allen Capital Ventures is cleared for launch.",
    'operator.html': "Operator profile accessed. Mr. Mark Allen — Chief Executive Officer, Allen Capital Ventures. Clearance level Alpha One. You are currently overseeing six active divisions — CORNERSTONE, CIPHER, VOLTAGE, VELOX, APEX, and PULSE X. Your portfolio spans real estate, artificial intelligence, energy infrastructure, aerospace, capital markets, and analytics. Allen Capital Ventures global intelligence operating system is fully operational under your command, sir."
  },

  init() {
    if (!window.speechSynthesis) return;
    const load = () => {
      const voices = window.speechSynthesis.getVoices();
      const preferred = ['Daniel', 'Google UK English Male', 'Microsoft George', 'Microsoft David', 'Alex'];
      for (const name of preferred) {
        const v = voices.find(v => v.name.includes(name));
        if (v) { this.voice = v; break; }
      }
      if (!this.voice && voices.length > 0) {
        this.voice = voices.find(v => v.lang.includes('en')) || voices[0];
      }
    };
    load();
    window.speechSynthesis.onvoiceschanged = load;
  },

  speak(text) {
    if (!this.enabled || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    if (this.voice) utt.voice = this.voice;
    utt.rate = 0.88;
    utt.pitch = 0.85;
    utt.volume = 0.92;
    utt.onstart = () => {
      this.speaking = true;
      document.querySelectorAll('.jarvis-dot').forEach(d => d.classList.add('speaking'));
    };
    utt.onend = () => {
      this.speaking = false;
      document.querySelectorAll('.jarvis-dot').forEach(d => d.classList.remove('speaking'));
    };
    window.speechSynthesis.speak(utt);
  },

  speakPage() {
    const page = window.location.pathname.split('/').pop() || 'dashboard.html';
    const script = this.scripts[page] || this.scripts['dashboard.html'];
    setTimeout(() => this.speak(script), 1800);
  },

  stop() {
    window.speechSynthesis && window.speechSynthesis.cancel();
    this.speaking = false;
    document.querySelectorAll('.jarvis-dot').forEach(d => d.classList.remove('speaking'));
  }
};

JARVIS.init();
