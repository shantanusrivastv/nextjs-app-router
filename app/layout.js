import SiteHeader from "@/components/siteHeader";
import "./globals.css";
import ShoppingCartProvider from '@/context/shoppingCartContext';

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ShoppingCartProvider>
					<SiteHeader />
					{children}
				</ShoppingCartProvider>
			</body>
		</html>
	);
}
