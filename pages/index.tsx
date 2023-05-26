import Head from "next/head";

// Components
import {
	BackgroundImageLeft,
	BackgroundImageRight,
	GradientBackgroundContainer,
} from "@/components/QuoteGenerator/QuoteGeneratorElements";

// Assets
import FlowerLeft from "@/assets/FlowerLeft.png";
import FlowerRight from "@/assets/FlowerRight.png";

export default function Home() {
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
					height="200"
					alt="Flower Background Decorator"
				/>
				<BackgroundImageRight
					src={FlowerRight}
					height="200"
					alt="Flower Background Decorator"
				/>
			</GradientBackgroundContainer>
		</>
	);
}
