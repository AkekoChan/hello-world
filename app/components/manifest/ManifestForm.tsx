import { LuDownload } from "react-icons/lu";
import InputColor from "./InputColor";

const ManifestForm = () => {
  const display = {
    Browser: "browser",
    Standalone: "standalone",
    "Minimal-ui": "minimal",
    Fullscreen: "fullscreen",
  };

  const OptionElements = () => {
    return Object.entries(display).map(([key, value], i) => {
      return (
        <option key={i} value={value}>
          {key}
        </option>
      );
    });
  };

  return (
    <form className="flex flex-col gap-4">
      <label htmlFor="manifest-name" className="form-control">
        <div className="label pt-0">
          <span className="label-text">Name of your app</span>
        </div>
        <input
          name="name"
          id="manifest-name"
          className="input input-primary w-full shadow-lg"
        />
      </label>

      <label htmlFor="manifest-short-name" className="form-control">
        <div className="label pt-0">
          <span className="label-text">Short Name of your app</span>
        </div>
        <input
          name="short-name"
          id="manifest-short-name"
          className="input input-primary w-full shadow-lg"
        />
      </label>

      <label htmlFor="manifest-display">
        <div className="label pt-0">
          <span className="label-text">Display of your app</span>
        </div>
        <select
          id="manifest-display"
          className="select select-bordered select-primary w-full"
          name="display"
          defaultValue={"Browser"}
        >
          <OptionElements />
        </select>
      </label>

      <label htmlFor="manifest-description" className="form-control">
        <div className="label pt-0">
          <span className="label-text">Description of your app</span>
        </div>
        <textarea
          name="description"
          id="manifest-description"
          className="textarea textarea-primary w-full resize-none shadow-lg"
        ></textarea>
      </label>

      <label htmlFor="manifest-scope" className="form-control">
        <div className="label pt-0">
          <span className="label-text">Scope of your app</span>
        </div>
        <input
          name="scope"
          id="manifest-scope"
          className="input input-primary w-full shadow-lg"
        />
      </label>

      <label htmlFor="manifest-start-url" className="form-control">
        <div className="label pt-0">
          <span className="label-text">Start URL of your app</span>
        </div>
        <input
          name="start-url"
          id="manifest-start-url"
          className="input input-primary w-full shadow-lg"
        />
      </label>

      <InputColor label={"Theme Color"} />

      <InputColor label={"Background Color"} />

      <label className="form-control w-full">
        <div className="label pt-0">
          <span className="label-text">Icon of your app</span>
        </div>
        <input
          type="file"
          className="file-input file-input-bordered file-input-primary w-full"
        />
      </label>

      <button type="submit" className="btn btn-primary">
        <LuDownload size={"1.5rem"} />
        Get your manifest
      </button>
    </form>
  );
};

export default ManifestForm;
