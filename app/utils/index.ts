import path from "node:path";

type AttributeMap = {
  [key: string]: string | number | undefined;
};

export const getFileNameFromUrl = (url: string | undefined) => {
  const parts = url?.split(/[/\\]/);

  if (parts) {
    return parts[parts.length - 1];
  }
};

export const stringifyAttributes = (attributeMap: AttributeMap) => {
  return Object.entries(attributeMap)
    .map(([attribute, value]) => {
      return typeof value === "undefined" ? "" : `${attribute}="${value}"`;
    })
    .join(" ");
};

export const removeBaseDirectory = (str: string) =>
  str.substring(str.indexOf(path.sep));
