import styled from "styled-components";
import Lottie from "react-lottie-player";

export const ImageBlobContainer = styled.div`
	position: relative;
	text-align: center;
	top: 10px;
	margin-top: 20px;
	transition: 0.3s all ease-in-out;
	width: fit-content;
	margin: auto;
	height: 100px;
	z-index: 9999;

	&:hover {
		transform: scale(4.8);
		z-index: 9999;
		transition: 0.3s ease-in-out;
		box-shadow: 0 0 80px 90px rgba(0, 0, 0, 0.6);
		@media only screen and (max-width: 800px) {
			transform: scale(3.8);
			transition: 0.3s all ease-in-out;
		}
		@media only screen and (max-width: 600px) {
			transform: scale(2.8);
			transition: 0.3s all ease-in-out;
		}
	}
`;

export const DownloadQuoteCardContainer = styled.div`
	border: 2px solid darkgrey;
	width: 400px;
	position: relative;
	border-radius: 20px;
	cursor: pointer;
	margin-top: 20px;
	transform: scale(0.7);
	width: calc(70vw / 2);
	margin: auto;
	&:hover {
		background: rgb(193 193 255 / 3%);
		box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
	}
`;

export const CenteredLottie = styled(Lottie)`
	width: 250px;
	height: 250px;
	left: 50%;
	transform: translateX(-50%);
	position: relative;
	margin-top: -40px;
	pointer-events: none;
`;

export const DownloadQuoteCardContainerText = styled.div`
	color: white;
	font-family: "Caveat", cursive;
	font-size: 35px;
	position: relative;
	width: 100%;
	text-align: center;
	padding: 0 20px;
	margin-top: -60px;
	margin-bottom: 10px;
	pointer-events: none;
	@media only screen and (max-width: 600px) {
		font-size: 25px;
	}
`;
