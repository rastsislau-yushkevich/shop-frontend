import { Avatar, Box, Button, Chip, Divider, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { FC, useEffect, useState } from "react"
import { ProductDto } from "products/types/product.dto";
import { useAddToOrderMutation, useGetCartQuery, useRemoveFromCartMutation } from "cart/store/ordersApi.slice";

const CartProduct: FC<{ orderId: string, product: ProductDto, quantity: number }> = ({ orderId, product, quantity }) => {
  const { id, name, image, price, quantityAvailable } = product;
  const [newQuantity, setNewQuantity] = useState(quantity);
  const [addToOrder] = useAddToOrderMutation();
  const [removeFromOrder] = useRemoveFromCartMutation();

  const add = async () => {
    await addToOrder({productId: id, quantity: newQuantity});
  }

  useEffect(() => {
    add()
  }, [newQuantity])

  return (
    <ListItem
    divider
    sx={{display: {sm: 'flex'}, flexDirection: {xs: 'column', md: 'row'}}}>
      <ListItemAvatar>
        <Avatar src={image} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <>
            <Typography
              component="span"
              variant="body2"
              color="text.primary"
              sx={{ marginRight: '10px' }}
            >
              Price: {(price * newQuantity).toFixed(2)}
            </Typography>
            <Typography
              component="span"
              variant="body2"
              color="text.primary"
            >
              Quantity: {newQuantity}
            </Typography>
          </>
        }
      ></ListItemText>
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
          disabled={newQuantity < 2}
          onClick={() => setNewQuantity(newQuantity-1)}
        >
          -
        </Button>
        <Chip
          sx={{ textAlign: 'center' }}
          label={newQuantity}
        />
        <Button
          variant='outlined'
          color='secondary'
          size='small'
          sx={{ textAlign: 'center' }}
          disabled={newQuantity === quantityAvailable}
          onClick={() => setNewQuantity(newQuantity+1)}
        >
          +
        </Button>
        <Button
          variant='outlined'
          color='secondary'
          size='small'
          sx={{ textAlign: 'center' }}
          disabled={newQuantity === quantityAvailable}
          onClick={() => removeFromOrder({id: orderId})}
        >
          x
        </Button>
      </Box>
    </ListItem>
  )
}

export default CartProduct