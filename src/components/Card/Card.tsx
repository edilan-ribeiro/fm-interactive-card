import Image from 'next/image'
import styled from 'styled-components'
import cardLogo from '../../../public/images/card-logo.svg'

export const Card = () => {
	return (
		<CardContainer>
			<CardFront>
				<Image src={cardLogo} width={84} height={47} alt="card logo" />
				<CardFrontData>
					<p>0000 0000 0000 0000</p>
					<div>
						<p>JHON DOE</p>
						<p>00/00</p>
					</div>
				</CardFrontData>
			</CardFront>

			<CardBack>
				<p>000</p>
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
		margin-top: 20px;

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
