// https://github.com/screfy/screfy.com/blob/main/src/contentlayer/code-transformer.ts
//
import type { LocalDocument } from 'contentlayer/source-files';

export function resolveTypedDocument<Document, Return = unknown>(
	fn: (doc: Document & LocalDocument) => Return,
): (doc: LocalDocument) => Return {
	return (doc) => fn(doc as Document & LocalDocument);
}

export { rehypePrettyCodeTransformer } from './code-transformer';