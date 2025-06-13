
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import PriceCard from '@/components/PriceCard';
import AnimatedSection from '@/components/AnimatedSection';
import { HAIR, BEAUTY } from '@/lib/services';
import { Sparkles, ChevronDown, ArrowRight, Scissors, Heart, Leaf, DollarSign } from 'lucide-react';

const Services = () => {
  // For parallax effect on scroll
  const [scrollY, setScrollY] = useState(0);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [activeTab, setActiveTab] = useState('hair');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const scrolled = window.scrollY > window.innerHeight * 0.5;
      const bookingSection = document.querySelector('.booking-section');
      const bookingSectionTop = bookingSection?.getBoundingClientRect().top || 0;
      
      setShowStickyCTA(scrolled && bookingSectionTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqItems = [
    {
      question: "How far in advance should I book my appointment?",
      answer: "We recommend booking 2-3 weeks in advance for regular services, and 4-6 weeks for color corrections or special occasion styling."
    },
    {
      question: "Do you offer consultations before major color changes?",
      answer: "Absolutely! We offer complimentary consultations for all major color transformations to ensure we achieve your desired look safely."
    },
    {
      question: "What if I'm not happy with my service?",
      answer: "Your satisfaction is our priority. If you're not completely happy, please let us know within 7 days and we'll work together to make it right."
    },
    {
      question: "Do you use eco-friendly products?",
      answer: "Yes! We're committed to using cruelty-free, sustainable products that are both effective and environmentally responsible."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Completely Redesigned */}
      <section className="min-h-[80vh] relative overflow-hidden flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-sage/80 to-rose/60 mix-blend-multiply z-10"></div>
          <img
            src="/images/fireplace in sallon.jpg"
            alt="Elegant salon interior with fireplace"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 section flex flex-col justify-center">
          <AnimatedSection>
            <div className="backdrop-blur-sm bg-white/10 p-10 rounded-3xl border border-white/20 shadow-xl max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center rounded-full border border-white/30 px-2.5 py-1.5 text-xs font-semibold bg-white/20 hover:bg-white/30 mb-6 backdrop-blur-sm text-white">
                Premium Hair & Beauty Services
              </div>
              
              <h1 className="font-outfit font-extrabold text-hero leading-tight mb-6 text-white drop-shadow-md">
                Our <span className="text-gradient-white">Services</span>
              </h1>
              
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Exceptional treatments tailored to enhance your natural beauty and confidence.
              </p>
            </div>
          </AnimatedSection>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 animate-pulse">
            <p className="mb-2 text-sm">Scroll to explore</p>
            <ArrowRight className="h-5 w-5 rotate-90" />
          </div>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-pale to-white z-0"></div>
        <div className="absolute top-40 -left-24 w-64 h-64 rounded-full bg-sage/10 blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-rose/10 blur-3xl"></div>
        
        {/* Decorative patterns */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
        
        <div className="section relative z-10 py-20">
          <AnimatedSection>
            <div className="text-center mb-16 relative">
              <span className="inline-block px-4 py-1 bg-sage/10 text-sage rounded-full text-sm font-medium mb-4">OUR EXPERTISE</span>
              <h2 className="font-outfit font-bold text-section text-center mb-4 text-rich-black">
                Exceptional <span className="text-gradient">Services</span>
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">Discover our range of premium hair and beauty services designed to make you look and feel your best.</p>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-sage to-rose rounded-full opacity-50"></div>
            </div>
          </AnimatedSection>

          {/* Service Categories - Brand New Toggle */}
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-1 inline-flex">
                <button
                  onClick={() => setActiveTab('hair')}
                  className={`flex items-center px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                    activeTab === 'hair'
                      ? 'bg-sage text-white shadow-md'
                      : 'text-gray-600 hover:text-sage hover:bg-gray-50'
                  }`}
                >
                  <Scissors className="h-5 w-5 mr-2" />
                  Hair
                </button>
                <button
                  onClick={() => setActiveTab('beauty')}
                  className={`flex items-center px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                    activeTab === 'beauty'
                      ? 'bg-rose text-white shadow-md'
                      : 'text-gray-600 hover:text-rose hover:bg-gray-50'
                  }`}
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Beauty
                </button>
              </div>
            </div>

            {/* Hair Services */}
            {activeTab === 'hair' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {HAIR.map((service, index) => (
                  <AnimatedSection key={service.name} delay={index * 50}>
                    <PriceCard
                      name={service.name}
                      price={service.price}
                      featured={service.name === "Balayage" || service.name === "Wedding Hair"}
                    />
                  </AnimatedSection>
                ))}
              </div>
            )}

            {/* Beauty Services */}
            {activeTab === 'beauty' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {BEAUTY.map((service, index) => (
                  <AnimatedSection key={service.name} delay={index * 50}>
                    <PriceCard
                      name={service.name}
                      price={service.price}
                      featured={service.name === "Facial" || service.name === "Bridal Makeup"}
                    />
                  </AnimatedSection>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Service Showcase */}
      <section className="relative overflow-hidden py-20 bg-pale">
        <div className="absolute top-40 right-0 w-96 h-96 rounded-full bg-rose/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-sage/5 blur-3xl"></div>
        
        <div className="section relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16 relative">
              <span className="inline-block px-4 py-1 bg-rose/10 text-rose rounded-full text-sm font-medium mb-4">OUR WORK</span>
              <h2 className="font-outfit font-bold text-section mb-4 text-rich-black">
                Stunning <span className="text-gradient">Transformations</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See the magic happen with our beautiful transformations. Real clients, real results.
              </p>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-rose to-sage rounded-full opacity-50"></div>
            </div>
          </AnimatedSection>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedSection delay={0}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg group h-80">
                <img
                  src="/images/befor and after 1.jpg"
                  alt="Before and after hair transformation"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-medium">Color Transformation</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg group h-80">
                <img
                  src="/images/befor and after 2.jpg"
                  alt="Before and after style makeover"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-medium">Style Makeover</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg group h-80">
                <img
                  src="/images/befor and after 3.jpg"
                  alt="Before and after length and color transformation"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-medium">Length & Color Transformation</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Salon Atmosphere */}
          <div className="mt-16">
            <AnimatedSection>
              <div className="text-center mb-12 relative">
                <h3 className="font-outfit font-bold text-2xl mb-4 text-rich-black">
                  Our Beautiful Salon
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Experience the warm, inviting atmosphere of our salon space.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedSection delay={0}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg group h-80">
                  <img
                    src="/images/fireplace in sallon.jpg"
                    alt="Cozy salon interior with elegant fireplace"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-medium">Cozy Interior with Fireplace</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={100}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg group h-80">
                  <img
                    src="/images/lovly outside picktusre of the sallon from teh outside shopt forunt.JPG"
                    alt="Beautiful exterior view of our salon"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-medium">Welcoming Exterior</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
          
          {/* Bottom decorative element */}
          <div className="mt-16 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-sage to-rose rounded-full opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Special Offer Banner - Enhanced */}
      <section>
        <div className="section py-16">
          <AnimatedSection>
            <Card className="border-2 border-rose/30 bg-gradient-to-r from-rose/10 to-sage/10 overflow-hidden relative rounded-3xl shadow-xl">
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-rose/10 rounded-full blur-3xl"></div>
              <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-sage/10 rounded-full blur-3xl"></div>
              
              <CardContent className="p-8 md:p-12 text-center relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <Sparkles className="h-8 w-8 text-rose mr-2" />
                  <h3 className="font-outfit font-bold text-2xl text-rich-black">
                    Special Bundle Offer
                  </h3>
                  <Sparkles className="h-8 w-8 text-rose ml-2" />
                </div>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  Book a Cut + Colour service and save 10% on your total treatment! Perfect for a complete refresh.
                </p>
                <Badge variant="secondary" className="bg-rose text-white text-sm py-1.5 px-4">
                  Limited Time ✨
                </Badge>
                
                <div className="mt-6">
                  <Button asChild size="lg" className="bg-rose hover:bg-rose/90 text-white shadow-md hover:shadow-lg transition-all duration-300">
                    <Link to="/book">Book This Offer</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section - Revamped */}
      <section className="relative overflow-hidden bg-pale py-20">
        {/* Background elements */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
        
        <div className="absolute top-20 right-10 w-64 h-64 bg-sage/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-rose/10 rounded-full blur-3xl"></div>
        
        <div className="section relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16 relative">
              <span className="inline-block px-4 py-1 bg-sage/20 text-sage rounded-full text-sm font-medium mb-4">COMMON QUESTIONS</span>
              <h2 className="font-outfit font-bold text-section text-center mb-4 text-rich-black">
                Frequently <span className="text-gradient">Asked</span> Questions
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">Everything you need to know about our services and booking process.</p>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-sage to-rose rounded-full opacity-50"></div>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <AccordionItem value={`item-${index}`} className="border border-white/50 rounded-lg px-6 bg-white/50 backdrop-blur-sm shadow-sm">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center space-x-3">
                        <DollarSign className="h-5 w-5 text-rose" />
                        <span className="font-outfit font-bold text-lg">{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </AnimatedSection>
              ))}
            </Accordion>
          </div>
          
          {/* Bottom decorative element */}
          <div className="mt-16 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-sage to-rose rounded-full opacity-30"></div>
          </div>
        </div>
      </section>

      {/* CTA Section - Revamped */}
      <section className="booking-section relative overflow-hidden py-20">
        {/* Pink clip mask at top */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-pale z-20" style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 0)' }}></div>
        
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-sage/90 to-rose/90 mix-blend-multiply z-10"></div>
          <img
            src="/images/worse outside pick.jpg"
            alt="Salon exterior view"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="section relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <div className="backdrop-blur-sm bg-white/10 p-10 rounded-3xl border border-white/20 shadow-xl">
                <h2 className="font-outfit font-bold text-section mb-4 text-white drop-shadow-md">
                  Ready for Your <span className="text-gradient-white">Transformation</span>?
                </h2>
                <p className="text-xl mb-8 text-white/90 leading-relaxed">
                  Experience the difference that passion and expertise make. Book your appointment today and step into a world of beauty and confidence.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-sage hover:bg-off-white transition-all duration-300 shadow-lg hover:shadow-xl">
                    <Link to="/book">Book Your Appointment</Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    asChild
                    className="border-white text-white hover:bg-white hover:text-sage transition-all duration-300 bg-white/20"
                  >
                    <Link to="/services">Explore Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Floating Sticky CTA - Enhanced */}
      {showStickyCTA && (
        <div className="fixed bottom-8 right-8 z-50 animate-bounce-slow">
          <Button asChild className="bg-gradient-to-r from-sage to-rose hover:from-sage/90 hover:to-rose/90 text-white shadow-lg rounded-full px-6 py-6 transition-all duration-300">
            <Link to="/book">
              <span className="flex items-center">
                <Scissors className="h-5 w-5 mr-2" />
                Book Now
              </span>
            </Link>
          </Button>
        </div>
      )}
      
      {/* Floating decorative element that follows scroll - Added from About page */}
      <div 
        className="fixed w-40 h-40 rounded-full bg-gradient-to-r from-sage/30 to-rose/30 blur-3xl pointer-events-none mix-blend-overlay z-0"
        style={{
          left: `calc(10% + ${scrollY * 0.1}px)`,
          top: `calc(30% + ${scrollY * -0.05}px)`,
          opacity: Math.max(0, Math.min(1, 1 - scrollY / 2000))
        }}
      />
      <div 
        className="fixed w-60 h-60 rounded-full bg-gradient-to-r from-rose/20 to-sage/20 blur-3xl pointer-events-none mix-blend-overlay z-0"
        style={{
          right: `calc(5% + ${scrollY * -0.1}px)`,
          bottom: `calc(20% + ${scrollY * 0.08}px)`,
          opacity: Math.max(0, Math.min(1, 1 - scrollY / 2000))
        }}
      />
    </div>
  );
};

export default Services;
