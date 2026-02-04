
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, Briefcase, GraduationCap, UserCircle, ShieldCheck, Download, Eye, 
  Linkedin, ThumbsUp, MessageSquare, Plus, ArrowUpRight, 
  Award, CheckCircle, Printer, X, FileText, MapPin, 
  Mail, Phone, Database, Target, Search, Sun, Moon, Monitor, ArrowUpCircle,
  Globe, Fingerprint, Workflow, Landmark, LayoutGrid, Users, Cpu
} from 'lucide-react';

// --- البيانات والنصوص (Translations) ---
const translations = {
  en: {
    nav: { home: "Home", education: "Education", skills: "Skills", certs: "Certifications", resume: "Resume", linkedin: "LinkedIn", logo: "Faisal Alsanea" },
    hero: {
      name: "Faisal Alsanea",
      badge: "Verified Talent Specialist",
      title_part1: "HR Specialist &",
      title_part2: "Operations Expert",
      desc: "Results-oriented HR professional with a focus on full-cycle recruitment and operations. Optimized hiring efficiency by 25% with 100% compliance in Saudi Labor systems.",
      btn_view: "View Full Resume",
      btn_download: "Download PDF",
    },
    achievements: {
      title: "Performance Dashboard",
      efficiency: "Hiring Lifecycle",
      records: "Digital Assets",
      compliance: "Legal Adherence",
      logistics: "Executive Support",
      val_efficiency: "25%",
      val_records: "+500",
      val_compliance: "100%",
      val_logistics: "+150",
    },
    skills: {
      title: "Skill Sets",
      desc: "A blend of local government portal mastery and global HR methodologies.",
      talent: { title: "Talent Sourcing", sub: "RECRUITMENT" },
      ops: { title: "Executive Ops", sub: "OPERATIONS" },
      tech: { title: "FlowCV / ATS", sub: "HR TECH" },
      mudad: { title: "Mudad (مدد)", sub: "PAYROLL" },
      gosi: { title: "GOSI (التأمينات)", sub: "GOV SYSTEMS" },
      qiwa: { title: "Qiwa (قوى)", sub: "GOV SYSTEMS" }
    },
    education: {
      title: "Academic Foundation",
      uni: "King Abdulaziz University",
      degree: "Bachelor of English Language and Literature",
      period: "March 2017 – January 2022",
      highlights: [
        "Professional Communication & Technical Report Writing.",
        "Analytical Thinking & Linguistic Analysis.",
        "Bilingual Proficiency in Multicultural Environments."
      ]
    },
    certs: {
      title: "Licenses & Accreditations",
      verify: "Verify Certificate Online",
      freelance: "Freelance Practitioner Certificate",
      profession: "Talent Acquisition Specialist",
      issuer: "Ministry of Human Resources & Social Development",
      id: "FL-618518239",
      oxford: "Talent Acquisition Certified",
      oxford_issuer: "Oxford International Study Centre | UK",
      cambridge: "Essentials of International HRM",
      cambridge_issuer: "Cambridge International Qualifications (CIQ) | UK"
    },
    activity: {
      title: "Professional Connectivity",
      desc: "Join my network for daily HR and recruitment tips regarding (Qiwa, GOSI, Mudad)."
    },
    footer: { rights: "Faisal Alsanea. All rights reserved." }
  },
  ar: {
    nav: { home: "الرئيسية", education: "التعليم", skills: "المهارات", certs: "الشهادات", resume: "السيرة الذاتية", linkedin: "لينكد إن", logo: "فيصل السني" },
    hero: {
      name: "فيصل السني",
      badge: "ممارس معتمد في استقطاب المواهب",
      title_part1: "أخصائي موارد بشرية و",
      title_part2: "خبير عمليات",
      desc: "أخصائي موارد بشرية متميز بخبرة في الاستقطاب والعمليات. ساهمت في رفع كفاءة التوظيف بنسبة 25% مع الالتزام الكامل بأنظمة العمل السعودي (قوى، التأمينات، مدد).",
      btn_view: "عرض السيرة الذاتية",
      btn_download: "تحميل PDF",
    },
    achievements: {
      title: "لوحة مؤشرات الأداء",
      efficiency: "منطق التوظيف",
      records: "أنظمة السجلات",
      compliance: "الامتثال الحكومي",
      logistics: "الدعم التنفيذي",
      val_efficiency: "25%",
      val_records: "+500",
      val_compliance: "100%",
      val_logistics: "+150",
    },
    skills: {
      title: "مجموعات المهارات",
      desc: "مزيج من إتقان البوابات الحكومية المحلية ومنهجيات الموارد البشرية العالمية.",
      talent: { title: "Talent Sourcing", sub: "RECRUITMENT" },
      ops: { title: "Executive Ops", sub: "OPERATIONS" },
      tech: { title: "FlowCV / ATS", sub: "HR TECH" },
      mudad: { title: "Mudad (مدد)", sub: "PAYROLL" },
      gosi: { title: "GOSI (التأمينات)", sub: "GOV SYSTEMS" },
      qiwa: { title: "Qiwa (قوى)", sub: "GOV SYSTEMS" }
    },
    education: {
      title: "التعليم الجامعي",
      uni: "جامعة الملك عبد العزيز",
      degree: "بكالوريوس اللغة الإنجليزية وآدابها",
      period: "مارس 2017 – يناير 2022",
      highlights: [
        "التواصل المهني وصياغة التقارير الفنية.",
        "التفكير التحليلي والتحليل اللغوي.",
        "إتقان اللغتين في بيئات العمل متعددة الثقافات."
      ]
    },
    certs: {
      title: "التراخيص والاعتمادات",
      verify: "تحقق من الشهادة أونلاين",
      freelance: "وثيقة ممارس عمل حر",
      profession: "استقطاب المواهب الوظيفية",
      issuer: "وزارة الموارد البشرية والتنمية الاجتماعية",
      id: "FL-618518239",
      oxford: "شهادة معتمدة في استقطاب المواهب",
      oxford_issuer: "مركز أكسفورد الدولي للدراسات | بريطانيا",
      cambridge: "أساسيات إدارة الموارد البشرية الدولية",
      cambridge_issuer: "كامبريدج للمؤهلات الدولية (CIQ) | بريطانيا"
    },
    activity: {
      title: "تواصل مهني عبر LinkedIn",
      desc: "انضم إلى شبكتي المهنية لمتابعة آخر تحديثات أنظمة الموارد البشرية (قوى، التأمينات، مدد)."
    },
    footer: { rights: "فيصل السني. جميع الحقوق محفوظة." }
  }
};

