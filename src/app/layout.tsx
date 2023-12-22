import type { Metadata } from 'next'
import StyledComponentsRegistry from '../libs/registry'
import { Space_Grotesk } from 'next/font/google'

const space_grotesk = Space_Grotesk({
	weight: '500',
	subsets: ['latin'],
	variable: '--font-spaceG',
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Interactive card',
	description: 'Interactive card form',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body suppressHydrationWarning={true}>
				<StyledComponentsRegistry>
					<div className={space_grotesk.className}>{children}</div>
				</StyledComponentsRegistry>
			</body>
		</html>
	)
}
