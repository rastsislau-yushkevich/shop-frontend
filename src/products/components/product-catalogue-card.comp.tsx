import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { FC } from "react"
import { ProductCardProps } from "../types/product-card.types"

const ProductCatalogueCard: FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <Grid item xs={12} md={3} sm={6}>
      <Card
        sx={{height: '100%'}}
      >
        <CardMedia
          component='img'
          image={image}
          alt={name}
          title={name}
          sx={{ height: '300px' }}
        />
        <CardContent
          sx={{paddingBottom: 0}}
        >
          <Typography
            align='center'
            variant='h5'
            component='h3'
            sx={{marginBottom: '5px'}}
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
          sx={{display: 'flex', justifyContent: 'center', padding: '16px'}}
          >
          <Button variant='outlined' color='secondary' size='small' sx={{ textAlign: 'center' }}>
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ProductCatalogueCard