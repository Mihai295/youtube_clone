import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const selectedCategory = "New";

const Sidebar = () => (
  <Stack
    direction="row"
    sx={{
      overflow: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        class="category-btn"
        style={{
          background: category.name === selectedCategory && "#FC1503",
          color: "white",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);
// Timestamp: 42:43

export default Sidebar;
