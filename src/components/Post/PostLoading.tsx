const PostLoading = () => {
  const array = new Array(3).fill(null);
  return (
    <div className="mt-10 mx-4 flex flex-col gap-6">
      {array.map((_, i) => (
        <article
          className="bg-(--bg-card) w-[90%] sm:w-[85%] md:w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-[40%] flex md:flex-row flex-col p-5 md:p-4 rounded-[36px] md:rounded-3xl m-auto md:gap-4 md:items-center md:max-h-55 animate-pulse"
          key={i}
        >
          <div className="relative shrink-0 w-full max-w-75 h-45">
            <div className="bg-(--text-body) rounded-3xl object-cover w-full h-full" />
          </div>
          <div className="lg:ml-5 lg:mt-0 mt-5 flex-1">
            <div className="h-3 bg-(--text-body) rounded-full w-1/4 mb-4" />
            <div className="space-y-2">
              <div className="h-3 bg-(--text-body) rounded-full w-full" />
              <div className="h-3 bg-(--text-body) rounded-full w-3/4" />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default PostLoading;
