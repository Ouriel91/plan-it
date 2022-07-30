import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import React,{useState} from "react";
import Table from "../../components/table/Table";
import Weather from "../../components/Weather/Weather";
import Datatable from "../../components/datatable/Datatable";
import ItemList from "../../components/ItemList/ItemList"
import Example from "../../components/ItemList/TableList";
import ImgUploader from "../../components/ImgUploader/ImgUploader,";

const Home = () => {
  const [file, setFile] = useState();
    // function handleChange(e) {
    //     console.log(e.target.files);
    //     setFile(URL.createObjectURL(e.target.files[0]));
  return (
    <div className="home">
      {/* <Sidebar /> */}
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          {/* <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" /> */}
        </div>
        <div className="charts">
          <Featured />
          <div><h1>Dates: 10/10/2010 </h1></div>
          <Weather/>
          <ImgUploader/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Event List</div>
          <Example/>
          {/* <Table /> */}
          <Datatable/>
      
          
          
        </div>
      </div>
    </div>
  );
};

export default Home;
