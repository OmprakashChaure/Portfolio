# Omprakash Chaure - AI/ML Engineer Portfolio

A responsive personal portfolio built with Django and Tailwind CSS. It presents Omprakash's education, AI/ML experience, projects, technical skills, and certifications.

## Portfolio status

The application is ready to run locally. A public live-site URL has not been configured yet.

## Profile

- **Location:** Pune, India
- **Education:** B.E. in Artificial Intelligence and Machine Learning, Alard College of Engineering and Management
- **University:** Savitribai Phule Pune University
- **Result:** 7.61 CGPA, First Class; final-year SGPA 8.80
- **Focus:** LLM applications, retrieval-augmented generation, vector search, computer vision, and deep learning

## Experience

- **AI-ML Engineer Intern, Trivim Techno Crafts Pvt. Ltd.** - Apr 2026 to present
- **AI Engineer Intern, TeknoSolve** - Feb 2025 to Aug 2025

## Featured projects

- **JobQuick:** LLM-powered job matching with resume parsing, ATS scoring, and job search through JobSpy.
- **Autodim:** A deterministic DXF auto-dimensioning pipeline using feature descriptors, k-nearest-neighbor retrieval, PostgreSQL, pgvector, and ezdxf. This project is in development.
- **Lip Reading System:** Visual speech recognition using OpenCV, CNN features, and LSTM sequence modeling.

## Technology

Python, C++, SQL, PyTorch, TensorFlow, scikit-learn, Hugging Face, OpenCV, MediaPipe, Flask, Groq, Llama 3.3 70B, RAG, embeddings, pgvector, Deepgram STT, AWS, MongoDB, PostgreSQL, Pandas, NumPy, Matplotlib, and Seaborn.

## Run locally

Requirements: Python 3.10 or newer and pip.

    python -m venv venv
    venv\Scripts\Activate.ps1
    pip install -r requirements.txt
    python manage.py runserver

Open http://127.0.0.1:8000 in a browser.

## Update profile content

Skills, projects, experience, education, and certifications are stored in portfolio/views.py. The page layout is in portfolio/templates/home.html; shared metadata and navigation are in portfolio/templates/base.html.

## Resume

The latest resume is served from portfolio/static/files/Omprakash_Chaure_Resume.pdf and linked from the hero section and navigation.

## Contact

- Email: omprakash.chaure03@gmail.com
- GitHub: https://github.com/OmprakashChaure
- LinkedIn: https://linkedin.com/in/omprakash-chaure-1172aa257
