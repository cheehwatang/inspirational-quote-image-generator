import React from "react";
import { Modal, Backdrop, Fade } from "@mui/material";
import {
	QuoteGeneratorModalContainer,
	QuoteGeneratorModalInnerContainer,
} from "./QuoteGeneratorElements";

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
					<QuoteGeneratorModalInnerContainer></QuoteGeneratorModalInnerContainer>
				</QuoteGeneratorModalContainer>
			</Fade>
		</Modal>
	);
};
