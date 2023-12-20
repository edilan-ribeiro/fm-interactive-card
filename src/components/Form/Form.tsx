import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	ConfirmButton,
	CvcField,
	DateContainer,
	ExpireField,
	FormSide,
	InputContainer,
	InputErrors,
	InputField,
	Labels,
	SecurityFields,
} from './Form.Styles'

type createCardSchema = z.infer<typeof createCardSchema>

const createCardSchema = z.object({
	name: z.string().min(1, "Can't be blank").min(5, 'Name too small'),

	cardn: z.coerce
		.number({ invalid_type_error: 'Wrong format, numbers only' })
		.min(1, "Can't be blank")
		.refine(
			(cardNumber) => cardNumber.toString().length === 16,
			'Must have 16 digits'
		),
	month: z.coerce
		.number({ invalid_type_error: 'Invalid month' })
		.min(1, "Can't be blank")
		.max(12, 'Invalid month'),
	year: z.coerce
		.number({ invalid_type_error: 'Invalid year' })
		.min(1, "Can't be blank")
		.min(23, "Year can't be in the past")
		.max(80, 'Invalid year'),
	cvc: z.coerce
		.number({ invalid_type_error: 'Invalid CVC' })
		.min(1, "Can't be blank")
		.max(999, 'Invalid CVC'),
})

export const Form = () => {
	//prettier-ignore
	const {register,handleSubmit,formState: { errors }} = useForm<createCardSchema>({
		resolver: zodResolver(createCardSchema),
	})

	function datacheck(data: any) {
		console.log(data)
	}

	return (
		<FormSide onSubmit={handleSubmit(datacheck)}>
			<InputContainer>
				<Labels htmlFor="name">cardholder name</Labels>
				<InputField
					id="name"
					placeholder="e.g. Jane Appleseed"
					errors={errors}
					{...register('name')}
				/>
				{errors.name && <InputErrors>{errors.name.message}</InputErrors>}
			</InputContainer>
			<InputContainer>
				<Labels htmlFor="cardn">card number</Labels>
				<InputField
					id="cardn"
					placeholder="e.g 1234 5678 9123 000"
					maxLength={16}
					errors={errors}
					{...register('cardn')}
				/>
				{errors.cardn && <InputErrors>{errors.cardn.message}</InputErrors>}
			</InputContainer>
			<SecurityFields>
				<ExpireField>
					<Labels htmlFor="month">exp. date (mm/yy)</Labels>
					<DateContainer>
						<div>
							<InputField
								id="month"
								placeholder="MM"
								maxLength={2}
								errors={errors}
								{...register('month')}
							/>
							{errors.month && <InputErrors>{errors.month.message}</InputErrors>}
						</div>
						<div>
							<InputField
								id="year"
								placeholder="YY"
								maxLength={2}
								errors={errors}
								{...register('year')}
							/>
							{errors.year && <InputErrors>{errors.year.message}</InputErrors>}
						</div>
					</DateContainer>
					{/* {errors.month && <InputErrors>{errors.month.message}</InputErrors> || errors.year && <InputErrors>{errors.year.message}</InputErrors>} */}
				</ExpireField>

				<CvcField>
					<Labels htmlFor="cvc">CVC</Labels>
					<InputField
						id="cvc"
						placeholder="e.g. 123"
						maxLength={3}
						errors={errors}
						{...register('cvc')}
					/>
					{errors.cvc && <InputErrors>{errors.cvc.message}</InputErrors>}
				</CvcField>
			</SecurityFields>

			<ConfirmButton>confirm</ConfirmButton>
		</FormSide>
	)
}
