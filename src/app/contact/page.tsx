'use client'
import ContactForm from "@/components/ContactForm";
import Footer2 from "@/components/Footer2";
import NavBar from "@/components/NavBar";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
    const [state, handleSubmit] = useForm("https://formspree.io/f/xeqyvozd");


    if (state.succeeded) {
        return <p>Thanks for your submission!</p>;
    }
    return (
        <>
            <NavBar />
            <ContactForm />
            <Footer2 />
        </>
    )
}