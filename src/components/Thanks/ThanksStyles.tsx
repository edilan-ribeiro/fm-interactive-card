
import styled from "styled-components"
import { ConfirmButton } from "../Form/FormStyles/ConfirmButtonStyles"

export const ThanksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
	width: 410px;
	margin-right: 30px;

	img {
		margin-bottom: 35px;
	}

	h2 {
		text-transform: uppercase;
		font-size: 3rem;
		letter-spacing: 0.2rem;
		font-weight: 500;
		margin-bottom: 20px;
		color: #21092f;
	}

	p {
		font-size: 1.8rem;
		font-weight: 500;
		color: #8e8593;
		margin-bottom: 40px;
	}

	@media (max-width: 600px) {
		width: 340px;
		margin: 0;
	}
`

export const Continue = styled(ConfirmButton)`
	width: 100%;
`