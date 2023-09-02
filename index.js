//REGISTRADOR DE TICKETS DE EVENTOS

class ticketManager {
    #precioBaseDeGanancia = 2;
    constructor() {
        this.eventos = []
    }
    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = newDate()) {
        const evento = {
            id: this.#generarIdEvento,
                nombre,
                lugar,
                precio: precio + this.#precioBaseDeGanancia,
                capacidad,
                fecha,
                participantes: []
    }
}

agrearUsuario(idEvento,idUsuario){
    const evento=this.#buscarEvento(idEvento)
if(!eventos){
    return 'Evento inexistente'
}
if(evento.participantes.includes(idUsuario)){
    return'Usuario ya registgrado en el evento'
}
evento.participantes.push(idUsuario)
}

ponerEventoEnGira (idEvento, nuevoLugar,nuevaFecha){
    const evento= this.#buscarEvento(idEvento)
    if(!eventos){
        return 'Evento inexistente'
    }
    const nuevoEvento ={
        ...evento, 
        lugar: nuevoEvento,
        fecha: nuevaFecha,
        participantes: [],
        id: this.#generarIdEvento()
    }  
    this.eventos.push(nuevoEvento)
}



//variables pribadas
#buscarEvento(idEvento){
    return this.eventos.find(e=>e.id===idEvento)
}

#generarIdEvento (){
    return this.eventos.length 
    ? this.eventos[this.eventos.length-1].id+1:1
}
}

