import { motion } from "motion/react";
import { ArrowRight, Calendar, MapPin, Building2 } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

interface ExperienceProps {
  title: string;
  org: string;
  period: string;
  location: string;
  description: string[];
}

function ExperienceItem({ title, org, period, location, description }: ExperienceProps) {
  return (
    <motion.div {...fadeIn} className="relative pb-12 last:pb-0">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-1">
        <h3 className="font-display text-xl md:text-2xl text-black tracking-tight font-semibold leading-tight">{title}</h3>
        <div className="text-warm-gray-500 text-sm font-medium flex items-center gap-2 shrink-0 md:mt-1">
          <Calendar size={14} className="text-gold/50" /> {period}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.95rem] mb-4">
        <span className="text-[#3b82f6] font-medium">{org}</span>
        <span className="flex items-center gap-1.5 text-warm-gray-500 font-light italic"><MapPin size={14} /> {location}</span>
      </div>
      <ul className="space-y-2">
        {description.map((item, i) => (
          <li key={i} className="text-[0.92rem] text-warm-gray-600 leading-relaxed font-light flex gap-3">
            <span className="text-gold mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-gold/30" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function About() {
  return (
    <div className="pt-[68px]">
      <section className="bg-off-white py-24 px-[5vw] border-b border-warm-gray-200">
        <div className="max-w-4xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[0.75rem] font-medium tracking-[0.14em] uppercase text-gold mb-4">
            About Me
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] tracking-tight text-black mb-8">
            Bridging institutional standard with digital speed.
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg font-light text-warm-gray-600 leading-relaxed">
            <p>I am a results-oriented executive assistant with a specialized background in public administration, digital transformation, and strategic communication.</p>
            <p>Currently pursuing a Juris Doctor at San Beda College Alabang - School of Law, I combine a legal mindset with technical proficiency in data analytics and AI workflows.</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-28 px-[5vw]">
        <div className="max-w-4xl mx-auto border-t border-warm-gray-100 pt-16">
          <motion.h2 {...fadeIn} className="font-display text-3xl text-black tracking-tight mb-16 flex items-center gap-4">
            Professional Experience
            <div className="h-px bg-warm-gray-200 grow" />
          </motion.h2>
          <div className="space-y-12">
            <ExperienceItem 
              title="Communications Consultant"
              org="Senate of the Philippines – Office of Senator Christopher Lawrence Go"
              period="Jul 2024 – Mar 2026"
              location="Pasay City (Hybrid)"
              description={[
                "Managed the Senator's social media presence across platforms with over 4 million followers, driving daily content planning, audience engagement, and trend monitoring that contributed to his top-ranking finish in the May 2025 national elections.",
                "Compiled and delivered briefing materials, talking points, and speeches for all official functions, ensuring the Senator was consistently prepared and well-represented in every engagement.",
                "Served as a frontline coordinator for constituent assistance, collecting case details from individuals seeking medical and other support and endorsing them to the Constituency Office for processing and follow-through."
              ]}
            />
            <ExperienceItem 
              title="Chief of Staff to the Head of Office"
              org="Office of the President – Presidential Action Center"
              period="Jan 2024 – May 2024"
              location="Malacañang, Manila"
              description={[
                "Served as Chief of Staff to the Head of Office, managing day-to-day administrative operations including scheduling, inter-agency correspondence, workflow oversight, and the preparation of briefers, presentations, and referral letters.",
                "Ensured regulatory compliance and institutional accountability by reviewing memoranda and correspondence against applicable laws and regulations, and preparing key planning documents including performance scorecards, procurement plans, and the office's comprehensive annual report to the Executive Secretary.",
                "Supported the office's organizational restructuring in alignment with administration priorities, contributing to streamlined operations and institutional transformation."
              ]}
            />
            <ExperienceItem 
              title="Administrative & Data Management Officer"
              org="Office of the President – Presidential Action Center"
              period="Mar 2022 – Dec 2023"
              location="Malacañang, Manila"
              description={[
                "Spearheaded the transition to a fully paperless data management system, overhauling the PACe Referral System's records infrastructure, process flows, and official forms into a comprehensive digitized setup that achieved a 66% reduction in paper consumption and improved operational efficiency, data accessibility, and reporting capacity.",
                "Served as Action Officer and primary public-facing contact across walk-in, email, courier, and phone channels, evaluating concerns firsthand, gathering case details, and drafting referral letters to appropriate agencies for the Head of Office's approval.",
                "Assisted in developing the Presidential Help Desk, a crisis assistance program formally institutionalized through Executive Order No. 20 (s. 2023) signed by President Marcos, delivering direct financial and medical assistance to Filipinos in need."
              ]}
            />
            <ExperienceItem 
              title="Executive Support Staff"
              org="Office of the President – Office of the Special Assistant to the President"
              period="Jul 2019 – Mar 2022"
              location="Malacañang, Manila"
              description={[
                "Served as executive support staff to the Special Assistant to the President, managing calendar schedules, coordinating official engagements, and liaising with internal and external parties, including serving as part of the Official Philippine Presidential Delegation on state visits to Malaysia and Beijing, China.",
                "Conducted end-to-end case management and due diligence for medical and financial assistance requests, drafting policy-compliant Completed Staff Work memoranda ready for approval without further revision, and coordinating with relevant government agencies in support of whole-of-government relief operations.",
                "Built and maintained an office database using Google Workspace and Microsoft 365 for efficient records management."
              ]}
            />
            <ExperienceItem 
              title="Field Operations Staff & Records Digitization Officer"
              org="Office of the President – Office of the Special Assistant to the President"
              period="May 2017 – Jun 2019"
              location="Davao City"
              description={[
                "Supported official engagements and field operations across Mindanao, assisting in logistics, documentation, and stakeholder coordination.",
                "Performed data entry and digitization of manual records into the office database.",
                "Promoted to close-in presidential staff within one year based on demonstrated reliability, initiative, and attention to detail."
              ]}
            />
            <ExperienceItem 
              title="Systems Development Intern"
              org="Department of Trade and Industry – Regional Office XI"
              period="Oct 2016 – Mar 2017"
              location="Davao City"
              description={[
                "Contributed to the development of the Business Permit and Licensing System (BPLS) as a capstone project, subsequently adopted by the Regional Office.",
                "Assisted in administrative tasks and data entry for regional trade programs.",
                "Supported the coordination of local business seminars and trade fairs."
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-28 px-[5vw] border-t border-warm-gray-200">
        <div className="max-w-4xl mx-auto">
          <motion.h2 {...fadeIn} className="font-display text-3xl text-black tracking-tight mb-16 flex items-center gap-4">
            Academic Foundation
            <div className="h-px bg-warm-gray-200 grow" />
          </motion.h2>
          <div className="space-y-12">
            <motion.div {...fadeIn} className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-display text-black font-semibold tracking-tight">Juris Doctor (JD)</h3>
                <p className="text-[#3b82f6] font-medium mt-1">San Beda College Alabang - School of Law</p>
              </div>
              <div className="text-right shrink-0">
                <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-bold uppercase tracking-wider">Expected 2028</span>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-display text-black font-semibold tracking-tight">BS in Information Technology</h3>
                <p className="text-[#3b82f6] font-medium mt-1">Holy Cross of Davao College</p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-warm-gray-400 text-sm font-medium">Class of 2017</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
