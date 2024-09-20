export default function Home() {
  return (
    <div className="min-h-screen h-full flex justify-center bg-neutral-900 p-4">
      <div>
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl w-full">
          <div className="sticky top-2 z-[99]">
            <nav className="flex justify-between items-center p-4 rounded-md bg-neutral-800 backdrop-blur-lg bg-opacity-50 border border-neutral-800">
              <h2 className="text-xl font-bold text-neutral-100">domi.sh</h2>
              <div className="flex flex-row gap-1 items-center">
                <a href="#" className="text-neutral-100 hover:text-neutral-200">
                  Home
                </a>
              </div>
            </nav>
          </div>
          <section className="p-4 pt-10">
            <div className="flex flex-row items-start">
              <h1 className="text-5xl font-bold text-neutral-100">
                Dominik Hůla
              </h1>
            </div>
            <h2 className="text-sm font-bold text-neutral-500 mt-2">
              Software Engineer <span className="text-neutral-400">•</span> Web
              Developer
            </h2>
            <p className="text-neutral-200 mt-4">
              Oh, hi there! Nice to meet you. I&apos;m Dominik, a software
              engineer and web developer from the Czech Republic. I&apos;m
              passionate about web technologies, open-source software, and
              building things that make people&apos;s lives easier.
            </p>
          </section>
          <section className="p-4">
            <div className="w-full relative p-8 bg-neutral-800 rounded-md border border-neutral-800 backdrop-blur-md bg-opacity-50 hover:bg-opacity-60 transition-all cursor-pointer">
              <h4 className="font-bold text-neutral-100 text-4xl uppercase relative z-10">
                <span className="text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,1)]">
                  Projects
                </span>
              </h4>
              <p className="text-neutral-500 mt-1 lg:max-w-[50%] relative z-10">
                What am I working on? Check out my latest projects and see what
                can I do.
              </p>
              <div className="absolute inset-0 rounded-md bg-pink-300 opacity-5 blur-xl"></div>
            </div>
            <div className="w-full relative p-8 bg-neutral-800 rounded-md border border-neutral-800 backdrop-blur-md bg-opacity-50 hover:bg-opacity-60 transition-all cursor-pointer mt-4">
              <h4 className="font-bold text-neutral-100 text-4xl uppercase relative z-10">
                <span className="text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,1)]">
                  Blog
                </span>
              </h4>
              <p className="text-neutral-500 mt-1 lg:max-w-[50%] relative z-10">
                I write about web development, software engineering, and other
                interesting topics.
              </p>
              <div className="absolute inset-0 rounded-md bg-blue-300 opacity-5 blur-xl"></div>
            </div>
            <div className="w-full relative p-8 bg-neutral-800 rounded-md border border-neutral-800 backdrop-blur-md bg-opacity-50 hover:bg-opacity-60 transition-all cursor-pointer mt-4">
              <h4 className="font-bold text-neutral-100 text-4xl uppercase relative z-10">
                <span className="text-green-500 drop-shadow-[0_0_10px_rgba(16,185,129,1)]">
                  Contact
                </span>
              </h4>
              <p className="text-neutral-500 mt-1 lg:max-w-[50%] relative z-10">
                Want to work together or just say hi? Feel free to contact me.
              </p>
              <div className="absolute inset-0 rounded-md bg-green-300 opacity-5 blur-xl"></div>
            </div>
          </section>
        </div>
        <footer className="mt-8 mb-3 text-center text-neutral-500 text-sm">
          © 2021 Dominik Hůla. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
