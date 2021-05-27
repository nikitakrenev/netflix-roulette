import React from "react";
import { FilterItem } from "./styles";

export const Filter: React.FC = () => {
  const [picked, setPicked] = React.useState<number>(0);
  const genres: string[] = ["All", "Documentary", "Comedy", "Horror", "Crime"];

  return (
    <React.Fragment>
      <ul>
        {genres.map((item, index) => (
          <FilterItem
            key={item}
            border={picked === index ? "3px solid #f65261" : ""}
            onClick={() => setPicked(index)}
          >
            {item}
          </FilterItem>
        ))}
      </ul>
    </React.Fragment>
  );
};
