import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home, Briefcase, GraduationCap, UserCircle, ShieldCheck, Download, Eye,
  Linkedin, ThumbsUp, MessageSquare, Plus, ArrowUpRight,
  Award, CheckCircle, Printer, X, FileText, MapPin,
  Mail, Phone, Database, Target, Search, Sun, Moon, Monitor, ArrowUpCircle,
  Globe, Fingerprint, Workflow, Landmark, LayoutGrid, Users, Cpu, BrainCircuit, Rocket, Zap, BarChart, Menu,
  Check, Info
} from 'lucide-react';

// --- البيانات والنصوص (Translations) ---
const translations = {
  en: {
    nav: {
      logo: "Faisal",
      role: "Talent Acquisition",
      home: "Home",
      about: "About Me",
      expertise: "Expertise",
      testimonials: "Testimonials",
      resume: "Resume",
      contact: "Contact",
      connect: "Connect"
    },
    hero: {
      name: "Faisal",
      fullname: "Faisal Alsanea",
      badge: "Certified TA Practitioner",
      title_main: "Faisal",
      subtitle: "Talent Acquisition Specialist & Onboarding Expert",
      desc: "Attracting premier talent and transforming the hiring journey into a seamless, high-performance experience.",
      cta_primary: "Connect With Me",
      cta_secondary: "View Resume",
      happy_clients: "+99 Happy Candidates",
      partners: ["Sana", "Nawah", "Madar", "Nabd", "Afaq", "Rawafed"]
    },
    about: {
      title: "I build exceptional teams through high-impact recruitment.",
      para1: "I began my human resources journey out of a deep curiosity about how great companies are built. Over time, this curiosity grew into a professional career focused on sourcing and securing top talent while ensuring a seamless, positive candidate experience.",
      para2: "I focus on designing modern recruitment funnels that serve real organizational goals. Whether headhunting niche roles or optimizing internal ATS structures, my goal is always speed, clarity, and candidate satisfaction.",
      para3: "I pay attention to the micro-details of employee integration because onboarding is where retention starts. This meticulous care has consistently earned the trust of hiring managers and high-caliber candidates alike.",
      career_title: "My Professional Journey",
      present: "Present",
      jobs: [
        {
          role: "Talent Acquisition & Strategic Headhunting Specialist",
          company: "Kaki Group",
          period: "April 2025 - Present",
          desc: "Leading end-to-end recruitment for 15+ specialized roles, automating screening with AI-powered tools, and designing cultural onboarding frameworks."
        },
        {
          role: "Administrative & HR Assistant",
          company: "Alfakherat Company",
          period: "Feb 2023 - June 2023",
          desc: "Spearheaded secure documentation systems for 500+ records and optimized daily administrative operations."
        }
      ]
    },
    expertise: {
      title: "How I Can Help You",
      subtitle: "Custom recruitment and onboarding architecture tailored for modern enterprises.",
      cat1: "Talent Sourcing & Recruitment",
      cat2: "Onboarding & Integration",
      cat3: "Recruitment Systems & Tech",
      skills1: [
        { title: "Strategic Sourcing", code: "Sourcing" },
        { title: "Candidate Research", code: "Research" },
        { title: "CV Screening", code: "Screening" },
        { title: "Structured Interviews", code: "Interviews" }
      ],
      skills2: [
        { title: "Strategic Onboarding", code: "Onboarding" },
        { title: "Orientation Journeys", code: "Orientation" },
        { title: "Cultural Integration", code: "Culture" },
        { title: "Talent Development", code: "Development" }
      ],
      skills3: [
        { title: "ATS Optimization", code: "ATS" },
        { title: "AI Sourcing & Ranking", code: "AI" },
        { title: "Data Analytics", code: "Analytics" },
        { title: "Process Automation", code: "Automation" }
      ]
    },
    testimonials: {
      title: "Genuine Feedback",
      subtitle: "From Candidates & Hiring Managers",
      rating_text: "+99 Happy Professional Reviews",
      list: [
        {
          quote: "Faisal made my career transition exceptionally smooth. His guidance, communication, and professionalism during the entire hiring process were outstanding.",
          author: "Yousef Al-Salem",
          role: "Product Manager at Afaq"
        },
        {
          quote: "The recruitment cycle Faisal designed was swift and transparent. He understands technical needs perfectly and is remarkably structured.",
          author: "Abdullah Al-Qahtani",
          role: "Nawah Studio Founder"
        },
        {
          quote: "His attention to the candidate's journey and matching cultural values set him apart. The best onboarding experience I've had.",
          author: "Fahad Al-Dossari",
          role: "Creative Director at Roya"
        },
        {
          quote: "Faisal helped us streamline complex technical hirings under tight deadlines. Highly cooperative and thoroughly professional.",
          author: "Khaled Al-Otaibi",
          role: "HR Partner at Nawat"
        },
        {
          quote: "Faisal's ability to locate highly specialized passive candidates for our team was impressive. He is an exceptional headhunter.",
          author: "Omar Al-Abdullah",
          role: "CEO at Madar Studio"
        },
        {
          quote: "He redesigned our onboarding journey, resulting in faster integration and higher early-stage retention. A true expert.",
          author: "Samer Al-Harbi",
          role: "CTO at Masar Co."
        }
      ]
    },
    resume_modal: {
      title: "FAISAL ALSANEA - RESUME",
      profile_title: "PROFILE SUMMARY",
      profile_desc: "Highly motivated and results-driven Talent Acquisition Specialist & Onboarding Expert with a proven track record of designing modern recruitment pipelines, attracting top-tier passive talent, and orchestrating comprehensive onboarding experiences.",
      competencies_title: "CORE HR COMPETENCIES",
      competencies_list: [
        "Executive & Technical Sourcing",
        "Strategic Onboarding Design",
        "Applicant Tracking Systems (ATS)",
        "AI-Powered Screening Systems",
        "Employer Branding & Outreach",
        "Candidate Journey Optimization"
      ],
      experience_title: "PROFESSIONAL WORK EXPERIENCE",
      jobs: [
        {
          company: "Kaki Group",
          role: "Talent Acquisition & Strategic Headhunting Specialist",
          period: "April 2025 - Present",
          location: "Jeddah, Saudi Arabia",
          bullets: [
            "Lead end-to-end recruitment for 15+ specialized technical and executive roles, reducing hiring cycle duration by 25%.",
            "Incorporate custom AI-powered screening and ranking frameworks to optimize candidate filtering.",
            "Establish cohesive onboarding and integration programs, increasing early-stage employee retention by 30%."
          ]
        },
        {
          company: "Alfakherat Company",
          role: "Administrative & HR Assistant",
          period: "Feb 2023 - June 2023",
          location: "Jeddah, Saudi Arabia",
          bullets: [
            "Administered and optimized filing systems for 500+ records, enhancing overall operational speed by 40%.",
            "Coordinated logistics, calendar management, and direct support for executive leadership.",
            "Drafted over 100+ formal HR letters, agreements, and official internal communiques."
          ]
        }
      ],
      projects_title: "PROJECTS & ACADEMIC TRAINING",
      project_sub: "King Abdulaziz University | Research Methods & Practical Training",
      project_period: "Feb 2020 - Sept 2021",
      project_bullets: [
        "Completed a 40-hour immersive project focused on modern training methodologies and TOT (Training of Trainers).",
        "Refined persuasive communication models and simplified reporting structures to enhance cross-functional team alignment.",
        "Exercised strong remote collaboration and crisis-management resilience during public health lockdowns."
      ],
      education_title: "EDUCATION & CERTIFICATIONS",
      edu_items: [
        {
          title: "Bachelor's Degree in English Language",
          institution: "King Abdulaziz University",
          period: "January 2022"
        },
        {
          title: "Talent Acquisition Certified",
          institution: "Oxford International Study Centre (UK)",
          period: ""
        },
        {
          title: "Essentials of International Human Resources Management",
          institution: "Cambridge International Qualifications (CIQ, UK)",
          period: ""
        }
      ],
      tech_skills_title: "TECHNICAL SKILLS",
      tech_cols: [
        { title: "Recruitment Systems", content: "ATS Platforms, AI-Powered Sourcing, Candidate Experience Optimization Tools." },
        { title: "Productivity Suites", content: "Microsoft Excel (Advanced Analytics), Google Workspace, Zoom Rooms." },
        { title: "AI Integrations", content: "AI Screening Architectures, Custom Automated Shortlisting." }
      ],
      languages_title: "LANGUAGES",
      languages_list: [
        "Arabic (Native speaker)",
        "English (Highly Proficient)"
      ],
      download: "Download PDF",
      print: "Print Document",
      close: "Close"
    },
    projects: {
      title: "My Strategic Projects",
      subtitle: "Innovative systems and structures engineered to elevate human resources and recruitment operations.",
      view_system: "Explore System Modules",
      system_title: "AI-Powered Recruitment & Strategic Onboarding Platform",
      system_desc: "A fully unified HR intelligence system designed to track applications, automate resume screening, coordinate interactive onboarding, and secure access permissions.",
      tabs: {
        dashboard: "1. Analytics Dashboard",
        recruitment: "2. Recruitment Pipeline",
        onboarding: "3. Onboarding Journeys",
        security: "4. Permissions & Tech"
      },
      screens: [
        {
          id: 0,
          title: "Analytics Dashboard",
          subtitle: "Centralized HR KPIs & Real-time Flow",
          desc: "A premium management screen showcasing candidate flow, active job pipelines, onboarding progress, and interactive analytics to assist leadership decision-making.",
          image: "/hr-sys-1.jpg"
        },
        {
          id: 1,
          title: "Recruitment & Candidate Sourcing",
          subtitle: "Strategic Elite Talent Attraction",
          desc: "Advanced search & sourcing interface designed to target, screen, and funnel high-potential passive talent with specialized progress cards and candidate status updates.",
          image: "/hr-sys-2.jpg"
        },
        {
          id: 2,
          title: "Strategic Onboarding Journey",
          subtitle: "Fostering Employee Integration",
          desc: "A highly visual and interactive step-by-step onboarding roadmap covering pre-arrival, day-one meeting, training milestones, and checklist progress tracking.",
          image: "/hr-sys-3.jpg"
        },
        {
          id: 3,
          title: "Security, Tech & System Impact",
          subtitle: "Modern, Secure React Stack & Over 70% Time Saved",
          desc: "Multi-level access controls (admin/manager) built using a lightweight React and Tailwind stack, delivering optimized screening workflows with significant operational impact.",
          image: "/hr-sys-4.jpg"
        }
      ]
    }
  },
  ar: {
    nav: {
      logo: "فيصل",
      role: "استقطاب المواهب",
      home: "الرئيسية",
      about: "عنّي",
      expertise: "مجالات العمل",
      testimonials: "قالوا عني",
      resume: "السيرة الذاتية",
      contact: "اتصل بي",
      connect: "تواصل معي"
    },
    hero: {
      name: "فيصل",
      fullname: "فيصل السني",
      badge: "ممارس معتمد في استقطاب المواهب",
      title_main: "فيصل",
      subtitle: "أخصائي استقطاب المواهب وخبير التهيئة الاستراتيجية للموظفين الجدد",
      desc: "أعمل على جذب أفضل الكفاءات وتحويل رحلة التوظيف والتهيئة إلى تجربة استثنائية وسلسة تضمن استبقاء الموظفين ورفع الأداء.",
      cta_primary: "تواصل معي",
      cta_secondary: "السيرة الذاتية",
      happy_clients: "+99 مرشح سعيد",
      partners: ["سنا", "نواة", "مدار", "نبض", "أفق", "روافد"]
    },
    about: {
      title: "أبني فرق عمل استثنائية من خلال عمليات توظيف ذات أثر ملموس.",
      para1: "بدأت رحلتي في الموارد البشرية بشغف وفضول عميق لمعرفة كيفية بناء وإدارة فرق العمل المتميزة في الشركات الرائدة. وتحول هذا الفضول مع الوقت إلى مسار مهني متخصص أركز فيه على البحث عن أفضل الكفاءات واصطيادها استراتيجياً، مع ضمان تجربة إيجابية وسلسة للمرشحين.",
      para2: "أركز على تصميم قنوات توظيف حديثة تخدم أهداف المنشأة الاستراتيجية بشكل حقيقي وعملي. وسواء كنت أقوم باستقطاب كوادر للأدوار التخصصية النادرة أو تحسين وتطوير البنية التحتية لأنظمة تتبع المتقدمين (ATS)، فإن هدفي الدائم هو السرعة، والوضوح، ورضا المرشح.",
      para3: "أهتم بأدق تفاصيل مكاملة وتهيئة الموظفين الجدد (Onboarding)، لأنني أؤمن أن استبقاء الموظف يبدأ من يومه الأول. هذا الاهتمام البالغ بالتفاصيل أكسبني باستمرار ثقة مدراء الإدارات والشركاء التنفيذيين وأفضل الكوادر المهنية على حد سواء.",
      career_title: "المسار الذي سلكته",
      present: "إلى الآن",
      jobs: [
        {
          role: "أخصائي استقطاب المواهب والصيد الاستراتيجي للكفاءات",
          company: "مجموعة كعكي",
          period: "أبريل 2025 - إلى الآن",
          desc: "إدارة عمليات التوظيف الشاملة لأكثر من 15 تخصصاً تقنياً وإدارياً، وأتمتة الفرز باستخدام تقنيات الذكاء الاصطناعي، وتصميم رحلات التهيئة والاندماج الشاملة للموظفين الجدد."
        },
        {
          role: "مساعد إداري وموارد بشرية",
          company: "شركة الفاخرات",
          period: "فبراير 2023 - يونيو 2023",
          desc: "تحسين وتأمين نظام أرشفة السجلات والملفات لأكثر من 500 موظف، وتنظيم الدعم اللوجستي والتنسيقي للإدارة التنفيذية."
        }
      ]
    },
    expertise: {
      title: "كيف يمكنني مساعدتك؟",
      subtitle: "هندسة وتصميم عمليات توظيف وتهيئة متكاملة ومصممة خصيصاً لتناسب المنشآت الحديثة وتواكب تطلعاتها.",
      cat1: "استقطاب وتوظيف الكفاءات",
      cat2: "التهيئة والاندماج الوظيفي",
      cat3: "أنظمة وتقنيات التوظيف الحديثة",
      skills1: [
        { title: "الاستقطاب الاستراتيجي", code: "Sourcing" },
        { title: "أبحاث الكفاءات والنخبة", code: "Research" },
        { title: "تصفية السير الذاتية", code: "Screening" },
        { title: "المقابلات المهيكلة", code: "Interviews" }
      ],
      skills2: [
        { title: "التهيئة الاستراتيجية", code: "Onboarding" },
        { title: "رحلات الاندماج التفاعلية", code: "Orientation" },
        { title: "الاندماج الثقافي للشركات", code: "Culture" },
        { title: "التطوير والتقييم الأولي", code: "Development" }
      ],
      skills3: [
        { title: "تطوير أنظمة التتبع (ATS)", code: "ATS" },
        { title: "الفرز والترشيح بالذكاء الاصطناعي", code: "AI" },
        { title: "تحليل بيانات التوظيف", code: "Analytics" },
        { title: "أتمتة العمليات الإدارية", code: "Automation" }
      ]
    },
    testimonials: {
      title: "كلمات صادقة",
      subtitle: "من المرشحين ومدراء الإدارات الذين عملت معهم",
      rating_text: "+99 مرشح سعيد",
      list: [
        {
          quote: "جعل فيصل انتقالي المهني سلسًا للغاية. كان توجيهه وتواصله واحترافيته طوال عملية التوظيف بأكملها متميزًا حقًا.",
          author: "يوسف السالم",
          role: "مدير منتج في أفق"
        },
        {
          quote: "دورة التوظيف التي صممها فيصل كانت سريعة وشفافة. إنه يفهم المتطلبات التقنية تماماً ومنظم بشكل لافت للنظر.",
          author: "عبدالله القحطاني",
          role: "مؤسس استوديو نواة"
        },
        {
          quote: "اهتمامه برحلة المرشح ومطابقة القيم الثقافية للشركة يميزه عن غيره. كانت أفضل تجربة تهيئة واندماج عشتها على الإطلاق.",
          author: "فهد الدوسري",
          role: "المدير الإبداعي في رؤى"
        },
        {
          quote: "ساعدنا فيصل في تبسيط التوظيفات التقنية المعقدة في ظل مواعيد نهائية ضيقة. متعاون للغاية ومحترف تمامًا.",
          author: "خالد العتيبي",
          role: "شريك الموارد البشرية في منصة نواة"
        },
        {
          quote: "قدرة فيصل على الوصول إلى الكفاءات النادرة وغير النشطة في البحث عن عمل كانت مبهرة. إنه صياد كفاءات استثنائي.",
          author: "عمر العبدالله",
          role: "الرئيس التنفيذي لاستوديو مدار"
        },
        {
          quote: "لقد أعاد تصميم رحلة التهيئة والاندماج الخاصة بنا، مما أدى إلى تسريع اندماج الموظفين وزيادة معدل استبقائهم في المراحل الأولى. خبير حقيقي.",
          author: "سامر الحربي",
          role: "المدير التقني في شركة مسار"
        }
      ]
    },
    resume_modal: {
      title: "فيصل السني - السيرة الذاتية",
      profile_title: "الملخص المهني",
      profile_desc: "أخصائي استقطاب مواهب وخبير تهيئة وظيفية طموح، أمتلك شغفاً متميزاً في تصميم قنوات التوظيف الحديثة واستقطاب الكفاءات الاستثنائية، وابتكار برامج متكاملة للاندماج الوظيفي تضمن الاحتفاظ بأفضل الكوادر.",
      competencies_title: "المهارات والمؤهلات الأساسية",
      competencies_list: [
        "استقطاب الكفاءات الفنية والتنفيذية",
        "تصميم برامج التهيئة والاندماج",
        "إدارة أنظمة تتبع المتقدمين (ATS)",
        "بناء وتصميم الفرز المدعوم بالذكاء الاصطناعي",
        "تعزيز العلامة التجارية لجهة العمل",
        "تحسين رحلة وتجربة المتقدمين"
      ],
      experience_title: "الخبرة المهنية",
      jobs: [
        {
          company: "مجموعة كعكي",
          role: "أخصائي استقطاب المواهب والصيد الاستراتيجي للكفاءات",
          period: "أبريل 2025 - إلى الآن",
          location: "جدة، المملكة العربية السعودية",
          bullets: [
            "إدارة عمليات التوظيف الشاملة لأكثر من 15 تخصصاً تقنياً وإدارياً مع تقليص وقت التوظيف بنسبة 25%.",
            "تطوير واستخدام أدوات الفرز والترشيح المتقدمة المدعومة بالذكاء الاصطناعي لتسهيل فلترة السير الذاتية.",
            "تصميم نظام مكاملة وتهيئة وظيفية أسهم في رفع معدل استبقاء الموظفين الجدد بنسبة 30%."
          ]
        },
        {
          company: "شركة الفاخرات",
          role: "مساعد إداري وموارد بشرية",
          period: "فبراير 2023 - يونيو 2023",
          location: "جدة، المملكة العربية السعودية",
          bullets: [
            "أرشفة وتنظيم وتأمين نظام ملفات يضم أكثر من 500 سجل موظف، مما زاد من سرعة استرجاع البيانات بنسبة 40%.",
            "إدارة اللوجستيات والمواعيد وتسهيل التنسيق الإداري والتنظيمي مع القيادة التنفيذية.",
            "صياغة وإصدار أكثر من 100 خطاب رسمي وعقد وخطابات الموارد البشرية المختلفة."
          ]
        }
      ],
      projects_title: "المشاريع والتدريب الأكاديمي",
      project_sub: "جامعة الملك عبد العزيز | طرق البحث والتدريب العملي",
      project_period: "فبراير 2020 - سبتمبر 2021",
      project_bullets: [
        "إتمام مشروع تدريبي مكثف (40 ساعة) يركز على استراتيجيات التدريب الحديثة وإعداد المدربين (TOT).",
        "تحسين نماذج الإقناع المهني وتبسيط التقارير الفنية لزيادة مستوى التنسيق بين الإدارات المختلفة.",
        "إبراز مرونة عالية وقدرة متميزة على العمل عن بعد وحل المشكلات خلال فترات التباعد والإغلاق الجائحي."
      ],
      education_title: "التعليم والشهادات المهنية",
      edu_items: [
        {
          title: "بكالوريوس في اللغة الإنجليزية",
          institution: "جامعة الملك عبد العزيز",
          period: "يناير 2022"
        },
        {
          title: "شهادة معتمدة في استقطاب المواهب",
          institution: "مركز أكسفورد للدراسات الدولية (بريطانيا)",
          period: ""
        },
        {
          title: "أساسيات إدارة الموارد البشرية الدولية",
          institution: "مؤهلات كامبريدج الدولية (CIQ، بريطانيا)",
          period: ""
        }
      ],
      tech_skills_title: "المهارات التقنية وأنظمة العمل",
      tech_cols: [
        { title: "أنظمة التوظيف", content: "منصات الـ ATS، الفرز الذكي والتنقيب عن الكفاءات، أدوات تحسين رحلة المرشح." },
        { title: "البرامج الإنتاجية", content: "مايكروسوفت إكسل (تحليل بيانات متقدم)، منصة جوجل السحابية، زووم." },
        { title: "توظيف الذكاء الاصطناعي", content: "تصميم آليات وأتمتة الفرز الذكي لقوائم المرشحين وتصنيف الكفاءات." }
      ],
      languages_title: "اللغات",
      languages_list: [
        "اللغة العربية (اللغة الأم)",
        "اللغة الإنجليزية (إتقان تام واحترافي)"
      ],
      download: "تحميل PDF",
      print: "طباعة",
      close: "إغلاق"
    },
    projects: {
      title: "أعمالي ومشاريعي الاستراتيجية",
      subtitle: "أنظمة وبُنى توظيف مبتكرة صممتها ونفذتها لرفع كفاءة عمليات الموارد البشرية والتوظيف.",
      view_system: "استكشف أجزاء النظام الإداري",
      system_title: "النظام الإداري الذكي لاستقطاب الكفاءات والتهيئة الاستراتيجية",
      system_desc: "منصة متكاملة ومترابطة لإدارة طلبات التوظيف، تصفية المرشحين بالذكاء الاصطناعي، تتبع مسارات المقابلات، وتسهيل اندماج الموظف الجديد في بيئة العمل بشكل تفاعلي وآمن.",
      tabs: {
        dashboard: "١. لوحة التحكم والتحليلات",
        recruitment: "٢. مسار التوظيف والفرز",
        onboarding: "٣. رحلة التهيئة والاندماج",
        security: "٤. الصلاحيات والبنية التقنية"
      },
      screens: [
        {
          id: 0,
          title: "لوحة التحكم والتحليلات الإدارية",
          subtitle: "مراقبة مؤشرات التوظيف والأداء في الوقت الفعلي",
          desc: "شاشة تحكم متكاملة تعرض تدفق المتقدمين، وحالات طلبات التوظيف النشطة، ومعدلات إتمام التهيئة، مع إحصائيات متقدمة لدعم قرارات القيادة التنفيذية.",
          image: "/hr-sys-1.jpg"
        },
        {
          id: 1,
          title: "مسار التوظيف والفرز الاستراتيجي",
          subtitle: "جذب واصطياد الكوادر والمواهب النخبوية",
          desc: "واجهة متطورة للبحث السريع والتنقيب، مخصصة لفرز ومتابعة المرشحين المتميزين مع تفاصيل دقيقة وبطاقات حالة ملوّنة تضمن الشفافية والسرعة.",
          image: "/hr-sys-2.jpg"
        },
        {
          id: 2,
          title: "رحلة التهيئة والاندماج الوظيفي",
          subtitle: "تمكين الموظف الجديد وبناء الولاء من اليوم الأول",
          desc: "خريطة طريق مرئية وتفاعلية تتناول مراحل ما قبل الوصول، لقاءات اليوم الأول، التوجيه والتدريب، بالإضافة إلى مؤشرات إنجاز المهام المطلوبة.",
          image: "/hr-sys-3.jpg"
        },
        {
          id: 3,
          title: "الصلاحيات، الأمان، وأثر النظام الملموس",
          subtitle: "حماية تامة، بنية برمجية سريعة، وأكثر من ٧٠٪ وقت توظيف تم توفيره",
          desc: "نظام دخول متعدد مستويات الصلاحيات للأدمن والمشرف، تم بناؤه باستخدام تقنيات React و Tailwind الحديثة ليوفر أعلى درجات الكفاءة والأمان الإداري.",
          image: "/hr-sys-4.jpg"
        }
      ]
    }
  }
};

