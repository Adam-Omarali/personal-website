function Basemint() {
  return (
    <div>
      <div className="relative h-0 w-full pb-[62.5%]">
        <iframe
          src="https://www.loom.com/embed/066abd670575407980e7647ef2ec39e1?sid=550da057-01f8-4d21-a41c-23f8a8dee6d2"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
      <h1 className="text-2xl font-bold mt-4">Links</h1>
      <ul className="font-sm flex flex-col space-x-0 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0">
        <li>
          <a
            className="flex items-center transition-all hover:text-blue-500"
            rel="noopener noreferrer"
            target="_blank"
            href="https://marketbasemint.vercel.app/"
          >
            <p className="h-7">Website</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-blue-500 "
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/audgeviolin07/marketbasemint"
          >
            <p className="h-7">Github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-blue-500 "
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/posts/audrey-chen-tech_comeback-success-careergrowth-activity-7198162642543206400-bTeE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC2EaiIBHALun3jBa_or2VlAaV93Mrmd31U"
          >
            <p className="h-7">LinkedIn Post</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Basemint;
