import styles from './catalog.module.css';
//import products from './products.json';
import { GetProducts } from './actions';
import ProductDetails from './ProductDetails';

export const revalidate = 30;

export default async function Catalog() {
	//Simulating a slow page to show loading functionality
	await new Promise((resolve) => setTimeout(resolve, 150));

	const products = await GetProducts();

	return (
		<div>
			<ul className={styles.products}>
				{products.map((product, index) => (
					<li key={index} >
						<ProductDetails product={product} />
					</li>
				))}
			</ul>

		</div>
	)
}