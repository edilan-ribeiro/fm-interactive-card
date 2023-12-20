import styled from 'styled-components'

export const Form = () => {
	return (
		<FormSide>
			<Label />
			<InputField type="name" />
			<Label />
			<InputField type="card number" />
			<ExpireField>
				<Label />
				<InputField type="expire date month" />
				<InputField type="expire date year" />
			</ExpireField>
			<Label />
			<InputField type="CVC" />
			<ConfirmButton>confirm</ConfirmButton>
		</FormSide>
	)
}

const FormSide = styled.form`
    
`

const Label = styled.label`
	
`

const ExpireField = styled.div`
	
`

const InputField = styled.input`
    
`

const ConfirmButton = styled.button`
    
`
