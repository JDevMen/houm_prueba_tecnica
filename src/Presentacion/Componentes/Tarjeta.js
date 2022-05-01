import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Tarjeta = () => {
  const [character, setCharacter] = React.useState({});

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}\\jsonFiles\\CharacterTestJson.json`)
      .then((r) => r.json())
      .then((data) => {
        setCharacter(data.results[0]);
      });
  }, []);

  return (
    <div className="tarjeta">
      <Card sx={{ maxHeight: 300 }}>
        <CardMedia
          component="img"
          height="140"
          image={
            process.env.PUBLIC_URL + "Imagenes/standard_large_img_test.jpg"
          }
          alt="test image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {character.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Tarjeta;
