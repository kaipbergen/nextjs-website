'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { HiPlay, HiMoon, HiSun } from "react-icons/hi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showVideo, setShowVideo] = useState(false);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY;
      const progress = (currentProgress / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Floating demo button component
  const FloatingButton = () => (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg z-50"
      onClick={() => setShowVideo(true)}
    >
      <HiPlay className="inline-block mr-2" /> Watch Demo
    </motion.button>
  );

  // Scroll progress bar component
  const ScrollProgressBar = () => (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50"
      style={{ width: `${scrollProgress}%` }}
    />
  );

  return (
    <div className={`w-full ${darkMode ? "dark" : ""}`}>
      <ScrollProgressBar />
      <FloatingButton />

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-4">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Demo Video</h2>
            {/* Replace this placeholder with your actual video player or iframe */}
            <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
              <p className="text-black dark:text-white">Video Content Here</p>
            </div>
            <button
              onClick={() => setShowVideo(false)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Dark mode toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-2 rounded-full bg-white dark:bg-slate-800 z-50 shadow-lg"
      >
        {darkMode ? <HiSun className="w-6 h-6" /> : <HiMoon className="w-6 h-6" />}
      </button>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 dark:from-blue-900 to-white dark:to-gray-900 py-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your Gateway to Global Education Success
              </h1>
              <p className="text-xl text-slate-800 dark:text-slate-300 mb-8">
                Comprehensive preparation for SAT, IELTS, and expert guidance for university admissions worldwide.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <CountUp end={98} suffix="%" duration={2.5} className="text-3xl font-bold text-blue-600" />
                  <p className="text-sm text-slate-700 dark:text-slate-300">Success Rate</p>
                </div>
                <div className="text-center">
                  <CountUp end={15000} separator="," duration={2.5} className="text-3xl font-bold text-blue-600" />
                  <p className="text-sm text-slate-700 dark:text-slate-300">Students Helped</p>
                </div>
                <div className="text-center">
                  <CountUp end={50} prefix="+" duration={2.5} className="text-3xl font-bold text-blue-600" />
                  <p className="text-sm text-slate-700 dark:text-slate-300">Partner Universities</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/register"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Get Started Free
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose YBM?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Prep</h3>
              <p className="text-gray-600">Complete study materials for SAT and IELTS, crafted by experts.</p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">University Guidance</h3>
              <p className="text-gray-600">Expert advice for applications to top universities worldwide.</p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">Connect with peers and mentors in our thriving community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">SAT Preparation</h3>
              <p className="text-black dark:text-white mb-6">
                Comprehensive SAT prep program with practice tests, video lessons, and personalized study plans.
              </p>
              <a href="/sat-prep" className="text-blue-600 font-medium hover:text-blue-700">
                Learn More →
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">IELTS Training</h3>
              <p className="text-black dark:text-white mb-6">
                Expert-led IELTS preparation covering all sections with mock tests and speaking practice.
              </p>
              <a href="/ielts-prep" className="text-blue-600 font-medium hover:text-blue-700">
                Learn More →
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">University Admissions</h3>
              <p className="text-black dark:text-white mb-6">
                End-to-end support for university applications, including essay reviews and interview prep.
              </p>
              <a href="/admissions" className="text-blue-600 font-medium hover:text-blue-700">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Student Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <p className="text-slate-700 dark:text-slate-300">SAT Score: 1550</p>
                </div>
              </div>
              <p className="text-slate-800 dark:text-slate-300">
                &quot;The SAT prep program was instrumental in helping me achieve my target score. The personalized study plan and practice tests made all the difference.&quot;
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-semibold">Michael Chen</h3>
                  <p className="text-slate-700 dark:text-slate-300">IELTS Band: 8.0</p>
                </div>
              </div>
              <p className="text-slate-800 dark:text-slate-300">
                &quot;The IELTS training program provided comprehensive coverage of all sections. The speaking practice sessions were particularly helpful.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">Basic</h3>
              <p className="text-4xl font-bold text-black dark:text-white mb-6">
                $99<span className="text-lg text-black dark:text-white">/month</span>
              </p>
              <ul className="space-y-3 mb-6 text-black dark:text-white">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Access to study materials
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Practice tests
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Basic support
                </li>
              </ul>
              <a href="/signup" className="block text-center px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                Get Started
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border-2 border-blue-600">
              <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">Premium</h3>
              <p className="text-4xl font-bold text-black dark:text-white mb-6">
                $199<span className="text-lg text-black dark:text-white">/month</span>
              </p>
              <ul className="space-y-3 mb-6 text-black dark:text-white">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  All Basic features
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  1-on-1 tutoring
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Priority support
                </li>
              </ul>
              <a href="/signup" className="block text-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                Get Started
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">Elite</h3>
              <p className="text-4xl font-bold text-black dark:text-white mb-6">
                $299<span className="text-lg text-black dark:text-white">/month</span>
              </p>
              <ul className="space-y-3 mb-6 text-black dark:text-white">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  All Premium features
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Personalized study plan
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  24/7 support
                </li>
              </ul>
              <a href="/signup" className="block text-center px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">How long does the SAT preparation program take?</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Our SAT program typically runs for 12 weeks, but the duration can be adjusted based on your target test date and current preparation level.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">What is included in the IELTS training program?</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Our IELTS program includes comprehensive coverage of all four sections (Reading, Writing, Listening, Speaking), practice tests, and one-on-one speaking sessions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Can I switch between different programs?</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Yes, you can switch between programs or upgrade your plan at any time. Contact our support team for assistance with plan changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Begin Your Journey?</h2>
          <a
            href="/register"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-600 bg-white hover:bg-gray-100 transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>``
    </div>
  );
}