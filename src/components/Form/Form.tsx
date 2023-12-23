import { Controller, useFormContext } from 'react-hook-form'
import { MaskedInput } from './FormStyles/MaskedInputStyles'
import { createCardSchemaT, datasent } from '@/Types/types'
import { ConfirmButton } from './FormStyles/ConfirmButtonStyles'
import { FormSide } from './FormStyles/FormSideStyles'
import { InputContainer, Labels, InputField, InputErrors } from './FormStyles/InputStyles'
import { SecurityFields, ExpireField, DateContainer, CvcField } from './FormStyles/SecurityFieldsStyles'

export const Form = ({ datasent }: datasent) => {
	//prettier-ignore
	const { register, handleSubmit, control, formState: { errors } } = useFormContext<createCardSchemaT>()

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
							{	(errors.month && <InputErrors>{errors.month.message}</InputErrors>)
								||
								(errors.year && <InputErrors>{errors.year.message}</InputErrors>)
							}
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
