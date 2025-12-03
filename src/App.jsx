import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, BarChart3, Shield, Cpu, Activity, TrendingUp, Mail, ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';

// --- Data Constants ---

const TEAM_MEMBERS = [
  {
    name: "Pranav Singhal",
    role: "Co-Founder",
    creds: "B.Tech + M.Tech (Robotics), IIT Madras",
    desc: "Former Head, Avishkar Hyperloop. Expert in power electronics systems & pack level designs.",
    image: "/image_f17abf.png" 
  },
  {
    name: "Nachiketh Grandhi",
    role: "Co-Founder",
    creds: "B.Tech + M.Tech (EV), IIT Madras",
    desc: "Team Lead, SENAI Battery Simulations. 4+ years of experience in cell degradation modelling.",
    image: "/image_f17ac5.png"
  },
  {
    name: "Prof. Raghunathan Rengaswamy",
    role: "Mentor",
    creds: "Institute Chair Professor, IIT Madras",
    desc: "Dean of Global Engagement. Chemical Engineering expert guiding the technical vision.",
    image: "/image_f17ae1.png"
  }
];

const FEATURES = [
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Physics-Based Models",
    description: "Unlike empirical black-box models, we use first-principles electrochemical modeling to predict internal cell states."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Degradation-Aware Dispatch",
    description: "Our optimizer balances immediate revenue against long-term degradation costs to maximize lifetime IRR."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Transparent SoH",
    description: "No more guesswork. Get explainable, actionable insights into your battery's State of Health and Remaining Useful Life."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Hardware Agnostic",
    description: "Seamlessly integrates with greenfield projects or existing brownfield sites, regardless of the BMS/PCS vendor."
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/Wattforge Logo.png" alt="Wattforge Logo" className="h-12 w-auto" />
            <div className="hidden md:block">
              <span className="block text-xl font-bold tracking-tight text-slate-900 leading-none">WATTFORGE</span>
              <span className="block text-xs font-semibold tracking-wider text-amber-600">TECHNOLOGIES</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Technology', 'Solution', 'Team'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-slate-600 hover:text-amber-600 font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('contact')}
              className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-lg shadow-amber-500/30 text-sm"
            >
              Contact Us
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-800">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
            {['Technology', 'Solution', 'Team', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-slate-50 hover:text-amber-600 rounded-md"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-slate-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider mb-6">
          <Zap className="w-3 h-3" />
          Born at SenAI Labs, IIT Madras
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          Maximizing BESS Lifetime Value with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Physics-Based Intelligence</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 mb-10">
          The first Energy Management System that distinguishes itself by predicting battery degradation to optimize asset performance and ROI.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center gap-2"
          >
            Partner With Us <ArrowRight className="w-4 h-4" />
          </button>
          <button 
            onClick={() => document.getElementById('solution').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
          >
            Explore Tech
          </button>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  return (
    <div className="bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
          <div className="p-4">
            <div className="text-4xl font-bold text-amber-500 mb-2">67%</div>
            <div className="text-slate-400 text-sm uppercase tracking-wide">Of Project CAPEX is Battery</div>
          </div>
          <div className="p-4">
            <div className="text-4xl font-bold text-amber-500 mb-2">~12%</div>
            <div className="text-slate-400 text-sm uppercase tracking-wide">Potential Drop in LCOS</div>
          </div>
          <div className="p-4">
            <div className="text-4xl font-bold text-amber-500 mb-2">+INR 13 lakh</div>
            <div className="text-slate-400 text-sm uppercase tracking-wide">Value unlocked per MWh</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Solution = () => {
  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">The Wattforge Advantage</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Traditional EMS solutions treat batteries as infinite resources. We treat them as depreciating assets that need precise management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div key={index} className="group p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-amber-500 mb-6 shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section id="technology" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase mb-4">
              Our Methodology
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              From Data to Decision
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              The Wattforge Model Suite integrates seamlessly into your operations to turn raw telemetry into profit-optimizing dispatch schedules.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Inputs", desc: "BMS Telemetry, HVAC data, Grid Regulations, Market Prices" },
                { title: "Physics-Based Modeling", desc: "Real-time estimation of degradation & system performance" },
                { title: "Cost-Aware Optimizer", desc: "Balances immediate revenue vs. lifetime asset degradation" },
                { title: "Optimal Dispatch", desc: "Automated setpoints (C-rate, Temp) sent to PCS/BMS" }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{step.title}</h4>
                    <p className="text-slate-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 relative z-10">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="font-semibold text-slate-700">Baseline EMS</span>
                  <span className="text-red-500 font-bold">Rapid Degradation</span>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="text-slate-300 transform rotate-90" />
                </div>
                <div className="p-6 bg-amber-50 rounded-lg border border-amber-200 text-center">
                  <div className="text-amber-600 font-bold text-sm mb-2 uppercase tracking-wide">Wattforge Optimizer</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">+12% Profitability</h3>
                  <p className="text-slate-600 text-sm">By extending battery life and reducing augmentation costs</p>
                </div>
              </div>
            </div>
            {/* Decorative elements behind */}
            <div className="absolute top-10 -right-10 w-full h-full bg-slate-200 rounded-2xl -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet the Experts</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Born at SenAI Labs of IIT Madras, our team combines deep academic research with industry-hardened engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative mb-6 group">
                <div className="absolute inset-0 bg-amber-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 transform scale-105"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-48 h-48 rounded-full object-cover border-4 border-slate-50 shadow-lg"
                  onError={(e) => {e.target.src = 'https://via.placeholder.com/150?text=Member';}}
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
              <span className="text-amber-600 font-bold text-sm mb-2">{member.role}</span>
              <p className="text-xs font-semibold text-slate-500 mb-3 px-4">{member.creds}</p>
              <p className="text-slate-600 text-sm px-4 leading-relaxed">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to optimize your BESS assets?</h2>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
          We are actively looking to co-develop our solution with RE Developers, IPPs, and DISCOMs. Let's discuss how Wattforge can add value to your project.
        </p>
        
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl inline-flex flex-col items-center">
          <Mail className="w-10 h-10 text-amber-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
          <a href="mailto:ed21b047@smail.iitm.ac.in" className="text-2xl md:text-3xl font-bold text-white hover:text-amber-500 transition-colors mb-2 break-all">
            ed21b047@smail.iitm.ac.in
          </a>
          <p className="text-slate-400 mt-4">IIT Madras, Chennai, India</p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <img src="/Wattforge Logo.png" alt="Logo" className="h-8 w-auto opacity-80 grayscale hover:grayscale-0 transition-all" />
          <span className="text-sm font-semibold tracking-wider text-slate-300">WATTFORGE TECHNOLOGIES</span>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Wattforge Technologies. All rights reserved.
        </div>
        <div className="flex gap-6">
            <a href="#" className="hover:text-amber-500 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      <Hero />
      <StatsSection />
      <Solution />
      <HowItWorks />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
