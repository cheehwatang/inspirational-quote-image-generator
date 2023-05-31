import React, { useState } from "react";

import Head from "next/head";

// Components
import {
	BackgroundImageLeft,
	BackgroundImageRight,
	FooterContainer,
	FooterLink,
	GradientBackgroundContainer,
} from "@/components/QuoteGenerator/QuoteGeneratorElements";

// Assets
import FlowerLeft from "@/assets/FlowerLeft.png";
import FlowerRight from "@/assets/FlowerRight.png";

export default function Home() {
	const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);

	return (
		<>
			<Head>
				<title>Inspirational Quote Image Generator</title>
				<meta
					name="description"
					content="Generate an image with inspirational quote."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<GradientBackgroundContainer>
				<BackgroundImageLeft
					src={FlowerLeft}
					height="160"
					alt="Flower Background Decorator"
				/>
				<BackgroundImageRight
					src={FlowerRight}
					height="160"
					alt="Flower Background Decorator"
				/>

				<FooterContainer>
					<>
						Quotes Generated: {numberOfQuotes}
						<br />
						Developed with ❤️ by{" "}
						<FooterLink
							href="https://github.com/cheehwatang"
							target="_blank"
							rel="noopener noreferrer"
						>
							@cheehwatang
						</FooterLink>
					</>
				</FooterContainer>
			</GradientBackgroundContainer>
		</>
	);
}
