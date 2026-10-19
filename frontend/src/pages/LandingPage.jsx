import React from "react";
import { Link, useNavigate } from "react-router-dom";

// Product features showcased in bookmark card format
const features = Object.freeze([
  {
    title: "Save the Why",
    note: "Add a personal note to every bookmark. Remember what caught your attention, what you wanted to learn, or what you planned to do with it.",
    url: "markd.app/features/context",
    tag: "context",
    visits: 12,
    date: "Oct 14, 2026",
  },
  {
    title: "Search by Memory",
    note: "Forgot the title? Search by a word from your note, the page title, or its URL. Find the resource without remembering its exact name.",
    url: "markd.app/features/search",
    tag: "discovery",
    visits: 8,
    date: "Oct 12, 2026",
  },
  {
    title: "Organize Without Folders",
    note: "Give each bookmark a simple tag. Filter your collection by topic without creating folders inside folders or deciding where everything belongs.",
    url: "markd.app/features/tags",
    tag: "organization",
    visits: 6,
    date: "Oct 10, 2026",
  },
  {
    title: "See What You Actually Use",
    note: "Markd tracks each time you open a saved link from the app, helping you spot the resources you keep coming back to.",
    url: "markd.app/features/visit-tracking",
    tag: "insights",
    visits: 4,
    date: "Oct 08, 2026",
  },
  {
    title: "Find What You Forgot",
    note: "Filter bookmarks you've never opened. Revisit the ones that still matter and delete the ones that don't.",
    url: "markd.app/features/forgotten-links",
    tag: "cleanup",
    visits: 0,
    date: "Oct 05, 2026",
  },
  {
    title: "Your Links, at a Glance",
    note: "See the title, link, personal note, tag, and visit count together. Scan your collection instead of digging through a wall of links.",
    url: "markd.app/features/bookmark-cards",
    tag: "overview",
    visits: 2,
    date: "Oct 01, 2026",
  },
]);

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#edf1d6] text-deep selection:bg-deep selection:text-surface overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-10">

        {/* Header */}
        <header className="flex justify-between items-center py-3 sm:py-4">
          <Link
            to="/"
            className="text-deep font-[instrumentSerif] text-2xl sm:text-3xl md:text-4xl hover:opacity-80 transition tracking-tight"
            aria-label="Markd Home"
          >
            Markd
          </Link>

          <button
            type="button"
            onClick={() => navigate("/register")}
            className="bg-deep text-surface font-[bricolage] text-xs sm:text-sm md:text-base px-4 sm:px-5 py-2 rounded-lg hover:bg-deep/90 transition cursor-pointer"
          >
            Get Started
          </button>
        </header>

        {/* Hero Section */}
        <section className="text-center pt-12 pb-16 sm:pt-20 sm:pb-24 md:pt-28 md:pb-32">
          <h1 className="font-[bricolage] text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-deep max-w-2xl mx-auto leading-[1.2] sm:leading-[1.15] tracking-tight">
            Ever opened an old bookmark and thought,{" "}
            <span className="font-[instrumentSerif] italic font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl block sm:inline mt-1 sm:mt-0">
              “...why?”
            </span>
          </h1>

          <p className="font-[instrumentSerif] text-deep/80 text-base sm:text-xl md:text-2xl max-w-xl mx-auto mt-4 sm:mt-6 leading-relaxed px-2 sm:px-0">
            Markd saves the link and the reason. Add a note, tag it, and find it
            later by whatever scraps you remember.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col items-center">
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="bg-deep text-surface font-[bricolage] text-sm sm:text-base px-6 py-3 rounded-lg hover:bg-deep/90 transition flex items-center gap-2 group cursor-pointer"
            >
              <span>Remember Why</span>
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </button>

            <p className="font-[coolvetica] text-deep/60 text-xs sm:text-sm mt-3 px-2">
              Your next bookmark is about to become a mystery. Solve it with Markd.
            </p>
          </div>
        </section>

        {/* Feature 1: Card Anatomy */}
        <section className="py-10 sm:py-16 md:py-24 text-center">
          <h2 className="font-[bricolage] text-xl sm:text-3xl md:text-4xl text-deep tracking-tight max-w-xl mx-auto leading-tight">
            Same bookmark. Now it explains itself.
          </h2>

          <p className="font-[instrumentSerif] text-deep/80 text-sm sm:text-lg md:text-xl max-w-lg mx-auto mt-2.5 sm:mt-3 leading-normal px-2 sm:px-0">
            Title, your note, a tag, and a visit count on every card. Search,
            filter, and clean up from one screen.
          </p>

          <div className="mt-8 sm:mt-10 mx-auto max-w-3xl">
            <div className="rounded-xl sm:rounded-2xl md:rounded-3xl bg-[#a1b498] p-2 sm:p-5 md:p-6 border border-deep/10 transition">
              <div className="overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-light">
                <img
                  src="/assets/preview-v1.gif"
                  alt="Markd in action preview"
                  className="w-[108%] max-w-none -ml-[4%] block h-auto"
                />
              </div>
            </div>

            <p className="font-[coolvetica] text-deep/60 text-xs sm:text-sm mt-3 sm:mt-4 px-2">
              Six months later: “...oh, that's why.” Not “...why?”
            </p>
          </div>
        </section>

        {/* Feature 2: Memory Grid */}
        <section className="py-10 sm:py-16 md:py-24">
          <div className="text-left sm:text-right max-w-xl sm:ml-auto mb-8 sm:mb-10">
            <h2 className="font-[bricolage] text-xl sm:text-3xl md:text-4xl text-deep tracking-tight leading-tight">
              Not a link box. A memory for everything you find.
            </h2>

            <p className="font-[instrumentSerif] text-deep/80 text-sm sm:text-lg md:text-xl mt-2.5 sm:mt-3 leading-normal">
              Markd saves the link and the reason. Add a note, tag it, and find it
              later by whatever scraps you remember.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 md:gap-6">
            {features.map((item, index) => (
              <section
                key={index}
                className="border-2 rounded-md p-3 sm:p-4 bg-white border-light flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between mb-2 md:mb-4">
                    <div className="border-2 w-7 h-7 sm:w-8 sm:h-8 flex justify-center items-center rounded-full bg-dark border-mid font-[bricolage] text-xs sm:text-sm text-surface">
                      <h1>{item.visits}</h1>
                    </div>

                    <div
                      className="cursor-pointer border-2 w-7 h-7 sm:w-8 sm:h-8 flex justify-center items-center rounded-md bg-red-400 border-red-300 font-[bricolage] text-xs sm:text-sm text-surface"
                      title="Delete bookmark"
                    >
                      <i className="ri-delete-bin-line"></i>
                    </div>
                  </div>

                  <div
                    className="bg-surface rounded-md p-3 sm:p-4 border-2 border-light cursor-pointer"
                    title={`Visit ${item.url}`}
                  >
                    <h1 className="font-[coolvetica] text-green-950 text-base sm:text-lg md:text-xl capitalize leading-snug">
                      {item.title}
                    </h1>

                    <h1 className="font-[coolvetica] text-deep text-sm sm:text-base md:text-lg mt-1 leading-snug">
                      {item.note}
                    </h1>

                    <h1 className="font-[coolvetica] text-deep opacity-80 flex items-center gap-1 mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base lowercase min-w-0">
                      <i className="ri-link shrink-0"></i>
                      <span className="truncate">{item.url}</span>
                    </h1>

                    <div className="mt-2.5 sm:mt-4">
                      <span className="border-2 font-[bricolage] text-[11px] sm:text-xs md:text-sm bg-light text-deep border-mid inline px-3 sm:px-4 py-0.5 sm:py-1 rounded-full lowercase">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-2.5 sm:mt-3">
                  <span className="font-[coolvetica] text-deep opacity-80 text-xs md:text-sm">
                    {item.date}
                  </span>
                </div>
              </section>
            ))}
          </div>

          <p className="text-center font-[coolvetica] text-deep/60 text-xs sm:text-sm mt-5 sm:mt-6 px-2">
            Every link, with its reason, its tag, and its history.
          </p>
        </section>

        {/* Founder Story */}
        <section className="py-10 sm:py-16 md:py-24 text-center max-w-2xl mx-auto px-2 sm:px-0">
          <h2 className="font-[bricolage] text-xl sm:text-3xl md:text-4xl text-deep tracking-tight">
            I kept saving things. I kept asking{" "}
            <span className="font-[instrumentSerif] italic font-normal text-2xl sm:text-4xl md:text-5xl block sm:inline mt-1 sm:mt-0">
              “...why?”
            </span>
          </h2>

          <div className="mt-4 sm:mt-6 text-deep/85 font-[instrumentSerif] text-base sm:text-lg md:text-xl leading-relaxed space-y-3 sm:space-y-4 text-left sm:text-center">
            <p>
              I bookmark everything: tutorials, tools, random articles at 2am,
              always with the same promise, “I'll read this later.” I never did. And
              when I finally went back, I couldn't remember why I'd saved half of
              them. The links were there. The reasons were gone.
            </p>
            <p>
              So I built Markd to keep both. Every bookmark carries a note from
              you, so you can search by what you remember, not what the page was
              called. Visit counts show what you actually use, so cleanup takes
              seconds. If your bookmarks have ever felt like strangers, welcome.
            </p>
          </div>

          <div className="mt-4 sm:mt-6 text-right">
            <cite className="font-[instrumentSerif] text-deep text-lg sm:text-xl not-italic font-medium">
              ~ Vedhesh
            </cite>
          </div>
        </section>

        {/* Call to Action */}
        <section className="my-10 sm:my-16 md:my-24">
          <div className="bg-deep text-surface rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-10 md:p-16 text-center border border-dark/30">
            <h2 className="font-[bricolage] text-xl sm:text-3xl md:text-4xl lg:text-5xl text-surface tracking-tight max-w-xl mx-auto leading-tight">
              Your next bookmark deserves a reason.
            </h2>

            <p className="font-[instrumentSerif] text-surface/85 text-sm sm:text-lg md:text-xl max-w-lg mx-auto mt-3 sm:mt-4 leading-relaxed px-1 sm:px-0">
              I built Markd because I kept forgetting why I saved things. Add a note
              to every link, search by whatever you remember, and see which links
              you actually open.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col items-center">
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="bg-surface text-deep font-[bricolage] text-sm sm:text-base px-6 sm:px-7 py-2.5 sm:py-3 rounded-lg hover:bg-white transition flex items-center gap-2 group cursor-pointer"
              >
                <span>Remember Why</span>
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </button>

              <p className="font-[coolvetica] text-surface/60 text-xs sm:text-sm mt-3 px-2">
                Your next bookmark is about to become a mystery. Solve it with Markd.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 sm:pt-12 pb-8 border-t border-deep/15">
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12">
            <div className="space-y-3 sm:space-y-4">
              <Link
                to="/"
                className="text-deep font-[instrumentSerif] text-3xl md:text-4xl tracking-tight block hover:opacity-80 transition"
                aria-label="Markd Home"
              >
                Markd
              </Link>

              <div className="font-[bricolage] text-deep text-sm md:text-base leading-snug">
                <p>Save the link.</p>
                <p>Keep the why.</p>
              </div>

              <div className="pt-2 sm:pt-4 text-sm md:text-base font-[coolvetica] text-deep/80 max-w-xs space-y-1">
                <p className="text-deep">Found a bug? Got an idea?</p>
                <p>Tell me what's broken or what's missing.</p>
                <p>Every message goes straight to me.</p>
                <a
                  href="mailto:vedhesh@markd.app?subject=Markd%20Feedback"
                  className="inline-flex items-center font-[bricolage] text-deep font-medium mt-1 transition gap-2 hover:gap-3 transition-all transition-linear"
                >
                  <span>Send feedback</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col space-y-2.5 sm:space-y-3 text-right">
              <h3 className="font-[bricolage] text-deep text-sm md:text-base font-semibold">
                Come say hi
              </h3>

              <div className="flex flex-col space-y-1.5 sm:space-y-2 font-[coolvetica] text-xs sm:text-sm text-deep/80">
                <a
                  href="mailto:vedhesh@markd.app"
                  className="hover:text-deep hover:underline underline-offset-2 transition py-0.5"
                >
                  Email
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-deep hover:underline underline-offset-2 transition py-0.5"
                >
                  Github
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-deep hover:underline underline-offset-2 transition py-0.5"
                >
                  X
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-deep hover:underline underline-offset-2 transition py-0.5"
                >
                  LinkedIn
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-deep hover:underline underline-offset-2 transition py-0.5"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 pt-6 border-t border-deep/10 text-center font-[instrumentSerif] text-base sm:text-lg font-medium text-deep space-y-1">
            <p>© 2026 Markd. Every bookmark here has a reason.</p>
            <p>Built with ❤︎ by Vedhesh.</p>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default LandingPage;
