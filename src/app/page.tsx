'use client'

import styled from 'styled-components'
import { Card } from '@/components/Card/Card'
import { Form, createCardSchema } from '@/components/Form/Form'
import { FormProvider, UseFormReturn, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Thanks } from '@/components/Thanks/Thanks'
import { useState } from 'react'

export default function Home() {
	const methods: UseFormReturn<{
		name: string
		cardn: number
		month: number
		year: number
		cvc: number
	}> = useForm<createCardSchema>({
		resolver: zodResolver(createCardSchema),
	})

	const [formSent, setFormSent] = useState<boolean>(false)

	return (
		<Main>
			<FormProvider {...methods}>
				<Card />
				{formSent === false ? (
					<Form sent={setFormSent} />
				) : (
					<Thanks resetpage={setFormSent} />
				)}
			</FormProvider>
		</Main>
	)
}

const Main = styled.main`
    min-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;


    display: flex;
    align-items: center;
    justify-content: center;
    gap: 130px;


    background: url('/images/bg-main-desktop.png') no-repeat;
    background-size: 35% 100%;
`
