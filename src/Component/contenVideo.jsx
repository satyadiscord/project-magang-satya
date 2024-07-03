import video from "../video/Video Launching Website - Promosi Website.mp4";
export default function ContenVideo() {
  return (
    <>
      <div className="w-full h-[100vh] bg-slate-600">
        <div className="font-medium text-2xl md:text-3xl text-blue-600 p-10 text-center">
          Konten Video{" "}
          <span className="font-semibold text-blue-500 tracking-wide">
            KINGSWEB
          </span>
        </div>
        <div className="flex justify-center items-center mt-20">
          <video className="h-80" controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}
