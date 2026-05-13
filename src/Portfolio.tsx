import { motion } from "motion/react";
import { Youtube, Music, ExternalLink, Award, BarChart2, ImageOff } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  tags: string[];
  links?: { label: string; url: string; icon?: React.ReactNode }[];
  imagePlaceholder?: string;
  dark?: boolean;
}

function ProjectCard({ category, title, description, tags, links, imagePlaceholder, dark }: ProjectCardProps) {
  return (
    <motion.div
      {...fadeIn}
      className={`group rounded-[24px] border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${dark ? "bg-black border-white/10 hover:border-gold hover:shadow-gold/10" : "bg-white border-warm-gray-200 hover:shadow-black/5"}`}
    >
      {/* Image area */}
      <div className={`w-full h-52 flex items-center justify-center ${dark ? "bg-white/5" : "bg-warm-gray-100"}`}>
        {imagePlaceholder ? (
          <div className="flex flex-col items-center gap-2 opacity-40">
            <ImageOff size={28} className={dark ? "text-white" : "text-warm-gray-400"} />
            <span className={`text-xs tracking-wide uppercase ${dark ? "text-white/50" : "text-warm-gray-400"}`}>{imagePlaceholder}</span>
          </div>
        ) : null}
      </div>

      {/* Content */}
      <div className="p-8">
        <p className="text-[0.7rem] tracking-[0.14em] uppercase text-gold mb-2">{category}</p>
        <h3 className={`font-display text-xl tracking-tight mb-3 ${dark ? "text-white" : "text-black"}`}>{title}</h3>
        <p className={`text-[0.88rem] font-light leading-relaxed mb-5 ${dark ? "text-white/55" : "text-warm-gray-600"}`}>{description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map(tag => (
            <span key={tag} className={`text-[0.7rem] font-medium tracking-wide px-3 py-1.5 rounded-full ${dark ? "bg-white/10 text-white/60" : "bg-warm-gray-100 text-warm-gray-700"}`}>
              {tag}
            </span>
          ))}
        </div>
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 text-[0.82rem] font-medium px-4 py-2 rounded-full transition-all duration-200 ${dark ? "bg-gold/20 text-gold-light hover:bg-gold hover:text-white" : "bg-black text-white hover:bg-gold"}`}
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

interface CertCardProps {
  title: string;
  org: string;
  date: string;
  color?: string;
}

function CertCard({ title, org, date, color = "bg-gold/10" }: CertCardProps) {
  return (
    <motion.div {...fadeIn} className="flex items-start gap-4 p-6 bg-white rounded-[16px] border border-warm-gray-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center shrink-0`}>
        <Award size={18} className="text-gold" />
      </div>
      <div>
        <div className="text-[0.88rem] font-medium text-black leading-snug">{title}</div>
        <div className="text-[0.78rem] text-warm-gray-600 mt-0.5">{org}</div>
        <div className="text-[0.72rem] text-gold mt-1 font-medium">{date}</div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <div className="pt-[68px]">
      {/* Hero */}
      <section className="bg-off-white py-24 px-[5vw] border-b border-warm-gray-200">
        <div className="max-w-4xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[0.75rem] font-medium tracking-[0.14em] uppercase text-gold mb-4">
            Portfolio
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] tracking-tight text-black mb-6">
            Work that speaks for itself.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg font-light text-warm-gray-600 max-w-[540px] leading-relaxed">
            A curated selection of projects, creative work, and credentials spanning public service, data analytics, and content creation.
          </motion.p>
        </div>
      </section>

      {/* Creative Projects */}
      <section className="bg-white py-28 px-[5vw]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="mb-12">
            <p className="text-[0.75rem] font-medium tracking-[0.14em] uppercase text-gold mb-3">Creative Work</p>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] tracking-tight text-black">
              Beyond the desk.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              dark
              category="Faith & Content Creation"
              title="Five Minutes with God Daily"
              description="A daily meditative prayer podcast and YouTube channel rooted in the Roman Catholic tradition. Each episode is built around the Daily Gospel, crafted in an inclusive-Christian tone to help listeners begin their day in quiet reflection."
              tags={["Roman Catholic", "Daily Gospel", "Meditation", "NABRE", "Spiritual Content"]}
              imagePlaceholder="Upload your channel thumbnail"
              links={[
                { label: "YouTube", url: "https://youtube.com/@fiveminuteswithgod", icon: <Youtube size={14} /> },
                { label: "Spotify", url: "https://open.spotify.com/show/fiveminuteswithgod", icon: <Music size={14} /> }
              ]}
            />

            <ProjectCard
              category="Data Analytics"
              title="Power BI & Claude Data Dashboards"
              description="Interactive dashboards and data visualizations built using Power BI and Claude AI, demonstrating proficiency in transforming raw datasets into decision-ready reports. Topics span governance metrics, operational analytics, and productivity tracking."
              tags={["Power BI", "Claude AI", "Data Visualization", "Google Sheets", "SQL"]}
              imagePlaceholder="Upload your dashboard screenshots"
              links={[]}
            />
          </div>
        </div>
      </section>

      {/* Data Analytics Note */}
      <section className="bg-off-white py-10 px-[5vw] border-y border-warm-gray-200">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="flex items-start gap-4 bg-white rounded-[16px] border border-warm-gray-200 p-6">
            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
              <BarChart2 size={18} className="text-gold" />
            </div>
            <div>
              <p className="text-[0.88rem] font-medium text-black">Dashboard screenshots coming soon</p>
              <p className="text-[0.82rem] text-warm-gray-600 mt-1 leading-relaxed">
                Power BI and Claude data visualizations are being prepared for upload. In the meantime, you can reach out directly at <a href="mailto:nikko@caharian.com" className="text-gold hover:underline">nikko@caharian.com</a> to request samples.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credentials & Awards */}
      <section className="bg-white py-28 px-[5vw]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="mb-12">
            <p className="text-[0.75rem] font-medium tracking-[0.14em] uppercase text-gold mb-3">Credentials & Recognition</p>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] tracking-tight text-black">
              Certified. Recognized. Accountable.
            </h2>
            <p className="mt-4 text-[1rem] font-light text-warm-gray-600 max-w-[480px] leading-relaxed">
              Every credential here represents a deliberate investment in becoming sharper, more capable, and more useful to the principals I serve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CertCard
              title="Order of Lapu-Lapu, Rank of Kamagi"
              org="Presidential Award — Office of the President"
              date="2022"
              color="bg-gold/20"
            />
            <CertCard
              title="Servant Leadership Award"
              org="Office of the President — Internal Recognition"
              date="2023"
            />
            <CertCard
              title="Commitment to Excellence Award"
              org="Office of the President — Internal Recognition"
              date="2023"
            />
            <CertCard
              title="Google Data Analytics Professional Certificate"
              org="Google via Coursera"
              date="April 2026"
            />
            <CertCard
              title="Google AI Essentials"
              org="Google via Coursera"
              date="March 2026"
            />
            <CertCard
              title="Six Sigma Principles"
              org="Kennesaw State University via Coursera"
              date="April 2026"
            />
            <CertCard
              title="Strategic & Inclusive Leadership"
              org="Johns Hopkins University via Coursera"
              date="March 2026"
            />
            <CertCard
              title="Career Service Professional Eligibility"
              org="Civil Service Commission of the Philippines"
              date="Permanent"
            />
          </div>

          {/* JD Banner */}
          <motion.div {...fadeIn} className="mt-6 relative bg-black rounded-[24px] px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(184,146,42,0.2)_0%,transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <p className="text-[0.72rem] tracking-[0.14em] uppercase text-gold mb-1">Currently Enrolled</p>
              <h3 className="font-display text-2xl text-white tracking-tight">Juris Doctor (JD)</h3>
              <p className="text-white/50 text-[0.88rem] mt-1">San Beda College Alabang — School of Law</p>
            </div>
            <div className="relative z-10 text-right shrink-0">
              <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium">Expected 2028</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-off-white py-20 px-[5vw] border-t border-warm-gray-200">
        <motion.div {...fadeIn} className="max-w-2xl mx-auto text-center">
          <p className="text-[0.75rem] font-medium tracking-[0.14em] uppercase text-gold mb-4">Interested?</p>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] tracking-tight text-black mb-4">
            See the work in action.
          </h2>
          <p className="text-warm-gray-600 font-light leading-relaxed mb-8">
            Want to see dashboard samples, hear an episode, or discuss how my background fits your needs? Lets talk.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-full font-medium hover:bg-gold transition-all duration-200">
            Get in Touch <ExternalLink size={16} />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
