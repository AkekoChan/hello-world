import { roboto } from "@/app/layout";

const PreviewTwitter = () => {
  return (
    <div className="flex flex-col gap-4 cursor-pointer">
      <span className="label-text pb-0 text-waikawa-gray-800">Facebook</span>
      <div className="rounded-xl">
        <div
          className="flex h-64 bg-cover bg-center rounded-t-xl"
          style={{
            backgroundImage:
              "url('https://martintheo.fr/assets/images/8F-bn8Sd0--400.png')",
          }}
        ></div>
        <div
          className={`flex flex-col gap-1.5 bg-[#ffffff] text-[#000000] border-[#dadde1] border-1 py-3 px-4  ${roboto.className} rounded-b-xl`}
        >
          <p className="font-bold">
            Hello World - The developer&apos;s Swiss Army knife
          </p>
          <p className="text-[##606770] text-sm text-ellipsis">
            Hello World is a site that gathers a set of tools to make developers
            tasks easier!
          </p>
          <span className="text-[#8B99A5] text-xs font-bold">
            hello-world-dev.vercel.app
          </span>
        </div>
      </div>
    </div>
  );
};

export default PreviewTwitter;
