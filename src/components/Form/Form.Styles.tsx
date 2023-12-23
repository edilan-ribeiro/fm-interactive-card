import styled from 'styled-components'
import { FieldErrors } from 'react-hook-form'

type InputFieldProps = React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
> & {
	$errors: FieldErrors
}

export const FormSide = styled.form`
    display: flex;
	flex-direction: column;
	text-transform: uppercase;
	width: 410px;
	margin-right: 30px;
	flex-shrink: 0;

	@media (max-width: 600px) {
		width: 340px;
		margin-right: initial;
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

export const InputErrors = styled.p`
	margin-top: 5px;
	color: #ff5252;
	text-transform: none;
	font-size: 1.2rem;

	@media (max-width: 600px) {
		margin-top: 2px;
	}
`

export const InputField = styled.input<InputFieldProps>`
	font-family: var(--font-spaceG);
	padding: 15px;
	border-radius: 10px;
	border: 1px solid ${(props) =>
		props && props.$errors && props.name && props.$errors[props.name]
			? '#ff5252'
			: '#dedddf'};
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

export const ConfirmButton = styled.button`
    background-color: #21092f;
	color: #FFF;
	border-radius: 10px;
	text-transform: capitalize;
	font-size: 2rem;
	padding: 15px 0;
	text-align: center;
	margin-top: 10px;

	&:hover {
		background-color: #441660;
		transition: 0.2s ease-in-out;
	}

	@media (max-width: 600px) {
		margin: 0;
	}
`
