import { ArrowRight, Brain, BriefcaseBusiness, CheckCircle2, Lightbulb, Mail, MapPin, MessageSquare, Phone, Sparkles, Target, Users } from 'lucide-react';

const pillars = [
  {
    title: 'Manažérska prax',
    description: 'Riadenie pracovníkov, nastavovanie cieľov a zodpovednosť za výkon tímov.',
    icon: Users,
  },
  {
    title: 'Komunikačné zručnosti',
    description: 'Tréning profesionálneho vystupovania, argumentácie a práce so spätnou väzbou.',
    icon: MessageSquare,
  },
  {
    title: 'Riadenie výkonu',
    description: 'Jasné ciele, merateľné očakávania a praktické zlepšovanie výsledkov.',
    icon: Target,
  },
  {
    title: 'Inovačné príležitosti',
    description: 'Hľadanie oblastí, kde môže organizácia lepšie využiť potenciál ľudí.',
    icon: Lightbulb,
  },
];

const services = [
  'Tréning komunikačných zručností',
  'Mentoring vedúcich pracovníkov',
  'Nastavovanie cieľov a riadenie výkonu',
  'Identifikovanie inovačných príležitostí',
  'Rozvoj a využitie potenciálu pracovníkov',
];

const strengths = [
  'Ideation: schopnosť nachádzať nové riešenia',
  'Connectedness: myslenie v súvislostiach',
  'Individualization: práca s jedinečnosťou ľudí',
  'Analytical: rozhodovanie na základe faktov',
  'Significance: orientácia na merateľný dopad',
];

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-zinc-950 selection:bg-emerald-100 selection:text-emerald-950">
      <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4">
          <a href="#home" className="text-base font-black tracking-tight">
            JUDr. Mojmír Mochnáč
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-zinc-600 md:flex">
            <a className="hover:text-zinc-950" href="#about">O mne</a>
            <a className="hover:text-zinc-950" href="#services">Služby</a>
            <a className="hover:text-zinc-950" href="#contact">Kontakt</a>
          </nav>
          <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-emerald-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-800">
            Kontaktovať
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="bg-zinc-950 text-white">
          <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-bold text-emerald-200">
                <Sparkles size={16} /> Manažér a tréner komunikačných zručností
              </p>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-6xl">
                Mením potenciál ľudí na konkurenčnú výhodu firmy.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                Pomáham organizáciám zlepšovať výsledky rozvojom pracovníkov, nastavovaním cieľov, riadením výkonu a praktickou inováciou.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-black text-zinc-950 transition hover:bg-zinc-100">
                  Kontaktovať <ArrowRight className="ml-2" size={18} />
                </a>
                <a href="#about" className="inline-flex items-center justify-center rounded-md border border-zinc-700 px-6 py-3 text-sm font-black text-zinc-100 transition hover:bg-zinc-900">
                  Zistiť viac
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="grid aspect-[4/5] place-items-center overflow-hidden rounded-lg border border-zinc-700 bg-[linear-gradient(135deg,#0f172a,#14532d_55%,#92400e)] p-8 shadow-2xl">
                <div className="text-center">
                  <div className="mx-auto grid h-32 w-32 place-items-center rounded-full border border-white/25 bg-white/10 text-4xl font-black backdrop-blur">
                    MM
                  </div>
                  <p className="mt-8 text-2xl font-black">JUDr. Mojmír Mochnáč</p>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-emerald-100">Rozvoj ľudí, výkon tímov, inovácie</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-200 bg-white py-14">
          <div className="mx-auto grid max-w-7xl gap-4 px-5 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title} className="rounded-lg border border-zinc-200 bg-stone-50 p-6">
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-md bg-emerald-100 text-emerald-800">
                    <Icon size={22} />
                  </div>
                  <h2 className="text-lg font-black">{pillar.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{pillar.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-widest text-emerald-700">Profil</p>
              <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-4xl">O mne</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-zinc-700">
              <p>
                Som manažér s praxou v riadení tímov a zvyšovaní výkonu organizácií. Pomáham CEO a majiteľom budovať konkurenčnú výhodu firmy prostredníctvom systematického rozvoja ľudí a riadených inovácií.
              </p>
              <p>
                Firmám pomáham pracovať s inováciami komplexne: od identifikovania príležitostí, cez výber vhodných metód, až po praktické zavedenie do každodenného fungovania organizácie.
              </p>
              <p>
                Nezostávam pri návrhoch. Nastavujem jasné ciele, zodpovednosti, meranie výkonu a podporujem tímy pri implementácii konkrétnych riešení.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-zinc-200 bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-widest text-emerald-700">Čo ponúkam</p>
              <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-4xl">Praktická podpora pre rast ľudí aj výsledkov</h2>
              <p className="mt-5 text-lg leading-8 text-zinc-600">
                Zameriavam sa na riešenia, ktoré sú zrozumiteľné, použiteľné v praxi a merateľné v dopade na tím alebo organizáciu.
              </p>
            </div>
            <div className="grid gap-3">
              {services.map((service) => (
                <div key={service} className="flex items-start gap-3 rounded-lg border border-zinc-200 bg-stone-50 p-4">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-700" size={20} />
                  <span className="font-semibold text-zinc-800">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-black uppercase tracking-widest text-emerald-700">Silné stránky</p>
              <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-4xl">Gallup profil v praxi</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {strengths.map((item) => (
                <article key={item} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
                  <Brain className="mb-4 text-amber-700" size={24} />
                  <p className="text-sm font-bold leading-6 text-zinc-700">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-950 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="text-sm font-black uppercase tracking-widest text-emerald-300">Startupy a LegalTech</p>
              <h2 className="mt-3 text-3xl font-black tracking-normal">Skúsenosť s digitálnymi riešeniami</h2>
            </div>
            <div className="grid gap-4 lg:col-span-2 md:grid-cols-2">
              <article className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                <BriefcaseBusiness className="mb-5 text-emerald-300" />
                <h3 className="text-xl font-black">Startupový projekt eAdvocat</h3>
                <p className="mt-3 leading-7 text-zinc-300">Praktické overovanie konceptu digitálneho riešenia pre jednoduchší prístup k právnym službám.</p>
              </article>
              <article className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                <Lightbulb className="mb-5 text-amber-300" />
                <h3 className="text-xl font-black">LegalTech projekt</h3>
                <p className="mt-3 leading-7 text-zinc-300">Analýza potrieb používateľov, návrh funkcionalít a postupné zlepšovanie riešenia na trhu.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-widest text-emerald-700">Kontakt</p>
              <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-4xl">Spojme sa</h2>
              <p className="mt-5 text-lg leading-8 text-zinc-600">Máte záujem o spoluprácu, tréning alebo konzultáciu? Napíšte alebo zavolajte.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <a href="mailto:mojmir.mochnac@gmail.com" className="rounded-lg border border-zinc-200 bg-stone-50 p-5 transition hover:border-emerald-300">
                <Mail className="mb-4 text-emerald-700" />
                <p className="text-sm font-bold text-zinc-500">E-mail</p>
                <p className="mt-1 break-words font-black">mojmir.mochnac@gmail.com</p>
              </a>
              <a href="tel:+421915857748" className="rounded-lg border border-zinc-200 bg-stone-50 p-5 transition hover:border-emerald-300">
                <Phone className="mb-4 text-emerald-700" />
                <p className="text-sm font-bold text-zinc-500">Telefón</p>
                <p className="mt-1 font-black">+421 915 857 748</p>
              </a>
              <div className="rounded-lg border border-zinc-200 bg-stone-50 p-5">
                <MapPin className="mb-4 text-emerald-700" />
                <p className="text-sm font-bold text-zinc-500">Lokalita</p>
                <p className="mt-1 font-black">Slovensko</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-stone-50 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 JUDr. Mojmír Mochnáč</p>
          <p>Rozvoj pracovníkov, komunikácia a inovačné príležitosti.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