// --- تعريف الثيمات ---
type ThemeType = 'midnight' | 'solarized' | 'light';

const themes = {
  midnight: { bg: 'bg-[#05070A]', text: 'text-white', subText: 'text-slate-400', card: 'bg-white/5', border: 'border-white/10', nav: 'bg-black/60', accent: 'emerald-500' },
  solarized: { bg: 'bg-[#002b36]', text: 'text-[#93a1a1]', subText: 'text-[#839496]', card: 'bg-[#073642]', border: 'border-[#586e75]', nav: 'bg-[#002b36]/80', accent: 'cyan-500' },
  light: { bg: 'bg-slate-50', text: 'text-slate-900', subText: 'text-slate-500', card: 'bg-white', border: 'border-slate-200', nav: 'bg-white/70', accent: 'emerald-600' }
};

const App: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('midnight');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const t = translations[lang];
  const themeStyles = themes[currentTheme];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.className = currentTheme === 'light' ? '' : 'dark';
  }, [lang, currentTheme]);

  const toggleTheme = () => {
    const keys: ThemeType[] = ['midnight', 'solarized', 'light'];
    setCurrentTheme(keys[(keys.indexOf(currentTheme) + 1) % keys.length]);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${themeStyles.bg} ${themeStyles.text} transition-all duration-700 font-sans selection:bg-emerald-500/30 overflow-x-hidden`}>
      <div className="fixed inset-0 bg-ops-pattern pointer-events-none -z-0 opacity-[0.03]" />

      {/* --- Header (Desktop) --- */}
      <nav className="sticky top-0 z-[100] w-full glass-nav py-4 px-6 border-b border-white/5 md:block hidden">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 bg-${themeStyles.accent} rounded-xl flex items-center justify-center text-white font-black shadow-lg`}>F</div>
            <span className="font-black text-xl tracking-tighter uppercase">{t.nav.logo}</span>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => scrollToSection('top')} className="text-sm font-bold opacity-60 hover:opacity-100 transition-all">{t.nav.home}</button>
            <button onClick={() => scrollToSection('skills')} className="text-sm font-bold opacity-60 hover:opacity-100 transition-all">{t.nav.skills}</button>
            <button onClick={() => scrollToSection('education')} className="text-sm font-bold opacity-60 hover:opacity-100 transition-all">{t.nav.education}</button>
            <button onClick={() => scrollToSection('certs')} className="text-sm font-bold opacity-60 hover:opacity-100 transition-all">{t.nav.certs}</button>
            <div className="flex items-center gap-3 ml-4">
              <button onClick={toggleTheme} className="p-3 bg-white/5 dark:bg-slate-800/50 rounded-2xl border border-white/10 transition-all">
                {currentTheme === 'light' ? <Sun size={20} className="text-orange-500" /> : currentTheme === 'midnight' ? <Moon size={20} className="text-blue-400" /> : <Monitor size={20} className="text-emerald-400" />}
              </button>
              <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} className={`px-5 py-2.5 bg-emerald-600/10 text-emerald-500 rounded-2xl font-black text-xs border border-emerald-500/20`}>
                {lang === 'en' ? 'العربية' : 'English'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Mobile Top Bar --- */}
      <div className="md:hidden flex justify-between items-center p-6 glass-nav sticky top-0 z-[100]">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-black`}>F</div>
          <span className="font-black text-sm uppercase tracking-tighter">{t.nav.logo}</span>
        </div>
        <div className="flex gap-2">
          <button onClick={toggleTheme} className="p-2 bg-white/5 rounded-xl border border-white/10"><Moon size={18}/></button>
          <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} className="p-2 px-3 bg-emerald-600/10 text-emerald-500 rounded-xl font-bold text-xs">
            {lang === 'en' ? 'AR' : 'EN'}
          </button>
        </div>
      </div>

      {/* --- Hero Section --- */}
      <section id="hero" className="relative min-h-[85vh] flex items-center px-6 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: lang === 'en' ? -40 : 40 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-emerald-600/10 border border-emerald-600/20 rounded-full">
              <ShieldCheck size={18} className="text-emerald-500" />
              <span className="text-xs font-black uppercase tracking-widest text-emerald-500">{t.hero.badge}</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tighter">
              {t.hero.title_part1} <br /><span className="text-emerald-500">{t.hero.title_part2}</span>
            </h1>
            <p className="text-lg md:text-2xl opacity-60 mb-12 max-w-2xl leading-relaxed">{t.hero.desc}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => setIsResumeOpen(true)} className="px-10 py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-[2rem] font-black flex items-center justify-center gap-3 shadow-2xl transition-all text-lg"><Eye size={24} /> {t.hero.btn_view}</button>
              <button onClick={() => setIsResumeOpen(true)} className="px-10 py-5 bg-white/5 border border-white/10 rounded-[2rem] font-black flex items-center justify-center gap-3 transition-all text-lg"><Download size={24} /> {t.hero.btn_download}</button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative flex justify-center">
            <div className="w-full aspect-square max-w-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-[4rem] border-4 border-white/10 shadow-2xl flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
              <UserCircle size={220} className="text-emerald-500/30 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-10 left-10 right-10 p-6 bg-slate-900/90 backdrop-blur-xl rounded-[2rem] border border-emerald-500/20 text-center">
                <h4 className="font-black text-xl text-white">{t.hero.name}</h4>
                <p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest mt-1">HR & Ops Expert</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Achievements Bento --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-5xl font-black mb-16 text-center tracking-tighter">{t.achievements.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: t.achievements.logistics, val: t.achievements.val_logistics, icon: <Database className="text-amber-500" /> },
            { label: t.achievements.compliance, val: t.achievements.val_compliance, icon: <ShieldCheck className="text-purple-500" /> },
            { label: t.achievements.records, val: t.achievements.val_records, icon: <FileText className="text-cyan-500" /> },
            { label: t.achievements.efficiency, val: t.achievements.val_efficiency, icon: <Target className="text-emerald-500" /> }
          ].map((kpi, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-10 bg-white/5 dark:bg-slate-900 border border-white/10 rounded-[40px] hover:border-emerald-500/50 transition-all text-center md:text-left">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 mx-auto md:mx-0">{kpi.icon}</div>
              <div className="text-6xl font-black mb-2 tracking-tighter">{kpi.val}</div>
              <h4 className="text-lg font-bold opacity-60 leading-tight">{kpi.label}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Skills Section --- */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">{t.skills.title}</h2>
          <p className="opacity-60 text-lg md:text-2xl mb-16 max-w-2xl mx-auto">{t.skills.desc}</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { title: t.skills.talent.title, sub: t.skills.talent.sub, icon: <Search className="text-emerald-500" /> },
            { title: t.skills.ops.title, sub: t.skills.ops.sub, icon: <Database className="text-emerald-500" /> },
            { title: t.skills.tech.title, sub: t.skills.tech.sub, icon: <Cpu className="text-emerald-500" /> },
            { title: t.skills.mudad.title, sub: t.skills.mudad.sub, icon: <Fingerprint className="text-emerald-500" /> },
            { title: t.skills.gosi.title, sub: t.skills.gosi.sub, icon: <ShieldCheck className="text-emerald-500" /> },
            { title: t.skills.qiwa.title, sub: t.skills.qiwa.sub, icon: <Globe className="text-emerald-500" /> },
          ].map((skill, i) => (
            <motion.div key={i} whileHover={{ y: -8, scale: 1.02 }} className="p-8 bg-white/5 border border-white/10 rounded-[2rem] flex flex-col items-center justify-center gap-4 group transition-all">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                {skill.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-black text-sm">{skill.title}</h4>
                <p className="text-[10px] font-black opacity-40 tracking-widest uppercase">{skill.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Education Section --- */}
      <section id="education" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-12">
            <GraduationCap size={48} className="text-emerald-500" />
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">{t.education.title}</h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-right">
              <div className="w-24 h-24 bg-emerald-500/10 rounded-3xl flex items-center justify-center text-emerald-500 shrink-0"><GraduationCap size={48} /></div>
              <div>
                <h3 className="text-3xl font-black mb-2">{t.education.uni}</h3>
                <p className="text-2xl font-bold text-emerald-500 mb-2">{t.education.degree}</p>
                <p className="opacity-50 font-black text-sm uppercase tracking-widest mb-8">{t.education.period}</p>
                <ul className="space-y-4 inline-block text-right">
                  {t.education.highlights.map((h: string, i: number) => (
                    <li key={i} className="flex items-center gap-4 font-medium opacity-80 justify-end">
                      {h} <CheckCircle size={20} className="text-emerald-500 shrink-0" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Certifications Section --- */}
      <section id="certs" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-12">
            <Award size={48} className="text-emerald-500" />
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">{t.certs.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -10 }} className="p-10 bg-white/5 border border-emerald-500/30 rounded-[3rem] text-center flex flex-col items-center">
              <ShieldCheck size={48} className="text-emerald-500 mb-6" />
              <h4 className="text-xl font-black mb-2">{t.certs.freelance}</h4>
              <p className="text-emerald-500 font-bold mb-4 text-sm">{t.certs.profession}</p>
              <p className="text-[10px] opacity-40 mb-6 uppercase font-black">{t.certs.issuer} <br/> ID: {t.certs.id}</p>
              <a href={`https://freelance.sa/verify/${t.certs.id}`} target="_blank" rel="noopener noreferrer" className="bg-emerald-600 px-6 py-3 rounded-2xl font-black text-xs text-white shadow-lg w-full">
                {t.certs.verify}
              </a>
            </motion.div>
            
            <motion.div whileHover={{ y: -10 }} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] text-center flex flex-col items-center">
              <Landmark size={48} className="text-blue-400 mb-6" />
              <h4 className="text-xl font-black mb-2">{t.certs.oxford}</h4>
              <p className="text-blue-400 font-bold mb-4 text-sm">{t.certs.oxford_issuer}</p>
              <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] font-black uppercase opacity-40">
                <CheckCircle size={14} /> International Accreditation
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] text-center flex flex-col items-center">
              <Award size={48} className="text-amber-500 mb-6" />
              <h4 className="text-xl font-black mb-2">{t.certs.cambridge}</h4>
              <p className="text-amber-500 font-bold mb-4 text-sm">{t.certs.cambridge_issuer}</p>
              <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] font-black uppercase opacity-40">
                <CheckCircle size={14} /> CIQ UK Verified
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- LinkedIn Section --- */}
      <section id="linkedin" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="p-12 bg-white/5 border border-blue-500/30 rounded-[4rem] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/5 blur-3xl -z-10" />
          <Linkedin size={64} className="mx-auto text-[#0077b5] mb-8" />
          <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">{t.activity.title}</h3>
          <p className="opacity-60 text-lg md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">{t.activity.desc}</p>
          <a href="https://sa.linkedin.com/in/falsanea" target="_blank" rel="noopener noreferrer" className="bg-[#0077b5] px-12 py-6 rounded-[2.5rem] font-black text-white text-xl inline-flex items-center gap-4 hover:scale-105 transition-all shadow-2xl shadow-blue-500/30">
            <Plus size={24} /> Connect on LinkedIn
          </a>
        </div>
      </section>

      {/* --- Professional Footer --- */}
      <footer className="bg-slate-950 pt-24 pb-32 border-t border-white/5 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-4xl md:text-6xl font-black text-emerald-500 mb-6 tracking-tighter uppercase">{t.hero.name}</h4>
          <div className="flex justify-center gap-8 mb-12">
            <a href="mailto:falsanea@aol.com" className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-white hover:text-emerald-500 hover:bg-emerald-500/10 transition-all border border-white/10"><Mail size={24}/></a>
            <a href="https://linkedin.com/in/falsanea" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-white hover:text-[#0077b5] hover:bg-[#0077b5]/10 transition-all border border-white/10"><Linkedin size={24}/></a>
          </div>
          <p className="opacity-40 text-sm font-bold uppercase tracking-[0.3em] mb-12">{t.footer.rights}</p>
          <button onClick={() => scrollToSection('top')} className="p-5 bg-emerald-600 rounded-full text-white shadow-2xl shadow-emerald-600/30 hover:scale-110 transition-all">
            <ArrowUpCircle size={32}/>
          </button>
        </div>
      </footer>

      {/* --- Mobile Nav (Glassmorphic) --- */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[95%] max-w-lg z-[150] md:hidden">
        <div className={`${themeStyles.nav} backdrop-blur-3xl border border-white/20 rounded-[3rem] p-3 flex justify-around items-center shadow-2xl`}>
          <button onClick={() => scrollToSection('top')} className="p-3 text-slate-400 hover:text-emerald-500 transition-colors">
            <Home size={22}/>
          </button>
          <button onClick={() => scrollToSection('skills')} className="p-3 text-slate-400 hover:text-emerald-500 transition-colors">
            <LayoutGrid size={22}/>
          </button>
          <button onClick={() => scrollToSection('education')} className="p-3 text-slate-400 hover:text-emerald-500 transition-colors">
            <GraduationCap size={22}/>
          </button>
          <a href="https://sa.linkedin.com/in/falsanea" target="_blank" rel="noopener noreferrer" className="p-3 text-slate-400 hover:text-[#0077b5] transition-colors">
            <Linkedin size={22}/>
          </a>
          <button onClick={() => setIsResumeOpen(true)} className="p-3 bg-emerald-600 text-white rounded-full shadow-lg">
            <FileText size={22}/>
          </button>
        </div>
      </nav>

      {/* --- Resume Modal --- */}
      <AnimatePresence>
        {isResumeOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setIsResumeOpen(false)} className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
            <motion.div initial={{opacity:0, scale:0.95, y: 20}} animate={{opacity:1, scale:1, y: 0}} exit={{opacity:0, scale:0.95, y: 20}} className="relative w-full max-w-5xl bg-slate-100 rounded-[1.5rem] shadow-2xl overflow-hidden border border-white/10">
              <div className="flex items-center justify-between p-6 bg-slate-900 border-b border-white/10 text-white">
                <div className="flex items-center gap-4">
                  <FileText className="text-emerald-500" size={28} />
                  <div>
                    <h4 className="font-black text-lg uppercase tracking-tight">FAISAL ALSANEA - RESUME</h4>
                  </div>
                </div>
                <button onClick={()=>setIsResumeOpen(false)} className="p-3 bg-red-500/20 text-red-400 rounded-xl hover:bg-red-500 hover:text-white transition-all">
                  <X size={24}/>
                </button>
              </div>
              
              <div id="resume-document" className="h-[75vh] overflow-y-auto bg-white p-6 md:p-12 text-slate-900 no-scrollbar font-serif leading-relaxed">
                <div className="max-w-4xl mx-auto space-y-6 text-left">
                  {/* Header */}
                  <div className="text-center space-y-2 pb-4 border-b border-slate-300">
                    <h1 className="text-4xl font-serif font-bold tracking-widest uppercase">FAISAL ALSANEA</h1>
                    <p className="text-lg italic text-slate-700">HR Specialist | Talent Acquisition & Operations Expert</p>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-600 font-sans">
                      <div className="flex items-center gap-2"><MapPin size={14}/> Jeddah, Saudi Arabia</div>
                      <div className="flex items-center gap-2"><Phone size={14}/> +966 596995687</div>
                      <div className="flex items-center gap-2"><Mail size={14}/> falsanea@aol.com</div>
                      <div className="flex items-center gap-2"><Linkedin size={14}/> linkedin.com/in/falsanea</div>
                    </div>
                  </div>

                  {/* Profile Summary */}
                  <section>
                    <h2 className="text-sm font-bold uppercase tracking-widest border-b border-slate-900 mb-3 pb-1">PROFILE SUMMARY</h2>
                    <p className="text-sm">
                      Results-oriented HR Specialist with a proven track record in <b>Full-Cycle Recruitment</b> and <b>HR Operations</b>. 
                      Improved recruitment efficiency by <b>25%</b> through structured evaluation and systematic <b>Record-Keeping</b>. 
                      Expert in ensuring <b>100% compliance</b> with <b>Saudi Labor Law, GOSI, Muqeem, Qiwa, and Mudad</b>. 
                      Leveraging a <b>Bachelor's Degree in English</b> for superior professional communication and stakeholder management.
                    </p>
                  </section>

                  {/* Core HR Competencies */}
                  <section>
                    <h2 className="text-sm font-bold uppercase tracking-widest border-b border-slate-900 mb-3 pb-1">CORE HR COMPETENCIES</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-sm">
                      <p><b>Talent Management:</b> Full-Cycle Recruitment, Strategic Sourcing, and Headhunting.</p>
                      <p><b>Compliance:</b> Expert in Saudi Labor Law and policy implementation.</p>
                      <p><b>HR Operations:</b> Onboarding & Offboarding, Employee Relations, and Payroll Coordination.</p>
                      <p><b>Development:</b> Performance Management, Talent Screening, and Employee Development Programs.</p>
                    </div>
                  </section>

                  {/* Professional Work Experience */}
                  <section>
                    <h2 className="text-sm font-bold uppercase tracking-widest border-b border-slate-900 mb-4 pb-1">PROFESSIONAL WORK EXPERIENCE</h2>
                    
                    {/* Kaki Group */}
                    <div className="mb-6">
                      <div className="flex justify-between items-start font-bold">
                        <div>
                          <h3 className="text-base uppercase tracking-tight">Kaki Group</h3>
                          <p className="italic text-slate-700">HR Specialist</p>
                        </div>
                        <div className="text-right text-sm">
                          <p>April 2025 – Present</p>
                          <p>Jeddah, Saudi Arabia</p>
                        </div>
                      </div>
                      <ul className="list-disc list-inside mt-2 text-sm space-y-1 pl-4">
                        <li><b>Recruitment Optimization:</b> Enhanced recruitment process efficiency by <b>25%</b> through structured Candidate Evaluation frameworks.</li>
                        <li><b>Talent Sourcing:</b> Oversaw the Full-Cycle Recruitment process, conducting <b>50+ screening calls</b> monthly to assess candidate qualifications.</li>
                        <li><b>Compliance:</b> Directed <b>100% adherence</b> to Saudi Labor Law, managing internal audits for all employee records.</li>
                      </ul>
                    </div>

                    {/* Alfakherat Company */}
                    <div>
                      <div className="flex justify-between items-start font-bold">
                        <div>
                          <h3 className="text-base uppercase tracking-tight">Alfakherat Company</h3>
                          <p className="italic text-slate-700">Administrative & HR Assistant</p>
                        </div>
                        <div className="text-right text-sm">
                          <p>February 2023 – June 2023</p>
                          <p>Jeddah, Saudi Arabia</p>
                        </div>
                      </div>
                      <ul className="list-disc list-inside mt-2 text-sm space-y-1 pl-4">
                        <li><b>System Optimization:</b> Spearheaded the creation of secure filing systems for <b>500+ records</b>, improving retrieval efficiency by <b>40%</b>.</li>
                        <li><b>Logistics Management:</b> Administered complex travel coordination and calendar scheduling for <b>5 senior executives</b>, reducing booking errors to zero.</li>
                        <li><b>Documentation:</b> Facilitated HR support by drafting <b>100+ official documents</b>, including offer letters and internal memos.</li>
                      </ul>
                    </div>
                  </section>

                  {/* Projects & Academic Training */}
                  <section>
                    <div className="flex justify-between items-start font-bold mb-3 border-b border-slate-900 pb-1 uppercase tracking-widest">
                       <h2 className="text-sm">PROJECTS & ACADEMIC TRAINING</h2>
                       <div className="text-right text-sm">
                          <p>Feb 2020 – Sept 2021</p>
                       </div>
                    </div>
                    <div className="mb-2">
                      <h3 className="text-sm font-bold italic">King Abdulaziz University | Research Methods & Practical Training</h3>
                      <ul className="list-disc list-inside mt-2 text-sm space-y-1 pl-4">
                        <li><b>Practical Training:</b> Completed an intensive <b>40-hour</b> training project focused on modern educational methodologies and <b>Training of Trainers (TOT)</b>.</li>
                        <li><b>Persuasion & Communication:</b> Mastered the 4 steps of persuasion (Listening, Reading Ideas, Information Simplification) to enhance professional stakeholder engagement.</li>
                        <li><b>Resilience:</b> Successfully managed research deliverables during the COVID-19 pandemic, demonstrating strong adaptability and remote collaboration skills.</li>
                        <li><b>Conflict Resolution:</b> Developed a rational approach to handling difficult situations and stress management, ensuring 100% project completion.</li>
                      </ul>
                    </div>
                  </section>

                  {/* Education & Certifications */}
                  <section>
                    <h2 className="text-sm font-bold uppercase tracking-widest border-b border-slate-900 mb-4 pb-1">EDUCATION & CERTIFICATIONS</h2>
                    <div className="space-y-4 text-sm">
                      <div className="flex justify-between font-bold italic">
                        <p>King Abdulaziz University | Jeddah, Saudi Arabia <br/><span className="not-italic font-normal">Bachelor's Degree in English Language</span></p>
                        <p>January 2022</p>
                      </div>
                      <div className="font-bold italic">
                        <p>Oxford International Study Centre | United Kingdom <br/><span className="not-italic font-normal">Talent Acquisition Certified</span></p>
                      </div>
                      <div className="font-bold italic">
                        <p>Cambridge International Qualifications (CIQ) | United Kingdom <br/><span className="not-italic font-normal">Essentials of International Human Resources Management</span></p>
                      </div>
                    </div>
                  </section>

                  {/* Technical Skills */}
                  <section>
                    <h2 className="text-sm font-bold uppercase tracking-widest border-b border-slate-900 mb-3 pb-1">TECHNICAL SKILLS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                      <p><b>Governmental Portals:</b> GOSI, Muqeem, Qiwa, and Mudad platforms.</p>
                      <p><b>HR Software:</b> CRM Systems, ATS Platforms (like FlowCV), and HRIS.</p>
                      <p><b>Productivity:</b> Microsoft Office Suite (Excel, Word) and Google Workspace.</p>
                    </div>
                  </section>

                  {/* Languages */}
                  <section>
                    <h2 className="text-sm font-bold uppercase tracking-widest border-b border-slate-900 mb-3 pb-1">LANGUAGES</h2>
                    <div className="grid grid-cols-2 text-sm">
                      <p><b>Arabic:</b> Native speaker</p>
                      <p><b>English:</b> Highly proficient</p>
                    </div>
                  </section>
                </div>
              </div>

              <div className="p-6 bg-slate-900 flex flex-col sm:flex-row gap-4 justify-between items-center text-white text-center">
                <div className="flex items-center gap-3 text-emerald-400 font-bold text-xs uppercase tracking-widest mx-auto md:mx-0">
                  <CheckCircle size={20} /> Faisal Alsanea Official Portfolio
                </div>
                <div className="flex gap-4 w-full sm:w-auto">
                  <button onClick={() => window.print()} className="flex-1 sm:flex-none border border-white/20 px-8 py-4 rounded-xl font-bold text-xs hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    <Printer size={18}/> PRINT DOCUMENT
                  </button>
                  <button onClick={() => window.print()} className="flex-1 sm:flex-none bg-emerald-600 px-10 py-4 rounded-xl font-bold text-xs text-white shadow-xl hover:bg-emerald-700 transition-all flex items-center justify-center gap-2">
                    <Download size={18}/> {t.hero.btn_download}
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
