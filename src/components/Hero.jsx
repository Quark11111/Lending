const Hero = (props) => {
    return (
        <section>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <button>{props.buttonText}</button>
        </section>
    )
}

export default Hero