import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import FetchItems from "../Components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../Components/LoadingSpinner";


function App() {
const fetchStatusSlice = useSelector((store) => store.fetchStatusSlice);
  return (
    <>
      <Header />
      <FetchItems/>
      {fetchStatusSlice.currentlyFetching?<LoadingSpinner/>:<Outlet/> }
      {/*  <Outlet/>  in case of Home it is home else bag */}
      <Footer/>
    </>
  );
}

export default App;
