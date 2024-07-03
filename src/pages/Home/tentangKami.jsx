import kontenPertama from "./bg/konten1.jpg";

export default function TentangKami() {
  return (
    <>
      <div className="flex items-center flex-col justify-between lg:flex-row gap-2">
        <div className="w-full bg-red-500 text-white mt-56 hidden lg:block">
          <div className="w-full h-[430px] rounded-md">
            <img
              src={kontenPertama}
              alt="Gambar"
              className="w-full h-full bg-center object-cover bg-cover"
            />
          </div>
        </div>
        <div className="w-full text-white mt-44 md:mt-56 pl-3">
          <div className="font-medium text-2xl md:text-3xl text-blue-600 mb-5">
            Tentang{" "}
            <span className="font-semibold text-blue-500 tracking-wide">
              KINGSWEB
            </span>
          </div>
          <p className="text-lg md:text-xl text-slate-400 text-wrap">
            Kingsweb (sebelum 2015 bernama "Indomediator") adalah perusahaan
            e-commerce yang melayani jasa pembuatan website dan jasa terkait
            lain seperti desain grafis, desain logo, konten, dan penerjemah.
            Kami dapat membantu anda memiliki design website yang tidak hanya
            akan terlihat bagus, namun juga dapat memenuhi kebutuhan usaha dan
            target pengunjung yang merupakan pelanggan produk/jasa anda.
            Dapatkan paket jasa pembuatan website murah yang terdiri dari:
            Design Website, Admin/Maintenance Website, Promo Website atau SEO
            dan Domain/Hosting selama 1 tahun dengan harga mulai dari Rp.
            1.000K. Untuk informasi lengkap jasa pembuatan website dan jasa
            terkait lainnya, silahkan hubungi Kingsweb. Atau KLIK surat
            penawaran jasa pembuatan website kami.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
