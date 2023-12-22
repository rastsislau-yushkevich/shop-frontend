import { List, ListItem, Typography } from "@mui/material";
import { HistoryItemProps } from "history/types/history-item.type"
import HistoryOrderItem from "./history-order-item.comp";
import { FC } from "react";

const HistoryItem: FC<HistoryItemProps> = ({ order }) => {
  const { total, status, orderItems } = order;

  return (
    <ListItem divider sx={{ flexDirection: 'column' }}>
      <Typography variant='h6'>
        {status}
      </Typography>
      <List sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        {orderItems?.map((item) => <HistoryOrderItem key={item.id} orderItem={item} />)}
      </List>
      <Typography variant='h6'>
        {total.toFixed(2)}$
      </Typography>
    </ListItem>
  )
}

export default HistoryItem