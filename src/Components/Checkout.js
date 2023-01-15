import React, {useContext, useState} from "react";
import TextField  from "@mui/material/TextField";
import { Button, Typography, Card } from "@mui/material";
import { CartContext } from "./Context/CartContext";
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";

const Checkout = () =>{
    const {cart, clear, subTotal, cartTotal} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const[inputs, setInputs] = useState({
        name:"",
        email:"",
        password:"",
        telefono:""
    });
    const handleChange = (e) =>{
       setInputs((prevState)=>({
        ...prevState,
       [e.target.name] : e.target.value
       }))
    }
       const handleSubmit = (e) =>  {
        e.preventDefault();
        console.log(inputs);
       }
       const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer: {name:nombre, email:email, phone:telefono},
            items: cart.map(item => ({id:item.id, title:item.nombre, price:item.precio, cant:item.cant, price_total:item.cant * item.precio})),
            date: `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
            total: subTotal(),
            quantity: cartTotal()
        };

         
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            clear();
        });
    }
 
return(
<div>
    <form style={{ display:"flex", flexDirection: "column" }}
    onSubmit={handleSubmit}>
    <TextField 
    name="name"
    value={inputs.name} 
    onChange={handleChange}
    type={"name"}
     sx={{margin:3}}placeholder="name" variant="outlined"  onInput={(e) => {setNombre(e.target.value)}} />
    <TextField 
    name="email"
    value={inputs.email}
    onChange={handleChange}
    type={"email"}
    sx={{margin:3}}placeholder="Email" variant="standard" onInput={(e) => {setEmail(e.target.value)}} />
    <TextField 
    name="telefono"
    value={inputs.telefono}
    onChange={handleChange}
    type={"telefono"}
    sx={{margin:3}}placeholder="telefono" variant="filled" onInput={(e) => {setTelefono(e.target.value)}} />
 <Button onClick={generarOrden}>Generar Orden</Button>
 </form>
            {cart.map(item =>(
                <Card key={item.id}>
                    <Typography variant="h5">
                    {item.nombre}
                    {item.cant}
                ${item.cant * item.precio}
                    </Typography>
                </Card>
            ))}
               <h3>Total a Pagar</h3>
               <h3>${subTotal()}</h3>

{orderId ? <Card>
    <h1>Felicitaciones por su compra!</h1>
    <p>Su numero de gestion es {orderId}</p>
</Card> : " "}


</div>
)
}

export default Checkout;