const App: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'ar'>('ar'); // Default to Arabic as requested by user
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Project / System Showcase active tab & Lightbox state
  const [activeScreenTab, setActiveScreenTab] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number>(0);

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.className = 'light'; // Always light theme for minimalist look
  }, [lang]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-500 font-sans selection:bg-black/10 overflow-x-hidden bg-dot-pattern relative">

      {/* Print View Specific Style Tag */}
      <style>{`
        @media print {
          body * {
            visibility: hidden !important;
          }
          #printable-resume, #printable-resume * {
            visibility: visible !important;
          }
          #printable-resume {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            height: auto !important;
            background: white !important;
            color: black !important;
            padding: 2rem !important;
            box-shadow: none !important;
            border: none !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      {/* --- Floating Header Navigation (IMG_0079.jpeg inspired) --- */}
      <header className="absolute top-0 left-0 right-0 z-50 p-6 max-w-7xl mx-auto flex justify-between items-center pointer-events-none">

        {/* Burger Menu Button (Left Side) */}
        <div className="pointer-events-auto">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center border border-slate-100 transition-all cursor-pointer"
          >
            <Menu size={20} className="text-slate-800" />
          </button>
        </div>

        {/* Floating Controls (Language, Theme, etc.) */}
        <div className="pointer-events-auto flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="px-4 py-2 bg-white/80 backdrop-blur-md text-slate-800 rounded-full font-bold text-xs border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            {lang === 'en' ? 'العربية' : 'English'}
          </button>
        </div>

        {/* Profile Card Widget (Right Side) */}
        <div className="pointer-events-auto hidden md:flex items-center gap-3 bg-white/90 backdrop-blur-md py-1.5 px-3 rounded-full border border-slate-100 shadow-sm">
          <div className="text-start">
            <h4 className="text-xs font-black leading-tight text-slate-900">{t.hero.name}</h4>
            <p className="text-[10px] text-slate-500 font-bold">{t.nav.role}</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-slate-200 to-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-700 text-sm overflow-hidden shadow-inner">
            <img src="/faisal-photo.jpg" alt={t.hero.fullname} className="w-full h-full object-cover" />
          </div>
        </div>

      </header>

      {/* --- Overlay Menu Drawer --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <React.Fragment>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[200]"
            />
            <motion.div
              initial={{ x: lang === 'ar' ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: lang === 'ar' ? '100%' : '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed top-0 bottom-0 ${lang === 'ar' ? 'right-0' : 'left-0'} w-80 bg-white shadow-2xl z-[251] p-8 flex flex-col justify-between`}
            >
              <div>
                <div className="flex justify-between items-center mb-12">
                  <span className="font-black text-xl tracking-tighter">{t.hero.fullname}</span>
                  <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-all">
                    <X size={20} />
                  </button>
                </div>

                <nav className={`flex flex-col gap-6 text-lg font-bold ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  <button onClick={() => scrollToSection('hero')} className={`${lang === 'ar' ? 'text-right' : 'text-left'} hover:text-slate-500 transition-colors`}>{t.nav.home}</button>
                  <button onClick={() => scrollToSection('about')} className={`${lang === 'ar' ? 'text-right' : 'text-left'} hover:text-slate-500 transition-colors`}>{t.nav.about}</button>
                  <button onClick={() => scrollToSection('projects')} className={`${lang === 'ar' ? 'text-right' : 'text-left'} hover:text-slate-500 transition-colors`}>{lang === 'ar' ? 'أعمالي' : 'Projects'}</button>
                  <button onClick={() => scrollToSection('expertise')} className={`${lang === 'ar' ? 'text-right' : 'text-left'} hover:text-slate-500 transition-colors`}>{t.nav.expertise}</button>
                  <button onClick={() => scrollToSection('testimonials')} className={`${lang === 'ar' ? 'text-right' : 'text-left'} hover:text-slate-500 transition-colors`}>{t.nav.testimonials}</button>
                </nav>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => { setIsResumeOpen(true); setIsMenuOpen(false); }}
                  className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  <FileText size={18} />
                  {t.nav.resume}
                </button>
              </div>
            </motion.div>
          </React.Fragment>
        )}
      </AnimatePresence>

      {/* --- Hero Section (IMG_0079.jpeg aesthetic) --- */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-12">

          {/* Main Title Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-[10rem] font-bold tracking-tight text-slate-900 select-none pb-2 leading-none"
            style={{ fontFamily: '"Readex Pro", sans-serif' }}
          >
            {t.hero.name}
          </motion.h1>

          {/* Subtitle / Desc */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 max-w-2xl mx-auto"
          >
            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
              {lang === 'ar' ? t.hero.desc : t.hero.subtitle}
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-row justify-center items-center gap-4 flex-wrap"
          >
            <a
              href="mailto:falsanea@aol.com"
              className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 text-sm md:text-base cursor-pointer"
            >
              {t.hero.cta_primary}
            </a>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="px-8 py-4 bg-white text-slate-800 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all shadow-md hover:shadow-lg flex items-center gap-2 text-sm md:text-base cursor-pointer"
            >
              {t.hero.cta_secondary}
            </button>
          </motion.div>

        </div>

        {/* Hero Bottom Bar (IMG_0079.jpeg footer part) */}
        <div className="absolute bottom-8 left-0 right-0 w-full px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 pointer-events-none">

          {/* Grayscale Partners */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 opacity-40 pointer-events-auto">
            {t.hero.partners.map((partner, i) => (
              <span key={i} className="text-sm font-bold tracking-widest text-slate-600 uppercase">
                {partner}
              </span>
            ))}
          </div>

          {/* Client Reviews Badges */}
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md py-2 px-4 rounded-full border border-slate-100 shadow-sm pointer-events-auto">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="w-7 h-7 rounded-full bg-slate-200 border-2 border-white overflow-hidden flex items-center justify-center font-bold text-[8px] text-slate-600">
                  <UserCircle size={28} className="text-slate-400 bg-slate-100" />
                </div>
              ))}
            </div>
            <div className="text-start">
              <div className="flex items-center gap-0.5 text-amber-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-xs">★</span>
                ))}
              </div>
              <span className="text-[10px] font-bold text-slate-600 leading-none">{t.hero.happy_clients}</span>
            </div>
          </div>

        </div>
      </section>

      {/* --- Interactive Projects Showcase Section (High Fidelity system walkthrough) --- */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-100 bg-white/40 rounded-3xl my-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl -z-10" />

        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-bold text-blue-800 uppercase tracking-widest">{t.projects.view_system}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {t.projects.title}
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-medium max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        {/* System Overview Details Card */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm mb-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-start flex-1">
            <h3 className="text-2xl font-bold text-slate-900">{t.projects.system_title}</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">{t.projects.system_desc}</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            {['React.js', 'Tailwind CSS', 'Framer Motion', 'AI Screening', 'Dynamic Workflows'].map((tag, idx) => (
              <span key={idx} className="px-3.5 py-1.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold text-slate-600">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Dynamic Tab Navigation & System Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Tabs Menu List (Col 1-4) */}
          <div className="lg:col-span-4 space-y-3">
            {[
              t.projects.tabs.dashboard,
              t.projects.tabs.recruitment,
              t.projects.tabs.onboarding,
              t.projects.tabs.security
            ].map((tabLabel, idx) => (
              <button
                key={idx}
                onClick={() => setActiveScreenTab(idx)}
                className={`w-full text-start p-5 rounded-2xl border text-sm md:text-base font-bold transition-all flex items-center justify-between gap-4 cursor-pointer ${
                  activeScreenTab === idx
                    ? 'bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-900/10'
                    : 'bg-white hover:bg-slate-50 border-slate-100 text-slate-700 hover:text-slate-900'
                }`}
              >
                <span>{tabLabel}</span>
                <ArrowUpRight size={18} className={`transition-transform duration-300 ${activeScreenTab === idx ? 'rotate-45 text-white' : 'text-slate-400 group-hover:translate-x-1'}`} />
              </button>
            ))}
          </div>

          {/* Interactive Screen Display (Col 5-12) */}
          <div className="lg:col-span-8 space-y-6">
            <AnimatePresence mode="wait">
              {t.projects.screens.map((screen, idx) => {
                if (idx !== activeScreenTab) return null;
                return (
                  <motion.div
                    key={screen.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    {/* CSS High-Fidelity Browser Mockup */}
                    <div
                      onClick={() => {
                        setLightboxImageIndex(idx);
                        setIsLightboxOpen(true);
                      }}
                      className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 group relative cursor-pointer"
                    >
                      {/* Browser Top Bar */}
                      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                        </div>
                        <div className="bg-slate-900 text-[10px] text-slate-400 font-semibold px-6 py-1 rounded-md max-w-xs truncate text-center select-none flex items-center gap-1.5">
                          <ShieldCheck size={12} className="text-emerald-500" />
                          hr-system.faisal.com/{screen.image.replace('.jpg', '').replace('/', '')}
                        </div>
                        <div className="w-12" />
                      </div>

                      {/* Mockup Canvas */}
                      <div className="aspect-[16/10] bg-slate-950 overflow-hidden relative">
                        <img
                          src={screen.image}
                          alt={screen.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Hover Zoom overlay indicator */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-2 z-10">
                          <div className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-all duration-300">
                            <Eye size={20} />
                          </div>
                          <span className="text-xs font-bold text-white uppercase tracking-wider bg-slate-900/80 px-3 py-1.5 rounded-full backdrop-blur-sm shadow-md">
                            {lang === 'ar' ? 'انقر للتكبير والتصفح' : 'Click to zoom and view'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Meta description of the module */}
                    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-2 text-start">
                      <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span>{screen.subtitle}</span>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">{screen.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{screen.desc}</p>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* --- Lightbox / Image Zoom Showcase Slider --- */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-[500] flex flex-col justify-between p-6">

            {/* Top Close Bar */}
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto text-white">
              <div className="text-start">
                <h4 className="font-bold text-base">{t.projects.screens[lightboxImageIndex].title}</h4>
                <p className="text-xs text-slate-400 font-semibold">{t.projects.screens[lightboxImageIndex].subtitle}</p>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all cursor-pointer animate-pulse"
              >
                <X size={20} />
              </button>
            </div>

            {/* Slider Canvas */}
            <div className="flex items-center justify-between w-full max-w-7xl mx-auto gap-4 my-auto relative">

              {/* Prev Button */}
              <button
                onClick={() => {
                  setLightboxImageIndex((prev) => (prev === 0 ? t.projects.screens.length - 1 : prev - 1));
                }}
                className="p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer shrink-0 z-20"
              >
                <span className="font-black text-lg">&larr;</span>
              </button>

              {/* Central Image View */}
              <div className="max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative bg-slate-900 mx-auto select-none">
                <img
                  src={t.projects.screens[lightboxImageIndex].image}
                  alt={t.projects.screens[lightboxImageIndex].title}
                  className="max-w-full max-h-[70vh] object-contain rounded-2xl"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={() => {
                  setLightboxImageIndex((prev) => (prev === t.projects.screens.length - 1 ? 0 : prev + 1));
                }}
                className="p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer shrink-0 z-20"
              >
                <span className="font-black text-lg">&rarr;</span>
              </button>

            </div>

            {/* Down Navigation Dots */}
            <div className="flex justify-center items-center gap-3 py-4">
              {t.projects.screens.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightboxImageIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    lightboxImageIndex === idx ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

          </div>
        )}
      </AnimatePresence>

      {/* --- About & Career Path Section (IMG_0078.jpeg aesthetic) --- */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Column: Core Description & Brand Grid */}
          <div className="space-y-8 text-start">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              {t.about.title}
            </h2>
            <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed">
              <p>{t.about.para1}</p>
              <p>{t.about.para2}</p>
              <p>{t.about.para3}</p>
            </div>

            {/* Micro-interactive Systems/Technologies Grid (IMG_0078 bottom left icons) */}
            <div className="pt-6 border-t border-slate-100">
              <div className="flex flex-wrap gap-4 items-center opacity-60">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{lang === 'ar' ? 'التقنيات التي أستخدمها:' : 'HR Tech Stack:'}</span>
                {['LinkedIn', 'Excel', 'Google Workspace', 'Zoom', 'ATS Platforms', 'AI Sourcing'].map((system, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-white border border-slate-100 rounded-full text-xs font-semibold text-slate-600 shadow-sm">
                    {system}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Profile Picture & Experience Track */}
          <div className="space-y-12">

            {/* Minimalist Profile Card (IMG_0078.jpeg design) */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-6">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-slate-100 to-slate-50 border border-slate-200 flex items-center justify-center overflow-hidden relative shadow-inner">
                {/* Faisal's profile picture inside a modern rounded box */}
                <img src="/faisal-photo.jpg" alt={t.hero.fullname} className="w-full h-full object-cover" />

                {/* Floating Social Pill inside card (like IMG_0078) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/95 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-4 text-white shadow-lg pointer-events-auto">
                  <a href="https://sa.linkedin.com/in/falsanea" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
                    <Linkedin size={16} />
                  </a>
                  <a href="mailto:falsanea@aol.com" className="hover:text-slate-300 transition-colors">
                    <Mail size={16} />
                  </a>
                  <span className="text-[10px] font-bold text-slate-300 tracking-wider">/falsanea</span>
                </div>
              </div>

              {/* Identity Footer inside Card */}
              <div className="text-start">
                <h3 className="text-2xl font-bold text-slate-900 leading-tight">{t.hero.fullname}</h3>
                <p className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wide">{t.hero.badge}</p>
              </div>
            </div>

            {/* Career Path Timeline (IMG_0078.jpeg "المسار الذي سلكته") */}
            <div className="space-y-6 text-start">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">{t.about.career_title}</h3>
              <div className="space-y-4">
                {t.about.jobs.map((job, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center justify-between gap-6 hover:shadow-md transition-all">
                    <div className="text-start space-y-1">
                      <h4 className="font-bold text-slate-900 text-sm md:text-base">{job.company}</h4>
                      <p className="text-xs text-slate-500 font-semibold">{job.role}</p>
                    </div>
                    <div className="text-end shrink-0">
                      <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        {job.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- Expertise & Pill Design Section (IMG_0080.jpeg "كذا أقدر أساعدك") --- */}
      <section id="expertise" className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-100">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            {t.expertise.title}
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            {t.expertise.subtitle}
          </p>
        </div>

        <div className="space-y-12">

          {/* Category 1: Orange Theme */}
          <div className="space-y-6 text-start">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center md:text-start">
              {t.expertise.cat1}
            </h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {t.expertise.skills1.map((skill, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-100 rounded-full px-5 py-3 flex items-center gap-3 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                >
                  <span className="font-bold text-sm md:text-base text-slate-800">{skill.title}</span>
                  <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs shadow-inner">
                    <Check size={12} strokeWidth={3} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category 2: Blue Theme */}
          <div className="space-y-6 text-start">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center md:text-start">
              {t.expertise.cat2}
            </h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {t.expertise.skills2.map((skill, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-100 rounded-full px-5 py-3 flex items-center gap-3 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                >
                  <span className="font-bold text-sm md:text-base text-slate-800">{skill.title}</span>
                  <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs shadow-inner">
                    <Check size={12} strokeWidth={3} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category 3: Green Theme */}
          <div className="space-y-6 text-start">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center md:text-start">
              {t.expertise.cat3}
            </h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {t.expertise.skills3.map((skill, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-100 rounded-full px-5 py-3 flex items-center gap-3 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                >
                  <span className="font-bold text-sm md:text-base text-slate-800">{skill.title}</span>
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs shadow-inner">
                    <Check size={12} strokeWidth={3} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- Testimonials Carousel/Grid Section (IMG_0081.jpeg "كلمات صادقة من عملائي") --- */}
      <section id="testimonials" className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-100 bg-white/20">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-100 rounded-full">
            <div className="flex items-center gap-0.5 text-amber-500 text-xs">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star}>★</span>
              ))}
            </div>
            <span className="text-[10px] font-bold text-amber-800">{t.testimonials.rating_text}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            {t.testimonials.title}
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* 3x2 Grid layout (matching IMG_0081.jpeg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.testimonials.list.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col justify-between space-y-8 hover:shadow-md transition-all"
            >
              {/* Quote Mark Icon */}
              <div className="text-slate-300 text-5xl font-serif select-none leading-none">“</div>

              {/* Quote Paragraph */}
              <p className="text-slate-600 text-sm md:text-base leading-relaxed text-start font-medium">
                {item.quote}
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-start gap-3 pt-6 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                  <UserCircle size={28} className="text-slate-400" />
                </div>
                <div className="text-start">
                  <h4 className="font-bold text-slate-900 text-sm">{item.author}</h4>
                  <p className="text-xs text-slate-400 font-semibold">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Footer & Quick Links Section --- */}
      <footer className="py-12 px-6 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-start">
            <h4 className="text-lg font-black text-slate-900">{t.hero.fullname}</h4>
            <p className="text-xs text-slate-500 font-bold">{t.hero.badge}</p>
          </div>
          <div className="flex gap-4">
            <a href="https://sa.linkedin.com/in/falsanea" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors text-slate-600">
              <Linkedin size={18} />
            </a>
            <a href="mailto:falsanea@aol.com" className="p-3 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors text-slate-600">
              <Mail size={18} />
            </a>
          </div>
          <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} {t.hero.fullname}
          </div>
        </div>
      </footer>

      {/* --- High Fidelity Resume Modal with Comprehensive Multilingual Support --- */}
      <AnimatePresence>
        {isResumeOpen && (
          <div className="fixed inset-0 z-[300] overflow-y-auto bg-slate-900/60 backdrop-blur-md flex items-start justify-center p-4 md:p-8">

            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col no-print"
            >

              {/* Header Bar */}
              <div className="p-6 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
                <div className="text-right">
                  <h3 className="text-lg font-black text-slate-900 uppercase tracking-wide">
                    {t.resume_modal.title}
                  </h3>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">
                    {t.hero.badge}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => window.print()}
                    className="p-3 bg-white text-slate-700 rounded-full hover:bg-slate-50 border border-slate-100 transition-all flex items-center justify-center cursor-pointer shadow-sm"
                    title={t.resume_modal.print}
                  >
                    <Printer size={16} />
                  </button>
                  <button
                    onClick={() => setIsResumeOpen(false)}
                    className="p-3 bg-white text-slate-700 rounded-full hover:bg-slate-50 border border-slate-100 transition-all flex items-center justify-center cursor-pointer shadow-sm"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Document Page Canvas */}
              <div className="p-8 md:p-12 overflow-y-auto max-h-[75vh] bg-slate-100/50">
                <div
                  id="printable-resume"
                  className="bg-white rounded-2xl border border-slate-200/60 p-8 md:p-12 shadow-xl max-w-4xl mx-auto space-y-10 text-slate-900 text-start leading-relaxed"
                >

                  {/* CV Personal Header */}
                  <div className="border-b border-slate-200 pb-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-6 text-center md:text-start">
                    <div className="space-y-2">
                      <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-none">
                        {t.hero.fullname}
                      </h1>
                      <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">
                        {t.hero.badge}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-600">
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <Mail size={14} className="text-slate-400" />
                        <span>falsanea@aol.com</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <Phone size={14} className="text-slate-400" />
                        <span>+966 50 157 7144</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <Linkedin size={14} className="text-slate-400" />
                        <span>linkedin.com/in/falsanea</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <MapPin size={14} className="text-slate-400" />
                        <span>جدة، المملكة العربية السعودية</span>
                      </div>
                    </div>
                  </div>

                  {/* Profile Summary */}
                  <div className="space-y-3">
                    <h2 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2 flex items-center justify-start gap-2">
                      <UserCircle size={16} className="text-slate-400" />
                      <span>{t.resume_modal.profile_title}</span>
                    </h2>
                    <p className="text-xs md:text-sm text-slate-600 font-medium">
                      {t.resume_modal.profile_desc}
                    </p>
                  </div>

                  {/* Core Competencies */}
                  <div className="space-y-3">
                    <h2 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2 flex items-center justify-start gap-2">
                      <Target size={16} className="text-slate-400" />
                      <span>{t.resume_modal.competencies_title}</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {t.resume_modal.competencies_list.map((skill, i) => (
                        <div key={i} className="bg-slate-50 rounded-xl p-3 border border-slate-100/80 flex items-center justify-start gap-2 text-xs font-bold text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="space-y-6">
                    <h2 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2 flex items-center justify-start gap-2">
                      <Briefcase size={16} className="text-slate-400" />
                      <span>{t.resume_modal.experience_title}</span>
                    </h2>
                    <div className="space-y-6">
                      {t.resume_modal.jobs.map((job, idx) => (
                        <div key={idx} className="space-y-3">
                          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start font-bold gap-2">
                            <div className="text-center sm:text-start">
                              <h3 className="text-sm font-black text-slate-900">{job.company}</h3>
                              <p className="text-xs text-slate-500 font-semibold">{job.role}</p>
                            </div>
                            <div className="text-center sm:text-end text-[10px] text-slate-400 font-bold space-y-1">
                              <p>{job.period}</p>
                              <p>{job.location}</p>
                            </div>
                          </div>
                          <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 ps-4">
                            {job.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="font-medium">{bullet}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Projects & Training */}
                  <div className="space-y-3">
                    <h2 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2 flex items-center justify-start gap-2">
                      <Award size={16} className="text-slate-400" />
                      <span>{t.resume_modal.projects_title}</span>
                    </h2>
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start font-bold gap-2">
                        <div className="text-center sm:text-start">
                          <h3 className="text-sm font-black text-slate-900">{t.resume_modal.project_sub}</h3>
                        </div>
                        <div className="text-center sm:text-end text-[10px] text-slate-400 font-bold">
                          <p>{t.resume_modal.project_period}</p>
                        </div>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 ps-4">
                        {t.resume_modal.project_bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="font-medium">{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="space-y-4">
                    <h2 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2 flex items-center justify-start gap-2">
                      <GraduationCap size={16} className="text-slate-400" />
                      <span>{t.resume_modal.education_title}</span>
                    </h2>
                    <div className="space-y-4">
                      {t.resume_modal.edu_items.map((edu, i) => (
                        <div key={i} className="flex justify-between items-center gap-4 border-b border-dashed border-slate-100 pb-3">
                          <div className="text-start">
                            <h4 className="text-xs font-black text-slate-800">{edu.title}</h4>
                            <p className="text-[10px] text-slate-400 font-bold mt-0.5">{edu.institution}</p>
                          </div>
                          {edu.period && (
                            <span className="text-[10px] text-slate-400 font-bold">{edu.period}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Stack */}
                  <div className="space-y-4">
                    <h2 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2 flex items-center justify-start gap-2">
                      <Database size={16} className="text-slate-400" />
                      <span>{t.resume_modal.tech_skills_title}</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {t.resume_modal.tech_cols.map((col, i) => (
                        <div key={i} className="space-y-1">
                          <h4 className="text-xs font-black text-slate-800">{col.title}</h4>
                          <p className="text-[10px] text-slate-500 font-medium leading-relaxed">{col.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="space-y-3">
                    <h2 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2 flex items-center justify-start gap-2">
                      <Globe size={16} className="text-slate-400" />
                      <span>{t.resume_modal.languages_title}</span>
                    </h2>
                    <div className="flex gap-6 justify-start text-xs font-bold text-slate-700">
                      {t.resume_modal.languages_list.map((langItem, i) => (
                        <span key={i}>{langItem}</span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Action Triggering Footer */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-4 justify-between items-center text-slate-700">
                <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5 uppercase tracking-wider">
                  <CheckCircle size={14} className="text-emerald-500" />
                  {t.hero.fullname} - Official CV Profile
                </span>
                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => window.print()}
                    className="flex-1 sm:flex-none px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Printer size={14} />
                    {t.resume_modal.print}
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="flex-1 sm:flex-none px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-xs rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download size={14} />
                    {t.resume_modal.download}
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default App;
