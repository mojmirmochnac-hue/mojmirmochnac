import { motion } from 'motion/react';
import { content } from '../data/content';
import { MessageCircle, UserCheck, Settings, Target } from 'lucide-react';

const icons = {
  "Tréning komunikačných zručností": MessageCircle,
  "Mentoring vedúcich pracovníkov": UserCheck,
  "Návrh praktických nástrojov a postupov": Settings,
  "Nastavovanie cieľov a rozvoj pracovníkov": Target
};

export default function Services() {
  const { services } = content;

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
            Ponuka
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            {services.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.items.map((item, index) => {
            const Icon = icons[item.title as keyof typeof icons] || MessageCircle;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all group"
              >
                <div className="bg-white p-4 rounded-xl shadow-sm w-fit mb-6 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
