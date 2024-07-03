import { useState } from "react";
import { listLayananObject } from "./listObajectLayanan";

export default function LayananKingsWeb() {
  const [jenisLayanan, setJenisLayanan] = useState(listLayananObject);
  return (
    <>
      <div className="w-full mt-20 text-white">
        <div className="font-medium text-2xl md:text-3xl text-blue-600 mb-9 pl-5 md:text-center">
          Layanan Jasa{" "}
          <span className="font-semibold text-blue-500 tracking-wide">
            KINGSWEB
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {jenisLayanan.map(({ icon, judul, deskripsi }, index) => (
            <div
              key={index}
              className="w-[400px] bg-slate-700 rounded-md p-10 flex flex-col items-center"
            >
              <div className="text-7xl mb-5">{icon}</div>
              <h3 className="text-center text-2xl mb-2 text-blue-600 font-semibold md:text-3xl">
                {judul}
              </h3>
              <p className="text-center text-lg text-slate-300 md:text-xl">
                {deskripsi}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
