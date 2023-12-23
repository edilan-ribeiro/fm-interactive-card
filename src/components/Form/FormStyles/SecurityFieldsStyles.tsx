import styled from 'styled-components'

export const SecurityFields = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
	height: 90px;
	margin-bottom: 20px;

	@media (max-width: 600px) {
		gap: 10px;
		margin: 5px 0;
	}
`

export const DateContainer = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;

	:first-child{
		display: flex;
		gap: 10px;
	}

	input {
		width: 100%;
	}

`

export const ExpireField = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	height: 100%;

	p {
		color: #ff5252;
		text-transform: none;
	}
	
`

export const CvcField = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`
