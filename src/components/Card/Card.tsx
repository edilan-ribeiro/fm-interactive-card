import Image from 'next/image'
import styled from 'styled-components'
import cardLogo from '../../../public/images/card-logo.svg'
import { useFormContext } from 'react-hook-form'

export const Card = () => {
	const { watch } = useFormContext()

	const cardData = {
		name: watch('name') || 'Jane Appleseed',
		number: watch('cardn') || '0000000000000000',
		month: watch('month', '') || '00',
		year: watch('year', '') || '00',
		cvc: watch('cvc', '') || '000',
	}

	const formatName = (name: string) => {
		return name.toUpperCase()
	}

	const formatNumber = (numberData: string) => {
		let numbers = numberData
		for (let i = 4; i <= numbers.length; i += 5) {
			numbers = numbers.slice(0, i) + ' ' + numbers.slice(i)
		}

		return numbers
	}

	return (
		<CardContainer>
			<CardFront>
				<Image src={cardLogo} width={84} height={47} alt="card logo" />
				<CardFrontData>
					<p>{formatNumber(cardData.number)}</p>
					<div>
						<p>{formatName(cardData.name)}</p>
						<p> {`${cardData.month}/${cardData.year}`}</p>
					</div>
				</CardFrontData>
			</CardFront>

			<CardBack>
				<p>{cardData.cvc}</p>
			</CardBack>
		</CardContainer>
	)
}

const CardContainer = styled.div`
	max-width: fit-content;
	display: grid;
	grid-template-areas:
	"card-front card-front ."
	". card-back card-back"
	;
	gap: 30px;

	@media (max-width: 1150px) {
		transform: scale(0.9);
	}


	@media (max-width: 1030px) {
		transform: initial;
		gap: initial;
		margin-top: 25px;
	}
`

const CardFront = styled.div`
    width: 447px;
	height: 245px;
	background:  url('/images/bg-card-front.png') no-repeat;
	grid-area: card-front;
	margin-right: -320px;
	padding: 30px;
	border-radius: 10px;
	box-shadow: 5px 5px 25px rgba(0,0,0,0.20);

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media (max-width: 1030px) {
		grid-area: 2 / 2 / 4 / 4;
		
		z-index: 5;
		margin-right: -282px;
		margin-top: 15px;
	}

	@media (max-width: 600px) {
		width: 288px;
		height: 158px;
		background-size: cover;
		padding: 20px;

		margin-right: -180px;
		margin-top: 10px;

		img {
			width: 56px;
			height: 31px;
		}
	}
`

const CardFrontData = styled.div`
	color: #FFF;
	font-size: 2.4rem;
	letter-spacing: 0.4rem;


	div {
		display: flex;
		justify-content: space-between;
		margin-top: 30px;
		font-size: 1.4rem;
		letter-spacing: 0.2rem;
	}

	@media (max-width: 600px) {
		
		font-size: 1.8rem;
		letter-spacing: 0.15rem;

		div {
			font-size: 1rem;
			letter-spacing: 0.1rem;
			margin-top: 16px;
		}
	}
	
`

const CardBack = styled.div`
	color: #FFF;
    width: 447px;
	height: 245px;
	background: url('/images/bg-card-back.png') no-repeat;
	background-color: rgba(0,0,0,0.20);
	grid-area: card-back;

	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-right:50px;
	border-radius: 10px;
	box-shadow: 5px 5px 30px rgba(0,0,0,0.20);

	p {
		font-size: 1.4rem;
		letter-spacing: 0.2rem;
		margin-bottom: 5px;
	}

	@media (max-width: 1030px) {
		grid-area: 1 / 3 / 3 / 5;
	}

	@media (max-width: 600px) {
		width: 288px;
		height: 158px;
		background-size: cover;
		padding-right: 40px;

		p {
			font-size: 1rem;
			letter-spacing: 0.1rem;
		}
	}
`
