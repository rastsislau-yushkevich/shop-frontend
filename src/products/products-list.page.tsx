import React, { FC } from "react";
import { Product } from "store/types/product-dto.type";
import { Grid } from "@mui/material";
import ProductCatalogueCard from "./components/product-catalogue-card.comp";

const products: Product[] = [
  {
    id: 1,
    name: 'Casino',
    price: '3.21',
    image: 'https://upload.wikimedia.org/wikipedia/ru/c/cf/Casino_%28%D0%9A%D0%B0%D0%B7%D0%B8%D0%BD%D0%BE%29.jpg',
  },
  {
    id: 2,
    name: 'Legend',
    price: '3.21',
    image: 'https://m.media-amazon.com/images/M/MV5BMjE0MjkyODQ3NF5BMl5BanBnXkFtZTgwNDM1OTk1NjE@._V1_.jpg',
  },
  {
    id: 3,
    name: 'Casino',
    price: '3.21',
    image: 'https://upload.wikimedia.org/wikipedia/ru/c/cf/Casino_%28%D0%9A%D0%B0%D0%B7%D0%B8%D0%BD%D0%BE%29.jpg',
  },
  {
    id: 4,
    name: 'Legend',
    price: '3.21',
    image: 'https://m.media-amazon.com/images/M/MV5BMjE0MjkyODQ3NF5BMl5BanBnXkFtZTgwNDM1OTk1NjE@._V1_.jpg',
  }, 
  {
    id: 5,
    name: 'Casino',
    price: '3.21',
    image: 'https://upload.wikimedia.org/wikipedia/ru/c/cf/Casino_%28%D0%9A%D0%B0%D0%B7%D0%B8%D0%BD%D0%BE%29.jpg',
  },
  {
    id: 6,
    name: 'Legend',
    price: '3.21',
    image: 'https://m.media-amazon.com/images/M/MV5BMjE0MjkyODQ3NF5BMl5BanBnXkFtZTgwNDM1OTk1NjE@._V1_.jpg',
  },
  {
    id: 7,
    name: 'Casino',
    price: '3.21',
    image: 'https://upload.wikimedia.org/wikipedia/ru/c/cf/Casino_%28%D0%9A%D0%B0%D0%B7%D0%B8%D0%BD%D0%BE%29.jpg',
  },
  {
    id: 8,
    name: 'Legend',
    price: '3.21',
    image: 'https://m.media-amazon.com/images/M/MV5BMjE0MjkyODQ3NF5BMl5BanBnXkFtZTgwNDM1OTk1NjE@._V1_.jpg',
  }
]

const ProductsList: FC = () => {
  return (
    <Grid 
      container 
      spacing={4}
      sx={{padding: '20px'}}
      >
      {products.map(({ id, name, price, image }) => (
        <ProductCatalogueCard 
          key={id} 
          name={name} 
          price={price} 
          image={image} 
          />
      ))}
    </Grid>
  )
}

export default ProductsList