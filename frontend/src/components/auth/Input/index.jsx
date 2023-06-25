import { Box, InputBase, Typography } from "@mui/material";
import styles from "./styles.module.scss";

export default function Input({ label = null, ...props }) {
  return (
    <Box className={styles["container"]}>
      {label && (
        <Typography className={styles["label"]} component={"p"}>
          {label}
        </Typography>
      )}
      <InputBase
        size="small"
        autoComplete="false"
        className={styles["input"]}
        {...props}
      />
    </Box>
  );
}
