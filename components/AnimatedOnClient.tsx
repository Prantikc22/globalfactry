// components/AnimatedOnClient.tsx
"use client";
import React, { useEffect, useState } from "react";

type AnyProps = React.HTMLAttributes<HTMLDivElement> & { [key: string]: any };

// list of common framer-motion props we expect to receive; filter these out of the plain div
const MOTION_PROPS = new Set([
  "initial",
  "animate",
  "whileInView",
  "whileHover",
  "whileTap",
  "variants",
  "transition",
  "exit",
  "viewport",
  "style", // keep if you want, but included here for clarity
  // add other motion props you use
]);

function splitProps(props: AnyProps) {
  const domProps: AnyProps = {};
  const motionProps: AnyProps = {};
  for (const key of Object.keys(props)) {
    if (MOTION_PROPS.has(key)) motionProps[key] = props[key];
    else domProps[key] = props[key];
  }
  return { domProps, motionProps };
}

export default function AnimatedOnClient(props: AnyProps) {
  const [motionAPI, setMotionAPI] = useState<any>(null);

  useEffect(() => {
    let mounted = true;
    import("framer-motion")
      .then((mod) => {
        if (!mounted) return;
        setMotionAPI(mod);
      })
      .catch((err) => {
        console.error("Failed to load framer-motion", err);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const { domProps, motionProps } = splitProps(props);

  // fallback: render a plain div **without** motion props (avoids DOM warnings)
  if (!motionAPI) {
    return <div {...domProps}>{props.children}</div>;
  }

  const M = motionAPI.motion;
  // when motion exists, spread motionProps into the motion div and domProps for attributes like className
  return (
    <M.div {...motionProps} {...domProps}>
      {props.children}
    </M.div>
  );
}
