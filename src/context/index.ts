import React, { createContext, useState, PropsWithChildren } from "react";
import { images as imagesData } from "./images";
import { ImageType } from "../types";

export const GalleryContext = createContext(null);

const GalleryContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [images, setImages] = useState<ImageType[]>(imagesData);

  const contextValue = {
    images,
    setImages,
  };

  return React.createElement(
    GalleryContext.Provider,
    // @ts-ignore-next-line
    { value: contextValue },
    children
  );
};

export default GalleryContextProvider;
