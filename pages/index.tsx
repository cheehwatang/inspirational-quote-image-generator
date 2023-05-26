import Head from "next/head";
import { GradientBackgroundContainer } from "@/components/QuoteGenerator/QuoteGeneratorElements";

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
			<GradientBackgroundContainer></GradientBackgroundContainer>
		</>
	);
}
