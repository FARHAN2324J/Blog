const Hero = () => {
  return (
    <section className="h-80">
      <div className="relative z-10 flex justify-center items-center h-full">
        <h1 className="lg:text-6xl md:text-5xl text-[30px] mx-3 leading-10 text-(--text-gray) text-center font-bold tracking-tight">
          Hey, Welcome to my{" "}
          <span className="text-(--primary-color) shadow-xl rounded-full font-extrabold">
            blog!
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
