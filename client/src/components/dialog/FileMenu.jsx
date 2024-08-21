import { Menu } from "@mui/material";
import React from "react";

const FileMenu = ({ anchorE1 }) => {
  return (
    <Menu anchorEl={anchorE1} open={false}>
      <div
        style={{
          width: "10rem",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        aliquid, corporis adipisci omnis sed illum, minus explicabo blanditiis
        aut, labore earum amet atque repudiandae error dicta non? Iste, aperiam
        nisi!
      </div>
    </Menu>
  );
};

export default FileMenu;
