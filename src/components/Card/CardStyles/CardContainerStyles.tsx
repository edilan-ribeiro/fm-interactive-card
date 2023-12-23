import styled from 'styled-components'

export const CardContainer = styled.div`
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
