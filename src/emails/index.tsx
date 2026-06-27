import * as React from 'react';
import {
	Body,
	Button,
	Container,
	Head,
	Hr,
	Html,
	Link,
	Preview,
	Section,
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
					<Preview>Gracias por unirte a nuestra lista de espera. Te mantendremos al tanto.</Preview>
					<style>
						{`
              @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap');
            `}
					</style>
				</Head>
				<Body className="bg-[#F8F7F4] py-[40px]" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
					<Container className="bg-white rounded-[12px] mx-auto p-[32px] max-w-[600px]">
						<Section className="mt-[16px] text-center">
							<Text className="text-[28px] font-bold text-[#1A1A1A] m-0">
								Bienvenido a <span className="text-[#6B5CE7]">Echo</span>
							</Text>

							<Text className="text-[18px] text-[#71717A] mt-[16px] mb-[16px]">
								¡Estamos encantados de tenerte en nuestra lista de espera!
							</Text>

							<Hr className="border-solid border-[#E5E5E5] my-[16px] w-[80px] mx-auto" />
						</Section>

						<Section>
							<Text className="text-[16px] leading-[24px] text-[#1A1A1A] mt-[32px]">
								Hola {userFirstname},
							</Text>

							<Text className="text-[16px] leading-[24px] text-[#52525B]">
								Gracias por unirte a la lista de espera de Echo. Somos un equipo pequeño trabajando duro para crear la plataforma inteligente de feedback que los founders necesitan.
							</Text>

							<Text className="text-[16px] leading-[24px] text-[#52525B]">
								Te mantendremos personalmente al tanto de nuestro progreso y te avisaremos en el momento en que esté listo para ti. ¿Tienes preguntas o ideas? Simplemente responde a este email — leo cada mensaje y me encantaría saber de ti.
							</Text>

							<Section className="my-[32px] text-center">
								<Button
									className="bg-[#6B5CE7] text-white font-bold py-[12px] px-[24px] rounded-[12px] no-underline text-center box-border"
									href="https://echo-waitlist.vercel.app"
								>
									<span style={{ display: 'inline-flex', alignItems: 'center' }}>
										<svg
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											style={{ marginRight: '8px' }}
										>
											<title>Arrow</title>
											<path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
										Visitar Echo
									</span>
								</Button>
							</Section>

							<Text className="text-[16px] leading-[24px] text-[#52525B]">
								Síguenos para ver las últimas novedades y vistas previas tempranas.
							</Text>

							<Text className="text-[16px] leading-[24px] text-[#52525B] mt-[24px]">
								Saludos,
							</Text>

							<Text className="text-[16px] font-bold text-[#1A1A1A] mb-[32px]">
								Equipo Echo
							</Text>
						</Section>

						<Hr className="border-solid border-[#E5E5E5] my-[24px]" />

						<Section>
							<Text className="text-[12px] text-[#A1A1AA] text-center m-0">
								© {currentYear} Echo. Todos los derechos reservados.
							</Text>
							<Text className="text-[12px] text-[#A1A1AA] text-center mt-[16px]">
								<Link href="https://echo-waitlist.vercel.app/unsubscribe" className="text-[#6B5CE7]">
									Cancelar suscripción
								</Link>{' '}
								•{' '}
								<Link href="https://echo-waitlist.vercel.app/privacy" className="text-[#6B5CE7]">
									Política de privacidad
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
