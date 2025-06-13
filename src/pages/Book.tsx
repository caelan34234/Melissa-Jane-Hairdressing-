import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, MapPin, Phone, Clock, ArrowRight, Star } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import TrustBanner from '@/components/TrustBanner';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

// Form validation schema
const bookingFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }).optional(),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  service: z.string().min(1, { message: 'Please select a service.' }),
  date: z.date({ required_error: 'Please select a date.' }),
  time: z.string().min(1, { message: 'Please select a time.' }),
  message: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

const Book = () => {
  // For parallax effect on scroll
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Form handling
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: '',
      email: undefined,
      phone: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = (data: BookingFormValues) => {
    // In a real application, this would send the data to a server
    console.log(data);
    alert('Booking request submitted! We will contact you shortly to confirm your appointment.');
    form.reset();
  };

  // Available time slots
  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  ];

  // Services
  const services = [
    'Cut & Blow Dry', 'Cut & Wash', 'Blow Dry Only', 'Full Head Colour',
    'Half Head Highlights', 'Full Head Highlights', 'Balayage', 'Root Touch Up',
    'Toner', 'Hair Treatment', 'Wedding Hair', 'Special Occasion Styling',
    'Men\'s Cut', 'Children\'s Cut (under 12)', 'Eyebrow Shape', 'Eyebrow Tint',
    'Eyelash Tint', 'Facial', 'Manicure', 'Pedicure'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[60vh] relative overflow-hidden flex items-center justify-center">
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
              <Badge className="bg-white/20 hover:bg-white/30 mb-6 backdrop-blur-sm" style={{ color: 'white' }}>
                Book Your Appointment
              </Badge>
              
              <h1 className="font-outfit font-extrabold text-hero leading-tight mb-6 text-white drop-shadow-md">
                Your <span className="text-gradient-white">Transformation</span> Awaits
              </h1>
              
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Schedule your visit to Melissa Jane Hairdressing and experience the difference.
              </p>
            </div>
          </AnimatedSection>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 animate-pulse">
            <p className="mb-2 text-sm">Scroll to book</p>
            <ArrowRight className="h-5 w-5 rotate-90" />
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="relative overflow-hidden py-20">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-pale to-white z-0"></div>
        <div className="absolute top-40 -left-24 w-64 h-64 rounded-full bg-sage/10 blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-rose/10 blur-3xl"></div>
        
        {/* Decorative patterns */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
        
        <div className="section relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16 relative">
              <span className="inline-block px-4 py-1 bg-sage/10 text-sage rounded-full text-sm font-medium mb-4">BOOK WITH US</span>
              <h2 className="font-outfit font-bold text-section text-center mb-4 text-rich-black">
                Schedule Your <span className="text-gradient">Appointment</span>
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">Fill out the form below to request your appointment, and we'll get back to you to confirm your booking.</p>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-sage to-rose rounded-full opacity-50"></div>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Booking Form */}
            <AnimatedSection className="lg:col-span-7">
              <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
                <h3 className="font-outfit font-bold text-2xl mb-6 text-rich-black">Book Your Visit</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">Email (Optional)</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Your email (optional)" {...field} value={field.value || ''} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">Service</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {services.map((service) => (
                                  <SelectItem key={service} value={service}>{service}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-gray-700">Date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={"w-full pl-3 text-left font-normal border-gray-300"}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span className="text-muted-foreground">Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date < new Date() || date.getDay() === 0
                                  }
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">Time</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a time" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {timeSlots.map((time) => (
                                  <SelectItem key={time} value={time}>{time}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Additional Information (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about any specific requirements or questions you have"
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full bg-gradient-to-r from-sage to-rose hover:from-sage/90 hover:to-rose/90 text-white">
                      Request Appointment
                    </Button>
                  </form>
                </Form>
              </div>
            </AnimatedSection>

            {/* Contact Information and Map */}
            <AnimatedSection delay={200} className="lg:col-span-5">
              <div className="space-y-8">
                {/* Contact Card */}
                <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
                  <h3 className="font-outfit font-bold text-2xl mb-6 text-rich-black">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-sage/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-sage" />
                      </div>
                      <div>
                        <h4 className="font-medium text-rich-black mb-1">Address</h4>
                        <p className="text-gray-600">44a McBride St<br/>Cockatoo, VIC, Australia, 3781</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-sage/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-sage" />
                      </div>
                      <div>
                        <h4 className="font-medium text-rich-black mb-1">Phone</h4>
                        <p className="text-gray-600">+61 402 832 102</p>
                      </div>
                    </div>
                    

                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-sage/10 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-sage" />
                      </div>
                      <div>
                        <h4 className="font-medium text-rich-black mb-1">Opening Hours</h4>
                        <div className="text-gray-600 space-y-1">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Google Maps */}
                <div className="rounded-3xl overflow-hidden shadow-lg border border-white/50 h-[300px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.6893826145394!2d145.48744231532256!3d-37.93646797972897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b27df2d0228f2c9%3A0x2a1c1b1c5e0a3f4f!2s44A%20McBride%20St%2C%20Cockatoo%20VIC%203781%2C%20Australia!5e0!3m2!1sen!2sus!4v1652345678901!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Salon Location"
                  ></iframe>
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

      {/* Trust Banner */}
      <section className="py-16 bg-white">
        <TrustBanner />
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 overflow-hidden bg-pale-pink">
        {/* Background elements */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-sage/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-rose/10 rounded-full blur-3xl"></div>
        
        <div className="section relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16 relative">
              <span className="inline-block px-4 py-1 bg-sage/20 text-sage rounded-full text-sm font-medium mb-4">TESTIMONIALS</span>
              <h2 className="font-outfit font-bold text-section text-center mb-4 text-rich-black">
                What Our <span className="text-gradient">Clients</span> Say
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it - hear from our satisfied clients about their experiences.</p>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-sage to-rose rounded-full opacity-50"></div>
            </div>
          </AnimatedSection>
          
          {/* Auto-scrolling testimonials - Two rows with opposite directions */}
          <div className="relative overflow-hidden px-4">
            {/* Gradient Fade Masks - Left and Right edges */}
            <div className="absolute left-0 top-0 h-full w-[100px] z-10 bg-gradient-to-r from-pale-pink to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 h-full w-[100px] z-10 bg-gradient-to-l from-pale-pink to-transparent pointer-events-none"></div>
            
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
                    <div className="h-full p-6 rounded-2xl border-2 border-sage/30 bg-white/80 backdrop-blur-sm shadow-md group-hover:shadow-[0_0_20px_rgba(226,149,157,0.7),0_0_40px_rgba(226,149,157,0.5)] group-hover:scale-105 transition-all duration-300 relative">
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
                    <div className="h-full p-6 rounded-2xl border-2 border-sage/30 bg-white/80 backdrop-blur-sm shadow-md group-hover:shadow-[0_0_20px_rgba(226,149,157,0.7),0_0_40px_rgba(226,149,157,0.5)] group-hover:scale-105 transition-all duration-300 relative">
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
          </div>
          
          {/* Bottom decorative element */}
          <div className="mt-16 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-sage to-rose rounded-full opacity-30"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;