import { useState } from "react";

const Formulario = ( {setAlert}) => {
const [nombre, setNombre] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");


const validarDatos =(e) => {
  e.preventDefault();
  if (password != confirmPassword) {
    setAlert({
      msg:"las contrasenas no coinciden!",
      color: "danger",
    });
    return;
  }

if(
  
nombre ==="" ||
email === "" ||
password === "" || 
confirmPassword === ""
) {

setAlert({
  msg: "Completa todos los campos!",
  color:"danger",
});
return;
}

setAlert({
  msg:"Cuenta creada exitosamente !",
  color: "success",
}); 
setNombre("");
setEmail("");
setPassword("");
setConfirmPassword("");

};


return (
 <>
 <form onSubmit={validarDatos}>
    <div className="formulario">
  
        <h4> O usa tu email para registrarte </h4>
        <input type="text" name="nombre" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="email"  name="email" placeholder="Tuemail@ejemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input type="password" name="password" placeholder=" Confirma tu contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <div className="mb-2">
        <button id="btn">
          Registrarse 
        </button>
        </div>      
    </div>
    </form>
    </>
 );
};
export default Formulario;