:root {
  --bg: #0c1020;
  --panel: rgba(21, 25, 38, 0.9);
  --panel-alt: rgba(15, 19, 30, 0.96);
  --primary: #7c3aed;
  --secondary: #22d3ee;
  --accent: #f59e0b;
  --text: #edf2ff;
  --muted: #b3bed9;
  --border: rgba(148, 163, 184, 0.2);
  --shadow: 0 24px 60px rgba(17, 24, 39, 0.45);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(124, 58, 237, 0.35), transparent 22%),
    radial-gradient(circle at bottom right, rgba(34, 211, 238, 0.2), transparent 25%),
    var(--bg);
  color: var(--text);
}

button,
input {
  font: inherit;
}

.page-shell {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  padding: 28px 0 48px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 48px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  box-shadow: var(--shadow);
}

.ghost-button,
#generateBtn,
.tag {
  border: 1px solid var(--border);
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.7);
  color: var(--text);
  cursor: pointer;
  transition: transform 0.18s ease, border-color 0.18s ease, background 0.18s ease;
}

.ghost-button {
  padding: 11px 18px;
  font-weight: 600;
}

.ghost-button:hover,
#generateBtn:hover,
.tag:hover {
  transform: translateY(-1px);
  border-color: rgba(34, 211, 238, 0.6);
}

.hero {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 28px;
  align-items: center;
}

.hero-copy {
  padding: 20px 0;
}

.eyebrow {
  margin: 0 0 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--secondary);
  font-size: 0.72rem;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.04;
  letter-spacing: -0.05em;
  max-width: 620px;
}

.subtitle {
  margin: 20px 0 32px;
  max-width: 560px;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.8;
}

.search-panel {
  display: flex;
  align-items: center;
  gap: 14px;
  max-width: 640px;
  padding: 12px 12px 12px 18px;
  border: 1px solid var(--border);
  border-radius: 22px;
  background: rgba(15, 23, 42, 0.7);
  box-shadow: var(--shadow);
}

.search-panel input {
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  color: var(--text);
  font-size: 1rem;
  padding: 12px 0;
}

.search-panel input::placeholder {
  color: rgba(191, 219, 254, 0.62);
}

#generateBtn {
  padding: 13px 20px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border: none;
  color: white;
  font-weight: 700;
  box-shadow: 0 12px 24px rgba(124, 58, 237, 0.4);
}

.popular-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;
}

.tag {
  padding: 9px 14px;
  font-size: 0.93rem;
  color: var(--muted);
}

.tag.active {
  background: rgba(124, 58, 237, 0.14);
  border-color: rgba(124, 58, 237, 0.5);
  color: var(--text);
}

.movie-card {
  background: linear-gradient(180deg, rgba(15, 19, 30, 0.96), rgba(9, 12, 18, 0.95));
  border: 1px solid var(--border);
  border-radius: 28px;
  padding: 20px;
  box-shadow: var(--shadow);
}

.poster-area {
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: 240px;
  padding: 20px;
  border-radius: 22px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.8), rgba(34, 211, 238, 0.5));
}

.poster-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.18), transparent 50%);
}

.poster-content {
  position: relative;
  z-index: 1;
}

.poster-label {
  display: inline-block;
  margin-bottom: 8px;
  padding: 6px 9px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(15, 23, 42, 0.35);
}

.poster-content h2 {
  margin: 0;
  font-size: clamp(1.8rem, 1.9vw, 2.4rem);
  line-height: 1.1;
}

.meta-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 4px 12px;
  color: var(--muted);
  font-size: 0.95rem;
}

.summary-box {
  padding: 18px 18px 14px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: rgba(15, 23, 42, 0.7);
}

.summary-box h3 {
  margin: 0 0 10px;
  font-size: 1rem;
  color: var(--secondary);
}

.summary-box p {
  margin: 0;
  line-height: 1.8;
  color: #e2e8f0;
}

.highlight-list {
  margin: 18px 0 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.9;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 920px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero-copy {
    text-align: center;
  }

  .subtitle,
  .search-panel {
    margin-inline: auto;
  }

  .popular-tags {
    justify-content: center;
  }
}

@media (max-width: 560px) {
  .page-shell {
    width: min(100% - 20px, 1180px);
  }

  .search-panel {
    flex-direction: column;
    padding: 14px;
  }

  .search-panel input,
  #generateBtn {
    width: 100%;
  }

  #generateBtn {
    padding-block: 14px;
  }
}
