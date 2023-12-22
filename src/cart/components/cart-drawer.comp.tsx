import { Button, Drawer, List, ListItem, Typography } from "@mui/material"
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux";
import { selectIsCartOpen } from "cart/store/cart.selectors";
import { toggleOpen } from "cart/store/cart.slice";
import { selectCurrentUser } from "auth/store/auth.selectors";
import { Link } from "react-router-dom";
import { useGetCartQuery } from "cart/store/ordersApi.slice";
import CartProduct from "./cart-product.comp";

const CartDrawer: FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsCartOpen);
  const user = useSelector(selectCurrentUser);
  // const { data, isLoading } = useGetCartQuery();

  const toggleDrawer = () => {
    dispatch(toggleOpen())
  }

  return (
    <Drawer
      open={isOpen}
      anchor='right'
      onClose={() => toggleDrawer()}
    >
      <List sx={{
        width: '250px'
      }}>
        {/* {isLoading ? <div>Loading</div>
          : orderItems.length > 0 ? 
          orderItems.map(({ productId, quantity }: any) =>
            <CartProduct
              key={productId}
              product={productId}
              quantity={quantity}
            />
          ) :
            <ListItem>Your cart is empty</ListItem>} */}
      </List>
      {user && undefined ? <Button>Submit Order</Button> : <Link to='/sign-in'>Sign In</Link>}
    </Drawer>
  )
}

export default CartDrawer