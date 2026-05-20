import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { content } from '../data/content';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const { contact } = content;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Správa bola odoslaná (simulácia).');
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 lg:mb-0"
          >
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
              Kontakt
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Spojme sa
            </h2>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              Máte záujem o spoluprácu, tréning alebo konzultáciu? Neváhajte ma kontaktovať.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Mail className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-medium text-slate-900">Email</h4>
                  <a href={`mailto:${contact.email}`} className="text-slate-600 hover:text-blue-600 transition-colors">
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Phone className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-medium text-slate-900">Telefón</h4>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-slate-600 hover:text-blue-600 transition-colors">
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-medium text-slate-900">Lokalita</h4>
                  <p className="text-slate-600">{contact.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  {contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  {contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  {contact.form.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="consent"
                    type="checkbox"
                    required
                    className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                    checked={formData.consent}
                    onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="consent" className="font-medium text-slate-700">
                    {contact.form.consent}
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center px-6 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all shadow-md hover:shadow-lg"
              >
                {contact.form.submit}
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
