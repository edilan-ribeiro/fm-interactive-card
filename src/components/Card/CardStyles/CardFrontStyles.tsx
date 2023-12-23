import styled from 'styled-components'

export const CardFront = styled.div`
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

export const CardFrontData = styled.div`
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
