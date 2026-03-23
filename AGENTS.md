# Agent Instructions for Vite Yet Another React Lightbox Starter

This project is a React 19 gallery application built with Vite, using `react-photo-album` and `yet-another-react-lightbox`.

## Tech Stack
- **Framework**: React 19
- **Build Tool**: Vite
- **Package Manager**: pnpm (or npm/yarn as per `package.json`)
- **Linting & Formatting**: Biome
- **Gallery Libraries**: `react-photo-album`, `yet-another-react-lightbox`

## Development
- Run `npm run dev` to start the development server.
- Run `npm run check` to perform linting and formatting checks with Biome (auto-fixes enabled).
- Run `npm run build` to build for production.

## Project Structure
- `src/components/`: Contains React components.
- `src/data/`: Contains data for the gallery, specifically `slides.ts` which defines the images and their metadata.
- `src/styles/`: Contains CSS styles.
- `public/`: Static assets. Images should be stored in `public/images/`.

## Lightbox Configuration
The lightbox in this project uses the following plugins:
- Captions
- Fullscreen
- Slideshow
- Thumbnails
- Zoom

Gallery images in `src/data/slides.ts` include `title` and `description` metadata for use in the lightbox captions.

## Code Style
- Follow Biome's linting and formatting rules.
- Always run `npm run check` before submitting changes.
