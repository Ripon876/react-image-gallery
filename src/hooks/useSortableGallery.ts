import { ChangeEvent, useContext, useState } from "react";
import { UniqueIdentifier } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { GalleryContext } from "../context";
import { GalleryContextValue } from "../types";

const useSortableGallery = () => {
  // @ts-ignore-next-line
  const { images, setImages } = useContext<GalleryContextValue>(GalleryContext);

  const [activeId, setActiveId] = useState<any>(null);
  const getIndex = (id: any) => images.findIndex((item: any) => item.id === id);
  const activeIndex = activeId ? getIndex(activeId) : -1;

  /**
   * A function that handles the drag start event.
   *
   * @param {object} active - The active object.
   */
  const dragStart = ({ active }: any) => {
    if (!active) {
      return;
    }
    setActiveId(active.id);
  };

  /**
   * Handles the drag end event.
   *
   * @param {any} over - The object representing the item being dragged over.
   */
  const dragEnd = ({ over }: any) => {
    setActiveId(null);

    if (over) {
      const overIndex = getIndex(over.id);
      if (activeIndex !== overIndex) {
        setImages((images: any) => arrayMove(images, activeIndex, overIndex));
      }
    }
  };

  const dragCancel = () => setActiveId(null);

  /**
   * Toggles the select state of an image with the given id.
   *
   * @param {UniqueIdentifier} id - The id of the image to toggle.
   * @return {void}
   */
  const toggleSelect = (id: UniqueIdentifier) => {
    setImages((imgs) => {
      return imgs.map((img) => {
        if (img.id === id) {
          return { ...img, selected: !img.selected };
        }
        return img;
      });
    });
  };

  /**
   * Deletes the selected images from the list of images.
   *
   * @return {void}
   */
  const deleteSelected = () => {
    setImages((imgs) => {
      return imgs.filter((img) => !img.selected);
    });
  };

  /**
   * Selected image count.
   *
   */
  const selectedCount = images.filter((img) => img.selected).length;

  /**
   * Adds a new image to the list of images.
   *
   * @param {ChangeEvent<HTMLInputElement>} e - The change event triggered by the input element.
   * @return {void} This function does not return a value.
   */
  const addNewImage = (e: ChangeEvent<HTMLInputElement>) => {
    const inputElement = e.target as HTMLInputElement;
    const newImage = inputElement.files ? inputElement.files[0] : null;

    if (newImage) {
      const blobURL = URL.createObjectURL(newImage);
      setImages((images) => [
        ...images,
        { id: images.length + 1, src: blobURL, selected: false },
      ]);
    }
  };

  return {
    images,
    dndContext: { dragStart, dragEnd, dragCancel },
    activeId,
    activeIndex,
    addNewImage,
    toggleSelect,
    selectedCount,
    deleteSelected,
  };
};

export default useSortableGallery;
