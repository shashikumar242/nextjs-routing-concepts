
import { Metadata } from "next"

type Props = {
    params : Promise<{productId: string}>;
}

// DYNAMIC META DATA    


export const generateMetadata = async ({params}:Props) :Promise<Metadata> =>{

    const id  = (await params).productId;
return {
     title :  `Product ${id}`
}
}







export default async function ProductDetails({params}:Props){
    const productId =  (await params).productId
    return(
        <h1>Product Details Page{productId}</h1>
    )
}