import Image from 'next/image'
import styled from 'styled-components'
import cardLogo from '../../../public/images/card-logo.svg'

export const Card = () => {
	return (
		<CardContainer>
			<CardFront>
				<Image src={cardLogo} width={84} height={47} alt="card logo" />
				<CardFrontData>
					<p>CARD NUMBERS</p>
					<div>
						<p>NOME NOME</p>
						<p>VENCIMENTO</p>
					</div>
				</CardFrontData>
			</CardFront>

			<CardBack>
				<p>CVC</p>
			</CardBack>
		</CardContainer>
	)
}

const CardContainer = styled.div`
	width: 500px;
	
`

const CardFront = styled.div`
    width: auto;
	height: 250px;
	background:  url('/images/bg-card-front.png') no-repeat;
`

const CardFrontData = styled.div`
	
`

const CardBack = styled.div`
    width: auto;
	height: 250px;
	background: url('/images/bg-card-back.png') no-repeat;
`
