"use client";

import { useState } from "react";
import { personalDetails } from "@/data/portfolioData";
import { Mail, Copy, Check, Send, MessageSquare, ArrowUpRight, Sparkles, PhoneCall } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Next.js App",
    message: ""
  });

  const servicesList = ["Next.js App", "WordPress Site", "E-Commerce Store", "Speed Optimization", "Other"];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        service: "Next.js App",
        message: ""
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 bg-neutral-50 border-b-2 border-black bg-dot-pattern">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border-2 border-black rounded-full text-xs font-mono font-bold uppercase tracking-wider text-black shadow-outline-sm">
            <MessageSquare className="w-4 h-4 text-black" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight">
            Let's Talk About Your Project
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 font-medium">
            Send me a message below or reach out directly on WhatsApp or Email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 shadow-outline-lg space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
                  Direct Contact
                </span>
                <h3 className="text-2xl font-extrabold text-black">
                  Reach Out Directly
                </h3>
                <p className="text-sm text-neutral-700 font-medium leading-relaxed">
                  Have a question or a project idea? Feel free to email me, message on WhatsApp, or connect on social media.
                </p>
              </div>

              {/* Copy Email Box */}
              <div className="p-4 bg-neutral-50 border-2 border-black rounded-2xl space-y-3">
                <span className="text-xs font-mono font-bold text-neutral-500 uppercase block">
                  Email Address
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono font-bold text-sm text-black truncate">
                    {personalDetails.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 bg-black text-white text-xs font-bold rounded-xl border border-black flex items-center gap-1.5 shrink-0 hover:bg-neutral-800 transition-colors shadow-outline-sm"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Copied!" : "Copy"}</span>
                  </button>
                </div>
              </div>

              {/* WhatsApp Box */}
              <a
                href={personalDetails.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-black text-white rounded-2xl border-2 border-black flex items-center justify-between shadow-outline-hover block transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white text-black rounded-xl font-bold">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-neutral-300 uppercase block">WhatsApp Direct</span>
                    <span className="font-mono font-extrabold text-sm text-white">{personalDetails.whatsapp}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </a>

              {/* Social Links */}
              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={personalDetails.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[90px] py-2.5 px-3 bg-white border-2 border-black rounded-xl text-xs font-bold text-black hover:bg-neutral-100 transition-colors flex items-center justify-center gap-1 shadow-outline-sm"
                >
                  <span>Facebook</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={personalDetails.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[90px] py-2.5 px-3 bg-white border-2 border-black rounded-xl text-xs font-bold text-black hover:bg-neutral-100 transition-colors flex items-center justify-center gap-1 shadow-outline-sm"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={personalDetails.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[90px] py-2.5 px-3 bg-white border-2 border-black rounded-xl text-xs font-bold text-black hover:bg-neutral-100 transition-colors flex items-center justify-center gap-1 shadow-outline-sm"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Clean Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 shadow-outline-lg">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto border-2 border-black shadow-outline">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-black">
                    Message Sent!
                  </h3>
                  <p className="text-neutral-700 font-medium max-w-md mx-auto">
                    Thanks for reaching out! I'll read your message and reply via email or WhatsApp soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold uppercase text-black">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-50 border-2 border-black rounded-xl text-sm font-semibold text-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold uppercase text-black">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-50 border-2 border-black rounded-xl text-sm font-semibold text-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                  </div>

                  {/* Service Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase text-black">
                      Service Needed
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {servicesList.map((s) => (
                        <button
                          type="button"
                          key={s}
                          onClick={() => setFormData({ ...formData, service: s })}
                          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border-2 ${
                            formData.service === s
                              ? "bg-black text-white border-black shadow-outline-sm"
                              : "bg-neutral-50 text-black border-black hover:bg-neutral-100"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase text-black">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your project, website goals, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-50 border-2 border-black rounded-xl text-sm font-semibold text-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-black text-white font-extrabold text-base rounded-2xl border-2 border-black shadow-outline-hover flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
