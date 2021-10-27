import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardClima () {
 
  return (
    <Card sx={{ 
        width: 800, 
        minWidth: 400, 
        mb: '10px', 
        backgroundColor: '#474b6f', 
        color: '#fff',
        borderRadius: '0px',
        border: 'none',
        borderLeft: '1px solid #fff'      
      }}>
      <CardContent>
        <Typography gutterBottom 
          variant="h6" 
          component="div"
          textAlign="justify"
          lineHeight="25px"
          >
          TIEMPO
        </Typography>
       
      </CardContent>
    </Card>
  );
}
