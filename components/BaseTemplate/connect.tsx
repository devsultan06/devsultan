// components/ConnectSection.tsx
export default function ConnectSection() {
    return (
        <>
            <section className="container mx-auto px-4 mb-16">
                <h2 className="text-2xl font-bold mb-8">  What I'm doing now?</h2>
                <div
                    className="group relative flex flex-col rounded-xl p-4 hover:bg-zinc-800 transition-colors border border-zinc-700"
                >
                    <div className=" gap-4 mb-2">
                        <h3 className="text-lg font-semibold">Exploring Opportunities</h3>

                    </div>
                    <p className="text-sm text-zinc-400">   I’m working on some open source projects, while actively exploring internships,
                        job opportunities — pretty much anything that helps me grow.</p>

                </div>
            </section>


            {/* Let's build something great */}
            <div className="max-w-3xl mx-auto  border mb-16 bg-zinc-800/50  border-zinc-700 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                    Let’s build something great together
                </h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    Whether you’re looking to collaborate on a project, need a developer for your team, or just want to chat about ideas — I’d love to hear from you. Let’s connect and see what we can create!
                </p>
                <button className="bg-gray-100 text-black px-6 py-3 rounded-md font-medium hover:bg-white transition">
                    Connect With Me
                </button>
            </div>
        </>
    );
}
