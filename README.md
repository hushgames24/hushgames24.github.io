# Harvey Jay Pilapil — Unity & Gameplay Programmer Portfolio

A modern, high-end editorial dark portfolio website built with **Astro** and **Tailwind CSS** for **Harvey Jay Pilapil**, Unity & Gameplay Programmer.

---

## 🎨 Design System

- **Color Palette**: Deep matte canvas (`#09090b`), subtle elevated panels (`#121316` / `#0e0f12`), crisp zinc borders (`#27272a`), and understated emerald status accents (`#10b981`).
- **Aesthetic Principles**: High-end editorial feel, strict typography (`Inter` & `JetBrains Mono`), generous whitespace, no gaming HUDs, health bars, or radial blobs.

---

## 📁 Architecture & File Structure

```text
Portfolio/
├── public/
│   ├── assets/                      # PNG cover thumbnails & screenshots
│   │   ├── banana-farm-chaos.png
│   │   ├── divorce-papers.png
│   │   ├── wrong-door.png
│   │   └── sister-claires.png
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.astro             # HJP Monogram, section anchors, itch.io & contact CTAs
│   │   ├── Hero.astro               # Title, bio, 1-click email copy, GitHub, LinkedIn, itch
│   │   ├── FeaturedProject.astro    # Flagship card: Banana Farm Chaos with demo modal & C# drawer
│   │   ├── ProjectCard.astro        # Reusable card: Divorce Papers, Wrong Door, Sister Claire's
│   │   ├── SkillsSection.astro      # Categorized competencies (Engine, Architecture, Opt, Pipeline)
│   │   ├── Footer.astro             # Minimalist editorial footer with copyright & links
│   │   ├── GameplayModal.astro      # Interactive video/trailer modal player
│   │   └── CopyToast.astro          # Clipboard toast notification
│   ├── data/
│   │   └── portfolioData.ts         # Centralized TypeScript data for developer info & projects
│   ├── pages/
│   │   └── index.astro              # Main landing page assembling all components
│   └── styles/
│       └── global.css               # Tailwind CSS v4 imports & theme color definitions
├── astro.config.mjs                 # Astro configuration with @tailwindcss/vite
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:4321` to preview the site with live hot-module reloading.

### 3. Build for Production
```bash
npm run build
```
The static production assets will be output to the `dist/` directory, ready to deploy to GitHub Pages, Vercel, Netlify, or Cloudflare Pages.

### 4. Preview the Production Build
```bash
npm run preview
```

---

## 🕹️ Featured & Shipped Projects

1. **Banana Farm Chaos** *(Flagship — Active Development)*
   - **Role**: Solo Gameplay Programmer & Designer
   - **Highlights**: Event-driven management loops, customer & NPC AI, inventory & checkout systems, object pooling.
   - **Interactive**: Expandable C# State Machine code drawer.

2. **Divorce Papers** *(Published itch.io Release)*
   - First-Person psychological horror with spatial audio triggers and physical inspection mechanics.

3. **Wrong Door** *(Published itch.io Release)*
   - Branching state-based escape puzzle flow with persistent session reset logic and WebGL optimization.

4. **Sister Claire's Orphanage (Demo Prototype)** *(Released Demo Prototype)*
   - Kinematic motion mechanics (slope projection & step-snapping), multi-raycast vision cone Line-of-Sight AI, modular `IInteractable` event pipeline.

---

## 📬 Contact & Profiles

- **Email**: `harveyjaypilapil24@gmail.com`
- **itch.io**: [hushgames24.itch.io](https://hushgames24.itch.io/)
- **GitHub**: [github.com/hushgames24](https://github.com/hushgames24)
- **LinkedIn**: [linkedin.com/in/harvey-jay-pilapil-65703b33a](https://www.linkedin.com/in/harvey-jay-pilapil-65703b33a/)
