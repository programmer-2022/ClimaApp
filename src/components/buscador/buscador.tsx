import {  useState } from 'react';
import { useHistory } from 'react-router-dom'
import {Paper, InputBase, IconButton, Container} from '@mui/material/';
import SearchIcon from '@mui/icons-material/Search';
import Swal from 'sweetalert2'

const initialForm = {
  ciudad: ""
}

export default function Buscador() {

  const [form, setForm] = useState(initialForm)
  const history = useHistory()
  
  const handleOnChange= (e : any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = (e : any) => {
    e.preventDefault()
    e.stopPropagation()

    if(form.ciudad === '') {
      Swal.fire({
          title: 'Error!',
          text: 'Ingrese una Ciudad ej:(London)',
          icon: 'error',
          confirmButtonText: 'Ok'
      })
      return
    }
    
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Se almacenó correctamente ${form.ciudad}`,
      showConfirmButton: false,
      timer: 1500
    })

    saveRecordDB()
    history.push(`/noticias/${form.ciudad}`);
  }

  const saveRecordDB = () => {
    
    try {
      const URL = "https://localhost:5001/api/Historial"
      fetch(URL, {
        method: "POST",
        body: JSON.stringify({
          city: form.ciudad,
          info: "info"
        }),
        headers: {
          "Accept" : "application/json",
          "Content-Type" : "application/json"
        }
      }).then(res => {
        if(res.ok) {
          console.log(res);
        }
      })     
      
    } catch (error) {
      console.log("Error en la inserción de datos", error);      
    }
  }

  return (
    <Container  sx={{ pt: '300px' }}>
      <Paper
      onSubmit={handleOnSubmit}
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 1000 }}
    >
    
      <InputBase
        sx={{ ml: 1, flex: 1, p: '10px' }}
        name="ciudad"
        placeholder="Ingresa Ubicación ej:(London)"
        autoComplete="off"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={handleOnChange}
        defaultValue={form.ciudad}
      />
      
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
           
    </Paper>
    </Container> 
  );
}