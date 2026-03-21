export default function Hero () {
  return (
    <section className="hero">
      <div className={`
          wrapper-logo
          mx-auto
          my-0
          p-16
        `}>
        <p className={`
          logo-wordmark
          text-center
          text-3xl
          sm:text-4xl
          md:text-5xl
          text-black
          uppercase
          max-w-full mx-auto p-16`}>
          SEEMA & ROHAN
        </p>
      </div>

      <div className="hero-image relative">

        <img src="./imgs/hero.png" alt="transport image" className="w-full"/>

        <div className={`
          text-wrapper
          absolute 
          bottom-0 left-0 right-0 
          z-10
          flex justify-center
          px-4 pb-6 sm:pb-10 md:pb-12
        `}>
          <h1 className={`
            py-2 px-4 
            text-lg
            sm:text-2xl md:text-4xl lg:text-5xl
            leading-snug
            bg-white text-center 
            max-w-5xl lg:py-5 lg:px-20
            `}>
            Complimentary transportation will be provided
          </h1>
        </div>  
      </div>
    </section>
  );
}