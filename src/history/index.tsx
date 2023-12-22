import HistoryList from "./components/history-list.comp"
import { useGetHistoryQuery } from "./store/historyApi.slice"

const HistoryPage = () => {
  const {data, isLoading} = useGetHistoryQuery();

  if(isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Order History</h1>
      <HistoryList orders={data}/>
    </>
  )
}

export default HistoryPage