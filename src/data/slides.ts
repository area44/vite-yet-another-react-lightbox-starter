const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

// Build URL for picsum.photos image by ID and size
const picsumLink = (id: number, width: number, height: number) =>
  `https://picsum.photos/id/${id}/${width}/${height}`;

// List of image IDs from picsum.photos
const picsumPhotos = [
  { id: 1025, width: 1080, height: 720 },
  { id: 1069, width: 1080, height: 1620 },
  { id: 1031, width: 1080, height: 1440 },
  { id: 1074, width: 1080, height: 1350 },
  { id: 1003, width: 1080, height: 810 },
  { id: 1011, width: 1080, height: 720 },
  { id: 1024, width: 1080, height: 720 },
  { id: 1041, width: 1080, height: 1350 },
  { id: 1050, width: 1080, height: 720 },
  { id: 1062, width: 1080, height: 1620 },
];

export const slides = picsumPhotos.map((photo) => {
  const width = photo.width * 2;
  const height = photo.height * 2;

  return {
    src: picsumLink(photo.id, width, height),
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => {
      const scaledHeight = Math.round((height / width) * breakpoint);
      return {
        src: picsumLink(photo.id, breakpoint, scaledHeight),
        width: breakpoint,
        height: scaledHeight,
      };
    }),
  };
});

// Optional: Advanced slides (with titles, etc.)
export const advancedSlides = [
  { ...slides[0], title: "Mountain dog", description: "Picsum #1025" },
  { ...slides[1], title: "Rainy city", description: "Picsum #1069" },
  { ...slides[2], title: "Sunrise forest", description: "Picsum #1031" },
  {
    type: "video" as const,
    title: "Big Buck Bunny",
    description: "Open Movie Project — Blender Institute",
    width: 1280,
    height: 720,
    poster:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    sources: [
      {
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        type: "video/mp4",
      },
    ],
  },
  { ...slides[3], title: "Skater vibes", description: "Picsum #1074" },
];

export default slides;
