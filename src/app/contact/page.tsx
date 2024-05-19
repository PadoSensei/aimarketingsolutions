'use client'
import ContactForm from "@/components/ContactForm";
import Footer2 from "@/components/Footer2";
import Layout from "@/components/Layout";
import NavBar from "@/components/NavBar";

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <ContactForm />
            <Footer2 />
        </div>
    )
}
