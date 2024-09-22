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

export default makeSource({
  disableImportAliasWarning: true,
  contentDirPath: "content",
  documentTypes: [Post],
});
