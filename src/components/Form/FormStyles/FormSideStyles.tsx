import styled from 'styled-components'

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