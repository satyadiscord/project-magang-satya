import website1 from "../bg/web1.jpg";
import website2 from "../bg/web2.png";
import website3 from "../bg/web3.png";

export default function Portofolioo() {
  return (
    <>
      <div className="text-white w-full h-[175vh] lg:h-[120vh] bg-slate-700 mt-20 p-5">
        <div className="font-medium text-2xl md:text-3xl text-blue-600 mb-5 pl-2 lg:text-center">
          Portofolio{" "}
          <span className="font-semibold text-blue-500 tracking-wide">
            KINGSWEB
          </span>
        </div>
        <p className="text-lg md:text-xl text-slate-400 text-wrap pl-2 lg:text-center">
          Jasa pembuatan website kami sejak 2009. Kami melayani seluruh wilayah
          baik nasional maupun internasional. Silahkan klik link di bawah ini
          untuk melihat tampilan website-website klien kami.
        </p>
        <div className="flex items-center justify-center flex-col mt-12 gap-12 md:flex-row md:flex-wrap">
          <div className="w-[430px] rounded-sm bg-slate-500">
            <img
              src={website1}
              alt="Portofolio"
              className="w-full h-[200px] bg-cover object-cover"
            />
            <h2 className="font-semibold text-center text-2xl p-1">Naevaweb</h2>
          </div>
          <div className="w-[430px] rounded-sm bg-slate-500">
            <img
              src={website2}
              alt="Portofolio"
              className="w-full h-[200px] bg-cover object-cover"
            />
            <h2 className="font-semibold text-center text-2xl p-1">
              What we DO
            </h2>
          </div>
          <div className="w-[430px] rounded-sm bg-slate-500">
            <img
              src={website3}
              alt="Portofolio"
              className="w-full h-[200px] bg-cover object-cover"
            />
            <h2 className="font-semibold text-center text-2xl p-1">Nestle</h2>
          </div>
        </div>
      </div>
    </>
  );
}
