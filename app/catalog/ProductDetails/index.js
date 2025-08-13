
import Image from 'next/image';
import styles from './productDetails.module.css';
import Link from 'next/link';
import BuyButton from './buyButton';

export default function ProductDetails({ product }) {
	return (<div className={styles.product}>
		<Link href={`/catalog/product-info/${product._id}`}>
			<Image
				src={`/images/albums/${product.imageName}`}
				width={325}
				height={325}
				alt={product.title}
			/>
			<div>{product.title}</div>
			<div>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}</div>
		</Link>
		<BuyButton product={product}></BuyButton>
	</div>);
}