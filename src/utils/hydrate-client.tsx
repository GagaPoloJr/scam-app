/**
 * hydrate client purpose fetching the server component on client side, due to next js always sensitive if there is hydration on the component
 * missmatch
 */
"use client";
import { Hydrate as RQHydrate, HydrateProps } from "@tanstack/react-query";

function Hydrate(props: HydrateProps) {
  return <RQHydrate {...props} />;
}

export default Hydrate;
