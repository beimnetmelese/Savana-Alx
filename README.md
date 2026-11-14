# Savanna ALX — Host Platform & Meri (መሪ) Plugin Integration

Standalone host repository for the **ALX Savanna LMS** learner interface, equipped with the embeddable **Meri (መሪ)** Multilingual Assistant & Career Gateway Plugin.

---

## 🌟 Overview

This repository hosts the static learner pages of the ALX Savanna Learning Management System, showcasing seamless integration with the **Meri (መሪ)** AI companion.

### Included Host Pages:
1. **Hub Navigation (`index.html`)**: Entrypoint linking all learner experiences.
2. **Curriculum Concept Lesson (`pages/concept-with-navigation.html`)**: Module 2 lesson *"The Future of the VA Industry"* with active curriculum navigation. Meri automatically inspects this lesson to ground answers and provide section citations.
3. **Career Gateway (`pages/job-detail.html`)**: Tech job posting with Schema.org `JobPosting` metadata. Triggers Meri's Career Coach mode for qualification matching and interview accommodations.
4. **Learner Homepage — Paced (`pages/homepage-v1-paced.html`)**: Full week-by-week sprint overview, cohort progress gauge, deliverables, and event calendar.
5. **Learner Homepage — Self-Paced (`pages/homepage-v1-self-paced.html`)**: Milestone progress tracking, module switcher, and pacing boost.

---

## 🔌 Meri (መሪ) Plugin Integration

Meri is embedded into each page with a single script tag before `</body>`:

```html
<!-- Meri (መሪ) Multilingual AI Assistant Plugin -->
<script 
  src="dist/meri.js" 
  data-public-key="pk_live_savanna_sample_12345" 
  async
></script>
```

*(On subpages under `pages/`, the path is `../dist/meri.js`)*.

### Capabilities in Savanna:
- 📖 **Automatic Context Extraction**: Reads the active curriculum lesson or job schema directly from the DOM.
- 🇪🇹 **Bilingual Support**: Instant toggle between **English** and **Amharic (አማርኛ)**.
- 💡 **Simple Mode (ቀላል ሁነታ)**: Breaks complex tech concepts into relatable analogies.
- 🎙️ **Voice & Read-Aloud**: Voice questions and text-to-speech reading for accessibility.
- 💼 **Career Gateway & Accommodations**: Job skill match and private interview accommodation requests.
- ⚡ **Resilient Fallback**: Automatically connects to the BridgeMate backend (`/api/v1/...`) when online, and gracefully operates offline via built-in knowledge retrieval.

---

## 🚀 Quick Start

### Option 1: Node.js (Serve)
```bash
# Clone the repository
git clone https://github.com/beimnetmelese/Savana-Alx.git
cd Savana-Alx

# Run static web server
npx serve -p 3000 .
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 2: Python HTTP Server
```bash
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏛 Directory Structure

```text
savanna-host/
├── index.html                           # Main hub page
├── package.json                         # Project metadata & serve scripts
├── .gitignore
├── README.md
├── dist/
│   └── meri.js                          # Self-contained Meri plugin bundle
├── pages/
│   ├── concept-with-navigation.html     # Active curriculum lesson
│   ├── job-detail.html                  # Career Gateway job opportunity
│   ├── homepage-v1-paced.html           # Cohort paced dashboard
│   └── homepage-v1-self-paced.html      # Flexible self-paced dashboard
└── assets/
    ├── css/                             # Savanna stylesheets
    ├── fonts/                           # Ethiopic & Latin web fonts
    ├── img/                             # ALX logos & illustrations
    └── js/                              # Host Bootstrap & navigation scripts
```

---

## 🤝 Connected Repositories
- **Plugin UI**: [BeimnetTadesse/Meri](https://github.com/BeimnetTadesse/Meri)
- **Backend API**: BridgeMate FastAPI Context-Aware Engine

