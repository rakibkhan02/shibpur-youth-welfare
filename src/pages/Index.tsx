import {
  Facebook,
  HandHeart,
  HeartPulse,
  Mail,
  MapPin,
  Menu,
  Phone,
  PlayCircle,
  Sprout,
  Users,
} from "lucide-react";

import communityHero from "@/assets/community-service-bangladesh.jpg";
import sjkfnLogo from "@/assets/sjkfn-logo.jpg";
import { Button } from "@/components/ui/button";

const navItems = [
  ["হোম", "#home"],
  ["আমাদের সম্পর্কে", "#about"],
  ["কার্যক্রম", "#programs"],
  ["গ্যালারি", "#gallery"],
  ["আমাদের সাথে যুক্ত হোন", "#join"],
  ["অনুদান", "#donate"],
  ["যোগাযোগ", "#contact"],
];

const goals = [
  { title: "মানবিক সহায়তা", text: "অসহায়, দরিদ্র, দুর্ঘটনাগ্রস্ত মানুষের চিকিৎসা, ঔষধ, হাসপাতাল ব্যয় ও রক্তদান কার্যক্রমে সহায়তা।" },
  { title: "শিক্ষা সহায়তা", text: "স্কুল-মাদ্রাসার দরিদ্র ও মেধাবী শিক্ষার্থীদের বই, খাতা, পোশাক ও স্টেশনারি বিতরণ।" },
  { title: "সামাজিক উন্নয়ন", text: "পরিচ্ছন্নতা অভিযান, বৃক্ষরোপণ, পরিবেশ রক্ষা, বাল্যবিবাহ বিরোধী ও সচেতনতামূলক ক্যাম্পেইন।" },
  { title: "দুর্যোগকালীন সহায়তা", text: "বন্যা, ঝড়, আগুন বা প্রাকৃতিক দুর্যোগে ত্রাণ, খাবার, পোশাক ও আশ্রয় সহায়তা প্রদান।" },
  { title: "যুব উন্নয়ন", text: "স্বেচ্ছাসেবক প্রশিক্ষণ ও সামাজিক নেতৃত্ব বিকাশ কর্মশালা।" },
  { title: "ধর্মীয় ও সাংস্কৃতিক", text: "ধর্মীয় অনুষ্ঠান, ইফতার মাহফিল, মিলাদ ও কোরআন শিক্ষা সহায়তা।" },
];

const programs = ["রক্তদান কর্মসূচি", "অসহায়দের সহায়তা", "শিক্ষা সহায়তা", "শীতবস্ত্র বিতরণ", "বৃক্ষরোপণ", "ইফতার বিতরণ"];

const donations = [
  ["bKash", "01603462997"],
  ["Nagad", "01603462997"],
  ["Rocket", "01603462997"],
];

