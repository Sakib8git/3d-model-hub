import React from "react";
import Banner from "../../Components/Banner";
import { useLoaderData } from "react-router";
import { ModelCard } from "../../Components/ModelCard";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner></Banner>

      <div>
        <h3 className="text-4xl font-bold">Latest Models</h3>
        <div className="grid grid-cols-3 lg:grid-cols-3 gap-3">
          {data.map((model) => (
            <ModelCard model={model}></ModelCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
