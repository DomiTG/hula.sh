import { Link } from "./Link";

export const components = {
  p(props: JSX.IntrinsicElements["p"]) {
    return <p className="my-2.5 text-neutral-200" {...props} />;
  },
  a(props: JSX.IntrinsicElements["a"]) {
    if (props.href?.startsWith("#")) {
      return <a {...props} />;
    }

    return <Link href={props.href || "/"}>{props.children}</Link>;
  },
  h1(props: JSX.IntrinsicElements["h1"]) {
    return <h2 className="mt-12 text-2xl font-bold text-white" {...props} />;
  },
  h2(props: JSX.IntrinsicElements["h2"]) {
    return <h3 className="mt-10 text-xl font-bold text-white" {...props} />;
  },
  h3(props: JSX.IntrinsicElements["h3"]) {
    return <h4 className="mt-8 text-lg font-bold text-white" {...props} />;
  },
  strong(props: JSX.IntrinsicElements["strong"]) {
    return <strong className="font-bold text-white" {...props} />;
  },
  ul(props: JSX.IntrinsicElements["ul"]) {
    return (
      <ul
        className="pl-4 text-neutral-200 my-6 space-y-2 [&>li]:relative [&>li]:pl-6 before:[&>li]:absolute before:[&>li]:left-1.5 before:[&>li]:top-3 before:[&>li]:h-1 before:[&>li]:w-1 before:[&>li]:rounded-full before:[&>li]:bg-gray-400"
        {...props}
      />
    );
  },
  hr(props: JSX.IntrinsicElements["hr"]) {
    return <hr className="my-8 border-t border-neutral-700" {...props} />;
  },
  // Components used in posts as examples:
};
