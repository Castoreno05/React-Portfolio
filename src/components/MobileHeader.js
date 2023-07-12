import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiFillHome, AiFillProject, AiFillAppstore } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

function MobileHeader() {
	return (
		<Container>
			<Link to="/">
				<AiFillHome />
				<span>Home</span>
			</Link>
			<Link to="/about">
				<BsFillPersonFill />
				<span>About</span>
			</Link>
			<Link to="projects">
				<AiFillProject />
				<span>Projects</span>
			</Link>
			<Link to="/skills">
				<AiFillAppstore />
				<span>Skills</span>
			</Link>
		</Container>
	);
}
const Container = styled.div`
	width: 100%;
	display: flex;
	position: fixed;
	bottom: -1px;
	justify-content: space-around;
	background-color: black;
	a {
		color: inherit;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		span,
		svg {
			color: white;
		}
	}
`;

export default MobileHeader;
