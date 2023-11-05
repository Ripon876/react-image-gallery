import useSortableGallery from "../../hooks/useSortableGallery";
import { HeaderWrapper } from "./Header.styles";

const Header = () => {
  const { selectedCount: count, deleteSelected } = useSortableGallery();
  const selected = count > 0;

  return (
    <HeaderWrapper>
      <strong>
        {selected && <input type="checkbox" checked readOnly />}
        {selected
          ? `${count} ${count > 1 ? "Files" : "File"} Selected`
          : "Gallery"}
      </strong>
      {selected && <button onClick={deleteSelected}>Delete files</button>}
    </HeaderWrapper>
  );
};

export default Header;
