import React from "react";
import Image from "next/image";

interface ImageBlobProps {
	blobUrl: string | null;
}

export const ImageBlob = ({ blobUrl }: ImageBlobProps) => {
	if (!blobUrl) {
		return null;
	}

	return (
		<Image
			src={blobUrl}
			alt="Generated Inspirational Quote Card"
			width={150}
			height={100}
		/>
	);
};
