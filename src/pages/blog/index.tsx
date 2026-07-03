import FooterComponent from "@/components/footer-component";
import { allProjects } from "contentlayer/generated";
import { X } from "lucide-react";
import { useRouter } from "next/router";

export default function ProjectsPage() {
  const router = useRouter();

  const projects = [...allProjects].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    if (a.order && b.order) return a.order - b.order;

    return new Date(b.from).getTime() - new Date(a.from).getTime();
  });

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
                Projects
              </h1>
            </div>

            <p className="text-neutral-200 mt-4">
              A collection of my personal, client, and archived projects.
              Some are finished, some are actively evolving, and some helped
              shape what I build today.
            </p>
          </section>

          <section className="p-4 space-y-2">
            {projects.length === 0 && (
              <div className="border border-dashed border-neutral-700 p-4 rounded-md text-neutral-500 h-32 flex flex-col items-center justify-center">
                <X className="mb-2" size={24} />
                Sadly, there are no projects yet. Please check back later.
              </div>
            )}

            {projects.map((project) => (
              <div
                key={project.slug}
                className="w-full p-4 bg-transparent rounded-md hover:bg-neutral-800 transition-all cursor-pointer"
                onClick={() => router.push(`/projects/${project.slug}`)}
              >
                <div className="flex flex-row items-center flex-wrap gap-y-1">
                  <span className="text-neutral-200 text-xs">
                    {project.periodHuman}
                  </span>

                  <span className="text-neutral-500 text-xs ml-2">•</span>

                  <span className="text-xs ml-2 uppercase text-transparent bg-clip-text bg-gradient-to-t from-pink-500 to-pink-600 font-bold">
                    {project.status}
                  </span>

                  {project.client && (
                    <>
                      <span className="text-neutral-500 text-xs ml-2">•</span>
                      <span className="text-neutral-400 text-xs ml-2">
                        {project.client}
                      </span>
                    </>
                  )}
                </div>

                <h4 className="font-bold text-neutral-200 text-2xl mt-1">
                  {project.title}
                </h4>

                <p className="text-neutral-200 mt-2">
                  {project.summary}
                </p>

                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-neutral-400 border border-neutral-800 rounded-full px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
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

        <FooterComponent />
      </div>
    </div>
  );
}