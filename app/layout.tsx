import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { lexend } from "@/config/fonts";
import { Providers } from "./providers";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react"
import InfoSidebar from "@/components/InfoSidebar";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";




export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
				/>
			</head>
			<body
				className={cn(
					"min-h-screen   bg-[#FFFF] lexend",
					lexend.className
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="max-h-screen h-screen overflow-x-hidden flex flex-col gap-4 py-8 pl-6 justify-between bg-[#F2F4F7]">
						<div className="h-[10vh]">
							<Logo />
						</div>
						<div className="h-[80vh]">
							{children}
						</div>
						<div className="h-[10vh] flex items-center  sticky bottom-0 z-50">
							<Navbar />
						</div>
						<div className="hidden lg:inline-block h-full  absolute top-0 right-0 z-50">
							<InfoSidebar />
						</div>
					</div>
					<Analytics />
				</Providers>
			</body>
		</html>
	);
}
