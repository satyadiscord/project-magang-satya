import ImageBig from "../Home/imageBig";
import ComponentHome from "../Home/componentHome";
import CardPriceComponent from "../Harga/cardPriceComponent.jsx";
export default function Harga() {
  return (
    <>
      <ImageBig />
      <ComponentHome />
      <div className="text-white bg-slate-700 w-full p-20 md:h-[200vh] mt-10">
        <CardPriceComponent />
      </div>
    </>
  );
}
