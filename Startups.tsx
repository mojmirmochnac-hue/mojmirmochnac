import { motion } from 'motion/react';
import { content } from '../data/content';
import { Rocket, Code, Lightbulb } from 'lucide-react';

export default function Startups() {
  const { startups } = content;

  return (
    <section id="startups" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 lg:mb-0"
          >
            <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-2 block">
              Inovácie a Technológie
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {startups.title}
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              {startups.intro}
            </p>
            
            <div className="relative bg-blue-900/20 rounded-2xl p-8 border border-blue-800/50">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
              <Lightbulb className="w-10 h-10 text-yellow-400 mb-4" />
              <p className="text-slate-300 italic">
                "Skúsenosť so startupmi ma naučila, že inovácia nie je len o technológii, ale predovšetkým o pochopení potrieb ľudí a schopnosti rýchlo reagovať na zmenu."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {startups.projects && startups.projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center border border-blue-800 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all">
                      {index === 0 ? <Rocket className="w-6 h-6 text-blue-400 group-hover:text-white" /> : <Code className="w-6 h-6 text-blue-400 group-hover:text-white" />}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
