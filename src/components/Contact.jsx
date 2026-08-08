"use client";

import { useState } from "react";
import { personalDetails } from "@/data/portfolioData";
import { Mail, Copy, Check, Send, MessageSquare, ArrowUpRight, Sparkles, PhoneCall, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "3794150d-ee09-4cf8-bb3f-10bb09b04f55",
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          from_name: "Fuad Hasan Portfolio Contact"
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 }
        });
        setFormData({
          name: "",
          email: "",
          service: "Next.js App",
          message: ""
        });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Failed to send message. Please try again or email fuad@zyntro360.com directly."
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "Network error occurred. Please check your connection or contact fuad@zyntro360.com."
      });
    } finally {
      setLoading(false);
    }
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

          {/* Right Web3Forms Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 shadow-outline-lg">
              
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto border-2 border-black shadow-outline">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-black">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-neutral-700 font-medium max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out! Your message has been delivered directly to Fuad. He will respond to your email shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-neutral-100 text-black border-2 border-black font-bold text-xs rounded-xl shadow-outline-sm hover:bg-black hover:text-white transition-all"
                  >
                    Send Another Message
                  </button>
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
                        disabled={loading}
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-50 border-2 border-black rounded-xl text-sm font-semibold text-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-60"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold uppercase text-black">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        disabled={loading}
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-50 border-2 border-black rounded-xl text-sm font-semibold text-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-60"
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
                          disabled={loading}
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
                      disabled={loading}
                      placeholder="Describe your project, website goals, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-50 border-2 border-black rounded-xl text-sm font-semibold text-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-60"
                    />
                  </div>

                  {/* Status Banner */}
                  {status.type === "error" && (
                    <div className="p-4 bg-red-50 border-2 border-red-600 rounded-2xl flex items-start gap-3 text-red-900 text-sm font-semibold">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span>{status.message}</span>
                    </div>
                  )}

                  {/* Submit Button with Loader */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-black text-white font-extrabold text-base rounded-2xl border-2 border-black shadow-outline-hover flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin text-white" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
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
