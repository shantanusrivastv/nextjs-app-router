export default async function  ProductInfo({params}){
	let { id } = await params
	return(
		<h2>Product Info Page for id {id}</h2>
	)
}