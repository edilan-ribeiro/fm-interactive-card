import Image from "next/image"
import styled from "styled-components"
import complete from '../../../public/images/icon-complete.svg'
import { ConfirmButton } from "../Form/Form.Styles"
import { Dispatch, SetStateAction } from "react"

type reset = {
	resetpage: Dispatch<SetStateAction<boolean>>
}

export const Thanks = ( { resetpage } : reset ) => {


	function handleClick () {
		resetpage(false)
	}

	return (
		<ThanksContainer>
			<Image
				src={complete}
				width={80}
				height={80}
				alt='finish confirmation image'
			/>
			<h2>Thank You!</h2>
			<p>We've added your card details</p>
			<Continue onClick={handleClick}>Continue</Continue>
		</ThanksContainer>
	)
}

const ThanksContainer = styled.div`
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
		margin-bottom: 10px;
		color: #21092f;
	}

	p {
		font-size: 1.8rem;
		font-weight: 500;
		color: #8e8593;
		margin-bottom: 40px;
	}
`

const Continue = styled(ConfirmButton)`
	width: 100%;
`