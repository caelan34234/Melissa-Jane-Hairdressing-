
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Leaf, GraduationCap, DollarSign, Sparkles, ArrowRight, Heart, Scissors } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const About = () => {
  // For parallax effect on scroll
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Gallery images using the specified local images
  const galleryImages = [
    {
      src: "/images/befor and after 1.jpg",
      alt: "Before and after hair transformation - dramatic color change",
      category: "transformation"
    },
    {
      src: "/images/befor and after 2.jpg",
      alt: "Before and after hair transformation - style makeover",
      category: "transformation"
    },
    {
      src: "/images/befor and after 3.jpg",
      alt: "Before and after hair transformation - length and color",
      category: "transformation"
    },
    {
      src: "/images/fireplace in sallon.jpg",
      alt: "Cozy salon interior with elegant fireplace",
      category: "interior"
    },
    {
      src: "/images/hairdresser cuting hair.jpg",
      alt: "Professional hairdresser cutting client's hair",
      category: "service"
    },
    {
      src: "/images/lovly outside picktusre of the sallon from teh outside shopt forunt.JPG",
      alt: "Beautiful exterior view of our salon",
      category: "exterior"
    }
  ];
  
  // For the transformation slider
  const [activeIndex, setActiveIndex] = useState(0);
  const transformationImages = galleryImages.filter(img => img.category === "transformation");
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % transformationImages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [transformationImages.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Revamped */}
      <section className="min-h-[80vh] relative overflow-hidden flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-sage/80 to-rose/60 mix-blend-multiply z-10"></div>
          <img
            src="/images/lovly outside picktusre of the sallon from teh outside shopt forunt.JPG"
            alt="Beautiful salon exterior"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 section flex flex-col justify-center">
          <AnimatedSection>
            <div className="backdrop-blur-sm bg-white/10 p-10 rounded-3xl border border-white/20 shadow-xl max-w-3xl mx-auto text-center">

              
              <h1 className="font-outfit font-extrabold text-hero leading-tight mb-6 text-white drop-shadow-md">
                Our <span className="text-gradient-white">Story</span>
              </h1>
              
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                10 years of passion, expertise, and transforming lives through the art of beautiful hair.
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

      {/* Portrait Bio - Revamped */}
      <section className="relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-pale to-white z-0"></div>
        <div className="absolute top-40 -left-24 w-64 h-64 rounded-full bg-sage/10 blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-rose/10 blur-3xl"></div>
        
        {/* Decorative patterns */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
        
        <div className="section relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16 relative">
              <span className="inline-block px-4 py-1 bg-sage/10 text-sage rounded-full text-sm font-medium mb-4">OUR FOUNDER</span>
              <h2 className="font-outfit font-bold text-section text-center mb-4 text-rich-black">
                Meet <span className="text-gradient">Melissa Jane</span>
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">The creative vision and passionate heart behind our award-winning salon.</p>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-sage to-rose rounded-full opacity-50"></div>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimatedSection className="lg:col-span-5 relative">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border-2 border-rose/20 rounded-3xl -rotate-3"></div>
                <div className="absolute -inset-4 border-2 border-sage/20 rounded-3xl rotate-3"></div>
                
                {/* Image */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/30">
                  <img
                    src="/images/hairdresser cuting hair.jpg"
                    alt="Melissa Jane - Salon Owner and Master Stylist"
                    className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl rotate-6">
                  <p className="text-sage font-bold">10 Years<br/>Experience</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} className="lg:col-span-7">
              <div className="space-y-6 p-6 rounded-3xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    Welcome to Melissa Jane Hairdressing, where passion meets expertise in the heart of Melbourne. 
                    For 10 years, I've been dedicated to helping clients discover their most beautiful selves 
                    through personalized hair artistry.
                  </p>
                  <p>
                    My journey began with a simple belief: everyone deserves to feel confident and beautiful. 
                    This philosophy drives everything we do, from our carefully curated selection of eco-friendly 
                    products to our commitment to continuous education in the latest techniques.
                  </p>
                  <p>
                    Specializing in balayage and color correction, I've had the privilege of transforming thousands 
                    of clients looks while building lasting relationships within our community. Our salon is 
                    a place for beautiful hair and a sanctuary where you can relax, rejuvenate, and rediscover 
                    your confidence.
                  </p>
                  <p>
                    When you step into our space, you are not just a client, you are part of our extended family. 
                    We believe in celebrating individuality, embracing sustainability, and creating an inclusive 
                    environment where everyone feels welcome and valued.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-6">
                  {['Balayage Specialist', 'Color Correction', 'Sustainable Beauty', 'Educator'].map((skill, index) => (
                    <Badge key={index} className="bg-gradient-to-r from-sage/20 to-rose/20 text-rich-black hover:from-sage/30 hover:to-rose/30 py-1.5">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Bottom decorative element */}
          <div className="mt-16 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-sage to-rose rounded-full opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Transformation Showcase */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-pale/30 z-0"></div>
        <div className="absolute top-40 right-0 w-96 h-96 rounded-full bg-rose/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-sage/5 blur-3xl"></div>
        
        <div className="section relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16 relative">
              <span className="inline-block px-4 py-1 bg-rose/10 text-rose rounded-full text-sm font-medium mb-4">TRANSFORMATIONS</span>
              <h2 className="font-outfit font-bold text-section mb-4 text-rich-black">
                Before & <span className="text-gradient">After</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See the magic happen with our stunning transformations. Real clients, real results.
              </p>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-rose to-sage rounded-full opacity-50"></div>
            </div>
          </AnimatedSection>
          
          {/* Before & After Slider */}
          <AnimatedSection>
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                {transformationImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`transition-opacity duration-1000 ${activeIndex === index ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
                  >
                    <div className="relative w-full h-[500px] flex items-center justify-center bg-gray-100">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="font-outfit font-bold text-2xl mb-2">Transformation {index + 1}</h3>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Slider indicators */}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  {transformationImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${activeIndex === index ? 'bg-white scale-125' : 'bg-white/50'}`}
                      aria-label={`View transformation ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Salon Tour Gallery */}
          <AnimatedSection>
            <div className="text-center mb-12 relative">
              <h3 className="font-outfit font-bold text-2xl mb-4 text-rich-black">
                Step Inside Our Salon
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience the warm, inviting atmosphere of our salon space.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.filter(img => img.category !== "transformation").map((image, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg group h-64">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-medium">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          {/* Bottom decorative element */}
          <div className="mt-16 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-sage to-rose rounded-full opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Values Section - Revamped */}
      <section className="relative overflow-hidden bg-pale py-20">
        {/* Background elements */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
        
        <div className="absolute top-20 right-10 w-64 h-64 bg-sage/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-rose/10 rounded-full blur-3xl"></div>
        
        <div className="section relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16 relative">
              <span className="inline-block px-4 py-1 bg-sage/20 text-sage rounded-full text-sm font-medium mb-4">OUR PHILOSOPHY</span>
              <h2 className="font-outfit font-bold text-section text-center mb-4 text-rich-black">
                Our <span className="text-gradient">Values</span>
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">The core principles that guide everything we do at Melissa Jane Hairdressing.</p>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-sage to-rose rounded-full opacity-50"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Leaf,
                title: "Eco-Friendly Products",
                description: "We're committed to using only cruelty-free, sustainable products that are gentle on your hair and kind to our planet.",
                color: "from-sage/20 to-sage/5",
                iconBg: "bg-sage",
                delay: 0
              },
              {
                icon: GraduationCap,
                title: "Continuous Training",
                description: "Our team regularly attends workshops and masterclasses to stay at the forefront of hair trends and techniques.",
                color: "from-rose/20 to-rose/5",
                iconBg: "bg-rose",
                delay: 150
              },
              {
                icon: Heart,
                title: "Inclusive Environment",
                description: "We believe in creating a welcoming space where everyone feels valued, respected, and beautiful just as they are.",
                color: "from-sage/20 to-sage/5",
                iconBg: "bg-sage",
                delay: 300
              }
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={item.delay}>
                <div className="group h-full">
                  <div className="relative h-full transform transition-all duration-500 group-hover:-translate-y-2">
                    {/* 3D Card Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl`}></div>
                    <div className="absolute inset-0 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 transform transition-all duration-500 group-hover:scale-[0.98]"></div>
                    
                    {/* Card Content */}
                    <div className="relative p-8 flex flex-col items-center text-center h-full">
                      {/* Icon */}
                      <div className={`w-20 h-20 ${item.iconBg} rounded-2xl flex items-center justify-center shadow-lg mb-6 transform transition-all duration-500 group-hover:rotate-3`}>
                        <item.icon className="h-10 w-10 text-white" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="font-outfit font-bold text-xl text-rich-black mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      
                      {/* Hover reveal button */}
                      <div className="mt-auto pt-6 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <span className="inline-flex items-center text-sage font-medium">
                          Learn more <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          {/* Additional Values in Accordion */}
          <AnimatedSection delay={400}>
            <div className="max-w-3xl mx-auto mt-16">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="pricing" className="border border-white/50 rounded-lg px-6 bg-white/50 backdrop-blur-sm shadow-sm">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-5 w-5 text-rose" />
                      <span className="font-outfit font-bold text-lg">Inclusive Pricing</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    We believe beautiful hair should be accessible to everyone. Our transparent pricing structure 
                    means no hidden costs, and we offer various service options to suit different budgets and needs.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="community" className="border border-white/50 rounded-lg px-6 bg-white/50 backdrop-blur-sm shadow-sm">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center space-x-3">
                      <Sparkles className="h-5 w-5 text-rose" />
                      <span className="font-outfit font-bold text-lg">Community Involvement</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    We're proud to be an active part of our local community. From charity events to supporting local 
                    businesses, we believe in giving back and creating positive change beyond our salon walls.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="personalized" className="border border-white/50 rounded-lg px-6 bg-white/50 backdrop-blur-sm shadow-sm">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center space-x-3">
                      <Scissors className="h-5 w-5 text-rose" />
                      <span className="font-outfit font-bold text-lg">Personalized Experience</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    No two clients are the same, and neither are our services. We take the time to understand your 
                    unique hair type, lifestyle, and preferences to create a look that's perfectly tailored to you.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </AnimatedSection>
          
          {/* Bottom decorative element */}
          <div className="mt-16 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-sage to-rose rounded-full opacity-30"></div>
          </div>
        </div>
      </section>

      {/* CTA Section - Revamped */}
      <section className="relative overflow-hidden py-20">
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
      
      {/* Floating decorative element that follows scroll */}
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

export default About;
