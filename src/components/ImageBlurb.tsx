const ImageBlurb = () => {
    return (
        <section className="bg-gradient-to-r from-gradient-purple to-gradient-blue flex justify-center align-items p-8 h-800 w-400">
            <div className="h-80 w-3/6">
                <iframe
                    className="h-full w-full rounded-lg"
                    width="100%"
                    src="https://www.youtube.com/embed/I3f0Uh1SokY"
                    title="Welcome to the AI Marketing Revolution!" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
            </div>
        </section>
    )
}

export default ImageBlurb
