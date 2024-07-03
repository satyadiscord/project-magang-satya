import ComponentHome from "./componentHome";
import ImageBig from "./imageBig";
import indexHomeAllData from "./indexHomeData";

const {
  TentangKami,
  KontenKenapaPilihIni,
  LayananKingsWeb,
  Portofolioo,
  TestimoniKingsWeb,
  ContenVideo,
} = indexHomeAllData;
export default function Home() {
  return (
    <>
      <ImageBig />
      <ComponentHome />
      <TentangKami />
      <hr className="mt-20 opacity-40" />
      <KontenKenapaPilihIni />
      <hr className="mt-20 opacity-40" />
      <LayananKingsWeb />
      <Portofolioo />
      <TestimoniKingsWeb />
      <ContenVideo />
    </>
  );
}
