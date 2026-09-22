import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Altivio Digital Studio",
    short_name: "Altivio",
    description: "Digital Studio Switzerland",
    start_url: "/",
    display: "standalone",
    background_color: "#07111f",
    theme_color: "#07111f",
  };
}
