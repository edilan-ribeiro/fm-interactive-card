import { Controller, useFormContext } from 'react-hook-form'
import { z } from 'zod'
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
import React, { Dispatch, SetStateAction } from 'react'
import { MaskedInput } from './FormStyles/MaskedInput'

export type createCardSchema = z.infer<typeof createCardSchema>

export const createCardSchema = z.object({
	name: z
		.string()
		.min(1, "Can't be blank")
		.min(5, 'Name too small')
		.refine((name) => name.match(/^[A-Za-z\s]*$/), 'Invalid name'),

	cardn: z
		.string({ required_error: "Can't be blank" })
		.refine(
			(cardNumber) => cardNumber.replace(/\s+/g, '').length === 16,
			'Must have 16 digits'
		),

	month: z.coerce
		.number({ invalid_type_error: 'Invalid month' })
		.min(1, "Can't be blank")
		.max(12, 'Invalid month'),

	year: z.coerce
		.number({ invalid_type_error: 'Invalid year' })
		.min(1, "Can't be blank")
		.min(23, "Minimum year is 23")
		.max(80, 'Invalid year'),

	cvc: z.coerce
		.number({ invalid_type_error: 'Invalid CVC' })
		.min(1, "Can't be blank"),
})

type datasent = {
	datasent: Dispatch<SetStateAction<boolean>>
}

export const Form = ({ datasent }: datasent) => {
	//prettier-ignore
	const { register, handleSubmit, control, formState: { errors } } = useFormContext<createCardSchema>()

	function formSent() {
		datasent(true)
	}

	return (
		<FormSide onSubmit={handleSubmit(formSent)}>
			<InputContainer>
				<Labels htmlFor="name">cardholder name</Labels>
				<InputField
					id="name"
					placeholder="e.g. Jane Appleseed"
					maxLength={20}
					$errors={errors}
					{...register('name')}
				/>
				{errors.name && <InputErrors>{errors.name.message}</InputErrors>}
			</InputContainer>
			<InputContainer>
				<Labels htmlFor="cardn">card number</Labels>
				<Controller
					name="cardn"
					control={control}
					render={({ field }) => (
						<MaskedInput
							id="cardn"
							errors={errors}
							placeholder="e.g 1234 5678 9123 000"
							format="#### #### #### ####"
							value={field.value}
							onValueChange={(values) => field.onChange(values.value)}
						/>
					)}
				/>
				{errors.cardn && <InputErrors>{errors.cardn.message}</InputErrors>}
			</InputContainer>
			<SecurityFields>
				<ExpireField>
					<Labels htmlFor="month">exp. date (mm/yy)</Labels>
					<DateContainer>
					<div>
						<div>
							<InputField
								id="month"
								placeholder="MM"
								maxLength={2}
								$errors={errors}
								{...register('month')}
							/>
						</div>
						<div>
							<InputField
								id="year"
								placeholder="YY"
								maxLength={2}
								$errors={errors}
								{...register('year')}
							/>
						</div>
						</div>
						<div>
						{(errors.month && (
								<InputErrors>{errors.month.message}</InputErrors>
							)) ||
								(errors.year && (
									<InputErrors>{errors.year.message}</InputErrors>
								))}
						</div>
						
					</DateContainer>
				</ExpireField>

				<CvcField>
					<Labels htmlFor="cvc">CVC</Labels>
					<InputField
						id="cvc"
						placeholder="e.g. 123"
						maxLength={3}
						$errors={errors}
						{...register('cvc')}
					/>
					{errors.cvc && <InputErrors>{errors.cvc.message}</InputErrors>}
				</CvcField>
			</SecurityFields>

			<ConfirmButton>confirm</ConfirmButton>
		</FormSide>
	)
}
