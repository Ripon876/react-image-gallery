import ImageGallery from "./components/ImageGallery";
import GalleryContextProvider from "./context";
import "./App.css";

function App() {
  return (
    <GalleryContextProvider>
      <div>
        <ImageGallery />
      </div>
    </GalleryContextProvider>
  );
}

export default App;
