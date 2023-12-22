import { HistoryListProps } from "history/types/history-list.type"
import HistoryItem from "./history-item.comp"
import { List } from "@mui/material"
import { FC } from "react"

const HistoryList: FC<HistoryListProps> = ({ orders }) => {
  return (
    <List>
      {orders?.map((order) =>
        <HistoryItem key={order.id} order={order} />
      )}
    </List>
  )
}

export default HistoryList