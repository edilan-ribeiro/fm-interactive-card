import { InputFieldProps } from '@/Types/types'
import styled from 'styled-components'


export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 90px;
	margin-bottom: 20px;

	@media (max-width: 600px) {
		margin-bottom: 5px;
		height: 85px;
	}
`

export const Labels = styled.label`
	font-size: 1.4rem;
	letter-spacing: 0.15rem;
	color: #21092f;
	margin-bottom: 5px;

	@media (max-width: 600px) {
		font-size: 1.2rem;
	}
`

export const InputField = styled.input<InputFieldProps>`
	font-family: var(--font-spaceG);
	padding: 15px;
	border-radius: 10px;
	border: 1px solid ${(props) =>
		props && props.$errors && props.name && props.$errors[props.name] ? '#ff5252' : '#dedddf'};
	display: flex;
	flex-direction: column;
	
	&::placeholder{
		font-size: 2rem;
		color: #dedddf;
	}

	&:focus{
		outline: none;
		padding: 15px;
		border: double 1px transparent;
		border-radius: 7px;
		background-image: linear-gradient(white, white),
		linear-gradient(to right, #6448fe, #600594);
		background-origin: border-box;
		background-clip: padding-box, border-box;

	}

	@media (max-width: 600px) {

		padding: 12px;

		&::placeholder{
			font-size: 1.8rem;
		}

		&:focus{
			padding: 12px;
		}
	}
`

export const InputErrors = styled.p`
	margin-top: 5px;
	color: #ff5252;
	text-transform: none;
	font-size: 1.2rem;

	@media (max-width: 600px) {
		margin-top: 2px;
	}
`
