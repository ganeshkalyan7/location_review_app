import React from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
function CitiDetails() {
  const { id } = useParams();
  const [searchparams, setsearchparams] = useSearchParams();
  const lat = searchparams.get("lat");
  const lng = searchparams.get("lng");
  const navigate = useNavigate();
  console.log(id);
  return (
    <div>
      <h1>City List : {id}</h1>
      <h1>{lat}</h1>
      <h1>{lng}</h1>

      <button onClick={() => setsearchparams({ lat: 100, lng: 300 })}>
        reset
      </button>

      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
}

export default CitiDetails;
