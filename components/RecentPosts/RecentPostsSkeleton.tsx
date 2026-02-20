export default function RecentPostsSkeleton() {
    return (
        <section className="mt-16 border-t border-(--text-light-gray)/20 pt-8 m-6">
            <h2 className="text-(--text-title) text-2xl font-bold mb-6">
                Latest posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-(--bg-card) rounded-3xl p-3 animate-pulse">
                        <div className="h-40 w-full bg-(--text-body)  rounded-2xl mb-3"></div>
                        <div className="h-5 w-3/4 bg-(--text-body)  rounded-full mb-2"></div>
                        <div className="h-4 w-1/2 bg-(--text-body)  rounded-full"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}