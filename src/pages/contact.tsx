import { useRouter } from "next/router";

export default function ContactPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen h-full flex justify-center bg-neutral-900 p-4">
      <div>
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl w-full">
          <div className="sticky top-2 z-[99]">
            <nav className="flex justify-between items-center p-4 rounded-md bg-neutral-800 backdrop-blur-lg bg-opacity-50 border border-neutral-800">
              <h2 className="text-xl font-bold text-neutral-100">hula.sh</h2>
            </nav>
          </div>
          <section className="p-4 pt-10">
            <div className="flex flex-row items-start">
              <h1 className="text-5xl font-bold text-neutral-100">
                Contact me
              </h1>
            </div>
            <p className="text-neutral-200 mt-4">
              Oh! You want to contact me? That&apos;s great! Let&apos;s talk
              about your project, idea, or anything else. You can reach me via
              email, Instagram, or Discord. I&apos;m looking forward to hearing
              from you!
            </p>
          </section>
          <section className="p-4">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-end">
                <h4 className="text-2xl font-bold text-neutral-100">Email</h4>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-neutral-500 text-sm ml-2">
                    ~ 12 hours
                  </span>
                </div>
              </div>
              <p
                className="text-sm text-neutral-500 hover:text-neutral-400 transition-all hidden md:block"
                title="This is my preferred way of communication."
              >
                preffered.
              </p>
              <a
                href="mailto:dominik@hula.sh"
                className="text-neutral-500 hover:text-neutral-400 transition-all text-lg"
              >
                dominik@hula.sh
              </a>
            </div>
            <div className="flex flex-row items-center justify-between mt-4">
              <div className="flex flex-row items-end">
                <h4 className="text-2xl font-bold text-neutral-100">
                  Instagram
                </h4>
                <span className="text-neutral-500 text-sm ml-2">~ 3 hours</span>
              </div>
              <a
                href="https://www.instagram.com/itzdomi_"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-500 hover:text-neutral-400 transition-all text-lg"
              >
                @itzdomi_
              </a>
            </div>
            <div className="flex flex-row items-center justify-between mt-4">
              <div className="flex flex-row items-end">
                <h4 className="text-2xl font-bold text-neutral-100">Discord</h4>
                <span className="text-neutral-500 text-sm ml-2">~ 3 hours</span>
              </div>
              <span className="text-neutral-500 text-lg hover:text-neutral-400 transition-all select-none">
                domihraje
              </span>
            </div>
          </section>
          <div
            className="block w-full p-4 text-center bg-neutral-800 rounded-md border border-neutral-800 backdrop-blur-md bg-opacity-50 hover:bg-opacity-60 transition-all mt-4 text-neutral-100 tracking-widest uppercase cursor-pointer"
            onClick={() => router.push("/")}
          >
            Go back to the homepage
          </div>
        </div>
        <footer className="mt-8 mb-3 text-center text-neutral-500 text-sm">
          © 2024 Dominik Hůla. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
