import styled from 'styled-components'
import { FieldErrors } from 'react-hook-form';

type InputFieldProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
 errors: FieldErrors;
};


// interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement>{
// 	errors: {[key: string]: boolean}
// }

export const FormSide = styled.form`
    display: flex;
	flex-direction: column;
	text-transform: uppercase;
	width: 410px;
`

export const Labels = styled.label`
	font-size: 1.4rem;
	letter-spacing: 0.15rem;
	color: #21092f;
	margin-bottom: 5px;
`

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 90px;
	margin-bottom: 20px;
`

export const InputErrors = styled.p`
	margin-top: 5px;
	color: #ff5252;
	text-transform: none;
	font-size: 1.2rem;
`

export const InputField = styled.input<InputFieldProps>`
	font-family: var(--font-spaceG);
	padding: 15px;
	border-radius: 10px;
	border: 1px solid ${props => props.name && props.errors[props.name] ? '#ff5252' : '#dedddf'};
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
`

export const SecurityFields = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
	height: 90px;
	margin-bottom: 20px;
`


export const DateContainer = styled.div`
	display: flex;
	gap: 10px;
	height: 100%;

	div{			
		height: 70px;
	}

	input {
		width: 100%;
	}

`

export const ExpireField = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;

	p {
		margin-top: 5px;
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
`
