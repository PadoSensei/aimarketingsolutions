"use client";
import ContactForm from "@/components/ContactForm";
import Footer2 from "@/components/Footer2";
import NavBar from "@/components/NavBar";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <NavBar />

      {/* Main Content with Background Effects */}
      <main className="relative flex items-center justify-center flex-grow px-4 pt-32 pb-20 overflow-hidden sm:px-8">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative z-10 w-full">
          <ContactForm />
        </div>
      </main>

      <Footer2 />
    </div>
  );
}
