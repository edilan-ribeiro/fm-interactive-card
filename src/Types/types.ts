import { createCardSchema } from '@/components/Form/FormSchema/FormSchema'
import { z } from 'zod'
import { Dispatch, SetStateAction } from 'react'
import { FieldErrors } from 'react-hook-form'

export type createCardSchemaT = z.infer<typeof createCardSchema>

export type datasent = {
	datasent: Dispatch<SetStateAction<boolean>>
}

export type InputFieldProps = {
	errors?: FieldErrors
	$errors?: FieldErrors
}
