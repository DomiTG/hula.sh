"use client";

import clsx from "clsx";
import NextImage, { type ImageProps } from "next/image";
import { useState } from "react";

export default function MdxImage(props: ImageProps & { caption?: string }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="my-6">
      <div className="mb-3 flex w-fit overflow-hidden bg-neutral-700">
        <NextImage
          {...props}
          className={clsx(
            "duration-700 ease-in-out",
            loading ? "blur-md grayscale" : "blur-0 grayscale-0"
          )}
          style={{
            borderRadius: "0.5rem",
          }}
          onLoadingComplete={async () => setLoading(false)}
        />
      </div>

      <p className="text-neutral-200 px-2">{props.caption}</p>
    </div>
  );
}
