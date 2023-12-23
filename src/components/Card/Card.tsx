import Image from 'next/image'
import cardLogo from '../../../public/images/card-logo.svg'
import { useFormContext } from 'react-hook-form'
import { formatName, formatNumber } from '@/Utils/FormatCardData'
import { CardBack } from './CardStyles/CardBackStyles'
import { CardContainer } from './CardStyles/CardContainerStyles'
import { CardFront, CardFrontData } from './CardStyles/CardFrontStyles'

export const Card = () => {
	const { watch } = useFormContext()

	const cardData = {
		name: watch('name') || 'Jane Appleseed',
		number: watch('cardn') || '0000000000000000',
		month: watch('month', '') || '00',
		year: watch('year', '') || '00',
		cvc: watch('cvc', '') || '000',
	}

	return (
		<CardContainer>
			<CardFront>
				<Image
					src={cardLogo}
					width={84}
					height={47}
					alt="card logo"
				/>
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