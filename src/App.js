import * as React from "react";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from "./data/photos";
import slides from "./data/slides";

export default function PhotoGallery() {
  const [index, setIndex] = React.useState(-1);
  const thumbnailsRef = React.useRef(null);

  return (
    <>
      <PhotoAlbum
        layout="rows"
        photos={photos}
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Thumbnails]}
        thumbnails={{ ref: thumbnailsRef }}
        on={{
          click: () => {
            (thumbnailsRef.current?.visible
              ? thumbnailsRef.current?.hide
              : thumbnailsRef.current?.show)?.();
          },
        }}
      />
    </>
  );
}
