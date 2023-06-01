import React from "react";
import Image from "next/image";

interface ImageBlobProps {
	quoteReceived: String;
	blobUrl: string | null;
}

export const ImageBlob = ({ quoteReceived, blobUrl }: ImageBlobProps) => {
	return <div>ImageBlob</div>;
};
