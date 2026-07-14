import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Muhammad Abdul Halim - Portfolio",
    short_name: "Abdul Halim",
    description: "Personal portfolio of Muhammad Abdul Halim — Full-Stack Developer",
    start_url: "/home",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#7c3aed",
    icons: [
      {
        src: "/avatar.jpeg",
        sizes: "any",
        type: "image/jpeg",
      },
    ],
  }
}
