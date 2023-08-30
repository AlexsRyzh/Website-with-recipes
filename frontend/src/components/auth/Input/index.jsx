import { Box, InputBase, Typography } from "@mui/material";
import { forwardRef } from "react";
import styles from "./styles.module.scss";


const Input = forwardRef(({ label = null, error = false, helperText = '', ...props }, ref) => {
  return (
    <Box className={styles["container"]}>
      {label && (
        <Typography className={styles["label"]} component={"p"}>
          {label}
        </Typography>
      )}
      <InputBase
        className={styles["input"]}
        ref={ref}
        {...props}
      />
      {error &&
        <Typography className={styles["error"]} component={"p"}>
          {helperText}
        </Typography>
      }

    </Box>
  );
})

export default Input
