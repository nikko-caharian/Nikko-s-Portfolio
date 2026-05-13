import { motion } from "motion/react";
import { Youtube, Music, ExternalLink, Award, ImageOff, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

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
  image?: string;
  images?: string[];
  embedVideo?: string;
  dark?: boolean;
}

function ProjectCard({ category, title, description, tags, links, imagePlaceholder, image, images, embedVideo, dark }: ProjectCardProps) {
  const [current, setCurrent] = useState(0);
  const allImages = images || (image ? [image] : []);

  return (
    <motion.div
      {...fadeIn}
      className={`group rounded-[24px] border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${dark ? "bg-black border-white/10 hover:border-gold hover:shadow-gold/10" : "bg-white border-warm-gray-200 hover:shadow-black/5"}`}
    >
      <div className={`w-full h-52 flex items-center justify-center overflow-hidden relative ${dark ? "bg-white/5" : "bg-warm-gray-100"}`}>
        {embedVideo ? (
          <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${embedVideo}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
        ) : allImages.length > 0 ? (
          <>
            <img src={allImages[current]} alt={title} className="w-full h-full object-cover transition-all duration-300" />
            {allImages.length > 1 && (
              <>
                <button onClick={() => setCurrent(i => (i - 1 + allImages.length) % allImages.length)} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center text-white transition-all">
                  <ChevronLeft size={16} />
                </button>
                <button onClick={() => setCurrent(i => (i + 1) % allImages.length)} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center text-white transition-all">
                  <ChevronRight size={16} />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {allImages.map((_, i) => (
                    <button key={i} onClick={() => setCurrent(i)} className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-white" : "bg-white/40"}`} />
                  ))}
                </div>
              </>
            )}
          </>
        ) : imagePlaceholder ? (
          <div className="flex flex-col items-center gap-2 opacity-40">
            <ImageOff size={28} className={dark ? "text-white" : "text-warm-gray-400"} />
            <span className={`text-xs tracking-wide uppercase ${dark ? "text-white/50" : "text-warm-gray-400"}`}>{imagePlaceholder}</span>
          </div>
        ) : null}
      </div>

      <div className="p-8">
        <p className="text-[0.7rem] tracking-[0.14em] uppercase text-gold mb-2">{category}</p>
        <h3 className={`font-display text-xl tracking-tight mb-3 ${dark ? "text-white" : "text-black"}`}>{title}</h3>
        <p className={`text-[0.88rem] font-light leading-relaxed mb-5 ${dark ? "text-white/55" : "text-warm-gray-600"}`}>{description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map(tag => (
            <span key={tag} className={`text-[0.7rem] font-medium tracking-wide px-3 py-1.5 rounded-full ${dark ? "bg-white/10 text-white/60" : "bg-warm-gray-100 text-warm-gray-700"}`}>{tag}</span>
          ))}
        </div>
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {links.map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 text-[0.82rem] font-medium px-4 py-2 rounded-full transition-all duration-200 ${dark ? "bg-gold/20 text-gold-light hover:bg-gold hover:text-white" : "bg-black text-white hover:bg-gold"}`}>
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
      <section className="bg-off-white py-24 px-[5vw] border-b border-warm-gray-200">
        <div className="max-w-4xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[0.75rem] font-medium tracking-[0.14em] uppercase text-gold mb-4">Portfolio</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] tracking-tight text-black mb-6">Work that speaks for itself.</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg font-light text-warm-gray-600 max-w-[540px] leading-relaxed">A curated selection of projects, creative work, and credentials spanning public service, data analytics, and content creation.</motion.p>
        </div>
      </section>

      <section className="bg-white py-28 px-[5vw]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="mb-12">
            <p className="text-[0.75rem] font-medium tracking-[0.14em] uppercase text-gold mb-3">Creative Work</p>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] tracking-tight text-black">Beyond the desk.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              dark
              category="Faith & Content Creation"
              title="Five Minutes with God Daily"
              description="A daily meditative prayer podcast and YouTube channel rooted in the Roman Catholic tradition. Each episode is built around the Daily Gospel, crafted in an inclusive-Christian tone to help listeners begin their day in quiet reflection."
              tags={["Christian", "Jesus", "Meditation", "Peace", "Spirituality"]}
              embedVideo="5J_daXq7rIM"
              links={[
                { label: "YouTube", url: "https://www.youtube.com/@5-minutewithGod", icon: <Youtube size={14} /> },
                { label: "Spotify", url: "https://open.spotify.com/show/1VJPwPNhY4wLViOLig15r7", icon: <Music size={14} /> }
              ]}
            />

            <ProjectCard
              category="Data Analytics"
              title="Power BI & Claude Data Dashboards"
              description="Interactive dashboards and data visualizations built using Power BI and Claude AI, demonstrating proficiency in transforming raw datasets into decision-ready reports. Topics span governance metrics, operational analytics, and productivity tracking."
              tags={["Power BI", "Claude AI", "Data Visualization", "Google Sheets", "SQL"]}
              images={["/dashboard-1.png", "/dashboard-2.png"]}
              links={[]}
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-28 px-[5vw] border-t border-warm-gray-200">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="mb-12">
            <p className="text-[0.75rem] font-medium tracking-[0.14em] uppercase text-gold mb-3">Awards & Recognition</p>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] tracking-tight text-black">Recognized for the work. Not the title.</h2>
            <p className="mt-4 text-[1rem] font-light text-warm-gray-600 max-w-[480px] leading-relaxed">I did not pursue these. I pursued the Filipinos who needed someone in their corner — showing up with integrity, consistency, and the quiet conviction that genuine public service is its own reward. These are simply what institutions leave behind when they witness that kind of service up close. I am grateful for each one.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CertCard title="Order of Lapu-Lapu, Rank of Kamagi" org="Presidential Award — Office of the President" date="2022" color="bg-gold/20" />
            <CertCard title="Servant Leadership Award" org="Office of the President — Presidential Action Center" date="2023" />
            <CertCard title="Idea Type Contribution Award" org="Office of the President - Presidential Action Center" date="2022" />
            <CertCard title="Commitment to Excellence" org="Office of the Special Assistant to the President" date="2021" />
            <CertCard title="Employee of the Month" org="Office of the Special Assistant to the President" date="2021" />
            <CertCard title="Team Player Award" org="Office of the Special Assistant to the President" date="2020" />
          </div>
        </div>
      </section>

      <section className="bg-off-white py-20 px-[5vw] border-t border-warm-gray-200">
        <motion.div {...fadeIn} className="max-w-2xl mx-auto text-center">
          <p className="text-[0.75rem] font-medium tracking-[0.14em] uppercase text-gold mb-4">Interested?</p>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] tracking-tight text-black mb-4">See the work in action.</h2>
          <p className="text-warm-gray-600 font-light leading-relaxed mb-8">Want to see dashboard samples, hear an episode, or discuss how my background fits your needs? Lets talk.</p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-full font-medium hover:bg-gold transition-all duration-200">
            Get in Touch <ExternalLink size={16} />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
