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
        tags: {
            type: "list",
            of: {
                type: "string",
            },
        },
        usedTechnologies: {
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
        fromHuman: {
            type: "string",
            resolve: (doc) => {
                return new Date(doc.from).toLocaleDateString("en-US", {
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
        toHuman: {
            type: "string",
            resolve: (doc) => {
                return doc.to ? new Date(doc.to).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                }) : "Present";
            },
            meta: {
                type: "json",
                resolve: resolveTypedDocument<{ body: { raw: string }}>(({ body }) => readingTime(body.raw)),
            }
        },
    }
}));

export default makeSource({
  disableImportAliasWarning: true,
  contentDirPath: "content",
  documentTypes: [Post, Project],
});
