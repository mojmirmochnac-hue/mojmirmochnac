import { motion } from 'motion/react';
import { content } from '../data/content';
import { Briefcase, GraduationCap, Code, Users } from 'lucide-react';

const icons = {
  "Súčasnosť": Briefcase,
  "Inovácie": Code,
  "Odborný základ": GraduationCap,
  "Klientská prax": Users
};

export default function Experience() {
  const { experience } = content;

  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
            Kariéra
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            {experience.title}
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200 hidden md:block"></div>

          <div className="space-y-12">
            {experience.items.map((item, index) => {
              const Icon = icons[item.year as keyof typeof icons] || Briefcase;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Side */}
                  <div className="w-full md:w-1/2 px-4 md:px-12 mb-8 md:mb-0 text-center md:text-left">
                    <div className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow ${
                      !isEven ? 'md:text-right' : ''
                    }`}>
                      <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold mb-4">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.role}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-slate-100 shadow-sm z-10 hidden md:flex">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>

                  {/* Empty Side for spacing */}
                  <div className="w-full md:w-1/2 px-4 md:px-12 hidden md:block"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
