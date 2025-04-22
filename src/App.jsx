
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Shield, 
  Clock, 
  Award, 
  Star, 
  CheckCircle2, 
  Timer,
  Car,
  Sparkles
} from "lucide-react";


export default function App() {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 900));
    }, 1000);

    // Simulate increasing visitor count
    const visitorTimer = setInterval(() => {
      setVisitorCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(visitorTimer);
    };
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const services = [
    {
      name: "Express Wash",
      price: "29.99",
      features: ["Exterior Wash", "Tire Shine", "Air Freshener"],
      popular: false
    },
    {
      name: "Premium Detail",
      price: "89.99",
      features: ["Full Interior Cleaning", "Exterior Wash & Wax", "Tire Shine", "Air Freshener", "Engine Bay Cleaning"],
      popular: true
    },
    {
      name: "Ultimate Package",
      price: "149.99",
      features: ["Complete Interior Detail", "Paint Correction", "Ceramic Coating", "Tire Shine", "Air Freshener", "Engine Bay Cleaning"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Sticky Promotion Bar */}
      <div className="bg-blue-600 text-white py-2 sticky top-0 z-50">
        <div className="container mx-auto px-4 text-center flex items-center justify-center gap-4">
          <Timer className="h-5 w-5 animate-pulse" />
          <span className="font-semibold">
            Special Offer Ends In: {minutes}:{seconds.toString().padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img  
            className="w-full h-full object-cover"
            alt="Luxury car being detailed" src="/corvette.png"/>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full mb-6"
            >
              🎉 Limited Time Offer: Save 20% Today!
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Transform Your Car Into A
              <span className="gradient-text block">Head-Turner</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-200 mb-8"
            >
              Join {visitorCount.toLocaleString()}+ satisfied customers who trust us with their vehicles. 
              Professional detailing that makes your car look showroom-new!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="text-lg px-8 py-6 shine-animation bg-blue-600 hover:bg-blue-700"
              >
                Book Now & Save 20% <ArrowRight className="ml-2" />
              </Button>
              <div className="flex items-center gap-2 text-white">
                <div className="flex -space-x-2">
                {[
                "https://images.unsplash.com/photo-1544212408-c711b7c19b92",
                "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
                "https://images.unsplash.com/photo-1743538441678-e06e4de4ad71?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ].map((url, i) => (
                <img
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white"
                  alt={`Happy customer ${i + 1}`}
                  src={url}
                />))}
                </div>
                <span className="text-sm">
                  Trusted by 500+ car owners
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-white py-8 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-blue-600 mb-2" />
              <div className="font-semibold">100% Satisfaction</div>
              <div className="text-sm text-gray-600">Guaranteed</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-blue-600 mb-2" />
              <div className="font-semibold">Quick Service</div>
              <div className="text-sm text-gray-600">30-60 Minutes</div>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-8 w-8 text-blue-600 mb-2" />
              <div className="font-semibold">#1 </div>
              <div className="text-sm text-gray-600">In Abington</div>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="h-8 w-8 text-blue-600 mb-2" />
              <div className="font-semibold">Premium Services</div>
              <div className="text-sm text-gray-600">Only the Best</div>
            </div>
          </div>
        </div>
      </div>

      {/* Before/After Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">See The Difference</h2>
            <p className="text-gray-600 text-lg">Real results from real customers</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden"
            >
              <img  
                className="w-full h-[400px] object-cover"
                alt="Before car wash"
               src="https://images.unsplash.com/photo-1693009670396-f0ca97246194" />
              <div className="bg-gray-800 text-white text-center py-2">Before</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden"
            >
              <img  
                className="w-full h-[400px] object-cover"
                alt="After car wash"
               src="https://images.unsplash.com/photo-1693009670396-f0ca97246194" />
              <div className="bg-blue-600 text-white text-center py-2">After</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Choose Your Package</h2>
            <p className="text-gray-600 text-lg">20% off all packages - Limited time only!</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`bg-white p-8 rounded-xl shadow-lg border-2 ${
                  service.popular ? 'pricing-highlight border-blue-600' : 'border-gray-100'
                }`}
              >
                <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-gray-400 line-through text-lg">
                    ${(parseFloat(service.price) * 1.2).toFixed(2)}
                  </span>
                  <span className="text-4xl font-bold ml-2">${service.price}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className={`w-full ${
                    service.popular ? 'bg-blue-600 hover:bg-blue-700' : ''
                  }`}
                >
                  Choose {service.name}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
  <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
    {/* Google Map */}
    <div className="rounded-md overflow-hidden shadow-md">
      <iframe
        title="Our Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3050.7113076276655!2d-75.11928578807749!3d40.12643667313702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b04f01a29317%3A0xb20d16d0a81f53d!2s1517%20Old%20York%20Rd%2C%20Abington%2C%20PA%2019001!5e0!3m2!1sen!2sus!4v1745349401644!5m2!1sen!2sus"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    {/* Contact Form */}
    <div>
      <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">Name</label>
          <input type="text" id="name" className="w-full border border-gray-300 px-4 py-2 rounded-md" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">Email</label>
          <input type="email" id="email" className="w-full border border-gray-300 px-4 py-2 rounded-md" placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="message" className="block font-medium mb-1">Message</label>
          <textarea id="message" className="w-full border border-gray-300 px-4 py-2 rounded-md" rows="4" placeholder="Your message..." />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </div>
  </div>
</div>





      {/* Social Proof */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <h2 className="text-4xl font-bold mb-4">Trusted by Thousands</h2>
            <p className="text-gray-600 text-lg">See what our customers are saying</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Adam Smith",
                role: "BMW Woner",
                comment: "I’ve been looking for a car wash in the city forever that actually is good and was recommended 611 Car Wash. This was the best car wash hands down so far. This place actually got my car clean. Quick service and reasonably priced. They have different packages for your car needs including details",
                image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36" // Male headshot
              },
              {
                name: "Kathleen Murphy",
                role: "Kia Owner",
                comment: "They did a fantastic job with a 2017 white Kia. This car was dirty and needed everything inside and out. It looked like a different car when I got it back. The price was really good too. Recommend them highly. Unfortunately don’t have pictures. I do have to other cars needing some tlc.",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2" // Female headshot
              },
              {
                name: "Alex McGrorty",
                role: "Mercedes Owner",
                comment: "I just brought my really gross car over (just adopted a very slobbery English Bulldog, car was a WRECK) and got the express detailing service, they did a phenomenal job including getting what I thought were scratches out of my paint. Very quick, very thorough and my car is in MUCH better shape now",
                image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" // Male headshot
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    className="w-16 h-16 rounded-full"
                    alt={testimonial.name}
                    src={testimonial.image} />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.comment}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <footer className="bg-gray-900 text-gray-300 px-6 py-12">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">

    {/* Address & Phone */}
    <div>
    <h3 className="text-white font-semibold mb-2">Contact</h3>
<p>
  <span className="font-medium">Address:</span>{' '}
  <a
    href="https://www.google.com/maps/place/1517+Old+York+Rd,+Abington,+PA+19001"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:underline"
  >
    1517 Old York Rd, Abington, PA 19001
  </a>
</p>
<p className="mt-1">
  <span className="font-medium">Phone:</span>{' '}
  <a href="tel:2158846300" className="text-blue-400 hover:underline">
    (215) 884-6300
  </a>
</p>
    </div>

    {/* Hours */}
    <div>
      <h3 className="text-white font-semibold mb-2">Hours</h3>
      <ul className="space-y-0.5">
        <li><strong>Tuesday:</strong> 8 AM–4:50 PM</li>
        <li>Wednesday: 8 AM–4:50 PM</li>
        <li>Thursday: 8 AM–4:50 PM</li>
        <li>Friday: 8 AM–4:50 PM</li>
        <li>Saturday: 8 AM–4:45 PM</li>
        <li>Sunday: 8 AM–3:50 PM</li>
        <li>Monday: 8 AM–4:50 PM</li>
      </ul>
    </div>

    {/* Navigation Links */}
    <div>
      <h3 className="text-white font-semibold mb-2">Navigation</h3>
      <ul className="space-y-1">
        <li><a href="#" className="hover:underline">Home</a></li>
      </ul>
    </div>

    {/* Optional: Tagline or Logo */}
    <div>
      <h3 className="text-white font-semibold mb-2">Made by:</h3>
      <p>Digital Drift Works</p>
    </div>

  </div>

  {/* Copyright */}
  <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
    &copy; {new Date().getFullYear()} Digital Drift. All rights reserved.
  </div>
</footer>
    </div>
  );
}
