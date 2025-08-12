
import SiteHeader from "@/components/siteHeader";
import "./globals.css";



export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<SiteHeader />
				{children}
			</body>
		</html>
	);
}
