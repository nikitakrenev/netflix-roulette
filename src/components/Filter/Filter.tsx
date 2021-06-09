import React from "react";
import { FilterItem } from "./styles";
import MoviesContext from "../../contexts/movies/MoviesContext";

export const Filter: React.FC = () => {
  const [picked, setPicked] = React.useState<number>(0);
  const { filters, filterMovies } = React.useContext(MoviesContext);

  const setFilter = (item: string, index: number) => {
      setPicked(index);
      filterMovies(item);
  }

  return (
    <React.Fragment>
      <ul>
        {filters.map((item, index) => (
          <FilterItem
            key={item}
            border={picked === index}
            onClick={() => setFilter(item, index)}
          >
            {item}
          </FilterItem>
        ))}
      </ul>
    </React.Fragment>
  );
};
