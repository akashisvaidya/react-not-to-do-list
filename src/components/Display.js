import React from "react";
import { Badlist } from "./Badlist";
import { GoodList } from "./GoodList";

export const Display = () => {
  return (
    <div>
      <div className="row mt-5 g-2">
        <GoodList />
        <Badlist />
      </div>
    </div>
  );
};
