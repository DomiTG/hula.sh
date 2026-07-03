/* eslint-disable @typescript-eslint/no-explicit-any */
import { allProjects, Project } from "contentlayer/generated";
import { useMdxComponent } from "@/mdx/useMdxComponent";
import { pick } from "contentlayer/client";
import { components } from "@/mdx/MdxComponents";
import { useRouter } from "next/router";
import Head from "next/head";
import FooterComponent from "@/components/footer-component";

export default function ProjectPage({ project }: { project: Project }) {
  const router = useRouter();
  const Comp = useMdxComponent(project.body.code);

  return (
    <>
      <Head>
        <title>{project.title} - hula.sh</title>
        <meta name="description" content={project.summary} />
      </Head>

      <div className="min-h-screen h-full flex justify-center bg-neutral-900 p-4">
        <div>
          <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl w-full">
            <div className="sticky top-2 z-[99]">
              <nav className="flex justify-between items-center p-4 rounded-md bg-neutral-800 backdrop-blur-lg bg-opacity-50 border border-neutral-800">
                <h2 className="text-xl font-bold text-neutral-100">hula.sh</h2>
              </nav>
            </div>

            <section className="px-4 pt-10">
              <h1 className="text-3xl font-bold text-neutral-100">
                {project.title}
              </h1>

              <p className="text-neutral-200 mt-4">{project.summary}</p>

              <p className="text-neutral-500 mt-4">
                {project.periodHuman}
                <span className="text-neutral-500 text-xs mx-2">•</span>
                <span className="text-xs uppercase text-transparent bg-clip-text bg-gradient-to-t from-pink-500 to-pink-600 font-bold">
                  {project.status}
                </span>
              </p>

              {project.usedTechnologies &&
                project.usedTechnologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.usedTechnologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-neutral-400 border border-neutral-800 rounded-full px-2 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
            </section>

            <section className="p-4">
              <Comp components={components} />
            </section>

            <div
              className="block w-full p-4 text-center bg-neutral-800 rounded-md border border-neutral-800 backdrop-blur-md bg-opacity-50 hover:bg-opacity-60 transition-all mt-4 text-neutral-100 tracking-widest uppercase cursor-pointer"
              onClick={() => router.push("/projects")}
            >
              Go back to projects
            </div>
          </div>

          <FooterComponent />
        </div>
      </div>
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: allProjects.map((project) => ({
      params: { slug: project.slug },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }: { params: { slug: string } }) {
  const project = allProjects.find((project) => project.slug === params.slug);

  return {
    props: {
      project: pick(project as Project, [
        "title",
        "summary",
        "status",
        "periodHuman",
        "usedTechnologies",
        "body",
      ]),
    },
  };
}