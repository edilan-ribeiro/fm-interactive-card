import styled from 'styled-components'

export const CardBack = styled.div`
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
