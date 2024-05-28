"use client";

import { IMetadata } from "@/app/components/metadata/CopyPasteInput";
import React, { createContext, useContext, useState } from "react";

interface MetadataContextType {
  metadata: IMetadata | undefined;
  setMetadata: React.Dispatch<React.SetStateAction<IMetadata | undefined>>;
}

const MetadataContext = createContext<MetadataContextType | null>(null);

export const MetadataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [metadata, setMetadata] = useState<IMetadata>();

  const metadataContextValue: MetadataContextType = {
    metadata,
    setMetadata,
  };

  return (
    <MetadataContext.Provider value={metadataContextValue}>
      {children}
    </MetadataContext.Provider>
  );
};

export const useMetadataContext = () => {
  return useContext(MetadataContext);
};
