import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.md`,
    bodyType: 'markdown',
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        date: {
            type: 'string',
            required: true,
        },
        excerpt: {
            type: 'string',
            required: true,
        },
        coverImage: {
            type: 'string',
            required: true,
        },
        coverImageAlt: {
            type: 'string',
            required: true,
        },
        content: {
            type: 'string',
            required: true,
        },
    },
}));

export default makeSource({
    disableImportAliasWarning: true,
    contentDirPath: 'content',
    documentTypes: [Post],
});