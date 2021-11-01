import { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material/';
import { useHistory } from 'react-router-dom'
import MaterialTable from 'material-table';

export interface IData {
    id?: number,
    city?: string,
    info?: string
}

export default function Historial() {

    const history = useHistory()
    const [data, setData] = useState<IData[]>([])
     
    const columnas = [
        {
            title: 'ID', 
            field: 'id',  
        },
        {
            title: 'Ciudad', 
            field: 'city',
        },
        {
            title: 'Información', 
            field: 'info',
        }
    ]

    const getHistorial = async() => {
        try {
            const URL = "https://localhost:5001/api/Historial"
            const res = await fetch(URL)

            if(res.ok) {
                const data = await res.json()
                if(data !== null) {
                    data.forEach((item : any) => {
                       let myData : IData = {
                           id: item.id,
                           city: item.city,
                           info: item.info
                       }
                       setData((listHistorial) => [...listHistorial, myData])
                   })       
                }
            }
        } catch (err) {
            console.log("Error", err);
        }
    }

    useEffect(() => {       
        getHistorial()
    }, [])

    const buscarNoticias = (city : string) => {
        history.push(`/noticias/${city}`)
    }

    const deleteHistorial = (id : number) => {
                
        try {
            const URL = `https://localhost:5001/api/Historial/${id}`
            fetch(URL, {
                method: "DELETE",
                body: JSON.stringify({
                    id: id,
                }),
                headers: {
                    "Accept" : "application/json",
                    "Content-Type" : "application/json"
                }
            })        
        } catch (error) {
            console.log("Error en la eliminación de datos", error);      
        }
    }

    return (
        <Container sx = {{
            marginTop: '50px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>

            <Typography gutterBottom
                variant="h4" 
                component="div"
                textAlign="justify"
                sx = {{
                    color: "#fff",
                }}                
                >
                Historial
            </Typography>
 
            <MaterialTable
                columns={columnas}
                data={data}
                title="Historial de búsqueda"
                actions={[
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar entrada',
                        onClick: (event, rowData : any) => deleteHistorial(rowData.id)
                    },
                    {
                        icon: 'search',
                        tooltip: 'Buscar noticias',
                        onClick: (event, rowData : any) => buscarNoticias(rowData.city)
                    }
                ]}
                options={{
                    actionsColumnIndex: -1,
                    //selection: true
                }}
                localization={{
                    header: {
                        actions: 'Acciones'
                    }
                }}
                />
  
        </Container>
    )
}