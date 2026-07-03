import { Link } from "./Link";
import MdxImage from "./MdxImage";

export const components = {
  MdxImage,
  p(props: JSX.IntrinsicElements["p"]) {
    return <p className="my-3 leading-7 text-neutral-300" {...props} />;
  },

  a(props: JSX.IntrinsicElements["a"]) {
    if (props.href?.startsWith("#")) {
      return <a {...props} />;
    }

    return <Link href={props.href ?? "/"}>{props.children}</Link>;
  },

  h1(props: JSX.IntrinsicElements["h1"]) {
    return (
      <h1
        className="mt-12 mb-4 text-4xl font-bold tracking-tight text-white"
        {...props}
      />
    );
  },

  h2(props: JSX.IntrinsicElements["h2"]) {
    return (
      <h2
        className="mt-10 mb-3 text-3xl font-semibold tracking-tight text-white"
        {...props}
      />
    );
  },

  h3(props: JSX.IntrinsicElements["h3"]) {
    return (
      <h3
        className="mt-8 mb-2 text-2xl font-semibold tracking-tight text-white"
        {...props}
      />
    );
  },

  h4(props: JSX.IntrinsicElements["h4"]) {
    return (
      <h4
        className="mt-6 mb-2 text-xl font-semibold tracking-tight text-white"
        {...props}
      />
    );
  },

  strong(props: JSX.IntrinsicElements["strong"]) {
    return <strong className="font-semibold text-white" {...props} />;
  },

  em(props: JSX.IntrinsicElements["em"]) {
    return <em className="italic text-neutral-200" {...props} />;
  },

  ul(props: JSX.IntrinsicElements["ul"]) {
    return (
      <ul
        className="my-6 ml-6 list-disc space-y-2 text-neutral-300 marker:text-neutral-500"
        {...props}
      />
    );
  },

  ol(props: JSX.IntrinsicElements["ol"]) {
    return (
      <ol
        className="my-6 ml-6 list-decimal space-y-2 text-neutral-300 marker:text-neutral-500"
        {...props}
      />
    );
  },

  li(props: JSX.IntrinsicElements["li"]) {
    return <li className="leading-7" {...props} />;
  },

  blockquote(props: JSX.IntrinsicElements["blockquote"]) {
    return (
      <blockquote
        className="my-6 border-l-4 border-neutral-700 pl-4 italic text-neutral-400"
        {...props}
      />
    );
  },

  code(props: JSX.IntrinsicElements["code"]) {
    return (
      <code
        className="rounded-md bg-neutral-900 px-1.5 py-0.5 font-mono text-sm text-neutral-100"
        {...props}
      />
    );
  },

  pre(props: JSX.IntrinsicElements["pre"]) {
    return (
      <pre
        className="my-6 overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-950 p-4 text-sm"
        {...props}
      />
    );
  },

  hr(props: JSX.IntrinsicElements["hr"]) {
    return <hr className="my-10 border-neutral-800" {...props} />;
  },

  img(props: JSX.IntrinsicElements["img"]) {
    return (
      <img
        className="my-8 rounded-xl border border-neutral-800"
        loading="lazy"
        {...props}
      />
    );
  },

  table(props: JSX.IntrinsicElements["table"]) {
    return (
      <div className="my-6 overflow-x-auto">
        <table
          className="w-full border-collapse text-left text-sm"
          {...props}
        />
      </div>
    );
  },

  thead(props: JSX.IntrinsicElements["thead"]) {
    return (
      <thead
        className="border-b border-neutral-800 text-neutral-200"
        {...props}
      />
    );
  },

  tbody(props: JSX.IntrinsicElements["tbody"]) {
    return <tbody className="divide-y divide-neutral-900" {...props} />;
  },

  tr(props: JSX.IntrinsicElements["tr"]) {
    return <tr {...props} />;
  },

  th(props: JSX.IntrinsicElements["th"]) {
    return (
      <th className="px-4 py-3 font-semibold text-white" {...props} />
    );
  },

  td(props: JSX.IntrinsicElements["td"]) {
    return (
      <td className="px-4 py-3 text-neutral-300" {...props} />
    );
  },
};