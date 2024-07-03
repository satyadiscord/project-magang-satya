import background from "./bg/bgsatu.jpg";

export default function ImageBig() {
  return (
    <>
      <div className="absolute top-0 -z-50 w-full h-[100vh] md:h-[90vh] opacity-20">
        <img
          src={background}
          alt="Background"
          className="w-full h-full object-cover bg-cover"
        />
      </div>
    </>
  );
}
