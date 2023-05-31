import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const GradientBackgroundContainer = styled.div`
	background: linear-gradient(to right, #000046, #1cb5e0);
	background-size: 400% 400%;
	animation: gradient 6s ease infinite;
	height: 100vh;
	width: 100vw;
	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`;

export const BackgroundImageLeft = styled(Image)`
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
`;

export const BackgroundImageRight = styled(Image)`
	position: fixed;
	z-index: 1;
	right: 0;
	bottom: 0;
`;

export const FooterContainer = styled.div`
	width: 100vw;
	height: 50px;
	text-align: center;
	font-family: "Source Code Pro", monospace;
	font-size: 15px;
	position: absolute;
	bottom: 0%;
	color: white;
	z-index: 9999;
`;

export const FooterLink = styled(Link)`
	color: white;
`;

export const QuoteGeneratorContainer = styled.div`
	min-height: 350px;
	min-width: 350px;
	height: 70vh;
	width: 70vw;
	border: 2px solid #ffffff22;
	border-radius: 15px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	position: absolute;
	z-index: 2;

	background: rgba(0, 0, 70, 0.3);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);
`;
