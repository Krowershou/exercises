import express from "express"

const app= express();
const port = 3000;

app.get ('/', (req , res )=> {
    res.send ('Hola soy mi primera ruta de express')
} );


app.listen ( port, () => {
    return console.log(`Este es el pueto ${port}`);
});




