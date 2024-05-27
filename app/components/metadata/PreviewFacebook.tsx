const PreviewFacebook = () => {
  return (
    <div className="flex flex-col gap-4 cursor-pointer">
      <span className="label-text pb-0 text-waikawa-gray-800">Facebook</span>
      <div>
        <div
          className="flex h-64 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://martintheo.fr/assets/images/8F-bn8Sd0--400.png')",
          }}
        ></div>
        <div className="flex flex-col gap-1.25 bg-[#F0F2F5] text-[#1d2129] border-[#dadde1] border-1 py-3 px-4 font-arial">
          <span className="text-[#65676B] text-xs">
            hello-world-dev.vercel.app
          </span>
          <p className="font-bold">
            Hello World - The developer's Swiss Army knife
          </p>
          <p className="text-[##606770] text-sm text-ellipsis">
            Hello World is a site that gathers a set of tools to make developers
            tasks easier!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreviewFacebook;
