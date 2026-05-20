import { motion } from 'motion/react';
import { content } from '../data/content';
import { ArrowRight, ChevronRight, Users, MessageSquare, Target, Lightbulb } from 'lucide-react';

const icons = {
  "Manažérska prax": Users,
  "Tréning komunikačných zručností": MessageSquare,
  "Riadenie cieľov a výkonu": Target,
  "Praktické riešenia a inovácie": Lightbulb
};

export default function Hero() {
  const { hero, pillars } = content;

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center bg-slate-900 text-white pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black opacity-80"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-900/10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-900/30 border border-blue-800 text-blue-300 text-sm font-medium mb-6 tracking-wide uppercase">
              JUDr. Mojmír Mochnáč
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8 text-white">
              {hero.primaryHeadline}
              <span className="block text-2xl md:text-3xl lg:text-3xl text-blue-200 font-medium mt-6 leading-normal opacity-90">
                {hero.secondaryHeadline}
              </span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {hero.cta.primary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-700 text-base font-medium rounded-lg text-slate-300 bg-slate-800/50 hover:bg-slate-800 transition-all backdrop-blur-sm"
              >
                {hero.cta.secondary}
              </a>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto lg:mx-0 max-w-md lg:max-w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-800/50 aspect-[3/4] lg:aspect-[4/5]">
              {/* User uploaded image */}
              <img 
                src="/profile1.jpg" 
                alt="JUDr. Mojmír Mochnáč" 
                className="w-full h-full object-cover"
              />
              
              {/* Decorative overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
            </div>
            
            {/* Decorative elements behind image */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-20 blur-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-slate-400 rounded-full opacity-10 blur-3xl -z-10"></div>
          </motion.div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {pillars.map((pillar, index) => {
            const Icon = icons[pillar.title as keyof typeof icons] || Users;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 p-6 rounded-xl hover:bg-slate-800/60 transition-colors text-left group"
              >
                <div className="bg-blue-900/20 p-3 rounded-lg w-fit mb-4 group-hover:bg-blue-900/30 transition-colors">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
