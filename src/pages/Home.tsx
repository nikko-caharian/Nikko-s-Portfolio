import { motion } from "motion/react";
import { 
  BarChart3, 
  ClipboardCheck, 
  PenTool, 
  Scale, 
  Cpu, 
  FolderOpen, 
  ArrowRight,
  Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-[5vw] pt-[calc(68px+4rem)] pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,#f5eddb_0%,transparent_70%)]" />
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative z-10 text-[0.78rem] font-medium tracking-[0.14em] uppercase text-gold mb-6"
        >
          Executive Virtual Assistant
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="relative z-10 font-display text-[clamp(2.6rem,6.5vw,5.2rem)] leading-[1.08] tracking-tight text-black max-w-[820px]"
        >
          Focus on your vision.<br />
          <em className="italic text-gold not-serif">I'll handle the rest.</em>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.9 }}
          className="relative z-10 mt-7 text-lg md:text-xl font-light text-warm-gray-600 max-w-[540px] leading-relaxed"
        >
          Nearly a decade at the highest levels of Philippine governance — now at your service. Precision, discretion, and momentum, built into every task.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.9 }}
          className="relative z-10 mt-10 flex flex-wrap justify-center gap-4"
        >
          <a href="#contact" className="inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-full text-[0.95rem] font-medium tracking-wide hover:bg-gold hover:scale-[1.02] transition-all duration-200">
            Work With Me <ArrowRight size={18} />
          </a>
          <a href="#capabilities" className="inline-flex items-center bg-transparent text-black border border-warm-gray-200 px-8 py-3.5 rounded-full text-[0.95rem] hover:border-gold hover:bg-gold-muted transition-all duration-200">
            See What I Do
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[0.72rem] tracking-[0.1em] uppercase text-warm-gray-400"
        >
          <span>Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-warm-gray-400 to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* Stats Bar */}
      <div className="bg-black text-white px-[5vw] py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { label: "English Proficiency", val: "C2" },
          { label: "Public Service Experience", val: "9 Years" },
          { label: "Remote-Ready", val: "100%" },
          { label: "Audience Managed", val: "4M+" }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            {...fadeIn}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="font-display text-4xl text-gold-light">{stat.val}</div>
            <div className="mt-1 text-[0.8rem] tracking-[0.06em] uppercase text-white/50">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Capabilities */}
      <section id="capabilities" className="bg-off-white py-28 px-[5vw]">
        <motion.div {...fadeIn} className="mb-12">
          <p className="text-[0.75rem] font-medium tracking-[0.14em] uppercase text-gold mb-3">Capabilities</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.1] tracking-tight text-black max-w-[680px]">
            Every function. One point of contact.
          </h2>
          <p className="mt-4 text-[1.05rem] font-light text-warm-gray-600 max-w-[540px] leading-relaxed">
            Institutional-grade support, built for the speed of modern business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Main Card */}
          <motion.div 
            {...fadeIn}
            className="md:col-span-8 group bg-white p-8 md:p-10 rounded-[24px] border border-warm-gray-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/5 transition-all duration-300"
          >
            <div className="w-11 h-11 bg-gold-muted rounded-lg flex items-center justify-center mb-5 text-xl">
              <FolderOpen size={24} className="text-gold" />
            </div>
            <h3 className="font-display text-2xl text-black tracking-tight mb-2.5">Executive Support</h3>
            <p className="text-[0.9rem] font-light text-warm-gray-600 leading-relaxed mb-6">
              From the halls of Malacañang to the Senate floor, I've managed the schedules, correspondence, and briefings of principals who operate where decisions carry real weight. Close-in staff work means anticipating needs before they're voiced, protecting a principal's time fiercely, and keeping sensitive schedules airtight. Your executive calendar doesn't just get managed — it gets guarded.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Calendar Management", "Stakeholder Liaison", "Briefing Decks", "Travel Coordination", "Inbox Zero Strategy"].map(tag => (
                <span key={tag} className="text-[0.72rem] font-medium tracking-wide px-3 py-1.5 rounded-full bg-warm-gray-100 text-warm-gray-800">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Analytics Card */}
          <motion.div 
            {...fadeIn}
            className="md:col-span-4 bg-black p-8 md:p-10 rounded-[24px] border border-black hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300 relative overflow-hidden"
          >
            <div className="relative z-10 w-11 h-11 bg-gold/20 rounded-lg flex items-center justify-center mb-5 text-xl">
              <BarChart3 size={24} className="text-gold-light" />
            </div>
            <h3 className="relative z-10 font-display text-2xl text-gold-light tracking-tight mb-2.5">Data Analytics</h3>
            <p className="relative z-10 text-[0.9rem] font-light text-white/55 leading-relaxed mb-6">
              Certified by Google. Proficient in SQL, Tableau, and Python basics. I turn raw data into decision-ready reports.
            </p>
            <div className="relative z-10 flex flex-wrap gap-2">
              {["SQL", "Tableau", "Google Sheets", "Dashboards"].map(tag => (
                <span key={tag} className="text-[0.72rem] font-medium tracking-wide px-3 py-1.5 rounded-full bg-white/10 text-white/70">
                  {tag}
                </span>
              ))}
            </div>
            <div className="absolute right-[-20px] bottom-[-20px] font-display text-[8rem] text-gold-light/10 select-none">
              +
            </div>
          </motion.div>

          {/* Systems Card */}
          <motion.div 
            {...fadeIn}
            className="md:col-span-6 bg-white p-8 rounded-[24px] border border-warm-gray-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/5 transition-all duration-300"
          >
            <div className="w-11 h-11 bg-gold-muted rounded-lg flex items-center justify-center mb-5 text-xl">
              <ClipboardCheck size={24} className="text-gold" />
            </div>
            <h3 className="font-display text-2xl text-black tracking-tight mb-2.5">Systems & Process Design</h3>
            <p className="text-[0.9rem] font-light text-warm-gray-600 leading-relaxed mb-6">
              I don't just follow systems — I build them. At the Presidential Action Center, I revamped workflows and modernized templates that streamlined the processing of 77,700 referrals, bringing the office to zero backlog. If a process is broken, I don't wait to be asked. I fix it.
            </p>
            <div className="flex flex-wrap gap-2">
              {["SOPs", "Process Mapping", "Digital Transformation"].map(tag => (
                <span key={tag} className="text-[0.72rem] font-medium tracking-wide px-3 py-1.5 rounded-full bg-warm-gray-100 text-warm-gray-800">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Content Card */}
          <motion.div 
            {...fadeIn}
            className="md:col-span-6 bg-white p-8 rounded-[24px] border border-warm-gray-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/5 transition-all duration-300"
          >
            <div className="w-11 h-11 bg-gold-muted rounded-lg flex items-center justify-center mb-5 text-xl">
              <PenTool size={24} className="text-gold" />
            </div>
            <h3 className="font-display text-2xl text-black tracking-tight mb-2.5">Communications & Content</h3>
            <p className="text-[0.9rem] font-light text-warm-gray-600 leading-relaxed mb-6">
              I've reviewed and packaged official speeches, talking points, and inter-agency correspondence for one of the Philippines' most visible public officials — Senator Christopher Go, whose platforms reach more than 4 million followers. Every word that leaves a principal's office reflects on them. I treat it that way.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Social Media Management", "Content Strategy", "Editorial Review"].map(tag => (
                <span key={tag} className="text-[0.72rem] font-medium tracking-wide px-3 py-1.5 rounded-full bg-warm-gray-100 text-warm-gray-800">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Smaller Cards */}
          {[
            { icon: <Scale size={24} className="text-gold" />, title: "Policy & Compliance Review", desc: "Legal sensibility honed at the Office of the President and sharpened by a Juris Doctor in progress at San Beda College Alabang School of Law. I've reviewed official documents, inter-agency correspondence, and legislative materials for regulatory alignment and institutional soundness — where a missed detail isn't just an error, it's a liability." },
            { icon: <Cpu size={24} className="text-gold" />, title: "AI-Powered Productivity", desc: "Certified in Google AI Essentials and fluent across Claude, Gemini, and the Microsoft 365 and Google Workspace ecosystems. I don't use AI to replace thinking — I use it to compress timelines, eliminate busywork, and deliver outputs that used to take days in hours." },
            { icon: <Briefcase size={24} className="text-gold" />, title: "Records Administration", desc: "I've evaluated and fulfilled thousands of complex data requests under strict confidentiality standards, applying rigorous quality control to prevent unauthorized disclosure of sensitive information. In environments where data integrity is non-negotiable, I've never had a breach — and I intend to keep it that way." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              {...fadeIn}
              className="md:col-span-4 bg-white p-8 rounded-[24px] border border-warm-gray-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/5 transition-all duration-300"
            >
              <div className="w-11 h-11 bg-gold-muted rounded-lg flex items-center justify-center mb-5 text-xl">
                {item.icon}
              </div>
              <h3 className="font-display text-2xl text-black tracking-tight mb-2.5">{item.title}</h3>
              <p className="text-[0.9rem] font-light text-warm-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section id="why-me" className="bg-white py-28 px-[5vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <motion.p {...fadeIn} className="text-[0.75rem] font-medium tracking-[0.14em] uppercase text-gold mb-3">Professional Ethos</motion.p>
            <motion.h2 {...fadeIn} className="font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.1] tracking-tight text-black">
              Built for principals who can't afford a second attempt.
            </motion.h2>
            <motion.p {...fadeIn} className="mt-4 text-[1.05rem] font-light text-warm-gray-600 max-w-[540px] leading-relaxed">
              Nearly a decade inside Philippine governance taught me one thing above all — the work either meets the standard or it doesn't. No exceptions, no shortcuts, no second drafts when it counts. I bring that same accountability to every engagement.
            </motion.p>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="mt-12 space-y-8"
            >
              {[
                { 
                  num: "01", 
                  title: "Adaptability Without Compromise", 
                  desc: "Governance taught me to pivot on zero notice — policy shifts, emergency crises, live press cycles. I carry that flexibility into every engagement." 
                },
                { 
                  num: "02", 
                  title: "Resiliency Under Pressure", 
                  desc: "I am resilient because every chapter of my life has deepened my sense of purpose. My direction has always outlasted my circumstances, and my faith in the journey has only grown stronger with time." 
                },
                { 
                  num: "03", 
                  title: "Integrity as Operating System", 
                  desc: "Every document I touch, every channel I manage carries my name. I work as though it always will — because in institutions that matter, it does." 
                }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeIn} className="flex gap-5 pb-8 border-b border-warm-gray-200 last:border-0 last:pb-0">
                  <span className="font-display text-xl text-gold shrink-0 w-7 pt-0.5">{item.num}</span>
                  <div>
                    <h4 className="text-[1rem] font-medium text-black mb-1.5">{item.title}</h4>
                    <p className="text-[0.88rem] font-light text-warm-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="lg:sticky lg:top-24">
            <motion.div {...fadeIn} className="bg-off-white rounded-[24px] p-8 md:p-10 lg:mt-8">
              <p className="text-[0.75rem] font-medium tracking-[0.1em] uppercase text-gold mb-6 tracking-widest">Credentials & Recognition</p>
              <div className="space-y-6">
                {[
                  { title: "Order of Lapu-Lapu, Rank of Kamagi", org: "Presidential Award — Office of the President, 2022" },
                  { title: "Google Data Analytics Professional", org: "Google via Coursera, April 2026" },
                  { title: "Six Sigma Principles", org: "Kennesaw State University, April 2026" },
                  { title: "Google AI Essentials", org: "Google via Coursera, March 2026" },
                  { title: "Strategic & Inclusive Leadership", org: "Johns Hopkins University, March 2026" },
                  { title: "Juris Doctor (In Progress)", org: "San Beda College Alabang - School of Law, Expected 2028" },
                  { title: "Career Service Professional", org: "Civil Service Commission of the Philippines" }
                ].map((cred, i) => (
                  <div key={i} className="flex items-start gap-4 pb-6 border-b border-warm-gray-200 last:border-0 last:pb-0">
                    <div className="w-2 h-2 rounded-full bg-gold mt-1.5 shrink-0" />
                    <div>
                      <div className="text-[0.88rem] font-medium text-black">{cred.title}</div>
                      <div className="text-[0.78rem] text-warm-gray-600 mt-0.5">{cred.org}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="mt-6">
              <Link to="/about" className="inline-flex items-center gap-2 font-medium text-gold hover:text-gold-dark transition-colors group">
                Read full professional bio <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="proof" className="bg-black text-white py-28 px-[5vw]">
        <motion.div {...fadeIn}>
          <p className="text-[0.75rem] font-medium tracking-[0.14em] uppercase text-gold-light mb-3">Proof of Impact</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.1] tracking-tight text-white max-w-[680px]">
            Not hypothetical. Documented.
          </h2>
          <p className="mt-4 text-[1.05rem] font-light text-white/50 max-w-[540px] leading-relaxed">
            These are outcomes from real institutional challenges I was handed and expected to solve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {[
            {
              label: "Case Study 01 — Presidential Action Center",
              title: "Building a Crisis Lifeline from the Ground Up",
              challenge: "Citizens in medical and financial distress needed help that couldn't wait for bureaucratic clearance. They needed funds, fast — and no mechanism existed to get it to them directly.",
              action: "I co-developed the Presidential Help Desk from the ground up — designing intake flows, building the database, creating the forms, and helping shape the policy framework that formalized the program through Executive Order No. 20 (s. 2023). From concept to operational system, I was there for every layer.",
              result: "Direct aid delivered to thousands of Filipinos in crisis. The Presidential Help Desk is now a cornerstone social service program of the Marcos administration.",
              metric: "EO 20",
              metricLabel: "Institutionalized"
            },
            {
              label: "Case Study 02 — Presidential Action Center",
              title: "66% Print Reduction Without Missing a Case",
              challenge: "The Presidential Action Center was averaging 120,000 prints per month — a bottleneck that was slowing case resolution and burying staff in paper.",
              action: "In 2023, I implemented a Paperless Referral System at PACE, modernizing templates and redesigning the workflow end to end.",
              result: "Prints reduced by 66%. Real-time processing under one hour. Zero backlog across 77,700 referrals — documented in the 2023 PACE Annual Report.",
              metric: "Mother Earth",
              metricLabel: "Saved"
            },
            {
              label: "Case Study 03 — Senate of the Philippines",
              title: "The Quiet Engine Behind a Senator's Public Presence",
              challenge: "Managing communications for a sitting senator means operating at two speeds simultaneously — real-time public engagement and institutionally precise official messaging. There is no margin for error on either front.",
              action: "I managed daily content strategy, social media analytics, and cross-team coordination for Senator Christopher Go's digital platforms — keeping messaging consistent, timely, and on-brand across every channel.",
              result: "Maintained and grew a 4M+ audience. Contributed to a top-ranked finish in the 2025 national elections — one of the most competitive senatorial races in recent Philippine history.",
              metric: "4M+",
              metricLabel: "Followers Managed"
            },
            {
              label: "Case Study 04 — COVID-19 Response",
              title: "Institutional Resilience under Pressure",
              challenge: "A global pandemic cannot pause the Office of the President. Executive briefings, assistance databases, and close-in staff operations had to continue without interruption — under conditions no contingency plan fully anticipated.",
              action: "I assisted in packaging the Presidential Daily Briefer for the Technical Close-in Team, ensuring principals received accurate, timely intelligence even as the situation on the ground shifted daily.",
              result: "Mission-critical databases for financial and medical assistance remained operational throughout the crisis — serving Filipinos at the moment they needed government the most.",
              metric: "Zero",
              metricLabel: "Briefings Missed"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              {...fadeIn}
              className="group relative h-full border border-white/10 rounded-[24px] p-8 md:p-10 bg-white/5 hover:border-gold hover:bg-gold/5 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <p className="text-[0.7rem] tracking-[0.12em] uppercase text-gold mb-4">{item.label}</p>
              <h3 className="font-display text-2xl text-white tracking-tight leading-snug mb-5">{item.title}</h3>
              <div className="space-y-4">
                <p className="text-[0.875rem] font-light leading-relaxed text-white/55">
                  <strong className="text-white/75">The Challenge:</strong> {item.challenge}
                </p>
                <p className="text-[0.875rem] font-light leading-relaxed text-white/55">
                  <strong className="text-white/75">The Action:</strong> {item.action}
                </p>
                <p className="text-[0.875rem] font-light leading-relaxed text-white/55">
                  <strong className="text-white/75">The Result:</strong> {item.result}
                </p>
              </div>
              <div className="mt-8">
                <span className="inline-flex items-baseline gap-1 bg-gold/15 px-4 py-2 rounded-lg">
                  <span className="font-display text-2xl text-gold-light leading-none">{item.metric}</span>
                  <span className="text-[0.8rem] text-white/50">{item.metricLabel}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-off-white py-28 px-[5vw]">
        <motion.p {...fadeIn} className="text-[0.75rem] font-medium tracking-[0.14em] uppercase text-gold mb-3 text-center">What Colleagues Say</motion.p>
        <motion.h2 {...fadeIn} className="font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.1] tracking-tight text-black text-center mb-12">
          The people who've seen the work, firsthand.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              quote: "Nikko operates with institutional instinct that most people take years to develop. He anticipates needs before they become problems.",
              title: "Head of Office, PACe",
              initials: "O"
            },
            {
              quote: "The paperless system Nikko proposed didn't just save paper — it saved staff hours and gave us real-time visibility. That's systems thinking.",
              title: "Division Chief, PACe",
              initials: "D"
            },
            {
              quote: "He's the person you want in the room before the problem gets big — and at the keyboard when the deadline is real.",
              title: "Undersecretary, OSAP",
              initials: "U"
            }
          ].map((testi, i) => (
            <motion.div 
              key={i}
              {...fadeIn}
              className="bg-white p-8 rounded-[24px] border border-warm-gray-200 hover:-translate-y-1 transition-transform"
            >
              <div className="text-gold text-sm mb-4 tracking-[0.1em]">★★★★★</div>
              <p className="font-display text-xl italic text-black leading-relaxed mb-8">"{testi.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-muted flex items-center justify-center text-gold-dark text-[0.85rem] font-medium">
                  {testi.initials}
                </div>
                <div>
                  <div className="text-[0.88rem] font-medium text-black">{testi.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
