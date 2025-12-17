import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("https://formspree.io/f/xeqyvozd");

  // SUCCESS STATE (Styled Card)
  if (state.succeeded) {
    return (
      <div className="w-full max-w-2xl p-12 mx-auto text-center border shadow-2xl rounded-2xl bg-zinc-900/30 border-white/10 backdrop-blur-md">
        <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20">
          <svg
            className="w-10 h-10 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mb-4 text-3xl font-bold text-white">Message Sent!</h3>
        <p className="text-lg text-zinc-400">
          Thanks for reaching out. We'll get back to you shortly.
        </p>
      </div>
    );
  }

  // FORM STATE
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* HEADER */}
      <div className="mb-10 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
          Get in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Touch
          </span>
        </h1>
        <p className="text-lg text-zinc-400">
          Ready to work smarter? Send us a message and let's chat.
        </p>
      </div>

      {/* FORM CARD */}
      <form
        onSubmit={handleSubmit}
        className="p-8 border shadow-2xl md:p-10 rounded-3xl bg-zinc-900/30 border-white/10 backdrop-blur-md"
        noValidate
      >
        <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
          {/* EMAIL INPUT */}
          <div className="col-span-1 md:col-span-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-semibold tracking-wider uppercase text-zinc-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 text-white transition-all duration-200 border bg-zinc-950/50 border-zinc-700 rounded-xl placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="you@company.com"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="mt-1 text-sm text-red-400"
            />
          </div>

          {/* SUBJECT INPUT */}
          <div className="col-span-1 md:col-span-2">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-semibold tracking-wider uppercase text-zinc-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-3 text-white transition-all duration-200 border bg-zinc-950/50 border-zinc-700 rounded-xl placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="What can we help you with?"
              required
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
              className="mt-1 text-sm text-red-400"
            />
          </div>
        </div>

        {/* MESSAGE INPUT */}
        <div className="mb-8">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-semibold tracking-wider uppercase text-zinc-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-3 text-white transition-all duration-200 border resize-none bg-zinc-950/50 border-zinc-700 rounded-xl placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Tell us about your project..."
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="mt-1 text-sm text-red-400"
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
