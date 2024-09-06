"use client";

import { IManifest } from "@/app/components/manifest/ManifestForm";
import React, { createContext, useContext, useState } from "react";

interface ManifestContextType {
  data: IManifest | undefined;
  handleAddData: (data: IManifest) => void;
}

const metadataContextValue: ManifestContextType = {
  data: undefined,
  handleAddData: () => {},
};

const ManifestContext =
  createContext<ManifestContextType>(metadataContextValue);

export const ManifestContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<IManifest>();

  const handleAddData = (newData: IManifest) => {
    console.log(newData);
    setData(newData);
  };

  const value = {
    data,
    handleAddData,
  };

  return (
    <ManifestContext.Provider value={value}>
      {children}
    </ManifestContext.Provider>
  );
};

export const useManifestContext = () => {
  return useContext(ManifestContext);
};
