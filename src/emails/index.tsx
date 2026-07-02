import * as React from 'react';
import {
	Body,
	Container,
	Head,
	Hr,
	Html,
	Link,
	Preview,
	Section,
	Img,
	Text,
	Tailwind,
} from '@react-email/components';

const WaitlistEmail = ({ userFirstname }: { userFirstname: string }) => {
	const currentYear = new Date().getFullYear();

	return (
		<Html>
			<Tailwind>
				<Head>
					<title>Bienvenido a Echo</title>
					<Preview>Gracias por unirte a la lista de espera de Echo. Te mantendremos al tanto.</Preview>
					<style>
						{`
              @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap');
            `}
					</style>
				</Head>
				<Body className="bg-[#F8F7F4] py-[40px]" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
					<Container className="bg-white rounded-[12px] mx-auto p-[32px] max-w-[600px]">
						<Section className="mt-[8px] text-center">
							<Img
								src="https://waitlist.echo.builders/imagotipo-accent.png"
								alt="Echo"
								className="w-[72px] h-auto mx-auto"
							/>
						</Section>

						<Section className="mt-[32px] text-center">
							<Text className="text-[24px] font-semibold text-[#1A1A1A] m-0">
								¡Gracias por sumarte!
							</Text>

							<Text className="text-[16px] text-[#71717A] mt-[12px] mb-0">
								Estás en la lista de espera de <span className="text-[#6B5CE7] font-medium">Echo</span>.
							</Text>

							<Hr className="border-solid border-[#E5E5E5] my-[24px] w-[60px] mx-auto" />
						</Section>

						<Section>
							<Text className="text-[15px] leading-[24px] text-[#52525B]">
								Hola {userFirstname},
							</Text>

							<Text className="text-[15px] leading-[24px] text-[#52525B]">
								Gracias por unirte. Estamos trabajando en Echo, una plataforma inteligente de feedback para founders y developers.
							</Text>

							<Text className="text-[15px] leading-[24px] text-[#52525B]">
								Te avisamos en el momento en que esté listo para vos. Si tenés alguna pregunta, simplemente respondé a este email o escribinos a{' '}
								<Link href="mailto:francogalfre.code@gmail.com" className="text-[#6B5CE7]">
									francogalfre.code@gmail.com
								</Link>.
							</Text>

							<Text className="text-[15px] leading-[24px] text-[#52525B] mt-[24px]">
								Saludos,
							</Text>

							<Text className="text-[15px] font-semibold text-[#1A1A1A] mb-[32px]">
								Equipo Echo
							</Text>
						</Section>

						<Hr className="border-solid border-[#E5E5E5] my-[24px]" />

						<Section className="text-center">
							<Text className="text-[12px] text-[#A1A1AA] m-0">
								© {currentYear} Echo. Todos los derechos reservados.
							</Text>
							<Text className="text-[12px] text-[#A1A1AA] mt-[8px] m-0">
								<Link href="https://waitlist.echo.builders" className="text-[#A1A1AA]">
									waitlist.echo.builders
								</Link>
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default WaitlistEmail;
