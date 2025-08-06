import * as React from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "@/styles/index.css";

import { slides } from "@/data/slides";

export default function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = React.useState(-1);

  return (
    <section className="gallery-section">
      <div className="album-wrapper">
        <RowsPhotoAlbum
          photos={slides.map((slide) => ({
            ...slide,
            alt: slide.alt || "Gallery image",
          }))}
          targetRowHeight={180}
          onClick={({ index }) => setLightboxIndex(index)}
        />
      </div>

      <Lightbox
        index={lightboxIndex}
        slides={slides}
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        plugins={[Thumbnails]}
      />
    </section>
  );
}
