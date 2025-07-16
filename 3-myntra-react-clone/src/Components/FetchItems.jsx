import { useEffect } from 'react'
import { useSelector,useDispatch } from "react-redux";
import { itemsActions } from '../store/ItemSlice';
import { fetchStatusSliceActions } from '../store/fetchstatusSlice';
export default function FetchItems() {
  const fetchStatusSlice = useSelector((store) => store.fetchStatusSlice);
const dispatch=useDispatch();
// console.log(fetchStatusSlice);
useEffect(()=>{
  if(fetchStatusSlice.fetchDone) return;

  const controller=new AbortController();
  const signal=controller.signal;
dispatch(fetchStatusSliceActions.MarkFetchingStarted());
  fetch("http://localhost:8080/items",{signal})      //Server
  .then((res)=>res.json())
  .then(({items})=>{
dispatch(fetchStatusSliceActions.MarkFetchDone());
dispatch(fetchStatusSliceActions.MarkFetchingFinished());
    dispatch(itemsActions.addInitialItem(items[0]));
// console.log("Item fetched",items)
  });
  return()=>{
  // console.log('cleaning up useeffect');
  controller.abort();
};
},[fetchStatusSlice]);



  return (
   <></>
  )
}
