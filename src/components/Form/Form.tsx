import styled from 'styled-components'

export const Form = () => {
	return (
		<FormSide>
			<Labels htmlFor="name">cardholder name</Labels>
			<InputField type="name" id="name" placeholder="e.g. Jane Appleseed" />
			<Labels htmlFor="cardNumber">card number</Labels>
			<InputField
				type="card number"
				id="cardNumber"
				placeholder="e.g 1234 5678 9123 000"
			/>
			<SecurityFields>
				<ExpireField>
					<Labels htmlFor="month">exp. date (mm/yy)</Labels>
					<div>
						<InputField type="expire date month" id="month" placeholder="MM" />
						<InputField type="expire date year" id="year" placeholder="YY" />
					</div>
				</ExpireField>

				<CvcField>
					<Labels htmlFor="cvc">CVC</Labels>
					<InputField type="CVC" id="cvc" placeholder="e.g. 123" />
				</CvcField>
			</SecurityFields>

			<ConfirmButton>confirm</ConfirmButton>
		</FormSide>
	)
}

const FormSide = styled.form`
    display: flex;
	flex-direction: column;
	text-transform: uppercase;
	width: 410px;
`

const Labels = styled.label`
	font-size: 1.4rem;
	letter-spacing: 0.15rem;
	color: #21092f;
	margin-bottom: 5px;
`

const InputField = styled.input`
	margin-bottom: 20px;
	font-family: var(--font-spaceG);
	padding: 15px;
	border-radius: 10px;
	border: 1px solid #dedddf;

	
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

const SecurityFields = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
`

const ExpireField = styled.div`
	width: 50%;

	div {
		display: flex;
		gap: 10px;
		margin-top: 5px;
	}

	input {
		width: 50%;
	}
	
`

const CvcField = styled.div`
	display: flex;
	flex-direction: column;
`

const ConfirmButton = styled.button`
    background-color: #21092f;
	color: #FFF;
	border-radius: 10px;
	text-transform: capitalize;
	font-size: 2rem;
	padding: 15px 0;
	text-align: center;
	margin-top: 30px;
`
