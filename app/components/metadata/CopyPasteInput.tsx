"use client";

const CopyPasteInput = () => {
  return (
    <div className="flex items-end gap-4 flex-wrap">
      <label className="form-control" htmlFor="cp-input">
        <div className="label">
          <span className="label-text">Enter the URL site :</span>
        </div>
        <input
          className="input input-bordered input-primary"
          type="text"
          id="cp-input"
        />
      </label>
      <button className="btn btn-primary">Let's Generate</button>
    </div>
  );
};

export default CopyPasteInput;
