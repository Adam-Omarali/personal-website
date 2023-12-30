import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p>Adam Omarali</p>
      <Image
        src="/img/IMG_2284.JPG"
        alt="Profile Pic"
        width={300}
        height={500}
      />
    </div>
  );
}
