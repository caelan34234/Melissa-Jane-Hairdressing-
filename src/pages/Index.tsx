import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/AnimatedSection';
import TrustBanner from '@/components/TrustBanner';
import { HAIR, BEAUTY } from '@/lib/services';
import { ArrowRight, Star, Sparkles, Scissors, Heart, Leaf, Clock, Shield } from 'lucide-react';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('hair');
  
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[100vh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/lovly outside picktusre of the sallon from teh outside shopt forunt.JPG" 
            alt="Melissa Jane Salon Exterior" 
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        
        <div className="section relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <AnimatedSection>
              <div className="inline-flex items-center rounded-full border border-white/30 px-2.5 py-1.5 text-xs font-semibold bg-white/20 hover:bg-white/30 mb-4 backdrop-blur-sm text-white">
                Your Premier Destination for Beauty
              </div>
              
              <h1 className="font-outfit font-bold text-5xl md:text-6xl lg:text-7xl mb-6 text-white">
                Where <span className="text-gradient">Style</span> Meets <span className="text-gradient">Excellence</span>
              </h1>
              
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 drop-shadow-md">
                Welcome to Melissa Jane Hairdressing, where our expert stylists create personalized looks that enhance your natural beauty and reflect your unique personality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-rose hover:bg-rose/90 text-white">
                  <Link to="/book">Book Your Visit</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-white bg-black/30 backdrop-blur-sm hover:bg-white/20 hover:border-white">
                  <Link to="/services" style={{ color: 'white' }}>Explore Services</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="lg:w-1/2 relative mt-10 lg:mt-0">
            <AnimatedSection delay={200}>
              <div className="relative mx-auto max-w-md">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-rose/30 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sage/30 rounded-full blur-xl"></div>
                
                {/* Floating image with styling */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 rotate-2 transform hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="/images/hairdresser cuting hair.jpg" 
                    alt="Hairdresser styling client's hair" 
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-5 -left-5 transform rotate-3 bg-white p-3 rounded-lg shadow-lg backdrop-blur-sm">
                  <Badge className="bg-sage/20 text-sage border-0 flex items-center gap-1">
                    <Star className="h-3 w-3 fill-sage text-sage" /> 
                    <span>Award-Winning Stylists</span>
                  </Badge>
                </div>
                
                {/* Second floating element */}
                <div className="absolute -top-3 -right-3 transform -rotate-3 bg-white p-3 rounded-lg shadow-lg backdrop-blur-sm">
                  <Badge className="bg-rose/20 text-rose border-0 flex items-center gap-1">
                    <Sparkles className="h-3 w-3 text-rose" /> 
                    <span>Luxury Experience</span>
                  </Badge>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-white/80 mb-2">Scroll to discover</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-white/80 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>
      
      {/* Trust Banner */}
      <TrustBanner />
      
      {/* Why Choose Us Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-scallop-top bg-repeat-x opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-pale/50"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-sage/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-rose/10 rounded-full blur-3xl"></div>
        
        <div className="section relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-sage/20 text-sage rounded-full text-sm font-medium mb-4">WHY CHOOSE US</span>
              <h2 className="font-outfit font-bold text-section text-center mb-4 text-rich-black">
                The <span className="text-gradient">Melissa Jane</span> Difference
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We combine technical expertise with artistic vision to create looks that enhance your natural beauty and fit your lifestyle.</p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Scissors,
                title: "Expert Stylists",
                description: "Our team of professionals stay at the cutting edge of hair trends and techniques.",
                delay: 0
              },
              {
                icon: Heart,
                title: "Personalized Service",
                description: "We take the time to understand your unique style and hair needs for a customized experience.",
                delay: 100
              },
              {
                icon: Leaf,
                title: "Eco-Friendly Products",
                description: "We use sustainable, cruelty-free products that are gentle on your hair and the environment.",
                delay: 200
              },
              {
                icon: Clock,
                title: "Efficient Appointments",
                description: "We respect your time and ensure efficient service without compromising quality.",
                delay: 300
              },
              {
                icon: Sparkles,
                title: "Relaxing Atmosphere",
                description: "Our salon provides a tranquil environment where you can unwind while being pampered.",
                delay: 400
              },
              {
                icon: Shield,
                title: "Satisfaction Guaranteed",
                description: "Your happiness is our priority - we're not satisfied until you love your hair.",
                delay: 500
              }
            ].map((feature, index) => (
              <AnimatedSection key={`feature-${feature.title}`} delay={feature.delay}>
                <div className="bg-white/50 backdrop-blur-sm border-2 border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-sage/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-sage" />
                  </div>
                  <h3 className="font-outfit font-bold text-xl mb-3 text-rich-black">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
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
      
      {/* Popular Services Section */}
      <section className="relative py-20 overflow-hidden bg-pale">
        {/* White wavy clip mask at top - waves pointing down, flat line facing up */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-white z-20" 
          style={{ 
            clipPath: 'url(#wave-mask)' 
          }}>
          {/* SVG for wavy clip mask */}
          <svg width="0" height="0" className="absolute">
            <defs>
              <clipPath id="wave-mask" clipPathUnits="objectBoundingBox">
                <path d="M0,0 L1,0 L1,0.2 C0.95,0.5 0.9,0.2 0.85,0.6 C0.8,0.9 0.75,0.3 0.7,0.7 C0.65,1 0.6,0.4 0.55,0.8 C0.5,1 0.45,0.5 0.4,0.9 C0.35,1 0.3,0.6 0.25,0.9 C0.2,1 0.15,0.7 0.1,0.9 C0.05,1 0,0.6 0,0.3 L0,0 Z" />
              </clipPath>
            </defs>
          </svg>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-scallop-top bg-repeat-x opacity-10 transform rotate-180"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-scallop-top bg-repeat-x opacity-10"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-sage/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-rose/10 rounded-full blur-3xl"></div>
        
        <div className="section relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-sage/20 text-sage rounded-full text-sm font-medium mb-4">OUR SERVICES</span>
              <h2 className="font-outfit font-bold text-section text-center mb-4 text-rich-black">
                Popular <span className="text-gradient">Services</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Discover our most sought-after treatments that keep our clients coming back.</p>
              
              {/* Service Category Tabs */}
              <div className="flex justify-center mt-8 space-x-2">
                <Button 
                  variant={activeCategory === 'hair' ? 'default' : 'outline'}
                  onClick={() => setActiveCategory('hair')}
                  className={activeCategory === 'hair' ? 'bg-sage hover:bg-sage/90' : 'border-sage text-sage hover:bg-sage/10'}
                >
                  Hair Services
                </Button>
                <Button 
                  variant={activeCategory === 'beauty' ? 'default' : 'outline'}
                  onClick={() => setActiveCategory('beauty')}
                  className={activeCategory === 'beauty' ? 'bg-rose hover:bg-rose/90' : 'border-rose text-rose hover:bg-rose/10'}
                >
                  Beauty Services
                </Button>
              </div>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeCategory === 'hair' ? HAIR : BEAUTY).slice(0, 6).map((service, index) => {
              // Assign icons based on service name
              let Icon = Scissors;
              if (service.name.toLowerCase().includes('color') || service.name.toLowerCase().includes('highlight')) {
                Icon = Sparkles;
              } else if (service.name.toLowerCase().includes('treatment') || service.name.toLowerCase().includes('mask')) {
                Icon = Leaf;
              }
              
              const isFeatured = index === 0;
              


              

              return (
                <AnimatedSection key={`service-${index}`} delay={index * 100}>
                  <div className={`group relative h-full ${isFeatured ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 rounded-2xl transform transition-all duration-500 group-hover:scale-[0.98]"></div>
                    <div className="relative h-full p-6 rounded-2xl border-2 border-gray-200 bg-white/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                      {/* Service Icon */}
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${activeCategory === 'hair' ? 'bg-sage/20' : 'bg-rose/20'}`}>
                        <Icon className={`h-6 w-6 ${activeCategory === 'hair' ? 'text-sage' : 'text-rose'}`} />
                      </div>
                      
                      {/* Service Name and Price */}
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-outfit font-bold text-xl text-rich-black">{service.name}</h3>
                        <span className="font-medium text-lg text-gray-700">${service.price}</span>
                      </div>
                      
                      {/* Service Description */}
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      
                      {/* Book Now Button - Revealed on Hover */}
                      <div className="mt-auto opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <Button asChild variant="outline" className={`w-full ${activeCategory === 'hair' ? 'border-sage text-sage hover:bg-sage/10' : 'border-rose text-rose hover:bg-rose/10'}`}>
                          <Link to="/book">Book now</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="border-rich-black/70 text-rich-black/70 hover:bg-rich-black/5">
              <Link to="/services" className="flex items-center gap-2">
                Explore All Services <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          {/* Bottom decorative element */}
          <div className="mt-16 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-sage to-rose rounded-full opacity-30"></div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-pale/50"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-sage/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-rose/10 rounded-full blur-3xl"></div>
        
        <div className="section relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-sage/20 text-sage rounded-full text-sm font-medium mb-4">TESTIMONIALS</span>
              <h2 className="font-outfit font-bold text-section text-center mb-4 text-rich-black">
                What Our <span className="text-gradient">Clients</span> Say
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it - hear from our satisfied clients about their experiences.</p>
            </div>
          </AnimatedSection>
          
          {/* Auto-scrolling testimonials - Two rows with opposite directions */}
          <div className="relative overflow-hidden px-4">
            {/* Gradient Fade Masks - Left and Right edges */}
            <div className="absolute left-0 top-0 h-full w-[100px] z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 h-full w-[100px] z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            
            {/* First Row - Left to Right */}
            <div className="relative mb-6 overflow-visible">
              <div className="testimonial-track-ltr flex gap-6 py-8 animate-scroll-left hover:pause">
                {[
                  {
                    name: "Vikki Furnival",
                    role: "Client",
                    initials: "VF",
                    quote: "Melissa did a wonderful job! I had a trim, foils, hair updo, and full-face makeup for a wedding and left feeling spectacular! Thank you so much."
                  },
                  {
                    name: "Nadia Bytschkow",
                    role: "Client",
                    initials: "NB",
                    quote: "There is no other place I will go to get my hair done. Mel does a fantastic job and I have always walked out very happy with what she has done to my hair. Always so warm and inviting. She takes so much pride in what she does. I highly recommend ⭐⭐⭐⭐⭐"
                  },
                  {
                    name: "Caroline Williams",
                    role: "Client",
                    initials: "CW",
                    quote: "Best haircut and blow wave I've had for years. You are treated so well with friendly service. I thoroughly recommend their services and will not hesitate returning as a very satisfied customer."
                  },
                  {
                    name: "Elise Turnedge",
                    role: "Client",
                    initials: "ET",
                    quote: "I am always extremely happy with the service I receive from all the staff. Having naturally 'messy' hair I used to find it hard to get a cut that worked—but not anymore! They are awesome with rainbow colours too. Highly recommended."
                  },
                  // Duplicate testimonials to ensure continuous scrolling
                  {
                    name: "Vikki Furnival",
                    role: "Client",
                    initials: "VF",
                    quote: "Melissa did a wonderful job! I had a trim, foils, hair updo, and full-face makeup for a wedding and left feeling spectacular! Thank you so much."
                  },
                  {
                    name: "Nadia Bytschkow",
                    role: "Client",
                    initials: "NB",
                    quote: "There is no other place I will go to get my hair done. Mel does a fantastic job and I have always walked out very happy with what she has done to my hair. Always so warm and inviting. She takes so much pride in what she does. I highly recommend ⭐⭐⭐⭐⭐"
                  }
                ].map((testimonial, index) => (
                  <div 
                    key={`row1-testimonial-${testimonial.name}-${index}`} 
                    className="testimonial-card group flex-shrink-0 w-[280px] md:w-[320px] lg:w-[350px] transition-all duration-300"
                  >
                    <div className="h-full p-6 rounded-2xl border-2 border-gray-200 bg-white/80 backdrop-blur-sm shadow-md group-hover:shadow-[0_0_20px_rgba(226,149,157,0.7),0_0_40px_rgba(226,149,157,0.5)] group-hover:scale-105 transition-all duration-300 relative">
                      {/* Google icon in top right corner */}
                      <img 
                        src="/images/icons8-google.svg" 
                        alt="Google" 
                        className="absolute top-3 right-3 w-6 h-6"
                      />
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-sage/20 flex items-center justify-center">
                          <span className="text-sage font-medium text-lg">{testimonial.initials}</span>
                        </div>
                        <div>
                          <h4 className="font-outfit font-bold text-lg text-rich-black">{testimonial.name}</h4>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={`row1-${index}-star-${star}`} className="inline-block h-4 w-4 fill-amber-400 text-amber-400 mr-1" />
                        ))}
                      </div>
                      <p className="text-gray-600 italic">{testimonial.quote}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Second Row - Right to Left */}
            <div className="relative overflow-visible">
              <div className="testimonial-track-rtl flex gap-6 py-8 animate-scroll-right hover:pause">
                {[
                  {
                    name: "Karen Cornwall",
                    role: "Client",
                    initials: "KC",
                    quote: "Such a wonderful experience, each time I have my hair done. Melissa and Sarah are fabulous! Beautiful salon. My hair always looks amazing. Thank you for your great hospitality, and how you do exactly what I request. I always leave with a smile."
                  },
                  {
                    name: "Fiona Ellis",
                    role: "Client",
                    initials: "FE",
                    quote: "Staff are all lovely & friendly. Nicole has been doing my hair for many years & always does what I ask her to do. Highly recommend!!"
                  },
                  {
                    name: "Nerine Love",
                    role: "Client",
                    initials: "NL",
                    quote: "Always so friendly. Spends time to understand what you want. And always a lovely result. A delight to visit your salon. Thank you 🙏💜"
                  },
                  {
                    name: "Erin Grainger",
                    role: "Client",
                    initials: "EG",
                    quote: "Quality hairdressing, very reasonable prices, quirky shop with resident cat. Love this hairdressers."
                  },
                  // Duplicate testimonials to ensure continuous scrolling
                  {
                    name: "Karen Cornwall",
                    role: "Client",
                    initials: "KC",
                    quote: "Such a wonderful experience, each time I have my hair done. Melissa and Sarah are fabulous! Beautiful salon. My hair always looks amazing. Thank you for your great hospitality, and how you do exactly what I request. I always leave with a smile."
                  },
                  {
                    name: "Fiona Ellis",
                    role: "Client",
                    initials: "FE",
                    quote: "Staff are all lovely & friendly. Nicole has been doing my hair for many years & always does what I ask her to do. Highly recommend!!"
                  }
                ].map((testimonial, index) => (
                  <div 
                    key={`row2-testimonial-${testimonial.name}-${index}`} 
                    className="testimonial-card group flex-shrink-0 w-[280px] md:w-[320px] lg:w-[350px] transition-all duration-300"
                  >
                    <div className="h-full p-6 rounded-2xl border-2 border-gray-200 bg-white/80 backdrop-blur-sm shadow-md group-hover:shadow-[0_0_20px_rgba(226,149,157,0.7),0_0_40px_rgba(226,149,157,0.5)] group-hover:scale-105 transition-all duration-300 relative">
                      {/* Google icon in top right corner */}
                      <img 
                        src="/images/icons8-google.svg" 
                        alt="Google" 
                        className="absolute top-3 right-3 w-6 h-6"
                      />
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-sage/20 flex items-center justify-center">
                          <span className="text-sage font-medium text-lg">{testimonial.initials}</span>
                        </div>
                        <div>
                          <h4 className="font-outfit font-bold text-lg text-rich-black">{testimonial.name}</h4>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={`row2-${index}-star-${star}`} className="inline-block h-4 w-4 fill-amber-400 text-amber-400 mr-1" />
                        ))}
                      </div>
                      <p className="text-gray-600 italic">{testimonial.quote}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Soft Vignette Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-30 bg-radial-fade"></div>
          </div>
        </div>
      </section>
      
      {/* CTA Section - Revamped */}
      <section className="relative py-20 overflow-hidden">
        {/* White clip mask at top - diagonal facing down, straight line facing up */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-white z-20" style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 0)' }}></div>
        
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
              <div className="backdrop-blur-sm bg-white/10 p-10 rounded-3xl border-2 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300">
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
          
          {/* Bottom decorative element */}
          <div className="mt-16 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-sage to-rose rounded-full opacity-30"></div>
          </div>
        </div>
      </section>
      
      {/* Floating decorative element that follows scroll */}
      <div 
        className="fixed w-40 h-40 rounded-full bg-gradient-to-r from-sage/30 to-rose/30 blur-3xl pointer-events-none mix-blend-overlay z-0"
        style={{
          left: '10%',
          top: '30%',
          transform: 'translate(0, 0)'
        }}
      />
      <div 
        className="fixed w-60 h-60 rounded-full bg-gradient-to-r from-rose/20 to-sage/20 blur-3xl pointer-events-none mix-blend-overlay z-0"
        style={{
          right: '5%',
          bottom: '20%',
          transform: 'translate(0, 0)'
        }}
      />
    </div>
  );
};

export default Index;