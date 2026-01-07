const PostLoading = () => {
  const array = new Array(3).fill(null);
  return (
    <div className="mt-30 mx-4 grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-6">
      {array.map((_, i) => (
        <article
          className="bg-(--secondary-color) w-fit flex lg:flex-row flex-col p-5 rounded-[36px] m-auto animate-pulse"
          key={i}
        >
          <div className="relative w-[320px] h-45">
            <div className="bg-(--text-gray) rounded-3xl w-full h-full" />
          </div>
          <div className="lg:ml-5 lg:mt-0 mt-5 flex-1">
            <div className="h-3 bg-(--text-gray) rounded-full w-20 mb-4" />
            <div className="space-y-2">
              <div className="h-3 bg-(--text-gray) rounded-full w-60" />
              <div className="h-3 bg-(--text-gray) rounded-full w-60" />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default PostLoading;