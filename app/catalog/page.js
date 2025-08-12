import styles from './catalog.module.css';
import products from './products.json';
import Image from 'next/image';

export default function Catalog() {

	function renderProductDetails(product) {
		return <div className={styles.product}>
			<Image
				src={`/images/albums/${product.imageName}`}
				width={325}
				height={325}
				alt={product.title}
			/>
			<div>{product.title}</div>
			<div>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}</div>
		</div>;
	}

	return (
		<div>
			<ul className={styles.products}>
				{products.map((product, index) => (
					<li key={index} >
						{renderProductDetails(product)}
					</li>
				))}
			</ul>

		</div>
	)
}