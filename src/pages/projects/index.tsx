import { allProjects } from "contentlayer/generated";
import { useRouter } from "next/router";

export default function ProjectsPage() {
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
              <h1 className="text-5xl font-bold text-neutral-100">Projects</h1>
            </div>
            <p className="text-neutral-200 mt-4">
                What did I work on? What are my latest projects? Check out my latest projects and see what I can do. I believe you will find something interesting.
            </p>
          </section>
          <section className="p-4">
            {allProjects.length === 0 && (
              <div className="text-neutral-200">No projects found.</div>
            )}
            {allProjects.length > 0 &&
              allProjects.map((project) => (
                <div
                  key={project.slug}
                  className="w-full p-4 bg-transparent rounded-md hover:bg-neutral-800 transition-all cursor-pointer"
                  onClick={() => router.push(`/projects/${project.slug}`)}
                >
                  <div className="flex flex-row items-center">
                    <span className="text-neutral-200 text-xs">
                      {project.fromHuman} - {project.toHuman}
                    </span>
                    <span className="text-neutral-500 text-xs ml-2">•</span>
                    <span className=" text-xs ml-2 uppercase text-transparent bg-clip-text bg-gradient-to-t from-pink-500 to-pink-600 font-bold">
                      {project.tags ? project.tags.join(", ") : "No tags"}
                    </span>
                  </div>
                  <h4 className="font-bold text-neutral-200 text-2xl flex flex-row items-center">
                    <span className="text-neutral-200">
                      {project.title}
                    </span>
                    <span className="text-neutral-500 text-xs ml-2" title={project.usedTechnologies ? project.usedTechnologies.join(", ") : "No technologies"}>
                      {project.usedTechnologies ? project.usedTechnologies.length > 3 ? project.usedTechnologies.slice(0, 3).join(", ") + " and " + (project.usedTechnologies.length - 3) + " more" : project.usedTechnologies.join(", ") : "No technologies"}
                    </span>
                  </h4>
                  <p className="text-neutral-200 mt-2">
                    {project.summary}
                  </p>
                </div>
              ))}
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
