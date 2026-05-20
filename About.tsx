import { motion } from 'motion/react';
import { content } from '../data/content';
import { User, CheckCircle } from 'lucide-react';

export default function About() {
  const { about } = content;

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Image Placeholder / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mb-12 lg:mb-0"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-800 relative shadow-2xl border border-slate-700/50">
              {/* Professional photo */}
              <img 
                src="/about.jpg" 
                alt="JUDr. Mojmír Mochnáč" 
                className="w-full h-full object-cover"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-400 rounded-full opacity-10 blur-3xl"></div>
            </div>
            
            {/* Stats/Highlight Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-blue-600">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Praktické riešenia</h4>
                  <p className="text-sm text-slate-600 mt-1">Zameranie na reálne výsledky a použiteľnosť v praxi.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
              Profil
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {about.title}
            </h2>
            
            <div className="prose prose-lg text-slate-600 leading-relaxed space-y-6">
              {about.text.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>


          </motion.div>

        </div>

        {/* Strengths Section - Full Width */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-10 border-t border-slate-100"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center">Silné stránky (Gallup)</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {about.strengths?.map((strength, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow h-full w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
                <h5 className="font-bold text-slate-800 text-lg mb-3 text-blue-900">{strength.title}</h5>
                <p className="text-slate-600 leading-relaxed">{strength.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
