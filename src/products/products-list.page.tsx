import { FC, useState } from "react";
import { Container, Grid, Pagination } from "@mui/material";
import ProductCatalogueCard from "./components/product-catalogue-card.comp";
import { useGetProductsQuery } from "./store/productsApi.slice";
import { ProductDto } from "./types/product.dto";

const ProductsList: FC = () => {
  const [page, setPage] = useState(1)
  const { data, isLoading } = useGetProductsQuery({ page, perPage: 8 });

  if (isLoading) {
    return <div>Loading...</div>
  }
  const products: ProductDto[] | undefined = data;

  const handlePageChange = (event: any, value: number) => {
    setPage(value)
  }

  return (
    <Container
      sx={{
        paddingBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
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
      <Pagination page={page} onChange={handlePageChange} count={2} />
    </Container>
  )
}

export default ProductsList