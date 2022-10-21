/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
  return (
    <section className="mx-auto py-16">
      <div className="mx-auto flex w-full flex-col items-center justify-center sm:max-w-screen-sm lg:flex-row">
        <div className="text-center">
          <h2 className="bg-clip-text text-3xl font-extrabold text-darkBlue sm:text-5xl mb-2">
            Is this a banana?
          </h2>
          <p className="bg-gradient-to-r from-darkBlue via-greenSheen to-darkBlue bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
            Upload an image and find out!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
