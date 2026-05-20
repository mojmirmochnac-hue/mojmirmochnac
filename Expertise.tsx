import { motion } from 'motion/react';
import { content } from '../data/content';
import { Target, Users, CheckCircle, Search, Zap, BarChart } from 'lucide-react';

export default function Expertise() {
  const { development, opportunities } = content;

  return (
    <section id="expertise" className="bg-slate-50 py-24">
      {/* Development Section */}
      <div id="development" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 lg:mb-0"
          >
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
              Ľudia a Výkon
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {development.title}
            </h2>
            <div className="prose prose-lg text-slate-600 leading-relaxed space-y-6">
              {development.text.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <Target className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">Jasné ciele</h4>
              <p className="text-sm text-slate-600">Nastavenie merateľných a dosiahnuteľných očakávaní.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <Users className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">Spätná väzba</h4>
              <p className="text-sm text-slate-600">Pravidelná komunikácia ako kľúčový nástroj rozvoja.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 sm:col-span-2 hover:shadow-md transition-shadow">
              <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">Emocionálna inteligencia</h4>
              <p className="text-sm text-slate-600">Pochopenie motivácie a budovanie zdravého pracovného prostredia.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Opportunities Section */}
      <div id="opportunities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center lg:flex-row-reverse">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 lg:mb-0 lg:order-2"
          >
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
              Potenciál a Zlepšovanie
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {opportunities.title}
            </h2>
            <div className="prose prose-lg text-slate-600 leading-relaxed space-y-6">
              {opportunities.text.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Visual/Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 lg:order-1"
          >
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-blue-600">
                  <Search size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Analýza fungovania</h4>
                  <p className="text-slate-600">Hĺbkové pochopenie procesov a identifikácia skrytých rezerv.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-blue-600">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Praktické riešenia</h4>
                  <p className="text-slate-600">Návrhy, ktoré sú realizovateľné a prinášajú okamžitú hodnotu.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-blue-600">
                  <BarChart size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Využitie zdrojov</h4>
                  <p className="text-slate-600">Zlepšovanie výsledkov prostredníctvom lepšieho využitia vlastných ľudí.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
