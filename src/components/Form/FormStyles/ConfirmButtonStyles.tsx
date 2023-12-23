import styled from 'styled-components'

export const ConfirmButton = styled.button`
    background-color: #21092f;
	color: #FFF;
	border-radius: 10px;
	text-transform: capitalize;
	font-size: 2rem;
	padding: 15px 0;
	text-align: center;
	margin-top: 10px;

	&:hover {
		background-color: #441660;
		transition: 0.2s ease-in-out;
	}

	@media (max-width: 600px) {
		margin: 0;
	}
`
