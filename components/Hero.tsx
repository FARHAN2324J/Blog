const Hero = () => {
  return (
    <section className="h-50 relative overflow-hidden">
      <div className="relative z-10 flex justify-center items-center h-full">
        <h1 className="lg:text-6xl md:text-5xl text-[28px] mx-6 leading-10 text-(--text-hero) text-center font-extrabold tracking-tight">
          Welcome to my
          <span className="text-(--primary-color) rounded-full font-extrabold relative inline-block px-4 sm:mt-0 mt-12 sm:ml-8 ml-0">
            <div className="absolute -top-5 -left-4">
              <div className="relative">
                <div className="absolute sm:-inset-2 -inset-0.5 bg-linear-to-br from-(--primary-color)/60 to-(--primary-color)/60 rounded-full blur-lg"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="md:size-6 size-5 stroke-(--primary-color) relative z-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
              </div>
            </div>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <div className="relative">
                <div className="absolute sm:-inset-2 -inset-0.5 bg-linear-to-bl from-(--primary-color)/60 to-(--primary-color)/60 rounded-full blur-lg"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="md:size-6 size-5 stroke-(--primary-color) relative z-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                  />
                </svg>
              </div>
            </div>
            <div className="absolute -top-5 -right-4">
              <div className="relative">
                <div className="absolute sm:-inset-2 -inset-0.5 bg-linear-to-bl from-(--primary-color)/60 to-(--primary-color)/60 rounded-full blur-lg"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="md:size-6 size-5 relative z-10 stroke-(--primary-color)"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
              </div>
            </div>
            Blog!
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
