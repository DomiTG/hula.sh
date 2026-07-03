import ExperienceIconComponent from "@/components/ExperienceIconComponent";
import FooterComponent from "@/components/footer-component";
import NavComponent from "@/components/nav-component";
import { useRouter } from "next/router";
import { BiLogoVisualStudio } from "react-icons/bi";
import { BsBootstrap } from "react-icons/bs";
import { DiMysql } from "react-icons/di";
import { FaCss3, FaDocker, FaGit, FaHtml5, FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { IoLogoElectron } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui, SiTypescript } from "react-icons/si";

export default function AboutMePage() {
    const router = useRouter();

    return (
        <div className="min-h-screen h-full flex justify-center bg-neutral-900 p-4">
            <div>
                <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl w-full">
                    <NavComponent/>
                    <section className="p-4 pt-10">
                        <div className="flex flex-row items-start">
                            <h1 className="text-5xl font-bold text-neutral-100">
                                About Me
                            </h1>
                        </div>
                        <p className="text-neutral-200 mt-4">
                            Below are listed all of the technologies I know and I work with. I have been working with these technologies for a long time and I am constantly learning new things. I am always looking for new challenges and opportunities to learn and grow as a developer.
                        </p>
                        <h2 className="text-sm font-bold text-neutral-500 mt-4">
                            Language skills
                        </h2>
                        <div className="flex flex-row items-center mt-2 mb-2 gap-2">
                            <ExperienceIconComponent description="TypeScript" textColor="text-blue-500">
                                <SiTypescript />
                            </ExperienceIconComponent>
                            <ExperienceIconComponent description="HTML" textColor="text-red-500">
                                <FaHtml5 />
                            </ExperienceIconComponent>
                            <ExperienceIconComponent description="CSS" textColor="text-blue-500">
                                <FaCss3 />
                            </ExperienceIconComponent>
                            <ExperienceIconComponent description="Java" textColor="text-yellow-500">
                                <FaJava />
                            </ExperienceIconComponent>
                            <ExperienceIconComponent description="MySQL" textColor="text-blue-500">
                                <DiMysql />
                            </ExperienceIconComponent>
                        </div>
                        <h2 className="text-sm font-bold text-neutral-500 mt-4">
                            Frameworks and libraries
                        </h2>
                        <div className="flex flex-row items-center mt-2 mb-2 gap-2">
                            <ExperienceIconComponent description="React" textColor="text-blue-500">
                                <FaReact />
                            </ExperienceIconComponent>
                            <ExperienceIconComponent description="Next.js" textColor="text-black">
                                <RiNextjsFill />
                            </ExperienceIconComponent>
                            <ExperienceIconComponent description="Electron" textColor="text-green-500">
                                <IoLogoElectron />
                            </ExperienceIconComponent>
                        </div>
                        <h2 className="text-sm font-bold text-neutral-500 mt-4">
                            Css Frameworks
                        </h2>
                        <div className="flex flex-row items-center mt-2 mb-2 gap-2">
                            <ExperienceIconComponent description="Tailwind" textColor="text-blue-500">
                                <RiTailwindCssFill />
                            </ExperienceIconComponent>
                            <ExperienceIconComponent description="Bootstrap" textColor="text-purple-500">
                                <BsBootstrap />
                            </ExperienceIconComponent>
                            <ExperienceIconComponent description="shadcn"
                                textColor="text-blue-500"
                            >
                                <SiShadcnui />
                            </ExperienceIconComponent>
                        </div>
                        <h2 className="text-sm font-bold text-neutral-500 mt-4">
                            Softwares
                        </h2>
                        <div className="flex flex-row items-center mt-2 mb-2 gap-2">
                            <ExperienceIconComponent description="Docker" textColor="text-blue-500">
                                <FaDocker />
                            </ExperienceIconComponent>
                            <ExperienceIconComponent description="Git" textColor="text-red-500">
                                <FaGit />
                            </ExperienceIconComponent>
                            <ExperienceIconComponent description="VSC" textColor="text-blue-500">
                                <BiLogoVisualStudio />
                            </ExperienceIconComponent>
                        </div>
                    </section>
                    <section className="p-4">
                    </section>
                    <div
                        className="block w-full p-4 text-center bg-neutral-800 rounded-md border border-neutral-800 backdrop-blur-md bg-opacity-50 hover:bg-opacity-60 transition-all mt-4 text-neutral-100 tracking-widest uppercase cursor-pointer"
                        onClick={() => router.push("/")}
                    >
                        Go back to the homepage
                    </div>
                </div>
                <FooterComponent />
            </div>
        </div>
    );
}
