import { z } from 'zod'

export const createCardSchema = z.object({
	name: z
		.string()
		.min(1, "Can't be blank")
		.min(5, 'Name too small')
		.refine(name => name.match(/^[A-Za-z\s]*$/), 'Invalid name'),

	cardn: z
		.string({ required_error: "Can't be blank" })
		.refine(
			cardNumber => cardNumber.replace(/\s+/g, '').length === 16,
			'Must have 16 digits'
		),

	month: z.coerce
		.number({ invalid_type_error: 'Invalid month' })
		.min(1, "Can't be blank")
		.max(12, 'Invalid month'),

	year: z.coerce
		.number({ invalid_type_error: 'Invalid year' })
		.min(1, "Can't be blank")
		.min(23, 'Minimum year is 23')
		.max(80, 'Invalid year'),

	cvc: z.coerce
		.number({ invalid_type_error: 'Invalid CVC' })
		.min(1, "Can't be blank")
		.refine(
			cvc => cvc >= 100 && cvc <= 999,
			'Must have 3 digits'
		),
})
