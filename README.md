# 🚀 Omprakash Chaure — ML Engineer Portfolio

A modern, responsive personal portfolio website built with **Django** and **TailwindCSS**, showcasing my skills, projects, experience, and certifications in Artificial Intelligence and Machine Learning.

🌐 **Live Site:** *(Coming soon — deploying to Railway/Render)*  
📄 **Resume:** Available via the Download Resume button on the site

---

## 📸 Preview

> Hero section with typing animation, project cards with filter system, education timeline, and clickable certification cards.

---

## 🧠 About the Portfolio

This portfolio belongs to **Omprakash Chaure**, a final-year B.E. student in Artificial Intelligence and Machine Learning at Alard College of Engineering and Management, Pune (Savitribai Phule Pune University), graduating in 2026.

**Specializations:**
- 🤖 Machine Learning & Deep Learning
- 👁️ Computer Vision (OpenCV, MediaPipe)
- 🧠 Natural Language Processing & LLM/RAG Pipelines
- 🐍 Python | TensorFlow | PyTorch | Scikit-learn

---

## ✨ Features

- ⚡ **Fast & Responsive** — works on all screen sizes (mobile, tablet, desktop)
- 🌙 **Dark Mode** — toggle between light and dark themes
- 🔤 **Typing Animation** — dynamic hero text using JavaScript
- 🔍 **Project Filter** — filter projects by technology (Python, ML, CV, NLP, Deep Learning)
- 📜 **Scroll Animations** — reveal-on-scroll for all sections
- 📄 **Resume Download** — direct PDF access from hero section and navbar
- 🏅 **Clickable Certifications** — links open Google Drive certificates directly
- 📱 **Mobile Navigation** — hamburger menu for smaller screens

---

## 🗂️ Project Structure

```
My Portfolio/
│
├── manage.py                  # Django project entry point
├── requirements.txt           # Python dependencies
├── db.sqlite3                 # SQLite database
├── README.md                  # This file
│
├── portfolio_project/         # Django project settings
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
│
└── portfolio/                 # Main Django app
    ├── views.py               # All page data & context (skills, projects, education etc.)
    ├── urls.py                # URL routing
    ├── templates/
    │   ├── base.html          # Base layout (navbar, footer)
    │   └── home.html          # Main single-page portfolio content
    └── static/
        ├── css/
        │   └── style.css      # Custom styles & animations
        ├── js/
        │   └── main.js        # Typing animation, scroll effects, dark mode
        └── files/
            └── Omprakash_Chaure_Resume.pdf   # Resume PDF
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | Django 5.x (Python) |
| Frontend | HTML5, TailwindCSS (CDN), Vanilla JavaScript |
| Fonts | Google Fonts — Inter, JetBrains Mono |
| Database | SQLite (no DB queries — all data in views.py) |
| Deployment | Railway / Render (planned) |

---

## 📋 Sections

| Section | Description |
|---|---|
| **Hero** | Name, typing animation, Download Resume button, CTA buttons |
| **About** | Bio, stats (4+ projects, 15+ technologies), location & email |
| **Skills** | Categorised skill tags (Programming, ML/AI, NLP, Tools, Data) |
| **Projects** | 4 featured projects with GitHub links, tech tags, filter buttons |
| **Experience** | Freelance ML Developer timeline with highlights |
| **Education** | B.E. AIML, HSC, SSC with scores + Certifications sidebar |
| **Contact** | Email, GitHub, LinkedIn contact cards |

---

## 🚀 Getting Started (Run Locally)

### Prerequisites
- Python 3.10+
- pip

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/OmprakashChaure/Portfolio.git
cd Portfolio

# 2. Create and activate virtual environment
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # Mac/Linux

# 3. Install dependencies
pip install -r requirements.txt

# 4. Run the development server
python manage.py runserver
```

Then open **http://127.0.0.1:8000** in your browser.

### Access from other devices (same Wi-Fi)
```bash
python manage.py runserver 0.0.0.0:8000
# Then open http://<your-local-ip>:8000 from any device
```

---

## 📦 Dependencies

```
Django==5.2.12
```

*(TailwindCSS is loaded via CDN — no Node.js required)*

---

## 📁 Adding/Updating Resume

Place your resume PDF at:
```
portfolio/static/files/Omprakash_Chaure_Resume.pdf
```
The Download Resume button and navbar Resume link will serve this file automatically.

---

## 🔧 Customisation

All portfolio data (skills, projects, education, experience, certifications) is stored as Python dictionaries in:

```
portfolio/views.py → home() function → context dictionary
```

To update any content, simply edit the relevant key in `views.py` and refresh the browser — no database or migrations needed.

---

## 📬 Contact

| Platform | Link |
|---|---|
| 📧 Email | omprakash.chaure03@gmail.com |
| 💼 LinkedIn | [omprakash-chaure](https://linkedin.com/in/omprakash-chaure-1172aa257) |
| 🐙 GitHub | [OmprakashChaure](https://github.com/OmprakashChaure) |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <p>Built with ❤️ by <strong>Omprakash Chaure</strong> using Django & TailwindCSS</p>
  <p>© 2026 Omprakash Chaure</p>
</div>
