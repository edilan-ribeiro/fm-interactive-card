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
		cvc: watch('cvc', '') || '000'
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
						<p>   {`${cardData.month}/${cardData.year}`}</p>
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
	overflow: hidden;
	display: grid;
	grid-template-areas:
	"card-front card-front ."
	". card-back card-back"
	;
	gap: 30px;
`

const CardFront = styled.div`
    width: 447px;
	height: 245px;
	background:  url('/images/bg-card-front.png') no-repeat;
	grid-area: card-front;
	margin-right: -320px;
	padding: 30px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
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
	
`

const CardBack = styled.div`
	color: #FFF;
    width: 447px;
	height: 245px;
	background: url('/images/bg-card-back.png') no-repeat;
	grid-area: card-back;

	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-right:50px;

	p {
		font-size: 1.4rem;
		letter-spacing: 0.2rem;
		margin-bottom: 5px;
	}
`
