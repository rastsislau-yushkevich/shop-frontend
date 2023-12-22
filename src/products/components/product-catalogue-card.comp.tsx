import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Grid, Typography } from "@mui/material"
import { FC, useState } from "react"
import { ProductDto } from "products/types/product.dto";
import { useAddToOrderMutation } from "cart/store/ordersApi.slice";

const ProductCatalogueCard: FC<Partial<ProductDto>> = ({ id, name, price, image, quantityAvailable }) => {

  const [quantity, setQuantity] = useState(1);
  const [addToCart] = useAddToOrderMutation();

  const handleAddToCart = async () => {
    await addToCart({productId: id, quantity});
  }

  return (
    <Grid item xs={12} md={3} sm={6}>
      <Card
        sx={{ height: '100%' }}
      >
        <CardMedia
          component='img'
          image={image}
          alt={name}
          title={name}
          sx={{ height: '300px' }}
        />
        <CardContent
          sx={{ paddingBottom: 0 }}
        >
          <Typography
            align='center'
            variant='h5'
            component='h3'
            sx={{ marginBottom: '5px' }}
          >
            {name}
          </Typography>
          <Typography
            align='center'
            variant='body1'
            component='h4'
          >
            $ {price}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '10px',
            padding: '16px'
          }}
        >

          <Box
            sx={{
              display: 'flex',
              gap: '10px'
            }}
          >
            <Button
              variant='outlined'
              color='secondary'
              size='small'
              sx={{ textAlign: 'center' }}
              disabled={quantity === 1}
              onClick={() => setQuantity(quantity - 1)}
            >
              -
            </Button>
            <Chip
              sx={{ textAlign: 'center' }}
              label={quantity}
            />
            <Button
              variant='outlined'
              color='secondary'
              size='small'
              sx={{ textAlign: 'center' }}
              disabled={quantity === quantityAvailable}
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>

          </Box>

          <Button
            variant='outlined'
            color='secondary'
            size='small'
            sx={{ textAlign: 'center' }}
            onClick={handleAddToCart}
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ProductCatalogueCard