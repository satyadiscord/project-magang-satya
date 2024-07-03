import ComponentHome from "../Home/componentHome";
import ImageBig from "../Home/imageBig";
import Portofolioo from "../Home/portofolioKingsWeb/portofolio";

export default function Portofolio() {
  return (
    <>
      <ImageBig />
      <ComponentHome />
      <div className="-mt-10">
        <Portofolioo />
      </div>
    </>
  );
}
