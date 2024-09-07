import desktopVideo from "../assets/files/writing_1080.mp4";
import tabletVideo from "../assets/files/tabletwriting.mp4";
import mobileVideo from "../assets//files/mobilewriting.mp4";
import bigVideo from "../assets/files/4kwriting.mp4";
import MobileLoading from "./MobileLoading";
import "../index.css";

const Loader = (props) => {
  const getVideoSrc = (width) => {
    if (width >= 2400) return bigVideo;
    if (width >= 1920) return desktopVideo;
    if (width >= 650) return desktopVideo;
    return tabletVideo;
  };
  const src = getVideoSrc(window.innerWidth);

  return <video autoPlay playsInline muted src={src} />;
};

export default Loader;
