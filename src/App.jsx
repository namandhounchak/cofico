import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Coffee, MapPin, Clock, Phone } from 'lucide-react';

// Images
const heroBg = '/assets/hero_bg_1778145038458.png';
const coffee1 = '/assets/coffee_1_1778145057391.png';
const coffee2 = '/assets/coffee_2_1778145073884.png';
const coffee3 = '/assets/coffee_3_1778145089521.png';
const aboutImg = '/assets/about_img_1778145107938.png';
const gallery1 = '/assets/gallery_1_1778145127388.png';
const gallery2 = '/assets/gallery_2_1778145145151.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl font-serif font-bold text-cream tracking-wider"
        >
          COFICO<span className="text-gold">.</span>
        </motion.div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center text-sm font-medium tracking-widest uppercase">
          {['Home', 'Menu', 'About', 'Gallery', 'Contact'].map((item, i) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative text-cream/80 hover:text-gold transition-colors duration-300 group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-cream" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full glass flex flex-col items-center py-6 space-y-6"
          >
            {['Home', 'Menu', 'About', 'Gallery', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xl font-serif text-cream hover:text-gold" onClick={() => setMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-matte-black z-10" />
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
          src={heroBg} 
          className="w-full h-full object-cover"
          alt="Coffee house background"
        />
      </div>
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Coffee className="w-12 h-12 text-gold mx-auto mb-6 opacity-80" />
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Brewed with <span className="text-gradient italic">Passion.</span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-cream/80 mb-10 font-light max-w-2xl"
        >
          Experience artisan coffee, handcrafted moments, and cozy café culture in the heart of the city.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="px-8 py-4 bg-gold text-espresso font-semibold uppercase tracking-wider hover:bg-white transition-colors duration-300">
            Explore Menu
          </button>
          <button className="px-8 py-4 border border-gold/50 text-gold font-semibold uppercase tracking-wider hover:bg-gold/10 transition-colors duration-300">
            Visit Cofico
          </button>
        </motion.div>
      </div>

      {/* Decorative Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gold/30 rounded-full blur-[1px]"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 10 
            }}
            animate={{ 
              y: -20,
              x: `+=${Math.random() * 100 - 50}`,
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity,
              delay: Math.random() * 5 
            }}
          />
        ))}
      </div>
    </section>
  );
};

const Featured = () => {
  const coffees = [
    { name: 'Espresso Noir', desc: 'Dark, rich, and intense single-origin espresso.', price: '$4.50', img: coffee1 },
    { name: 'Vanilla Latte', desc: 'Smooth espresso with steamed milk and vanilla bean.', price: '$5.50', img: coffee2 },
    { name: 'Caramel Macchiato', desc: 'Layered espresso, milk, and rich caramel drizzle.', price: '$6.00', img: coffee3 },
  ];

  return (
    <section id="menu" className="py-24 bg-matte-black relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm text-gold tracking-[0.3em] uppercase mb-3">Signature Drinks</h2>
          <h3 className="text-4xl md:text-5xl">Featured Coffee</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {coffees.map((coffee, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-t-full aspect-[3/4] mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img src={coffee.img} alt={coffee.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="text-center">
                <h4 className="text-2xl mb-2 group-hover:text-gold transition-colors">{coffee.name}</h4>
                <p className="text-cream/60 text-sm mb-3 px-4">{coffee.desc}</p>
                <p className="text-gold font-medium">{coffee.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#1a1513] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-sm">
              <img src={aboutImg} alt="Barista making coffee" className="w-full h-full object-cover" />
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold/30 z-0"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <h2 className="text-sm text-gold tracking-[0.3em] uppercase mb-3">Our Story</h2>
              <h3 className="text-4xl md:text-5xl leading-tight">Crafting the perfect cup since 2014.</h3>
            </div>
            
            <p className="text-cream/70 font-light leading-relaxed">
              At Cofico, we believe that coffee is more than just a drink—it's an experience. Born from a passion for artisan roasting and bringing people together, our spaces are designed to be your urban sanctuary. 
            </p>
            <p className="text-cream/70 font-light leading-relaxed">
              Every bean is ethically sourced, carefully roasted, and brewed to perfection by our expert baristas. Step inside, let the aroma embrace you, and find your moment of peace.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/10">
              <div>
                <h4 className="text-4xl text-gold mb-2 font-serif">50K+</h4>
                <p className="text-xs uppercase tracking-wider text-cream/50">Cups Served</p>
              </div>
              <div>
                <h4 className="text-4xl text-gold mb-2 font-serif">15+</h4>
                <p className="text-xs uppercase tracking-wider text-cream/50">Signature Blends</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MenuPreview = () => {
  const [activeTab, setActiveTab] = useState('Hot Coffees');
  const categories = ['Hot Coffees', 'Cold Coffees', 'Desserts'];
  
  const menuItems = {
    'Hot Coffees': [
      { name: 'Classic Espresso', desc: 'Single origin dark roast', price: '$3.50' },
      { name: 'Flat White', desc: 'Espresso with velvety steamed milk', price: '$4.50' },
      { name: 'Mocha Latte', desc: 'Espresso, dark chocolate, steamed milk', price: '$5.50' },
      { name: 'Pour Over', desc: 'Hand-brewed single origin filter coffee', price: '$5.00' },
    ],
    'Cold Coffees': [
      { name: 'Cold Brew Reserve', desc: '18-hour slow steeped cold brew', price: '$5.00' },
      { name: 'Iced Caramel Macchiato', desc: 'Espresso, milk, vanilla, caramel', price: '$6.00' },
      { name: 'Nitro Cold Brew', desc: 'Cold brew infused with nitrogen', price: '$5.50' },
      { name: 'Iced Americano', desc: 'Chilled water and rich espresso', price: '$4.00' },
    ],
    'Desserts': [
      { name: 'Tiramisu', desc: 'Coffee-soaked ladyfingers, mascarpone', price: '$7.50' },
      { name: 'Butter Croissant', desc: 'Flaky, buttery, baked fresh daily', price: '$4.00' },
      { name: 'Dark Chocolate Tart', desc: 'Rich cocoa filling, shortbread crust', price: '$6.50' },
      { name: 'Macarons Set', desc: 'Three seasonal flavor macarons', price: '$5.50' },
    ]
  };

  return (
    <section className="py-24 bg-matte-black relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm text-gold tracking-[0.3em] uppercase mb-3">Discover</h2>
          <h3 className="text-4xl md:text-5xl">Our Menu</h3>
        </div>

        <div className="flex justify-center space-x-4 md:space-x-8 mb-12 border-b border-white/10 pb-4 overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`text-sm md:text-base uppercase tracking-wider whitespace-nowrap px-4 py-2 transition-colors relative ${activeTab === cat ? 'text-gold' : 'text-cream/50 hover:text-cream'}`}
            >
              {cat}
              {activeTab === cat && (
                <motion.div layoutId="underline" className="absolute left-0 bottom--4 w-full h-0.5 bg-gold" />
              )}
            </button>
          ))}
        </div>

        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 md:grid-cols-2 md:gap-x-12"
            >
              {menuItems[activeTab].map((item, i) => (
                <div key={i} className="flex justify-between items-end border-b border-white/5 pb-4 group">
                  <div className="flex-1 pr-4">
                    <h5 className="text-lg mb-1 group-hover:text-gold transition-colors">{item.name}</h5>
                    <p className="text-sm text-cream/50 font-light">{item.desc}</p>
                  </div>
                  <div className="text-gold font-medium">{item.price}</div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="text-center mt-12">
          <button className="text-sm text-gold uppercase tracking-[0.2em] border-b border-gold pb-1 hover:text-white hover:border-white transition-colors">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-[#1a1513]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm text-gold tracking-[0.3em] uppercase mb-3">Atmosphere</h2>
          <h3 className="text-4xl md:text-5xl">The Cofico Experience</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/3] overflow-hidden group relative"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="text-gold tracking-widest uppercase text-sm border border-gold px-6 py-2">View</span>
            </div>
            <img src={gallery1} alt="Cafe interior" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
          </motion.div>
          
          <div className="grid grid-rows-2 gap-6">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="overflow-hidden group relative"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-gold tracking-widest uppercase text-sm border border-gold px-6 py-2">View</span>
              </div>
              <img src={gallery2} alt="Coffee detail" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-espresso overflow-hidden flex items-center justify-center p-8 text-center"
            >
              <div>
                <Coffee className="w-8 h-8 text-gold mx-auto mb-4 opacity-50" />
                <p className="font-serif text-2xl italic text-cream/90">"The perfect blend of modern luxury and cozy comfort."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-matte-black pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="text-3xl font-serif font-bold text-cream tracking-wider mb-6">
              COFICO<span className="text-gold">.</span>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed mb-6 max-w-xs">
              A stylish fusion of a cozy coffee house and an elegant urban café, bringing you the finest artisan roasts in a premium setting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-serif mb-6">Contact Us</h4>
            <div className="space-y-4 text-cream/70 text-sm">
              <p className="flex items-start justify-center md:justify-start">
                <MapPin size={18} className="text-gold mr-3 shrink-0 mt-1" />
                <span>124 Coffee Street, Artisan District<br/>New York, NY 10012</span>
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <Phone size={18} className="text-gold mr-3 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </p>
              <p className="flex items-start justify-center md:justify-start">
                <Clock size={18} className="text-gold mr-3 shrink-0 mt-1" />
                <span>Mon-Fri: 7am - 8pm<br/>Sat-Sun: 8am - 9pm</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-serif mb-6">Newsletter</h4>
            <p className="text-cream/50 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="w-full relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:outline-none focus:border-gold transition-colors text-cream"
              />
              <button type="submit" className="absolute right-0 bottom-3 text-gold text-sm uppercase tracking-wider hover:text-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>
          
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-cream/30">
          <p>&copy; {new Date().getFullYear()} Cofico. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cream/80 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream/80 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="bg-matte-black min-h-screen text-cream font-sans">
      <Navbar />
      <Hero />
      <Featured />
      <About />
      <MenuPreview />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
