import { content } from '../data/content';
import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const { contact } = content;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-white font-bold text-xl mb-2">JUDr. Mojmír Mochnáč</h3>
            <p className="text-sm text-slate-400 max-w-xs">
              Manažér, tréner a odborník na rozvoj ľudského potenciálu.
            </p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href={`mailto:${contact.email}`} className="text-slate-400 hover:text-white transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between text-sm text-slate-500">
          <p>&copy; {currentYear} JUDr. Mojmír Mochnáč. Všetky práva vyhradené.</p>
          <div className="mt-2 md:mt-0 space-x-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Ochrana súkromia</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
