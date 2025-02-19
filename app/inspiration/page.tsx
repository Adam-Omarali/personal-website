import Image from "next/image";

function Inspiration() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 mt-4">people i admire</h1>
      <Image src={"/images/inspo.png"} alt="" height={300} width={500} />
      <h1 className="text-3xl font-bold mb-4 mt-4">media that changed me</h1>
      <Image src={"/images/media.png"} alt="" height={300} width={500} />
      <h1 className="text-3xl font-bold mb-4 mt-4">artists who influence me</h1>
      <Image src={"/images/artists.png"} alt="" height={300} width={500} />
    </>
  );
}

export default Inspiration;
