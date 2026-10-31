:root {
  --bg: #fffaf7;
  --panel: #ffffff;
  --card: #fff4f4;
  --text: #2d1a1a;
  --muted: #6f4f4f;
  --primary: #ff6fa7;
  --primary-dark: #e65c92;
  --accent: #ffd166;
  --mint: #8ee4c4;
  --shadow: rgba(106, 67, 76, 0.15);
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
  background:
    radial-gradient(circle at top, #fff5d9 0%, #fffaf7 32%, #fffaf7 100%);
  color: var(--text);
  font-family: 'Inter', sans-serif;
}

button {
  font: inherit;
  cursor: pointer;
}

.page-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 20px 64px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 14px 30px var(--shadow);
  border-radius: 20px;
  padding: 18px 24px;
  backdrop-filter: blur(8px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.3rem;
  font-weight: 800;
  font-family: 'Baloo 2', cursive;
}

.brand-mark {
  font-size: 1.6rem;
}

.nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav a {
  color: var(--muted);
  text-decoration: none;
  font-weight: 600;
}

.cta-button,
.secondary-button,
.flavor-card button {
  border: none;
  border-radius: 999px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cta-button {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  font-weight: 700;
  padding: 0.9rem 1.35rem;
  box-shadow: 0 10px 25px rgba(255, 111, 167, 0.3);
}

.primary {
  background: linear-gradient(135deg, #ff7bb3, #ff5d7d);
}

.secondary-button {
  background: white;
  color: var(--text);
  border: 1px solid rgba(45, 26, 26, 0.08);
  padding: 0.9rem 1.35rem;
}

.cta-button:hover,
.secondary-button:hover,
.flavor-card button:hover {
  transform: translateY(-1px);
}

.hero {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 36px;
  align-items: center;
  padding: 64px 0 24px;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.8rem, 4vw, 5rem);
  line-height: 0.95;
  font-family: 'Baloo 2', cursive;
}

.eyebrow {
  margin: 0 0 12px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--primary-dark);
  font-size: 0.76rem;
  font-weight: 800;
}

.subtext {
  max-width: 560px;
  margin: 20px 0;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
}

.stats {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.stats li {
  min-width: 130px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stats strong {
  font-size: 1.8rem;
  font-family: 'Baloo 2', cursive;
}

.stats span {
  color: var(--muted);
  font-size: 0.9rem;
}

.hero-visual {
  position: relative;
  height: 500px;
  border-radius: 30px;
  background: linear-gradient(180deg, #fff4f4, #ffe6f3);
  box-shadow: 0 20px 45px rgba(144, 88, 110, 0.12);
  overflow: hidden;
}

.cone {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 210px;
  height: 170px;
  background: linear-gradient(180deg, #f6c988, #e3a04e);
  clip-path: polygon(50% 100%, 0 0, 100% 0);
  border-radius: 12px;
}

.cone-back {
  transform: translateX(-50%) rotate(6deg);
  opacity: 0.8;
}

.scoop {
  position: absolute;
  width: 165px;
  height: 165px;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: inset -18px -16px 0 rgba(255, 255, 255, 0.08);
}

.scoop-pink {
  background: linear-gradient(135deg, #ff8ab8, #ff5f9f);
  top: 80px;
}

.scoop-blue {
  background: linear-gradient(135deg, #8ed7ff, #59a8ff);
  top: 150px;
  left: 38%;
}

.scoop-yellow {
  background: linear-gradient(135deg, #ffe39a, #ffd166);
  top: 150px;
  left: 62%;
}

.sprinkles {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle, #ff6fa7 0 8px, transparent 8px),
    radial-gradient(circle, #ffd166 0 8px, transparent 8px),
    radial-gradient(circle, #57d8b5 0 8px, transparent 8px);
  background-size: 120px 120px;
  background-position: 40px 30px, 150px 120px, 110px 200px;
  opacity: 0.9;
  mix-blend-mode: multiply;
}

.menu-section,
.feature-panel,
.about-section {
  margin-top: 56px;
}

.section-heading {
  margin-bottom: 24px;
}

.section-heading h2,
.about-copy h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  font-family: 'Baloo 2', cursive;
}

.flavor-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 22px;
}

.flavor-card {
  background: var(--panel);
  border-radius: 24px;
  padding: 18px;
  box-shadow: 0 14px 32px rgba(116, 84, 92, 0.08);
  border: 1px solid rgba(60, 39, 40, 0.05);
}

.flavor-swatch {
  width: 100%;
  height: 116px;
  border-radius: 18px;
  margin-bottom: 18px;
}

.flavor-swatch.pink {
  background: linear-gradient(135deg, #ffacd9, #ff7ba7);
}

.flavor-swatch.green {
  background: linear-gradient(135deg, #b7f6dc, #66d7ae);
}

.flavor-swatch.gold {
  background: linear-gradient(135deg, #f8d898, #f1b14c);
}

.flavor-swatch.blue {
  background: linear-gradient(135deg, #9fd9ff, #5aa7f7);
}

.flavor-swatch.brown {
  background: linear-gradient(135deg, #b88a6b, #7a4d37);
}

.flavor-swatch.cream {
  background: linear-gradient(135deg, #fdf1d0, #f5d687);
}

.flavor-card h3 {
  margin: 0;
  font-size: 1.3rem;
}

.flavor-card p {
  color: var(--muted);
  line-height: 1.6;
  margin: 12px 0 18px;
}

.flavor-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.flavor-meta span {
  font-size: 1.2rem;
  font-weight: 800;
}

.flavor-card button {
  background: #fff1f5;
  color: var(--primary-dark);
  padding: 0.7rem 1rem;
  font-weight: 700;
}

.feature-panel {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.feature-card {
  padding: 30px 24px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(45, 26, 26, 0.04);
  box-shadow: 0 12px 28px rgba(123, 88, 96, 0.06);
}

.feature-card span {
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 10px;
}

.feature-card h3 {
  margin: 0 0 10px;
  font-size: 1.4rem;
}

.feature-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.accent {
  background: linear-gradient(135deg, #fff4d8, #ffe9f4);
}

.about-section {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 24px;
  align-items: center;
}

.about-copy p {
  color: var(--muted);
  line-height: 1.8;
  margin-top: 16px;
}

.mini-card {
  background: linear-gradient(135deg, #3d2d38, #2a2f47);
  color: white;
  border-radius: 24px;
  padding: 28px;
  box-shadow: 0 22px 42px rgba(33, 25, 33, 0.2);
}

.mini-card p,
.mini-card strong {
  display: block;
  margin: 0 0 14px;
}

.mini-card strong {
  font-size: 1.4rem;
}

@media (max-width: 820px) {
  .topbar {
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav {
    order: 3;
    width: 100%;
    justify-content: center;
  }

  .hero,
  .feature-panel,
  .about-section {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 42px;
  }

  .hero-visual {
    height: 420px;
  }
}
