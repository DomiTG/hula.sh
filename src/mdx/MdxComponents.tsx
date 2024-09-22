import MdxImage from "./MdxImage";

export const components = {
	MdxImage,
	p(props: JSX.IntrinsicElements['p']) {
		return <p className="text-neutral-200" {...props} style={{ paddingTop: '1rem', paddingBottom: '1rem' }} />;
	},
	h1(props: JSX.IntrinsicElements['h1']) {
		return <h2 className="mt-12 text-2xl font-bold text-neutral-100" {...props} />;
	},
	h2(props: JSX.IntrinsicElements['h2']) {
		return <h3 className="mt-10 text-xl font-bold text-neutral-100" {...props} />;
	},
	h3(props: JSX.IntrinsicElements['h3']) {
		return <h4 className="mt-8 text-lg font-bold text-neutral-100" {...props} />;
	},
	strong(props: JSX.IntrinsicElements['strong']) {
		return <strong className="font-bold text-neutral-100" {...props} />;
	},
    li(props: JSX.IntrinsicElements['li']) {
        return (
            <li
                className=
                    "relative pl-6 before:absolute before:left-1.5 before:top-3 before:h-1 before:w-1 before:rounded-full before:bg-gray-4"
                {...props}
            />
        )
    },
    a(props: JSX.IntrinsicElements['a']) {
        return <a className="text-blue-500 hover:underline" {...props} style={{ paddingLeft: '1rem', paddingRight: '1rem' }} />;
    },
	ul(props: JSX.IntrinsicElements['ul']) {
		return (
			<ul
				className="text-neutral-200 my-6 space-y-2 [&>li]:relative [&>li]:pl-6 before:[&>li]:absolute before:[&>li]:left-1.5 before:[&>li]:top-3 before:[&>li]:h-1 before:[&>li]:w-1 before:[&>li]:rounded-full before:[&>li]:bg-gray-4"
				{...props}
			/>
		);
	},
};