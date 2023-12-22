import { Avatar, Box, Button, Chip, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { FC, useCallback, useEffect, useState } from "react"
import { useAddToOrderMutation, useRemoveFromCartMutation } from "cart/store/ordersApi.slice";
import { CartProductProps } from "cart/types/cart.types";

const CartProduct: FC<CartProductProps> = ({ orderId, product, quantity }: CartProductProps) => {
  const { id, name, image, price, quantityAvailable } = product;
  const [newQuantity, setNewQuantity] = useState(quantity);
  const [addToOrder] = useAddToOrderMutation();
  const [removeFromOrder] = useRemoveFromCartMutation();

  const add = useCallback(() => {
    addToOrder({productId: id, quantity: newQuantity});
  }, [addToOrder, id, newQuantity])

  useEffect(() => {
    add()
  }, [add])

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