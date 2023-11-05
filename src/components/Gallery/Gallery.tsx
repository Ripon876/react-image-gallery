import { createPortal } from "react-dom";
import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import Image from "../Image";
import { AddNewImage, GalleryContainer } from "./Gallery.styles";
import imageIcon from "../../assets/images/imageIcon.svg";
import useSortableGallery from "../../hooks/useSortableGallery";
import { ImageType } from "../../types";

const dropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: "0.1",
      },
    },
  }),
};

const Gallery = () => {
  const {
    images,
    dndContext: { dragStart, dragEnd, dragCancel },
    activeId,
    activeIndex,
    addNewImage,
  } = useSortableGallery();

  const sensors = useSensors(
    // Use MouseSensor with a distance activation constraint of 10 pixels
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    // Use TouchSensor with a delay activation constraint of 250 milliseconds
    // and a tolerance of 5 pixels
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    })
  );

  return (
    <DndContext
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      onDragCancel={dragCancel}
      sensors={sensors}
    >
      <SortableContext items={images} strategy={rectSortingStrategy}>
        <GalleryContainer>
          {images.map((image: ImageType, index: number) => (
            <Image key={image.id} id={image.id} index={index} image={image} />
          ))}
          <AddNewImage>
            <img src="https://placehold.co/400x400" alt="" />
            <label htmlFor="addNewImage">
              <div>
                <img src={imageIcon} alt="Add Image" />
                <p>Add Images</p>
              </div>
              <input
                type="file"
                accept="image/*"
                id="addNewImage"
                onChange={addNewImage}
              />
            </label>
          </AddNewImage>
        </GalleryContainer>
      </SortableContext>
      {createPortal(
        <DragOverlay adjustScale={true} dropAnimation={dropAnimation}>
          {activeId ? (
            // @ts-ignore-next-line
            <Image
              index={activeIndex}
              image={images[activeIndex]}
              dragOverlay
            />
          ) : null}
        </DragOverlay>,
        document.body
      )}
    </DndContext>
  );
};

export default Gallery;
