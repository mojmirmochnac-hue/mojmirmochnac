import { motion } from 'motion/react';
import { content } from '../data/content';
import { Check } from 'lucide-react';

export default function Approach() {
  const { approach } = content;

  return (
    <section id="approach" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
            Metodika
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            {approach.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approach.points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start p-6 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 mr-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <p className="text-slate-700 font-medium leading-relaxed">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
