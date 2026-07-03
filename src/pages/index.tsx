import FooterComponent from "@/components/footer-component";
import NavComponent from "@/components/nav-component";
import { Quote } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen h-full flex justify-center bg-neutral-900 p-4">
      <div>
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl w-full">
          <NavComponent/>
          <section className="p-4 pt-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <Image
                src="/dominik.webp"
                alt="Profile picture of Dominik Hůla"
                width={96}
                height={96}
                priority
                className="h-24 w-24 rounded-full border border-neutral-800 object-cover shadow-lg shadow-black/20"
              />

              <div className="flex flex-col">
                <span className="text-sm font-medium text-neutral-500">
                  Hi, I&apos;m
                </span>
                <h1 className="mt-1 text-4xl font-bold tracking-tight text-neutral-100 sm:text-5xl">
                  Dominik Hůla
                </h1>

                <p className="text-sm font-medium text-neutral-400">
                  Software Engineer <span className="text-neutral-600">•</span> Web
                  Developer
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300">
              <Quote className="-mt-1 mr-2 inline-block text-neutral-600" size={18} />
              In the world of software development sice 2018 I have been creating web applications, websites, and other software solutions. I am passionate about technology and always strive to learn new things and improve my skills.
            </p>
          </section>
          <section className="p-4">
            <div
              className="w-full relative p-8 bg-neutral-800 rounded-md border border-neutral-800 backdrop-blur-md bg-opacity-50 hover:bg-opacity-60 transition-all cursor-pointer"
              onClick={() => router.push("/about")}
            >
              <h4 className="font-bold text-neutral-100 text-4xl uppercase relative z-10">
                <span className="text-yellow-500 drop-shadow-[0_0_10px_rgba(252,211,77,1)]">
                  About Me
                </span>
              </h4>
              <p className="text-neutral-500 mt-1 lg:max-w-[50%] relative z-10">
                Who am I? Get to know me better and learn more about my
                background, skills, and experience.
              </p>
              <div className="absolute inset-0 rounded-md bg-yellow-300 opacity-5 blur-xl"></div>
            </div>
            <div
              className="w-full relative p-8 bg-neutral-800 rounded-md border border-neutral-800 backdrop-blur-md bg-opacity-50 hover:bg-opacity-60 transition-all cursor-pointer mt-4"
              onClick={() => router.push("/projects")}
            >
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
            <div
              className="w-full relative p-8 bg-neutral-800 rounded-md border border-neutral-800 backdrop-blur-md bg-opacity-50 hover:bg-opacity-60 transition-all cursor-pointer mt-4"
              onClick={() => router.push("/blog")}
            >
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
            <div
              className="w-full relative p-8 bg-neutral-800 rounded-md border border-neutral-800 backdrop-blur-md bg-opacity-50 hover:bg-opacity-60 transition-all cursor-pointer mt-4"
              onClick={() => router.push("/contact")}
            >
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
        <FooterComponent />
      </div>
    </div>
  );
}
