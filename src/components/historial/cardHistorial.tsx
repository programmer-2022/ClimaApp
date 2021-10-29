import {Card, CardContent, Typography } from '@mui/material/';

export default function CardHistorial (props : any) {
 
  return (
    <Card sx = {{ 
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
          Ciudad: {props.city}
        </Typography>

        <Typography variant="body2" textAlign="justify">
          Información:{props.info}
        </Typography>

        <Typography variant="body2" marginTop="20px">
          <strong>ID:</strong>{props.id}
        </Typography>

      </CardContent>
    </Card>
  );
}
