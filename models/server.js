const express = require('express')
const cors = require('cors');

class Server{

    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.usuariosPath ='/api/usuarios';
        

        //Middelwares
        this.midelwares();        
        
        //Rutas de la aplicacion
        this.routes();
        
    }


    midelwares(){
        //cors Origin
        this.app.use(cors());
        
        //lectura y parseo del Body
        this.app.use( express.json() );

        //directorio publico
        this.app.use(express.static('public'));


    }

    routes(){

        this.app.use( this.usuariosPath , require('../routes/usuarios'))



    }
    
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor corriendo en el puerto: ${this.port}`)
        })

    }
}


module.exports= Server;