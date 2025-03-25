import React from 'react';
import { motion } from 'framer-motion';

const LastCTASection = () => {
  return (
    <section id="application-form-section" className="w-full py-16 bg-[#064088]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Make This Real – Apply Now & Get Expert Guidance!
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Take the first step toward your U.S. education journey. Our admissions team is ready to help you every step of the way.
          </p>
        </motion.div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Form Column */}
            <div>
              <h3 className="text-2xl font-bold text-[#064088] mb-6">
                Apply Now
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#064088] focus:border-[#064088] transition"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#064088] focus:border-[#064088] transition"
                    placeholder="Your email address"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#064088] focus:border-[#064088] transition"
                    required
                  >
                    <option value="">Select your country</option>
                    <option value="Brazil">Brazil</option>
                    <option value="China">China</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Japan">Japan</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Program
                  </label>
                  <select
                    id="program"
                    name="program"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#064088] focus:border-[#064088] transition"
                    required
                  >
                    <option value="">Select a program</option>
                    <option value="In-Person">In-Person Program</option>
                    <option value="Online">Online Program</option>
                    <option value="Not Sure">Not Sure Yet</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Questions or Comments
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#064088] focus:border-[#064088] transition"
                    placeholder="Any questions or specific information you need?"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold text-lg rounded-md transition-colors shadow-md"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
            
            {/* Information Column */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#064088] mb-6">
                What Happens Next?
              </h3>
              
              <ol className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#064088] text-white rounded-full flex items-center justify-center mr-3">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Application Review</h4>
                    <p className="text-gray-600">Our admissions team will review your application within 24-48 hours.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#064088] text-white rounded-full flex items-center justify-center mr-3">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Personal Consultation</h4>
                    <p className="text-gray-600">We'll schedule a call to discuss your goals and answer your questions.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#064088] text-white rounded-full flex items-center justify-center mr-3">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Admission & Enrollment</h4>
                    <p className="text-gray-600">We'll guide you through the enrollment process and help with visa documentation.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#064088] text-white rounded-full flex items-center justify-center mr-3">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Start Your Journey</h4>
                    <p className="text-gray-600">Begin your English language program and take the first step toward your U.S. education!</p>
                  </div>
                </li>
              </ol>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
                <h4 className="font-semibold text-[#064088] mb-2">Have Questions?</h4>
                <p className="text-gray-700 mb-4">Our admissions team is here to help you with any questions about our programs, application process, or student life.</p>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#064088] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:admissions@interlink.edu" className="text-[#064088] hover:underline">admissions@interlink.edu</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastCTASection;
