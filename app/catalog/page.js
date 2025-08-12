import styles from './catalog.module.css';
import products from './products.json';
import ProductDetails from './ProductDetails';

export default function Catalog() {

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