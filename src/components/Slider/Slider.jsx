import ImageGallery from "react-image-gallery";
import "./Slider.css";

const Slider = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <div className="mainDetails">
      <div className="slider">
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={true}
          slideInterval={3000}
          autoPlay={true}
          slideOnThumbnailOver={true}
          showIndex={true}
        />
      </div>
    </div>
  );
};

export default Slider;
