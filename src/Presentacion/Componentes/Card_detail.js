import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  Typography,
} from "@mui/material";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const DetalleTarjeta = (props) => {
  const { onClose, open, character } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} TransitionComponent={Transition}>
      <DialogTitle>{character.name}</DialogTitle>
      <DialogContent>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <img
              src={`${character.thumbnail.path}/landscape_amazing.${character.thumbnail.extension}`}
              alt="imagenDetalleTarjeta"
              style={{ maxWidth: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom variant="body1" component="div">
              <b> # of comics</b> {character.comics.available}
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
              <b> # series</b> {character.series.available}
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
              <b> # of stories appearances</b> {character.stories.available}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="body1" component="div">
              {character.description}
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default DetalleTarjeta;
