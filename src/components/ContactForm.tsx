import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("https://formspree.io/f/xeqyvozd");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <main className="flex-grow px-4 py-8 bg-gradient-to-r from-gradient-purple to-gradient-blue sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-3xl px-4 mx-auto ">
        <h1 className="mb-8 text-3xl font-bold text-center text-white">
          Contact Us
        </h1>
        <form
          onSubmit={handleSubmit}
          className="p-8 bg-white rounded-lg shadow-md"
          noValidate
        >
          <fieldset className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-bold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                aria-label="Email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 font-bold text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the subject"
                aria-label="Subject"
                required
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </div>
          </fieldset>
          <div className="mt-6">
            <label
              htmlFor="message"
              className="block mb-2 font-bold text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
              aria-label="Message"
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full px-6 py-3 mt-6 font-bold text-white bg-blue-600 rounded-md md:w-auto hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </main>
  );
}
