import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../../services/api/httprequest";
import { Helmet } from "react-helmet";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const DetailsPage = () => {
  const { id } = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const findedData = await getById(id);
      setData(findedData);
    }
    fetchData();
  }, [id]);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Meal Detail</title>
        <link
          rel="icon"
          href="https://www.freeiconspng.com/thumbs/details-icon/details-icon-png-cc-by-3-0--it-1.png"
        />
      </Helmet>
      <div
        style={{
          margin: "40px auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {data && (
          <>
            <h1 >{data.name}</h1>
            <p>Description: {data.description} </p>
            <p >Price: $ {data.price}</p>
          </>
        )}
      </div>
      <p style={{textAlign: "center", fontWeight: 700}}>Note: Muellim shekli falan yoxdu max bu qeder UI oldu ona gore amma mence esas olan logicdi onuda elemishem <SentimentSatisfiedAltIcon/> </p>
    </>
  );
};
export default DetailsPage;