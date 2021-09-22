import React from "react";
import Chip from "../Chip/Chip";

const Locations = ({ locations, onClick }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {locations.map((location) => (
        <Chip
          key={location.id}
          title={location.name}
          onClick={onClick.bind(null, location.url)}
        />
      ))}
    </div>
  );
};

export default Locations;
