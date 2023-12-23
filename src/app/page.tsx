'use client'

import styled from 'styled-components'
import { Card } from '@/components/Card/Card'
import { Form } from '@/components/Form/Form'
import { FormProvider, UseFormReturn, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Thanks } from '@/components/Thanks/Thanks'
import { useState } from 'react'
import { createCardSchema} from '@/components/Form/FormSchema/FormSchema'
import { createCardSchemaT } from '@/Types/types'

export default function Home() {
	const methods: UseFormReturn<createCardSchemaT> = useForm<createCardSchemaT>({
		resolver: zodResolver(createCardSchema),
	})

	const [formSent, setFormSent] = useState<boolean>(false)

	return (
		<Main>
			<FormProvider {...methods}>
				<Card />
				{formSent === false ? <Form datasent={setFormSent} /> : <Thanks />}
			</FormProvider>
		</Main>
	)
}

const Main = styled.main`
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
	display: flex;
    align-items: center;
    justify-content: center;
    gap: 130px
	; background: url('/images/bg-main-desktop.png') no-repeat;
    background-size: 35% 100%;

	@media (max-width: 1150px) {
		gap: 50px;
	}

	@media (max-width: 1030px) {
		flex-direction: column;background: url('/images/bg-main-mobile.png') no-repeat cover;
		background-size: 100% 24.8%;
    	justify-content: flex-start;
	}
`
