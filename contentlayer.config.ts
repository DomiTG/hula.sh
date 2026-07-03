import { resolveTypedDocument } from "./src/contentlayer";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";

const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `posts/*.mdx`,
  bodyType: "markdown",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    tags: {
        type: "list",
        of: {
            type: "string",
        },
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => {
        return doc._raw.sourceFileName.replace(".mdx", "");
      },
    },
    publishedAtHuman: {
      type: "string",
      resolve: (doc) => {
        return new Date(doc.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      },
      meta: {
        type: "json",
        resolve: resolveTypedDocument<{ body: { raw: string }}>(({ body }) => readingTime(body.raw)),
      }
    },
  },
}));
const Project = defineDocumentType(() => ({
  name: "Project",
  contentType: "mdx",
  filePathPattern: `projects/*.mdx`,
  bodyType: "markdown",

  fields: {
    title: {
      type: "string",
      required: true,
    },
    from: {
      type: "date",
      required: true,
    },
    to: {
      type: "date",
      required: false,
    },
    summary: {
      type: "string",
      required: true,
    },
    link: {
      type: "string",
      required: false,
    },
    githubRepo: {
      type: "string",
      required: false,
    },

    status: {
      type: "enum",
      options: ["active", "completed", "archived", "redesign"],
      required: true,
    },

    client: {
      type: "string",
      required: false,
    },

    featured: {
      type: "boolean",
      required: false,
    },

    order: {
      type: "number",
      required: false,
    },

    tags: {
      type: "list",
      of: {
        type: "string",
      },
      required: false,
    },

    usedTechnologies: {
      type: "list",
      of: {
        type: "string",
      },
      required: false,
    },
  },

  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(".mdx", ""),
    },

    fromHuman: {
      type: "string",
      resolve: (doc) =>
        new Date(doc.from).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
    },

    toHuman: {
      type: "string",
      resolve: (doc) =>
        doc.to
          ? new Date(doc.to).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : "Present",
    },

    periodHuman: {
      type: "string",
      resolve: (doc) => {
        const from = new Date(doc.from).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
        });

        const to = doc.to
          ? new Date(doc.to).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })
          : "Present";

        return `${from} — ${to}`;
      },
    },

    readingTime: {
      type: "json",
      resolve: resolveTypedDocument<{ body: { raw: string } }>(({ body }) =>
        readingTime(body.raw),
      ),
    },
  },
}));
export default makeSource({
  disableImportAliasWarning: true,
  contentDirPath: "content",
  documentTypes: [Post, Project],
});
