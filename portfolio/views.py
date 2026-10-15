from django.shortcuts import render


def home(request):
    context = {
        'personal': {
            'name': 'Omprakash Chaure',
            'role': 'AI/ML Engineer',
            'location': 'Pune, India',
            'email': 'omprakash.chaure03@gmail.com',
            'phone': '+91-9325133427',
            'github': 'https://github.com/OmprakashChaure',
            'linkedin': 'https://linkedin.com/in/omprakash-chaure-1172aa257',
            'tagline': 'AI/ML Engineer | LLM Applications | Computer Vision | Deep Learning',
            'about': (
                'B.E. Artificial Intelligence and Machine Learning graduate and AI/ML Engineer Intern '
                'with hands-on experience building LLM-powered applications, embedding-based retrieval, '
                'and real-time computer vision systems. I work with Python, PyTorch, TensorFlow, OpenCV, '
                'Hugging Face, RAG, vector search, and speech technologies, taking ideas from prototype '
                'through evaluation and production integration.'
            ),
        },
        'skills': [
            {
                'category': 'Programming Languages',
                'icon': '💻',
                'color': 'blue',
                'skills': ['Python', 'C++', 'SQL'],
            },
            {
                'category': 'Machine Learning & AI',
                'icon': '🤖',
                'color': 'purple',
                'skills': ['Machine Learning', 'Deep Learning', 'Model Training & Evaluation', 'Computer Vision', 'NLP'],
            },
            {
                'category': 'Frameworks & Libraries',
                'icon': '🧩',
                'color': 'green',
                'skills': ['PyTorch', 'TensorFlow', 'scikit-learn', 'Hugging Face', 'OpenCV', 'MediaPipe', 'Flask'],
            },
            {
                'category': 'LLM Systems',
                'icon': '🧠',
                'color': 'orange',
                'skills': ['Groq API', 'Llama 3.3 70B', 'Prompt Engineering', 'RAG', 'Embeddings', 'pgvector', 'Deepgram STT'],
            },
            {
                'category': 'Data, Cloud & Tools',
                'icon': '📊',
                'color': 'cyan',
                'skills': ['AWS', 'Git', 'GitHub', 'MongoDB', 'PostgreSQL', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter', 'Google Colab'],
            },
        ],
        'projects': [
            {
                'title': 'JobQuick - LLM-Powered Job Matching Platform',
                'description': 'A job-matching application that parses resumes into candidate profiles and recommends 50+ real openings from LinkedIn, Indeed, and Glassdoor.',
                'features': [
                    'Parsed PDF and DOCX resumes into structured profiles with 90%+ extraction accuracy',
                    'Generated ATS compatibility scores from 0 to 100 and ranked candidates across 15+ companies',
                    'Processed 40-50 deduplicated job results in under 90 seconds',
                ],
                'technologies': ['Python', 'Flask', 'Groq Llama 3.3 70B', 'JobSpy', 'MongoDB', 'JavaScript'],
                'tags': ['python', 'ml', 'nlp'],
                'status': 'Completed',
                'icon': '💼',
                'gradient': 'from-purple-600 to-pink-500',
            },
            {
                'title': 'Autodim - Deterministic DXF Auto-Dimensioning',
                'description': 'A local pipeline in development that adds dimensions to un-dimensioned DXF drawings and reuses placement decisions from reference drawings.',
                'features': [
                    'Mined labeled examples from already-dimensioned DXF files',
                    'Used feature descriptors and k-nearest-neighbor retrieval with PostgreSQL and pgvector',
                    'Computed annotation coordinates deterministically with ezdxf instead of generating coordinates with an LLM',
                ],
                'technologies': ['Python', 'ezdxf', 'PostgreSQL', 'pgvector', 'kNN Retrieval'],
                'tags': ['python', 'ml', 'dxf'],
                'status': 'In Progress',
                'icon': '📐',
                'gradient': 'from-blue-600 to-cyan-500',
            },
            {
                'title': 'Lip Reading System - Deep Learning',
                'description': 'A visual speech-recognition system that predicts words from sequences of mouth-region video frames without using audio.',
                'features': [
                    'Extracted mouth-region frames with OpenCV for temporal model input',
                    'Combined CNN feature extraction with LSTM sequence modeling in PyTorch',
                    'Achieved 76-78% word-prediction accuracy on labeled datasets',
                ],
                'technologies': ['Python', 'PyTorch', 'OpenCV', 'CNN', 'LSTM'],
                'tags': ['python', 'ml', 'opencv', 'deep-learning'],
                'status': 'Completed',
                'icon': '👁️',
                'gradient': 'from-orange-600 to-red-500',
            },
        ],
        'experience': [
            {
                'role': 'AI-ML Engineer Intern',
                'company': 'Trivim Techno Crafts Pvt. Ltd. - Pune, India',
                'period': 'Apr 2026 - Present',
                'description': 'Collaborating with the engineering team to design and apply AI/ML solutions to real-world business problems.',
                'highlights': [
                    'Building and applying AI/ML solutions as part of a structured engineering internship',
                ],
            },
            {
                'role': 'AI Engineer Intern',
                'company': 'TeknoSolve - Pune, India',
                'period': 'Feb 2025 - Aug 2025',
                'description': 'Built a real-time computer-vision module for interview analytics and integrated its video-inference pipeline into a production evaluation platform.',
                'highlights': [
                    'Implemented landmark-based gaze detection with 92%+ attention-monitoring accuracy',
                    'Tracked gaze, blinks, and facial-engagement signals with OpenCV and MediaPipe',
                    'Optimized live-camera inference to run at 30+ FPS',
                ],
            },
        ],
        'education': [
            {
                'degree': 'B.E. in Artificial Intelligence and Machine Learning',
                'institution': 'Alard College of Engineering and Management, Pune',
                'board': 'Savitribai Phule Pune University',
                'year': '2022 - 2026',
                'score': '7.61',
                'score_label': 'CGPA - First Class',
                'additional_score': 'Final-year SGPA: 8.80',
                'status': 'Graduated',
                'icon': '🎓',
                'color': 'blue',
            },
            {
                'degree': 'Higher Secondary Certificate (12th - Science)',
                'institution': 'Maharashtra State Board',
                'board': 'Maharashtra State Board of Secondary and Higher Secondary Education',
                'year': 'March 2022',
                'score': '73.83%',
                'score_label': 'Percentage',
                'status': 'Completed',
                'icon': '📚',
                'color': 'purple',
            },
            {
                'degree': 'Secondary School Certificate (10th)',
                'institution': 'Maharashtra State Board',
                'board': 'Maharashtra State Board of Secondary and Higher Secondary Education',
                'year': 'March 2019',
                'score': '70.40%',
                'score_label': 'Percentage',
                'status': 'Completed',
                'icon': '🏫',
                'color': 'green',
            },
        ],
        'nav_links': [
            {'id': 'about', 'label': 'About'},
            {'id': 'skills', 'label': 'Skills'},
            {'id': 'projects', 'label': 'Projects'},
            {'id': 'experience', 'label': 'Experience'},
            {'id': 'education', 'label': 'Education'},
            {'id': 'resume', 'label': 'Resume', 'url': '/static/files/Omprakash_Chaure_Resume.pdf'},
            {'id': 'contact', 'label': 'Contact'},
        ],
        'certifications': [
            {'name': 'AWS Academy Cloud Foundations', 'org': 'Amazon Web Services', 'detail': 'Cloud fundamentals and AWS core services', 'icon': '☁️'},
            {'name': 'Campus Ambassador', 'org': 'E-Cell IIT Bombay', 'detail': 'Entrepreneurship events promotion and coordination', 'icon': '🏛️'},
            {'name': 'Entrepreneurship Awareness Program', 'org': 'IIT Kanpur', 'detail': 'Startup fundamentals and frameworks', 'icon': '🚀'},
            {'name': 'Machine Learning Live Training Program', 'org': 'EdTech Pvt. Ltd.', 'detail': '30 hours - January 2025', 'icon': '🧠'},
        ],
    }
    return render(request, 'home.html', context)
