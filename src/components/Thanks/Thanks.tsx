import Image from 'next/image'
import complete from '../../../public/images/icon-complete.svg'
import { Continue, ThanksContainer } from './ThanksStyles'

export const Thanks = () => {
	function handleClick() {
		location.reload()
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
			<p>We&apos;ve added your card details</p>
			<Continue onClick={handleClick}>Continue</Continue>
		</ThanksContainer>
	)
}
