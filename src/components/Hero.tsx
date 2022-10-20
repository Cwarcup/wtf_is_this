/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
  return (
    <section className="mx-auto py-16">
      <div className="mx-auto flex w-full flex-col items-center justify-center sm:max-w-screen-sm md:max-w-screen-md lg:flex-row">
        <div className="text-center">
          <div className="">
            <h2 className="bg-clip-text text-3xl font-extrabold text-indigo-500 sm:text-5xl">
              Is this a duck?
            </h2>
            <p className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
              Upload an image and find out!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
