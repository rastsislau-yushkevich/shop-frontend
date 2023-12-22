import { useDeleteOrderMutation, useGetCartQuery, useSubmitOrderMutation } from "cart/store/ordersApi.slice"
import CartProduct from "./cart-product.comp";
import { Box, Button, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CartProductsList = () => {
  const { data, isLoading } = useGetCartQuery();
  const [deleteOrder] = useDeleteOrderMutation();
  const [submitOrder] = useSubmitOrderMutation();

  const navigate = useNavigate();
  if (isLoading) {
    return <div>Loading...</div>
  }

  const handleSubmitOrder = async () => {
    await submitOrder();
    navigate('/products');
  }

  const handleDeleteOrder = async () => {
    await deleteOrder();
    navigate('/products');
  }

  return (
    <List>
      {data?.orderItems?.length > 0 ?
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px'
        }}>
          {data?.orderItems?.map((item: any) =>
            <CartProduct
              key={item.id}
              orderId={item.id}
              product={item.product}
              quantity={item.quantity}
            />)}
          <Typography variant='h5'>Total: {data?.total.toFixed(2)} $</Typography>
          <Box sx={{
            display: 'flex',
            gap: '10px'
          }}>
            <Button
              onClick={handleSubmitOrder}
              size='large'
              variant='outlined'
              color='success'
            >
              Submit Order
            </Button>
            <Button
              onClick={handleDeleteOrder}
              size='large'
              variant='outlined'
              color='error'
            >
              Delete Order
            </Button>
          </Box>
        </Box>
        :
        <ListItem>
          <ListItemText
            primary='Your cart is empty'
          />
        </ListItem>
      }

    </List>
  )
}

export default CartProductsList