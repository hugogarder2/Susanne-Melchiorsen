import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { 
  Hammer, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Euro, 
  ChevronRight, 
  Star, 
  Award, 
  CheckCircle2, 
  Menu, 
  X,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Navigation
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// --- Utility Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Page Components ---

const Hero = () => (
  <section className="relative h-screen-safe flex items-center justify-center overflow-hidden" aria-label="Velkommen">
    <div className="absolute inset-0">
      <img 
        src="/hero_bg_sm.png" 
        alt="Afslappende omgivelser i eksklusiv skønhedsklinik" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
        crossOrigin="anonymous"
        fetchPriority="high"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
    </div>
    
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="flex flex-col items-center mb-8">
          <div className="bg-white/95 backdrop-blur-md p-6 rounded-none shadow-2xl mb-6 border border-white/20">
            <img src="/company_logo.png" alt="Susanne Melchiorsen logo" className="h-16 md:h-24 w-auto object-contain" />
          </div>
          <Badge variant="outline" className="text-white border-white/30 px-4 py-1 text-sm tracking-widest uppercase font-mono bg-black/20 backdrop-blur-sm">
            Etableret 2010 — Susanne Melchiorsen
          </Badge>
        </div>
        <h1 className="text-5xl md:text-8xl text-white mb-8 leading-[1.1]">
          Skønhed, der stråler <span className="italic font-serif">indefra</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
          Eksklusiv skønhedsklinik i hjertet af København. Skræddersyede behandlinger med fokus på resultater og ultimativ velvære.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button size="lg" className="bg-white text-black hover:bg-white/90 text-lg px-10 h-14 min-w-[44px] min-h-[44px] rounded-none transition-all hover:tracking-widest capitalize">
            Book en behandling
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10 text-lg px-10 h-14 min-w-[44px] min-h-[44px] rounded-none">
            Se vores behandlinger
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

const TrustMetrics = () => (
  <section className="py-24 bg-sand border-y border-stone/10" aria-label="Nøgletal og garantier">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-stone" role="list">
        {[
          { icon: <ShieldCheck className="w-8 h-8 clay-accent" aria-hidden="true" />, label: "Certificeret Kliniker", sub: "Din tryghed" },
          { icon: <Star className="w-8 h-8 clay-accent" aria-hidden="true" />, label: "4.9/5 Trustpilot", sub: "Baseret på 250+ anmeldelser" },
          { icon: <Award className="w-8 h-8 clay-accent" aria-hidden="true" />, label: "Beauty Award", sub: "Vinder 2023" },
          { icon: <Clock className="w-8 h-8 clay-accent" aria-hidden="true" />, label: "15+ års erfaring", sub: "Ekspert i hudpleje" }
        ].map((item, i) => (
          <div key={i} className="text-center" role="listitem">
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-lg md:text-xl font-semibold mb-1 uppercase tracking-tight">{item.label}</h3>
            <p className="text-xs md:text-sm text-stone/60 font-mono italic">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ReferenceProjects = () => (
  <section className="py-32 bg-white">
    <div className="container mx-auto px-4 text-stone">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl mb-6 font-serif">Bevis kvaliteten, <span className="italic">påstå den ikke</span></h2>
          <p className="text-lg text-stone/70">
            Vi gemmer os ikke bag vage løfter. Her er nogle af de projekter, vi er mest stolte af at have udført.
          </p>
        </div>
        <Link to="/projekter">
          <Button variant="link" className="text-lg uppercase tracking-widest gap-2 clay-accent">
            Se alle projekter <ChevronRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { 
            title: "Villa Copenhagen", 
            description: "Totalrenovering af facade og trapper i originale mursten.", 
            image: "/modern_facade_1779033331313.png",
            tag: "Facade"
          },
          { 
            title: "Østerbro Lejlighed", 
            description: "Eksklusivt badeværelse med sildebensfliser og microcement.", 
            image: "/products_sm.png",
            tag: "Badeværelse"
          },
          { 
            title: "Moderne Tilbygning", 
            description: "Opførelse af 60m2 tilbygning i harmoni med hovedhusets arkitektur.", 
            image: "/products_sm.png",
            tag: "Tilbygning"
          }
        ].map((project, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden mb-6 aspect-[4/5]">
              <img 
                src={project.image} 
                alt={`Referenceprojekt: ${project.title} — ${project.description}`} 
                className="w-full h-full object-cover transition-transform duration-500 ease-out scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
                loading="lazy"
                width={800}
                height={1000}
              />
              <Badge className="absolute top-6 left-6 rounded-none bg-black/80 backdrop-blur-sm text-white border-none uppercase tracking-widest px-4 py-1">
                {project.tag}
              </Badge>
            </div>
            <h3 className="text-2xl mb-2 font-serif">{project.title}</h3>
            <p className="text-stone/60 leading-relaxed text-justify-masonry">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HistorySection = () => (
  <section className="py-32 bg-stone text-white overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 border border-white/10 z-0" />
          <img 
            src="/facial_sm.png" 
            alt="Simon og Christian Banh — Ejerne af firmaet" 
            className="relative z-10 w-full rounded-none transition-all duration-1000 border border-white/5"
            referrerPolicy="no-referrer"
            crossOrigin="anonymous"
            loading="lazy"
            width={1000}
            height={800}
          />
          <div className="absolute -bottom-6 -right-6 p-8 bg-clay-accent text-white z-20 hidden md:block">
            <p className="text-sm uppercase tracking-widest font-mono">Susanne Melchiorsen</p>
            <p className="text-2xl italic font-serif">"Vi lover kun det, vi kan holde."</p>
          </div>
        </div>
        
        <div>
          <h2 className="text-4xl md:text-6xl mb-10 leading-tight font-serif">
            Gennemsigtighed er <span className="italic text-clay-accent">vores grundsten</span>
          </h2>
          <p className="text-xl text-white/70 mb-8 leading-relaxed font-light">
            Vi er Simon og Christian Banh – to brødre med en fælles passion for det gode håndværk. Efter 10 år som ansatte i store firmaer, besluttede vi at starte Susanne Melchiorsen for at bringe stoltheden og den personlige kontakt tilbage til murerfaget.
          </p>
          <div className="space-y-6 mb-12">
            {[
              "Ingen skjulte gebyrer – altid fast pris eller kendt timepris.",
              "Vi rydder op efter os selv – hver dag.",
              "Direkte kontakt til mester gennem hele forløbet."
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-clay-accent" />
                <span className="text-lg text-white/80">{text}</span>
              </div>
            ))}
          </div>
          <Button size="lg" className="bg-clay-accent hover:bg-clay-accent/80 text-white px-10 h-14 rounded-none w-full md:w-auto uppercase tracking-widest">
            Læs hele vores historie
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const PricingTable = () => (
  <section className="py-32 bg-sand/30">
    <div className="container mx-auto px-4 text-stone">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl mb-6 font-serif">Ærlige priser <span className="italic">uden dikkedarer</span></h2>
        <p className="text-lg text-stone/60 font-light">Vi ved, at prisen betyder noget. Her er vores faste priser på standardopgaver, så du har et sammenligningsgrundlag.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Servicebesøg", price: "795,-", desc: "Mindre reparationer, kig efter fliser, fugeskift.", unit: "inkl. moms / time" },
          { title: "Badeværelse", price: "fra 85.000,-", desc: "Totalrenovering inkl. VVS og El.", unit: "gennemsnitspris" },
          { title: "Indkørsel", price: "750,-", desc: "Lægning af fliser/sten inkl. forarbejde.", unit: "pr. m2" }
        ].map((p, i) => (
          <Card key={i} className="rounded-none border-stone/10 bg-white hover:shadow-2xl transition-all group overflow-hidden">
            <CardHeader className="text-center pt-10">
              <CardTitle className="text-xl uppercase tracking-widest mb-4 group-hover:text-clay-accent transition-colors font-sans">{p.title}</CardTitle>
              <div className="text-4xl font-mono mb-2">{p.price}</div>
              <p className="text-xs text-stone/40 uppercase tracking-tighter font-mono">{p.unit}</p>
            </CardHeader>
            <CardContent className="text-center pb-10">
              <Separator className="my-6 mx-auto w-12 bg-stone/10" />
              <p className="text-stone/60 px-6 font-light">{p.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const ServicesList = () => (
  <section className="py-32 bg-white">
    <div className="container mx-auto px-4 text-stone">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-5xl mb-12 font-serif">Hvad vi gør <span className="italic">allerbedst</span></h2>
          <div className="space-y-4">
            {[
              { title: "Facade & Murværk", desc: "Omfugning, reparation af sætningsskader og afrensning." },
              { title: "Kropspleje", desc: "Fra de små flisereparationer til den helt store drøm." },
              { title: "Flise & Belægning", desc: "Indkørsler, terrasser og præcisionsarbejde indendørs." },
              { title: "Totalrenovering", desc: "Vi koordinerer hele dit projekt fra start til slut." }
            ].map((s, i) => (
              <Accordion type="single" collapsible key={i} className="w-full">
                <AccordionItem value={`item-${i}`} className="border-b border-stone/10 first:border-t-0 p-0">
                  <AccordionTrigger className="text-2xl font-serif py-6 hover:no-underline hover:text-clay-accent transition-colors">
                    {s.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-stone/60 pb-8 leading-relaxed font-light">
                    {s.desc} <br />
                    <Link to={`/services`} className="inline-block mt-4 text-sm uppercase tracking-widest underline underline-offset-8 clay-accent font-medium">Læs mere her</Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-6">
            <img src="/modern_facade_1779033331313.png" className="w-full h-[300px] object-cover" alt="Murerarbejde detalje" referrerPolicy="no-referrer" crossOrigin="anonymous" loading="lazy" />
            <img src="/products_sm.png" className="w-full h-[200px] object-cover" alt="Fliselægning" referrerPolicy="no-referrer" crossOrigin="anonymous" loading="lazy" />
          </div>
          <div className="space-y-6 mt-12">
            <img src="/products_sm.png" className="w-full h-[200px] object-cover" alt="Badeværelse fliser" referrerPolicy="no-referrer" crossOrigin="anonymous" loading="lazy" />
            <img src="/masonry_details_1779033315706.png" className="w-full h-[400px] object-cover" alt="Murer værktøj" referrerPolicy="no-referrer" crossOrigin="anonymous" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AreasCovered = () => (
  <section className="py-24 bg-stone text-white/90" aria-label="Dækningsområder">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl mb-12 font-serif">Vi dækker hele <span className="italic text-clay-accent">København</span></h2>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-4xl mx-auto">
        {["København K", "Østerbro", "Nørrebro", "Vesterbro", "Frederiksberg", "Valby", "Hellerup", "Gentofte", "Amager", "Hvidovre", "Rødovre", "Herlev"].map((area, i) => (
          <Link key={i} to={`/kontakt`} className="text-lg hover:text-clay-accent transition-colors font-mono">
            {area} <span className="text-white/20 ml-2">/</span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

// --- NEW: Testimonials Section (Key insight #6 — Kundeanmeldelser) ---

const Testimonials = () => (
  <section className="py-32 bg-sand/50" aria-label="Kundeanmeldelser">
    <div className="container mx-auto px-4 text-stone">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <Badge variant="outline" className="mb-6 uppercase tracking-[0.2em] text-clay-accent border-clay-accent/30 py-1.5 px-4 font-mono text-[10px]">
          250+ anmeldelser på Trustpilot
        </Badge>
        <h2 className="text-4xl md:text-6xl mb-6 font-serif">Det siger vores <span className="italic">kunder</span></h2>
        <p className="text-lg text-stone/60 font-light">
          Vi lader vores arbejde tale for sig selv — og vores kunder gør det samme.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Maria & Thomas Jensen",
            location: "Østerbro",
            project: "Totalrenovering af badeværelse",
            quote: "Fra start til slut var kommunikationen i top. Simon kom personligt forbi til opmåling, og prisen holdt præcis som aftalt. Vores badeværelse er blevet en drøm — og de ryddede endda op efter sig selv hver eneste dag.",
            stars: 5
          },
          {
            name: "Henrik Møller",
            location: "Gentofte",
            project: "Facade omfugning",
            quote: "Jeg havde fået tilbud fra 4 andre murerfirmaer. Susanne Melchiorsen var ikke de billigste, men de var de eneste, der tog sig tid til at forklare præcis hvad der var galt med min facade, og hvorfor. Det skabte tillid. Resultatet er fantastisk.",
            stars: 5
          },
          {
            name: "Sofie Andersen",
            location: "Frederiksberg",
            project: "Indkørsel i chaussesten",
            quote: "Christian og hans hold lagde vores nye indkørsel på 3 dage — præcis som lovet. Det er de små detaljer, der imponerer: de beskyttede vores beplantning, og fugerne er helt lige. Vores naboer har allerede spurgt efter deres nummer.",
            stars: 5
          }
        ].map((review, i) => (
          <Card key={i} className="rounded-none border-stone/10 bg-white overflow-hidden">
            <CardContent className="p-8 md:p-10">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-clay-accent text-clay-accent" aria-hidden="true" />
                ))}
              </div>
              <p className="text-stone/70 leading-relaxed mb-8 font-light italic text-lg">
                "{review.quote}"
              </p>
              <Separator className="mb-6 bg-stone/10" />
              <div>
                <p className="font-semibold text-stone">{review.name}</p>
                <p className="text-sm text-stone/50 font-mono">{review.location} — {review.project}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <a 
          href="https://dk.trustpilot.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-mono clay-accent hover:underline underline-offset-8"
        >
          Læs alle anmeldelser på Trustpilot <ChevronRight className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
);

// --- NEW: Process Section (Key insight — Sådan arbejder vi) ---

const ProcessSection = () => (
  <section className="py-32 bg-white" aria-label="Vores arbejdsproces">
    <div className="container mx-auto px-4 text-stone">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-6xl mb-6 font-serif">Sådan <span className="italic">arbejder vi</span></h2>
        <p className="text-lg text-stone/60 font-light">
          Fra første kontakt til færdigt resultat — vi holder dig informeret hele vejen.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {[
          {
            step: "01",
            title: "Gratis besøg",
            desc: "Vi kommer ud og ser opgaven an. Ingen forpligtelser, ingen tidsfrister. Vi lytter til dine ønsker og rådgiver ærligt."
          },
          {
            step: "02",
            title: "Fast tilbud",
            desc: "Du modtager et detaljeret tilbud med fast pris indenfor 48 timer. Ingen overraskelser, ingen tillæg bagefter."
          },
          {
            step: "03",
            title: "Udførelse",
            desc: "Vi starter til aftalt tid og holder dig løbende opdateret. Vi rydder op efter os selv — hver dag."
          },
          {
            step: "04",
            title: "Aflevering",
            desc: "Vi gennemgår resultatet sammen med dig. Du betaler først, når du er 100% tilfreds. 5 års garanti på alt arbejde."
          }
        ].map((item, i) => (
          <div key={i} className="text-center md:text-left group">
            <div className="text-5xl font-mono clay-accent mb-6 font-light">{item.step}</div>
            <h3 className="text-xl font-serif mb-4">{item.title}</h3>
            <p className="text-stone/60 font-light leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- NEW: BYG Garanti Section (Key insight #5 — Kvalitetsordning) ---

const BygGarantiSection = () => (
  <section className="py-24 bg-sand border-y border-stone/10" aria-label="BYG Garanti">
    <div className="container mx-auto px-4 text-stone">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <div>
          <Badge variant="outline" className="mb-6 uppercase tracking-[0.2em] text-stone/60 border-stone/20 py-1.5 px-4 font-mono text-[10px]">
            Din tryghed
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-8 font-serif">Dækket af <span className="italic text-clay-accent">BYG Garanti</span></h2>
          <p className="text-lg text-stone/70 mb-8 font-light leading-relaxed">
            Som medlem af BYG Garanti-ordningen er du som kunde beskyttet, hvis der skulle opstå fejl eller mangler i vores arbejde. Det er din forsikring for, at vi står ved det, vi leverer.
          </p>
          <div className="space-y-4 mb-10">
            {[
              "Op til 10 års garanti på udført arbejde",
              "Uvildig tredjepart håndterer eventuelle tvister",
              "Dækker både materialer og udførelse",
              "Gælder alle private byggesager"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-clay-accent mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-stone/80">{text}</span>
              </div>
            ))}
          </div>
          <a 
            href="https://www.byggaranti.dk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-mono clay-accent hover:underline underline-offset-8"
          >
            Læs mere om BYG Garanti <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
        <div className="relative h-full min-h-[400px] flex items-center justify-center overflow-hidden border border-stone/10">
          <img 
            src="/masonry_details_1779033315706.png" 
            alt="Murer der glatter fuger ud" 
            className="absolute inset-0 w-full h-full object-cover" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-stone/60 mix-blend-multiply"></div>
          <div className="relative z-10 bg-white/95 backdrop-blur p-10 md:p-12 text-center max-w-[80%] mx-auto shadow-2xl">
            <ShieldCheck className="w-16 h-16 clay-accent mx-auto mb-6" aria-hidden="true" />
            <p className="text-2xl font-serif italic text-stone">Kvalitet du kan stole på</p>
            <p className="text-xs font-mono text-stone/50 mt-4 uppercase tracking-widest">Medlem siden 2019</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- NEW: Latest News / Instagram Feed Section ---

const LatestNewsSection = () => (
  <section className="py-24 bg-white" aria-label="Aktuelt fra byggepladsen">
    <div className="container mx-auto px-4 text-stone">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
        <div>
          <Badge variant="outline" className="mb-4 uppercase tracking-[0.2em] text-stone/60 border-stone/20 py-1.5 px-4 font-mono text-[10px]">
            Direkte fra hverdagen
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-4 font-serif">Fra <span className="italic clay-accent">byggepladsen</span></h2>
          <p className="text-lg text-stone/60 font-light">Følg med i vores hverdag og se hvad vi arbejder på lige nu.</p>
        </div>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-mono clay-accent hover:underline underline-offset-8"
        >
          Følg os på Instagram <Instagram className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          "/masonry_details_1779033315706.png",
          "/facial_sm.png",
          "/products_sm.png",
          "/products_sm.png"
        ].map((img, i) => (
          <div key={i} className="aspect-square relative group overflow-hidden bg-stone/5">
            <img src={img} alt={`Billede fra byggepladsen ${i+1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={400} height={400} />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Instagram className="w-8 h-8 text-white" aria-hidden="true" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-sand pt-32 pb-16 border-t border-stone/10 text-stone" role="contentinfo">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="md:col-span-2">
          <Link to="/" className="text-3xl font-serif mb-8 block group" aria-label="Susanne Melchiorsen — Gå til forsiden">
            Banh <span className="clay-accent">&</span> Banh
          </Link>
          <p className="text-stone/60 text-lg mb-8 max-w-sm font-light">
            Grundlagt på kærlighed til faget og respekt for kunden. Vi leverer håndværk, der holder.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-clay-accent transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Følg os på Instagram"><Instagram className="w-6 h-6 shrink-0" aria-hidden="true" /></a>
            <a href="#" className="hover:text-clay-accent transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Følg os på Facebook"><Facebook className="w-6 h-6 shrink-0" aria-hidden="true" /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-stone/40 mb-8">Kontakt</h4>
          <ul className="space-y-4 font-light">
            <li className="flex items-center gap-3 text-lg"><Phone className="w-4 h-4 text-clay-accent" /> +45 12 34 56 78</li>
            <li className="flex items-center gap-3 text-lg"><Mail className="w-4 h-4 text-clay-accent" /> hej@susannemelchiorsen.dk</li>
            <li className="flex items-start gap-3 text-lg">
              <MapPin className="w-4 h-4 text-clay-accent mt-2 shrink-0" /> 
              <span>Værkstedsvænget 12<br />2100 København Ø</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-stone/40 mb-8">Links</h4>
          <ul className="space-y-4 font-light">
            <li><Link to="/projekter" className="text-lg hover:text-clay-accent transition-colors">Referenceprojekter</Link></li>
            <li><Link to="/services" className="text-lg hover:text-clay-accent transition-colors">Vores Services</Link></li>
            <li><Link to="/om-os" className="text-lg hover:text-clay-accent transition-colors">Vores Historie</Link></li>
            <li><Link to="/kontakt" className="text-lg hover:text-clay-accent transition-colors">Få et tilbud</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-stone/10 flex flex-col md:flex-row justify-between items-center gap-4 text-stone/40 text-xs font-mono">
        <p>© 2024 Susanne Melchiorsen. CVR: 12345678</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-stone transition-colors underline-offset-4 underline decoration-stone/20">Handelsbetingelser</a>
          <a href="#" className="hover:text-stone transition-colors underline-offset-4 underline decoration-stone/20">Privatlivspolitik</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Utils & Nav ---

const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(" ");

const navItems = [
  { name: "Forside", href: "/" },
  { name: "Projekter", href: "/projekter" },
  { name: "Services", href: "/services" },
  { name: "Om os", href: "/om-os" },
  { name: "Kontakt", href: "/kontakt" },
];

const EXPAND_SCROLL_THRESHOLD = 80;

const containerVariants = {
  expanded: {
    y: 0,
    opacity: 1,
    width: "auto",
    transition: {
      y: { type: "spring", damping: 18, stiffness: 250 },
      opacity: { duration: 0.3 },
      type: "spring",
      damping: 20,
      stiffness: 300,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  collapsed: {
    y: 0,
    opacity: 1,
    width: "3rem",
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const logoVariants = {
  expanded: { opacity: 1, x: 0, rotate: 0, transition: { type: "spring", damping: 15 } },
  collapsed: { opacity: 0, x: -25, rotate: -180, transition: { duration: 0.3 } },
};

const itemVariants = {
  expanded: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", damping: 15 } },
  collapsed: { opacity: 0, x: -20, scale: 0.95, transition: { duration: 0.2 } },
};

const collapsedIconVariants = {
    expanded: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
    collapsed: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 300,
        delay: 0.15,
      }
    },
}

const MotionLink = motion.create(Link);

export function AnimatedNavFramer() {
  const [isExpanded, setExpanded] = React.useState(true);
  
  const { scrollY } = useScroll();
  const lastScrollY = React.useRef(0);
  const scrollPositionOnCollapse = React.useRef(0);
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    
    if (isExpanded && latest > previous && latest > 150) {
      setExpanded(false);
      scrollPositionOnCollapse.current = latest; 
    } 
    else if (!isExpanded && latest < previous && (scrollPositionOnCollapse.current - latest > EXPAND_SCROLL_THRESHOLD)) {
      setExpanded(true);
    }
    
    lastScrollY.current = latest;
  });

  const handleNavClick = (e: React.MouseEvent) => {
    if (!isExpanded) {
      e.preventDefault();
      setExpanded(true);
    }
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={containerVariants}
        whileHover={!isExpanded ? { scale: 1.1 } : {}}
        whileTap={!isExpanded ? { scale: 0.95 } : {}}
        onClick={handleNavClick}
        className={cn(
          "flex items-center overflow-hidden rounded-full border border-stone/20 bg-white/90 shadow-lg backdrop-blur-md h-12 text-stone",
          !isExpanded && "cursor-pointer justify-center"
        )}
      >
        <motion.div
          variants={logoVariants}
          className="flex-shrink-0 flex items-center font-semibold pl-4 pr-2"
        >
          <Navigation className="h-5 w-5 text-clay-accent" />
        </motion.div>
        
        <motion.div
          className={cn(
            "flex items-center gap-1 sm:gap-4 pr-4",
            !isExpanded && "pointer-events-none"
          )}
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <MotionLink
                key={item.name}
                to={item.href}
                variants={itemVariants}
                onClick={(e) => e.stopPropagation()}
                className={cn(
                  "text-xs uppercase tracking-widest font-medium transition-colors px-2 py-1",
                  isActive ? "text-clay-accent" : "text-stone/60 hover:text-stone"
                )}
              >
                {item.name}
              </MotionLink>
            );
          })}
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            variants={collapsedIconVariants}
            animate={isExpanded ? "expanded" : "collapsed"}
          >
            <Menu className="h-5 w-5" />
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
}

// --- Layout Component ---

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-clay-accent selection:text-white bg-white">
      <ScrollToTop />
      
      {/* §1: skip-links — Skip to main content for keyboard users */}
      <a href="#main-content" className="skip-link">Spring til hovedindhold</a>
      
      {/* Navigation */}
      <AnimatedNavFramer />

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col p-8 md:p-16"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setIsMenuOpen(false)} aria-label="Luk navigation" className="min-w-[44px] min-h-[44px] flex items-center justify-center">
                <X className="w-10 h-10 text-stone" aria-hidden="true" />
              </button>
            </div>
            <nav className="flex flex-col gap-8" aria-label="Mobilnavigation">
              {['Projekter', 'Services', 'Om os', 'Kontakt'].map((item) => (
                <Link 
                  key={item} 
                  to={`/${item.toLowerCase().replace(/ /g, '-')}`}
                  className="text-5xl font-serif text-stone hover:text-clay-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-12 border-t border-stone/10">
              <p className="text-xl mb-6 italic font-serif text-stone">Lad os tale om dit projekt</p>
              <Button size="lg" className="w-full bg-clay-accent h-20 min-h-[44px] rounded-none text-xl uppercase tracking-widest text-white">
                Ring til os nu
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="main-content" className="flex-grow" role="main">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

// --- Main Page ---

const HomePage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    {/* 1. HOOK — First impression */}
    <Hero />
    
    {/* 2. TRUST — Instant credibility */}
    <TrustMetrics />
    
    {/* 3. STORY — Why us (emotional connection) */}
    <HistorySection />
    
    {/* 4. SERVICES — What we do */}
    <ServicesList />
    
    {/* 5. PROOF — Show, don't tell */}
    <ReferenceProjects />
    
    {/* 6. SOCIAL PROOF — What others say (NEW) */}
    <Testimonials />
    
    {/* 7. PRICING — Transparency builds trust */}
    <PricingTable />
    
    {/* 8. PROCESS — How we work (NEW) */}
    <ProcessSection />
    
    {/* 9. GUARANTEE — Remove final objections (NEW) */}
    <BygGarantiSection />
    
    {/* 10. GEOGRAPHY — Local relevance */}
    <AreasCovered />
    
    {/* 11. NEWS — Freshness and activity */}
    <LatestNewsSection />
    
    {/* 12. FINAL CTA — Convert */}
    <section className="py-40 bg-sand text-center text-stone" aria-label="Kontakt os">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-5xl md:text-7xl mb-8 font-serif leading-tight">Klar til at starte din <span className="italic">forvandling?</span></h2>
        <p className="text-xl text-stone/60 mb-12 font-light">Vi besvarer alle henvendelser indenfor 24 timer. Det er gratis, det er uforpligtende, og det er professionelt.</p>
        <Button size="lg" className="bg-stone text-white hover:bg-stone/90 text-lg px-12 h-20 min-h-[44px] rounded-none w-full md:w-auto uppercase tracking-[0.2em]">
          Få et hurtigt tilbud nu
        </Button>
      </div>
    </section>
  </motion.div>
);

// --- Page Layout Template ---
const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="relative pt-48 pb-32 border-b border-stone/10 text-center bg-stone overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="/masonry_header_bg_1779033302933.png" alt="" className="w-full h-full object-cover opacity-20" aria-hidden="true" loading="lazy" />
      <div className="absolute inset-0 bg-stone/90 mix-blend-multiply"></div>
    </div>
    <div className="container mx-auto px-4 max-w-3xl relative z-10 text-white">
      <Badge variant="outline" className="mb-8 uppercase tracking-[0.2em] text-clay-accent border-clay-accent/30 py-1.5 px-4 font-mono text-[10px]">Underside / {title}</Badge>
      <h1 className="text-5xl md:text-7xl mb-6 font-serif">{title}</h1>
      <p className="text-xl text-white/70 font-light leading-relaxed">{subtitle}</p>
    </div>
  </div>
);

// --- Full Pages ---

const ServicesPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
    <PageHeader title="Vores Services" subtitle="Fra små reparationer til totalrenovering – vi løser opgaven med samme faglige stolthed og grundighed." />
    <ServicesList />
    <PricingTable />
    <ProcessSection />
  </motion.div>
);

const ProjectsPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
    <PageHeader title="Referenceprojekter" subtitle="Vi er kun så gode som vores seneste byggeprojekt. Gå på opdagelse i vores referencer og bliv inspireret." />
    <ReferenceProjects />
    <Testimonials />
  </motion.div>
);

const AboutPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
    <PageHeader title="Hvem er Susanne Melchiorsen?" subtitle="Mød brødrene bag murerfirmaet, der arbejder målrettet for at bringe stoltheden og den personlige kontakt tilbage til faget." />
    <HistorySection />
    <BygGarantiSection />
  </motion.div>
);

const ContactPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="pt-40 pb-32 container mx-auto px-4 text-stone">
    <div className="max-w-6xl mx-auto">
      <Badge variant="outline" className="mb-8 uppercase tracking-[0.2em] text-clay-accent border-clay-accent/30 py-1.5 px-4 font-mono text-[10px]">Kontakt Os</Badge>
      <h1 className="text-5xl md:text-7xl mb-6 font-serif">Få et <span className="italic clay-accent">uforpligtende</span> tilbud</h1>
      <p className="text-xl text-stone/60 font-light mb-16 max-w-2xl">Beskriv din opgave kort, og vi vender tilbage med et overslag eller et tidspunkt for besigtigelse indenfor 24 timer.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Form */}
        <div className="bg-sand/30 p-8 md:p-12 border border-stone/10">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="navn" className="text-sm font-mono uppercase tracking-widest text-stone/70">Navn *</label>
                <input id="navn" type="text" required className="w-full bg-white border border-stone/20 p-4 min-h-[44px] focus:outline-none focus:border-clay-accent transition-colors" />
              </div>
              <div className="space-y-2">
                <label htmlFor="telefon" className="text-sm font-mono uppercase tracking-widest text-stone/70">Telefon *</label>
                <input id="telefon" type="tel" required className="w-full bg-white border border-stone/20 p-4 min-h-[44px] focus:outline-none focus:border-clay-accent transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-mono uppercase tracking-widest text-stone/70">Email *</label>
              <input id="email" type="email" required className="w-full bg-white border border-stone/20 p-4 min-h-[44px] focus:outline-none focus:border-clay-accent transition-colors" />
            </div>
            <div className="space-y-2">
              <label htmlFor="opgave" className="text-sm font-mono uppercase tracking-widest text-stone/70">Beskriv opgaven *</label>
              <textarea id="opgave" required rows={5} className="w-full bg-white border border-stone/20 p-4 min-h-[44px] focus:outline-none focus:border-clay-accent transition-colors"></textarea>
            </div>
            <Button type="submit" size="lg" className="w-full bg-stone text-white rounded-none h-16 uppercase tracking-[0.2em] hover:bg-stone/90 transition-colors">
              Send Forespørgsel
            </Button>
          </form>
        </div>
        
        {/* Contact info & Image */}
        <div className="space-y-12">
          <div className="relative h-64 md:h-80 w-full overflow-hidden border border-stone/10">
            <img 
              src="/modern_facade_1779033331313.png" 
              alt="Moderne murstensfacade" 
              className="w-full h-full object-cover" 
              loading="lazy" 
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-serif mb-6">Direkte kontakt</h3>
              <ul className="space-y-6 font-light">
                <li className="flex items-center gap-4 text-lg">
                  <div className="w-10 h-10 bg-sand flex items-center justify-center shrink-0 rounded-full" aria-hidden="true"><Phone className="w-4 h-4 text-clay-accent" /></div>
                  <div>
                    <p className="text-xs text-stone/50 font-mono uppercase tracking-widest mb-1">Telefon</p>
                    <p>+45 12 34 56 78</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 text-lg">
                  <div className="w-10 h-10 bg-sand flex items-center justify-center shrink-0 rounded-full" aria-hidden="true"><Mail className="w-4 h-4 text-clay-accent" /></div>
                  <div>
                    <p className="text-xs text-stone/50 font-mono uppercase tracking-widest mb-1">Email</p>
                    <p>hej@susannemelchiorsen.dk</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-4">Åbningstider</h4>
              <div className="flex justify-between py-2 border-b border-stone/10 font-light text-stone/80 text-sm"><span>Man-Tor</span><span>07:00 - 16:00</span></div>
              <div className="flex justify-between py-2 border-b border-stone/10 font-light text-stone/80 text-sm"><span>Fredag</span><span>07:00 - 14:00</span></div>
              <div className="flex justify-between py-2 font-light text-stone/80 text-sm"><span>Weekend</span><span>Lukket</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// Fallback til 404/ukendte sider
const NotFoundPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-48 pb-40 container mx-auto px-4 text-center text-stone">
    <h1 className="text-8xl mb-8 font-serif">404</h1>
    <p className="text-2xl text-stone/60 font-light mb-12">Siden blev ikke fundet.</p>
    <Link to="/">
      <Button size="lg" className="bg-stone text-white rounded-none px-10 h-16 uppercase tracking-widest text-sm">Gå til forsiden</Button>
    </Link>
  </motion.div>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projekter" element={<ProjectsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/om-os" element={<AboutPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