const Index = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-soft text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <a href="#home" className="flex items-center gap-3 font-extrabold text-primary">
            <img src={sjkfnLogo} alt="শিবপুর যুব কল্যাণ ফাউন্ডেশন ১৯ লোগো" className="size-12 rounded-full border border-border bg-card object-cover shadow-lift" width={48} height={48} />
            <span className="leading-tight">শিবপুর যুব কল্যাণ<br className="sm:hidden" /> ফাউন্ডেশন ১৯</span>
          </a>
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-muted hover:text-primary">
                {label}
              </a>
            ))}
          </div>
          <Button variant="soft" size="icon" className="lg:hidden" aria-label="মেনু">
            <Menu />
          </Button>
        </nav>
      </header>

      <section id="home" className="relative min-h-[92vh] pt-24">
        <div className="absolute inset-0 -z-10">
          <img src={communityHero} alt="বাংলাদেশি তরুণ স্বেচ্ছাসেবীদের সমাজসেবামূলক কার্যক্রম" className="h-full w-full object-cover" width={1280} height={896} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/82 to-background/30" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:px-8 lg:grid-cols-[1fr_0.8fr] lg:py-24">
          <div className="animate-reveal">
            <p className="mb-5 inline-flex rounded-full border border-primary/20 bg-card/80 px-4 py-2 text-sm font-bold text-primary shadow-sm backdrop-blur">মানবতার সেবায় আমরা অঙ্গীকারবদ্ধ</p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight text-deep md:text-6xl lg:text-7xl">শিবপুর যুব কল্যাণ ফাউন্ডেশন ১৯</h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-muted-foreground md:text-xl">
              “শিবপুর যুব কল্যাণ ফাউন্ডেশন নাইন্টিন” একটি অরাজনৈতিক ও অলাভজনক সেবামূলক প্রতিষ্ঠান।
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="pill"><a href="#donate"><HandHeart /> Donate Now</a></Button>
              <Button asChild variant="warm" size="pill"><a href="#join"><Users /> Join Us</a></Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="animate-float rounded-[2rem] border border-card/70 bg-card/75 p-6 shadow-soft backdrop-blur-md">
              <HeartPulse className="mb-5 size-12 text-primary" />
              <p className="text-3xl font-black text-deep">ঐক্য, সহমর্মিতা ও মানবতার চেতনায়</p>
              <p className="mt-3 leading-7 text-muted-foreground">অসহায়, দরিদ্র ও বঞ্চিত জনগোষ্ঠীর পাশে দাঁড়ানো আমাদের নৈতিক দায়িত্ব।</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-4xl">
            <p className="font-bold text-primary">আমাদের সম্পর্কে</p>
            <h2 className="mt-3 text-3xl font-black text-deep md:text-5xl">একটি আদর্শ সমাজ গঠনের লক্ষ্যে</h2>
            <p className="mt-6 text-lg leading-9 text-muted-foreground">
              মানবসেবা, সমাজকল্যাণ, শিক্ষার প্রসার, পরিবেশ সংরক্ষণ ও নৈতিক মূল্যবোধের বিকাশের মাধ্যমে এলাকার সমাজ সচেতন যুবসমাজ ঐক্যবদ্ধভাবে ২০২৫ সালে “শিবপুর যুব কল্যাণ ফাউন্ডেশন নাইন্টিন” প্রতিষ্ঠা করেছে।
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {goals.map((goal) => (
              <article key={goal.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lift">
                <h3 className="text-xl font-extrabold text-primary">{goal.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{goal.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-bold text-primary">আমাদের কার্যক্রম</p>
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <Button key={program} variant="hero" size="pill" className="h-16 justify-start rounded-2xl text-lg">
                <Sprout /> {program}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="font-bold text-primary">গ্যালারি</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="hero" size="pill"><a href="#gallery"><Sprout /> ছবি গ্যালারি</a></Button>
            <Button asChild variant="warm" size="pill"><a href="#gallery"><PlayCircle /> ভিডিও গ্যালারি</a></Button>
          </div>
        </div>
      </section>

      <section id="join" className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-bold text-secondary">আমাদের সাথে যুক্ত হোন</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">ভলেন্টিয়ার বা নতুন সদস্য হিসেবে পাশে থাকুন</h2>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Button asChild variant="warm" size="pill"><a href="https://forms.google.com" target="_blank" rel="noreferrer">ভলেন্টিয়ার ফরম</a></Button>
            <Button asChild variant="soft" size="pill"><a href="https://forms.google.com" target="_blank" rel="noreferrer">নতুন সদস্য ফরম</a></Button>
          </div>
        </div>
      </section>

      <section id="donate" className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="font-bold text-primary">অনুদান</p>
          <h2 className="mt-3 text-3xl font-black text-deep md:text-5xl">মোবাইল ব্যাংকিং</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {donations.map(([name, number]) => (
              <article key={name} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                <p className="text-lg font-bold text-muted-foreground">{name}</p>
                <p className="mt-2 text-3xl font-black text-primary">{number}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-8 lg:grid-cols-2">
          <div>
            <p className="font-bold text-primary">যোগাযোগ</p>
            <div className="mt-8 space-y-4 text-lg font-semibold text-muted-foreground">
              <p className="flex gap-3"><MapPin className="mt-1 text-primary" /> ৮৩৫০, শিবপুর খাসের হাট, তজুমদ্দিন, ভোলা</p>
              <p className="flex gap-3"><Phone className="mt-1 text-primary" /> 01615-345486</p>
              <p className="flex gap-3"><Mail className="mt-1 text-primary" /> shibpurjubokollanfoundation@gmail.com</p>
              <p className="flex gap-3"><Facebook className="mt-1 text-primary" /> <a href="https://www.facebook.com/share/1AuY5f7GGL/" target="_blank" rel="noreferrer" className="transition hover:text-primary">Facebook Page link</a></p>
            </div>
          </div>
          <iframe title="শিবপুর খাসের হাট ম্যাপ" className="min-h-[360px] w-full rounded-2xl border border-border shadow-soft" loading="lazy" src="https://www.google.com/maps?q=Shibpur%20Khaser%20Hat%20Tazumuddin%20Bhola&output=embed" />
        </div>
      </section>

      <footer className="bg-deep px-4 py-10 text-primary-foreground md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src={sjkfnLogo} alt="শিবপুর যুব কল্যাণ ফাউন্ডেশন ১৯ লোগো" className="size-12 rounded-full border border-primary/30 bg-card object-cover" width={48} height={48} />
            <p className="font-bold">Copyright © 2026<br />শিবপুর যুব কল্যাণ ফাউন্ডেশন ১৯</p>
          </div>
          <div className="flex gap-3">
            <a aria-label="Facebook" href="https://www.facebook.com/share/1AuY5f7GGL/" target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-full bg-primary text-primary-foreground transition hover:-translate-y-1"><Facebook /></a>
            <a aria-label="Email" href="mailto:shibpurjubokollanfoundation@gmail.com" className="grid size-11 place-items-center rounded-full bg-primary text-primary-foreground transition hover:-translate-y-1"><Mail /></a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;