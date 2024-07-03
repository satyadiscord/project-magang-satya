import { useState } from "react";
import { kontenDanImage } from "./listObjectImage/kontenDanImage";

export default function KontenKenapaPilihIni() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = window.innerWidth >= 768 ? 3 : 1; // 3 items per page on md, 1 item per page on sm

  // Calculate the index of the first and last items on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Slice the data to get only the items for the current page
  const currentItems = kontenDanImage.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(kontenDanImage.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="w-full mt-20 text-white pl-3">
        <div className="font-medium text-2xl md:text-3xl text-blue-600 mb-5 lg:text-center">
          Kenapa{" "}
          <span className="font-semibold text-blue-500 tracking-wide">
            KINGSWEB
          </span>
        </div>
        <p className="text-lg md:text-xl text-slate-400 mb-32 text-wrap lg:text-center">
          Kami berusaha menjadi penyedia layanan 'One Stop Solution' untuk
          kebutuhan website bisnis anda. Jasa pembuatan website kami sudah
          termasuk Desain Web, Admin, Google Index, SEO dan Domain/Hosting.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">
          {currentItems.map(({ nama, gambar }, index) => (
            <div key={index}>
              <div className="flex justify-center">
                <img src={gambar} alt={nama} className="w-80" />
              </div>
              <p className="text-center font-semibold text-3xl">{nama}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-3 py-1 border rounded ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
