import React, { useState } from 'react';
import { 
  MessageCircle, 
  Mail, 
  Instagram, 
  Phone, 
  Send, 
  CheckCircle2, 
  Clock, 
  User, 
  Sparkles 
} from 'lucide-react';
import { GYM_DETAILS, MEMBERSHIP_PLANS } from '../data/gymData';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('Muscle Building & Hypertrophy');
  const [preferredBatch, setPreferredBatch] = useState('Morning (5:30 AM – 10:00 AM)');
  const [planInterest, setPlanInterest] = useState('6 Months Transformation (₹3,999)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message text
    const text = `*New LAS VEGAS Gym Inquiry*%0A` +
      `👤 *Name:* ${encodeURIComponent(name || 'Interested Member')}%0A` +
      `📞 *Phone:* ${encodeURIComponent(phone || 'Not provided')}%0A` +
      `🎯 *Fitness Goal:* ${encodeURIComponent(goal)}%0A` +
      `⏰ *Preferred Batch:* ${encodeURIComponent(preferredBatch)}%0A` +
      `💳 *Plan Interest:* ${encodeURIComponent(planInterest)}%0A` +
      (message ? `💬 *Message:* ${encodeURIComponent(message)}%0A` : '');

    setSubmitted(true);

    // Open WhatsApp directly
    window.open(`${GYM_DETAILS.whatsappUrl}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-300 text-xs font-bold uppercase tracking-wider mb-4">
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Connect With LAS VEGAS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
          START YOUR <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-red-500 bg-clip-text text-transparent">JOURNEY TODAY</span>
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
          Have questions about membership, admission fees, or workout slots? Reach out directly via WhatsApp, Instagram, or email.
        </p>
      </div>

      {/* Quick Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {/* WhatsApp Card */}
        <a
          id="contact-card-whatsapp"
          href={`${GYM_DETAILS.whatsappUrl}?text=${encodeURIComponent("Hello LAS VEGAS! I want to inquire about gym membership plans.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-2xl bg-[#0c1218] border border-emerald-500/30 hover:border-emerald-500/70 transition-all duration-300 group shadow-lg flex flex-col justify-between"
        >
          <div>
            <div className="p-3 w-fit rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
              Instant Chat & Admission
            </span>
            <h3 className="text-xl font-bold text-white mt-1 mb-1">
              WhatsApp Us
            </h3>
            <p className="text-xs text-zinc-400 mb-4">
              Direct chat with gym management for quick admission & queries.
            </p>
          </div>
          <div className="font-mono font-bold text-base text-emerald-400 flex items-center justify-between">
            <span>{GYM_DETAILS.whatsappNumber}</span>
            <span className="text-xs font-sans group-hover:translate-x-1 transition-transform">Chat →</span>
          </div>
        </a>

        {/* Instagram Card */}
        <a
          id="contact-card-instagram"
          href={GYM_DETAILS.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-2xl bg-[#140f1a] border border-pink-500/30 hover:border-pink-500/70 transition-all duration-300 group shadow-lg flex flex-col justify-between"
        >
          <div>
            <div className="p-3 w-fit rounded-xl bg-pink-500/15 text-pink-400 border border-pink-500/30 mb-4 group-hover:scale-110 transition-transform">
              <Instagram className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-pink-400">
              Community & Motivation
            </span>
            <h3 className="text-xl font-bold text-white mt-1 mb-1">
              Instagram
            </h3>
            <p className="text-xs text-zinc-400 mb-4">
              Watch member PRs, gym vibe, workout reels, and community updates.
            </p>
          </div>
          <div className="font-semibold text-sm text-pink-400 flex items-center justify-between">
            <span className="truncate max-w-[200px]">{GYM_DETAILS.instagramHandle}</span>
            <span className="text-xs group-hover:translate-x-1 transition-transform">Follow →</span>
          </div>
        </a>

        {/* Email Card */}
        <a
          id="contact-card-email"
          href={`mailto:${GYM_DETAILS.email}?subject=Gym%20Inquiry%20-%20LASH%20VEGAS`}
          className="p-6 rounded-2xl bg-[#121118] border border-amber-500/30 hover:border-amber-500/70 transition-all duration-300 group shadow-lg flex flex-col justify-between"
        >
          <div>
            <div className="p-3 w-fit rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
              Official Inquiries
            </span>
            <h3 className="text-xl font-bold text-white mt-1 mb-1">
              Email Us
            </h3>
            <p className="text-xs text-zinc-400 mb-4">
              Corporate packages, personal training queries, and feedback.
            </p>
          </div>
          <div className="font-mono text-sm text-amber-400 flex items-center justify-between">
            <span className="truncate max-w-[180px]">{GYM_DETAILS.email}</span>
            <span className="text-xs font-sans group-hover:translate-x-1 transition-transform">Send →</span>
          </div>
        </a>
      </div>

      {/* Inquiry Form */}
      <div className="max-w-3xl mx-auto bg-[#0d1017] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="mb-8">
          <h3 className="text-2xl font-bold font-display text-white mb-2">
            Send a Direct Admission Inquiry
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400">
            Fill in your preferences below. Submitting will instantly format and transmit your inquiry to the LAS VEGAS team via WhatsApp!
          </p>
        </div>

        {submitted && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
            <span>Thank you! Your WhatsApp message has been launched. Our team will assist you shortly.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold uppercase text-zinc-300 mb-1.5 block">Your Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#151922] border border-zinc-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase text-zinc-300 mb-1.5 block">Phone Number (Optional)</label>
              <input
                type="tel"
                placeholder="e.g. 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#151922] border border-zinc-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold uppercase text-zinc-300 mb-1.5 block">Primary Goal</label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full bg-[#151922] border border-zinc-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"
              >
                <option value="Muscle Building & Hypertrophy">Muscle Building & Hypertrophy</option>
                <option value="Fat Loss & Body Toning">Fat Loss & Body Toning</option>
                <option value="Strength & Powerlifting">Strength & Powerlifting</option>
                <option value="General Fitness & Stamina">General Fitness & Stamina</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase text-zinc-300 mb-1.5 block">Preferred Timing</label>
              <select
                value={preferredBatch}
                onChange={(e) => setPreferredBatch(e.target.value)}
                className="w-full bg-[#151922] border border-zinc-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"
              >
                <option value="Morning (5:30 AM – 10:00 AM)">Morning (5:30 AM – 10:00 AM)</option>
                <option value="Evening (4:00 PM – 9:30 PM)">Evening (4:00 PM – 9:30 PM)</option>
                <option value="Flexible (Both Morning & Evening)">Flexible (Both Morning & Evening)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase text-zinc-300 mb-1.5 block">Plan of Interest</label>
            <select
              value={planInterest}
              onChange={(e) => setPlanInterest(e.target.value)}
              className="w-full bg-[#151922] border border-zinc-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"
            >
              <option value="1 Month Starter (₹1,500)">1 Month Starter — ₹1,500 (₹700 admission + ₹800 fee)</option>
              <option value="3 Months Momentum (₹2,500)">3 Months Momentum — ₹2,500 (Zero Admission Fee)</option>
              <option value="6 Months Transformation (₹3,999)">6 Months Transformation — ₹3,999 (Zero Admission Fee • Most Popular)</option>
              <option value="1 Year Elite Annual (₹6,000)">1 Year Elite Annual — ₹6,000 (Zero Admission Fee • Best Value)</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase text-zinc-300 mb-1.5 block">Any Special Notes or Questions</label>
            <textarea
              rows={3}
              placeholder="Tell us about previous gym experience, medical considerations, or questions..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-[#151922] border border-zinc-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black shadow-lg shadow-amber-900/40 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            <Send className="w-4 h-4" />
            <span>Send Admission Inquiry via WhatsApp</span>
          </button>
        </form>
      </div>
    </section>
  );
}
