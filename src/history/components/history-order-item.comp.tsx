import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { HistoryOrderItemProps } from "history/types/history-order-item.type";

const HistoryOrderItem = ({ orderItem }: HistoryOrderItemProps) => {
  const { product, quantity } = orderItem;
  return (
    <Card sx={{ maxWidth: 150 }}>
      <CardMedia
        sx={{ height: 100 }}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Quantity: {quantity}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default HistoryOrderItem