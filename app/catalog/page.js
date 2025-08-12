import styles from './catalog.module.css';
//import products from './products.json';
import { promises as fs } from 'fs';
import path from 'path';
import ProductDetails from './ProductDetails';

export default async function Catalog() {
	//Simulating a slow page
	await new Promise((resolve) => setTimeout(resolve, 500));

	const filePath = path.join(process.cwd(), 'app/catalog/products.json')
	const fileContents = await fs.readFile(filePath, 'utf8')
	const products = JSON.parse(fileContents)

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