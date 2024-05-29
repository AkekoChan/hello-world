"use client";

import { IMetadata } from "@/app/components/metadata/CopyPasteInput";
import React, { createContext, useContext, useState } from "react";

interface MetadataContextType {
  metadata: IMetadata | undefined;
  handleAddMetadata: (data: IMetadata) => void;
}

const metadataContextValue: MetadataContextType = {
  metadata: undefined,
  handleAddMetadata: () => {},
};

const MetadataContext =
  createContext<MetadataContextType>(metadataContextValue);

export const MetadataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [metadata, setMetadata] = useState<IMetadata>();

  const handleAddMetadata = (data: IMetadata) => {
    setMetadata(data);
  };

  const value = {
    metadata,
    handleAddMetadata,
  };

  return (
    <MetadataContext.Provider value={value}>
      {children}
    </MetadataContext.Provider>
  );
};

export const useMetadataContext = () => {
  return useContext(MetadataContext);
};
