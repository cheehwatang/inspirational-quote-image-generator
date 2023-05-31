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
