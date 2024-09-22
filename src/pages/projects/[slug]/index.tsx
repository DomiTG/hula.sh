/* eslint-disable @typescript-eslint/no-explicit-any */
import { allProjects, Project } from "contentlayer/generated";
import { useMdxComponent } from "@/useMdxComponent";
import { pick } from "contentlayer/client";
import { components } from "@/MdxComponents";
import { useRouter } from "next/router";
import Head from "next/head";

export default function BlogPostPage({ project }: { project: Project }) {
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
              <div className="flex flex-row items-start">
                <h1 className="text-3xl font-bold text-neutral-100">
                  {project.title}
                </h1>
              </div>
              <p className="text-neutral-200 mt-4">{project.summary}</p>
              <p className="text-neutral-500 mt-4">
                {project.fromHuman}{" - "}{project.toHuman ? `${project.toHuman}` : "Present"}{" "}
                <span className="text-neutral-500 text-xs mr-1 ml-1">•</span>{" "}
                <span className=" text-xs uppercase text-transparent bg-clip-text bg-gradient-to-t from-pink-500 to-pink-600 font-bold">
                  {project.tags ? project.tags.join(", ") : "No tags"}
                </span>
              </p>
              <p className="text-neutral-300 mt-4 px-2">
                {project.usedTechnologies ? project.usedTechnologies.join(", ") : "No technologies"}
            </p>
            </section>
            <section className="p-4">
              <Comp components={components} />
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
  const post = allProjects.find((project) => project.slug === params.slug);
  return {
    props: {
      project: pick(post as Project, [
        "title",
        "from",
        "summary",
        "tags",
        "usedTechnologies",
        "slug",
        "fromHuman",
        "body",
      ]),
    },
  };
}
