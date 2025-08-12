import styles from './catalog.module.css';
import products from './products.json';
import ProductDetails from './ProductDetails';

export default async function Catalog() {

	//Simulating a slow page
	await new Promise((resolve) => setTimeout(resolve, 3000));

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