import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GymStatusBanner from './components/GymStatusBanner';
import MembershipPlans from './components/MembershipPlans';
import TimingsSection from './components/TimingsSection';
import Facilities from './components/Facilities';
import FitnessCalculator from './components/FitnessCalculator';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Official LAS VEGAS Logo */}
        <Hero />

        {/* Real-time Gym Status Bar (Live IST session check) */}
        <GymStatusBanner />

        {/* Membership Plans: 1M, 3M, 6M, 1Y with Fee Breakdowns */}
        <MembershipPlans />

        {/* Timings: Morning 5:30-10 AM, Evening 4-9:30 PM, Sunday Closed */}
        <TimingsSection />

        {/* Gym Facilities & High-end Equipment */}
        <Facilities />

        {/* Interactive BMI & Calorie Calculator */}
        <FitnessCalculator />

        {/* Gym Location & Embedded Google Map */}
        <LocationSection />

        {/* Direct Contacts: WhatsApp, Instagram, Email & Inquiry Form */}
        <ContactSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Floating Quick Action Contacts */}
      <FloatingActions />
    </div>
  );
}
