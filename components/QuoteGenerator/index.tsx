import React from "react";
import { Modal, Backdrop, Fade } from "@mui/material";
import {
	ModalCircularProgress,
	QuoteGeneratorModalContainer,
	QuoteGeneratorModalInnerContainer,
	QuoteGeneratorSubtitle,
	QuoteGeneratorTitle,
} from "./QuoteGeneratorElements";
import { ImageBlob } from "../animations/ImageBlob";
import { ImageBlobContainer } from "../animations/AnimationElements";
import { AnimatedDownloadButton } from "../animations/AnimatedDownloadButton";

interface QuoteGeneratorModalProps {
	open: boolean;
	close: () => void;
	processingQuote: boolean;
	setProcessingQuote: React.Dispatch<React.SetStateAction<boolean>>;
	quoteReceived: String | null;
	setQuoteReceived: React.Dispatch<React.SetStateAction<String | null>>;
}

const style = {};

export const QuoteGeneratorModal = ({
	open,
	close,
	processingQuote,
	setProcessingQuote,
	quoteReceived,
	setQuoteReceived,
}: QuoteGeneratorModalProps) => {
	const wiseDevQuote =
		"The great thing about inspiring quotes is that they pack so much wisdom in so few words.";
	const wiseDevQuoteAuthor = "- Chris Hughes";

	return (
		<Modal
			id="QuoteGeneratorModal"
			aria-labelledby="spring-modal-quotegeneratormodal"
			aria-describedby="sprint-modal-opens-and-closes-quote-generator"
			open={open}
			onClose={close}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={open}>
				<QuoteGeneratorModalContainer sx={style}>
					<QuoteGeneratorModalInnerContainer>
						{processingQuote === true && quoteReceived === null && (
							<>
								<ModalCircularProgress size={"8rem"} thickness={2.5} />
								<QuoteGeneratorTitle>
									Creating your quote...
								</QuoteGeneratorTitle>
								<QuoteGeneratorSubtitle style={{ marginTop: "20px" }}>
									{wiseDevQuote}
									<br />
									<span style={{ fontSize: 26 }}>{wiseDevQuoteAuthor}</span>
								</QuoteGeneratorSubtitle>
							</>
						)}

						{quoteReceived !== null && (
							<>
								<QuoteGeneratorTitle>Download your quote!</QuoteGeneratorTitle>
								<QuoteGeneratorSubtitle style={{ marginTop: "20px" }}>
									See a preview:
								</QuoteGeneratorSubtitle>
								<ImageBlobContainer>
									<ImageBlob />
								</ImageBlobContainer>
								<AnimatedDownloadButton />
							</>
						)}
					</QuoteGeneratorModalInnerContainer>
				</QuoteGeneratorModalContainer>
			</Fade>
		</Modal>
	);
};
