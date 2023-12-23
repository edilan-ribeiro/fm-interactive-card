import { FieldErrors } from 'react-hook-form'
import { PatternFormat } from 'react-number-format'
import styled from 'styled-components'

type InputFieldProps = React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
> & {
	errors: FieldErrors
}

export const MaskedInput = styled(PatternFormat)<InputFieldProps>`
	font-family: var(--font-spaceG);
	padding: 15px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	border: 1px solid ${(props) =>
		props.errors && props.errors['cardn'] ? '#ff5252' : '#dedddf'};

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
