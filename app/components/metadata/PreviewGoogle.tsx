const PreviewGoogle = () => {
  return (
    <div className="flex flex-col gap-4">
      <span className="label-text pb-0 text-waikawa-gray-800">Google</span>
      <div>
        <div className="cursor-pointer group">
          <p className="text-[#202124] font-arial text-sm">Hello World</p>
          <p className="text-[#202124] font-arial text-xs">
            https://hello-world-dev.vercel.app/
          </p>
          <p className="text-[#1a0dab] font-arial text-xl lg:text-2xl group-hover:underline py-1 text-ellipsis">
            Hello World - The developer&apos;s Swiss Army knife
          </p>
        </div>
        <p className="text-[#4d5156] text-sm">
          Hello World is a site that gathers a set of tools to make developers
          tasks easier!
        </p>
      </div>
    </div>
  );
};

export default PreviewGoogle;
