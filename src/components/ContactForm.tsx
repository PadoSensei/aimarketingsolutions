
import { useForm, ValidationError } from "@formspree/react";
export default function ContactForm() {
    const [state, handleSubmit] = useForm("https://formspree.io/f/xeqyvozd");


    if (state.succeeded) {
        return <p>Thanks for your submission!</p>;
    }

    //TODO - DISPLAY ANY ERROR MESSAGES COMING FROM STATE
    //TODO - Add style to submit button

    return (
        <section className="bg-gradient-to-r from-gradient-blue-left to-gradient-purple-right">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Leave a message about how I can help</p>
                <form action="https://formspree.io/f/xeqyvozd"
                    method="POST" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input name="email" type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Please leave an email so I can contact you" required />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" name='subject' className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how I can help you" required />
                        <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea name="message" id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave your message here..."></textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    <button disabled={state.submitting} type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
            </div>
        </section>


    )
}

{/* <form action="https://formspree.io/f/xeqyvozd"
                method="POST">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" name="email" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <textarea id="message" name="message" />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
                <ValidationError errors={state.errors} />
            </form> */}