import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ImageProps } from "../../types";
import {
  FeaturedImageContainer,
  ImageContainer,
  Input,
  Overlay,
} from "./Image.styles";
import useSortableGallery from "../../hooks/useSortableGallery";

const Image = ({ image, index, id, dragOverlay }: ImageProps) => {
  const Container = index === 0 ? FeaturedImageContainer : ImageContainer;
  const { toggleSelect } = useSortableGallery();
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: id,
  });

  const style = {
    transform: CSS.Transform.toString(transform || null),
    transition,
  };

  const { id: iId, src, selected } = image;

  return (
    <Container
      ref={setNodeRef}
      {...attributes}
      style={style}
      {...listeners}
      isSelected={selected}
    >
      <div>
        <label htmlFor={`image-${iId}`}>
          {(!isDragging || dragOverlay) && <img src={src} alt={String(iId)} />}
        </label>
        {!dragOverlay && !isDragging && (
          <Input
            type="checkbox"
            id={`image-${id}`}
            onChange={() => toggleSelect(iId)}
            checked={selected}
            style={selected ? { display: "block" } : {}}
          />
        )}
      </div>
      {!isDragging && <Overlay />}
    </Container>
  );
};

export default Image;
