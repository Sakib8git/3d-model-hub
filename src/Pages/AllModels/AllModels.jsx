import React from "react";
import { useLoaderData } from "react-router";
import { ModelCard } from "../../Components/ModelCard";

const AllModels = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h1 className="text-3xl py-5">AllModels</h1>

      <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
        {data.map((model) => (
          <ModelCard key={model._id} model={model}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default AllModels;
