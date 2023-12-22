import { FC } from "react";
import { Grid } from "@mui/material";
import ProductCatalogueCard from "./components/product-catalogue-card.comp";
import { useGetProductsQuery } from "./store/productsApi.slice";
import { ProductDto } from "./types/product.dto";

const ProductsList: FC = () => {
  const { data, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>
  }
  const products: ProductDto[] | undefined = data;

  return (
    <Grid
      container
      spacing={4}
      sx={{ padding: '20px' }}
    >
      {products?.map(({ id, name, price, image, quantityAvailable }) => (
        <ProductCatalogueCard
          key={id}
          id={id}
          name={name}
          price={price}
          image={image}
          quantityAvailable={quantityAvailable}
        />
      ))}
    </Grid>
  )
}

export default ProductsList