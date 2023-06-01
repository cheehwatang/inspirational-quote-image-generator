import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { quotesQueryName } from "@/src/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";

import Head from "next/head";

// Components
import {
	BackgroundImageLeft,
	BackgroundImageRight,
	FooterContainer,
	FooterLink,
	GenerateQuoteButton,
	GenerateQuoteButtonText,
	GradientBackgroundContainer,
	QuoteGeneratorContainer,
	QuoteGeneratorInnerContainer,
	QuoteGeneratorSubtitle,
	QuoteGeneratorTitle,
} from "@/components/QuoteGenerator/QuoteGeneratorElements";
import { QuoteGeneratorModal } from "@/components/QuoteGenerator";

// Assets
import FlowerLeft from "@/assets/FlowerLeft.png";
import FlowerRight from "@/assets/FlowerRight.png";

// Interface for DynamoDB object
interface UpdateQuoteInfoData {
	id: string;
	queryName: string;
	quotesGenerated: number;
	createdAt: string;
	updatedAt: string;
}

// Type-guard for fetch function
const isGraphQLResultForquotesQueryName = (
	response: any
): response is GraphQLResult<{
	quotesQueryName: {
		items: [UpdateQuoteInfoData];
	};
}> => {
	return (
		response.data &&
		response.data.quotesQueryName &&
		response.data.quotesQueryName.items
	);
};

export default function Home() {
	const [numberOfQuotes, setNumberOfQuotes] = useState(0);
	const [openGenerator, setOpenGenerator] = useState(false);
	const [processingQuote, setProcessingQuote] = useState(false);
	const [quoteReceived, setQuoteReceived] = useState<String | null>(null);

	// Function to fetch DynamoDB object
	const updateQuoteInfo = async () => {
		try {
			const response = await API.graphql<UpdateQuoteInfoData>({
				query: quotesQueryName,
				authMode: "AWS_IAM",
				variables: {
					queryName: "LIVE",
				},
			});
			if (!isGraphQLResultForquotesQueryName(response)) {
				throw new Error("Unexpected response from API.graphql");
			}

			if (!response.data) {
				throw new Error("Response data is undefined");
			}

			const receivedNumberOfQuotes =
				response.data.quotesQueryName.items[0].quotesGenerated;
			setNumberOfQuotes(receivedNumberOfQuotes);
		} catch (error) {
			console.log("error getting quote data", error);
		}
	};

	useEffect(() => {
		updateQuoteInfo();
	}, []);

	const handleCloseGenerator = () => {
		setOpenGenerator(false);
	};

	const handleOpenGenerator = async (event: React.SyntheticEvent) => {
		event.preventDefault();
		setOpenGenerator(true);
		setProcessingQuote(true);
		try {
			setTimeout(() => {
				setProcessingQuote(false);
			}, 1000);
		} catch (error) {
			console.log("error generating quote:", error);
			setProcessingQuote(false);
		}
	};

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

			{/* Background */}
			<GradientBackgroundContainer>
				<QuoteGeneratorModal
					open={openGenerator}
					close={handleCloseGenerator}
					processingQuote={processingQuote}
					setProcessingQuote={setProcessingQuote}
					quoteReceived={quoteReceived}
					setQuoteReceived={setQuoteReceived}
				></QuoteGeneratorModal>

				<QuoteGeneratorContainer>
					<QuoteGeneratorInnerContainer>
						<QuoteGeneratorTitle>
							Inspirational Quote Generator
						</QuoteGeneratorTitle>
						<QuoteGeneratorSubtitle>
							Looking for a splash of inspiration? Generate a quote card with a
							inspirational quote provided by{" "}
							<FooterLink
								href="https://zenquotes.io/"
								target="_blank"
								rel="noopener noreferrer"
							>
								ZenQuotes API
							</FooterLink>
						</QuoteGeneratorSubtitle>

						<GenerateQuoteButton onClick={handleOpenGenerator}>
							<GenerateQuoteButtonText>Make a Quote</GenerateQuoteButtonText>
						</GenerateQuoteButton>
					</QuoteGeneratorInnerContainer>
				</QuoteGeneratorContainer>

				{/* Background Images */}
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
