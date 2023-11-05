import { UniqueIdentifier } from "@dnd-kit/core";

interface ImageType {
  id: UniqueIdentifier;
  src: string;
  selected: boolean;
}

interface ImageProps {
  image: ImageType;
  id: string | number;
  index?: number;
  dragOverlay?: boolean;
}

interface GalleryContextValue {
  images: ImageType[];
  setImages: React.Dispatch<React.SetStateAction<ImageType[]>>;
}

export type { ImageProps, ImageType, GalleryContextValue };
