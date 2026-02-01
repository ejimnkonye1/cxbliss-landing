"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "./assest/logo2.png";
import {
  Lightbulb,
  Settings,
  BarChart3,
  MessageCircle,
  Map,
  Mic,
  TrendingUp,
  Target,
  MessagesSquare,
  Calendar,
  Globe,
  Crosshair,
  Wrench,
  Award,
  Users,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  ArrowRight,
  Star,
  Sparkles,
  GraduationCap,
  Briefcase,
  UserCheck,
  Building2,
  Rocket,
} from "lucide-react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [navOpen, setNavOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Do I need prior experience in customer experience?",
      answer:
        "No. This program guides you from fundamentals to confident application.",
    },
    {
      question: "Is this certificate recognized?",
      answer:
        "Yes. It follows globally aligned CX principles and demonstrates applied capability.",
    },
    {
      question: "How much time will I need weekly?",
      answer:
        "3-4 hours per week. Flexible for students and working professionals.",
    },
    {
      question: "Will this help me get better job opportunities?",
      answer:
        "Yes. You gain practical skills, confidence, and strong CX talking points.",
    },
    {
      question: "What happens after the 6 weeks?",
      answer:
        "You gain access to the CXBliss Alumni Circles, learning resources, and ongoing growth opportunities.",
    },
  ];

  const navLinks = [
    { label: "Program", href: "#program" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Who It's For", href: "#audience" },
    { label: "Pricing", href: "#enroll" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <main className="min-h-screen bg-gray-950">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="CXBliss Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-extrabold text-white tracking-tight">
              CX<span className="text-blue-500">Bliss</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#enroll"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/25"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-white transition-transform ${
                  navOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-opacity ${
                  navOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-transform ${
                  navOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {navOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-white/5 animate-fade-in">
            <div className="px-5 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setNavOpen(false)}
                  className="text-gray-400 hover:text-white py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#enroll"
                onClick={() => setNavOpen(false)}
                className="bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors mt-2"
              >
                Enroll Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 pt-32 pb-28 text-center text-white hero-grid">
        <div className="radial-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 relative">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-400 px-5 py-2 rounded-full text-sm font-medium mb-8 border border-blue-500/20">
              <Sparkles className="w-4 h-4" />
              CX FUNDAMENTALS MENTORSHIP COHORT
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight animate-fade-in-up animation-delay-100">
            Build CX skills leaders trust
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              and businesses pay for
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
            A 6-week mentor-led program to help you apply customer experience
            confidently and professionally.
          </p>

          <div className="animate-fade-in-up animation-delay-300">
            <div className="inline-flex flex-col items-center bg-gray-800/50 border border-gray-700/50 px-10 py-6 rounded-2xl mb-10 backdrop-blur-sm">
              <p className="text-yellow-400 text-sm font-semibold tracking-wider uppercase mb-2">
                Early Bird Offer &mdash; Limited Slots
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-gray-500 line-through text-lg">
                  &#8358;35,000
                </span>
                <span className="text-4xl md:text-5xl font-extrabold text-white">
                  &#8358;10,000
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <a
              href="#enroll"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-600/30 animate-pulse-glow"
            >
              Enroll Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#program"
              className="inline-flex items-center justify-center gap-2 bg-white/5 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all border border-white/10"
            >
              Learn More
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm animate-fade-in animation-delay-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span>Mentor-Led</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span>100% Remote</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span>Certificate Included</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span>No Experience Required</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-3xl">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
              The Challenge
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4 leading-tight">
              Customer Experience Is a{" "}
              <span className="text-blue-600">Leadership Skill</span>
            </h2>
            <p className="text-lg text-gray-500 mb-14">
              Most organizations talk about CX but struggle to execute it.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                text: "Customer problems repeat",
                icon: "01",
              },
              {
                text: "Feedback is collected but ignored",
                icon: "02",
              },
              {
                text: "Teams react instead of designing",
                icon: "03",
              },
              {
                text: "CX decisions feel unclear and subjective",
                icon: "04",
              },
            ].map((problem, index) => (
              <div
                key={index}
                className="group bg-gray-50 p-7 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all"
              >
                <span className="text-3xl font-extrabold text-blue-600/20 group-hover:text-blue-600/40 transition-colors">
                  {problem.icon}
                </span>
                <p className="text-gray-700 mt-3 font-medium">
                  {problem.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 px-10 py-5 rounded-2xl shadow-lg shadow-blue-600/20">
              <Sparkles className="w-5 h-5 text-blue-200" />
              <p className="text-white text-lg font-bold">
                This program fixes that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What This Mentorship Does */}
      <section
        id="program"
        className="py-24 bg-gray-950 text-white"
      >
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">
              The Program
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 mb-4">
              What This Mentorship Does
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The CX Fundamentals Mentorship Cohort helps you:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lightbulb,
                title: "Understand CX Clearly",
                desc: "Grasp the fundamentals with clarity and confidence",
              },
              {
                icon: Settings,
                title: "Apply It Practically",
                desc: "Use real frameworks in real business scenarios",
              },
              {
                icon: BarChart3,
                title: "Measure It Confidently",
                desc: "Track and demonstrate CX impact with data",
              },
              {
                icon: MessageCircle,
                title: "Communicate It Professionally",
                desc: "Present CX insights to stakeholders effectively",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06] hover:border-blue-500/30 hover:bg-blue-600/5 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-blue-600/20">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center p-8 bg-blue-600/10 rounded-2xl border border-blue-500/20 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed">
              By the end of 6 weeks, you won&apos;t just &quot;know CX&quot; —
              you will know how to{" "}
              <strong className="text-blue-400">use it</strong> in real business
              situations.
            </p>
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section id="curriculum" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
              Curriculum
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
              What You Will Learn
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              You will gain practical skills to:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {[
              {
                icon: Map,
                text: "Map and redesign customer journeys",
              },
              {
                icon: Mic,
                text: "Build Voice of Customer systems that inform decisions",
              },
              {
                icon: TrendingUp,
                text: "Use CX metrics to drive retention and growth",
              },
              {
                icon: Target,
                text: "Align CX initiatives with business goals",
              },
              {
                icon: MessagesSquare,
                text: "Lead CX conversations with confidence",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md hover:shadow-blue-600/5 transition-all"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-10 text-center shadow-xl shadow-blue-600/15">
            <p className="text-white text-lg md:text-xl font-semibold">
              You become the person teams rely on when customer experience needs
              real solutions.
            </p>
          </div>
          <div className="text-center mt-10">
            <a
              href="#enroll"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-600/25"
            >
              Join the Cohort
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section id="audience" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
              Who It&apos;s For
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
              Who This Program Is For
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              This program is designed for you if you:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: GraduationCap,
                text: "Are a student or recent graduate preparing for the future",
              },
              {
                icon: UserCheck,
                text: "Work in customer service or support and want to grow",
              },
              {
                icon: Briefcase,
                text: "Are a CX professional or manager building real capability",
              },
              {
                icon: Users,
                text: "Lead teams, operations, product, or marketing",
              },
              {
                icon: Building2,
                text: "Run a business and want scalable, customer-centric growth",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/5 transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center mt-14 text-xl font-bold text-gray-900">
            If CX is part of your responsibility,{" "}
            <span className="text-blue-600">this program fits.</span>
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
              Skill Building
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
              Skills You Will Build
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  CX & Business Skills
                </h3>
              </div>
              <ul className="space-y-0">
                {[
                  "Customer journey mapping",
                  "Voice of Customer & CX metrics",
                  "Problem-solving and business thinking",
                  "Strategic decision-making",
                ].map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 py-4 border-b border-gray-200/60 last:border-0 text-gray-600"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Career & Leadership Skills
                </h3>
              </div>
              <ul className="space-y-0">
                {[
                  "Communication and influence",
                  "Stakeholder management",
                  "Critical thinking",
                  "Professional documentation",
                ].map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 py-4 border-b border-gray-200/60 last:border-0 text-gray-600"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center mt-12 p-6 bg-blue-50 rounded-xl text-gray-600 italic max-w-2xl mx-auto border border-blue-100">
            These are skills that compound across roles, industries, and
            leadership levels.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">
              Program Structure
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 mb-4">
              How the Cohort Works
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Calendar,
                title: "6 Weeks of Mentor-Led Learning",
                desc: "Structured curriculum with expert guidance throughout",
              },
              {
                icon: Globe,
                title: "Fully Remote & Flexible",
                desc: "Learn from anywhere, at your own pace",
              },
              {
                icon: Crosshair,
                title: "No Prior CX Experience Required",
                desc: "Start from fundamentals and build up",
              },
              {
                icon: Wrench,
                title: "Practical Frameworks & Real Scenarios",
                desc: "Apply what you learn immediately",
              },
              {
                icon: Award,
                title: "Certificate on Completion",
                desc: "Demonstrate your CX capabilities",
              },
              {
                icon: Users,
                title: "CXBliss Alumni Community",
                desc: "Ongoing access to peers and resources",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white/[0.03] p-7 rounded-2xl border border-white/[0.06] hover:border-blue-500/30 hover:bg-blue-600/5 transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-14 text-xl text-blue-400 font-semibold">
            You are supported every step of the way.
          </p>
        </div>
      </section>

      {/* Why CXBliss */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
              Why CXBliss
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              This is not another online course. It is:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Mentorship-Driven",
                desc: "Personal guidance from experienced CX professionals",
                icon: UserCheck,
              },
              {
                title: "Framework-Based",
                desc: "Proven methodologies you can apply immediately",
                icon: Settings,
              },
              {
                title: "Practical & Strategic",
                desc: "Real-world application, not just theory",
                icon: Rocket,
              },
              {
                title: "Built for Application",
                desc: "No content overload, just what you need",
                icon: Target,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-gray-900 hover:border-gray-800 transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-600 transition-colors">
                  <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center mt-14 text-2xl font-bold text-gray-900">
            Our standard is simple:{" "}
            <span className="text-blue-600">Excellence or nothing.</span>
          </p>
        </div>
      </section>

      {/* Investment Section */}
      <section
        id="enroll"
        className="py-24 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white text-center relative"
      >
        <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 relative">
          <span className="text-blue-200 font-semibold text-sm tracking-wider uppercase">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 mb-14">
            Investment
          </h2>
          <div className="bg-white/10 backdrop-blur-md p-10 md:p-14 rounded-3xl max-w-lg mx-auto border border-white/20 shadow-2xl">
            <p className="text-lg line-through opacity-60">
              Full program value: &#8358;35,000
            </p>
            <p className="text-5xl md:text-6xl font-extrabold my-4 tracking-tight">
              &#8358;10,000
            </p>
            <span className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm mb-8">
              Early Bird Offer &mdash; Limited Time
            </span>
            <div>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-14 py-4 rounded-xl font-bold text-lg hover:-translate-y-0.5 transition-all shadow-xl hover:shadow-2xl w-full sm:w-auto"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-blue-100">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Certificate</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Alumni Access</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Mentor Support</span>
              </div>
            </div>
          </div>
          <p className="mt-10 text-blue-100 max-w-md mx-auto">
            This is a strategic investment in your career and professional
            growth.
          </p>
          <div className="mt-12 pt-8 border-t border-white/20 max-w-lg mx-auto">
            <p className="mb-5 text-blue-100">Still unsure?</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="#"
                className="bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all flex items-center gap-2 border border-white/10"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a
                href="#"
                className="bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all flex items-center gap-2 border border-white/10"
              >
                <Calendar className="w-5 h-5" />
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
              Support
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue-200 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 flex justify-between items-center text-left font-semibold text-gray-900 hover:bg-gray-50/50 transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-600" />
                    )}
                  </div>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "pb-6 max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Build CX Skills That Matter?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Join the next cohort and start your journey toward becoming a
            confident CX professional.
          </p>
          <a
            href="#enroll"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-600/30"
          >
            Enroll Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-white/5 text-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="CXBliss Logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="text-xl font-extrabold tracking-tight">
                CX<span className="text-blue-500">Bliss</span>
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              &copy; 2026 CXBliss. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
