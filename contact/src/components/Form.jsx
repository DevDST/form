
import { useState } from 'react'
import '../styles.css'

export function Form() {

// VARIABLES

const [name , setName] = useState('')
const [surname , setSurname] = useState('')
const [email , setEmail] = useState('')
const [phone , setPhone] = useState('')
const [description , setDescription] = useState('')


    // function to update state of name with
    // value enter by user in form
    const handleNameChange =(e)=>{
        setName(e.target.value);
      }
      // function to update state of age with value
      // enter by user in form
      const handleSurnameChange =(e)=>{
        setSurname(e.target.value);
      }
      // function to update state of email with value
      // enter by user in form
      const handleEmailChange =(e)=>{
        setEmail(e.target.value);
      }
      // function to update state of password with
      // value enter by user in form
      const handlePhoneChange =(e)=>{
        setPhone(e.target.value);
      }
        // function to update state of confirm password
        // with value enter by user in form
      const handleDescriptionChange =(e)=>{
        setDescription(e.target.value);
      }

      // below function will be called when user
    // click on submit button .
    // const handleSubmit=(e)=>{
    //     if(password!=confPassword)
    //     {
    //       // if 'password' and 'confirm password'
    //       // does not match.
    //       alert("password Not Match");
    //     }
    //     else{
    //       // display alert box with user
    //       // 'name' and 'email' details .
    //       alert('A form was submitted with Name :"' + name +
    //       '" ,Age :"'+age +'" and Email :"' + email + '"');
    //     }
    //     e.preventDefault();
   
    //   }

    const handleSubmit=(e)=>{
        console.log('enviado');
        e.preventDefault();
   
      }

      const handleCancel=(e)=>{
        console.log('Cancelado');
        e.preventDefault();
   
      }

  return (

      <div className="container">
          <form action="" className="form">
            <div className="form-datas">
            <label htmlFor="nombre">
                Nombre:
            </label>
                <input 
                    type="text" 
                    value={name} 
                    required
                    onChange={(e) => {handleNameChange(e)}}
                />
            </div>
            <div className="form-datas">
            <label htmlFor="apellidos">
                Apellidos:
            </label>
            <input 
                    type="text" 
                    value={surname} 
                    required
                    onChange={(e) => {handleSurnameChange(e)}}
            />
            </div>
            <div className="form-datas">
            <label htmlFor="direccion">
                Email:
            </label>
            <input 
                    type="text" 
                    value={email} 
                    required
                    onChange={(e) => {handleEmailChange(e)}}
            />
            </div>
            <div className="form-datas">
            <label htmlFor="telefono">
                Teléfono:
            </label>
            <input 
                    type="text" 
                    value={phone} 
                    required
                    onChange={(e) => {handlePhoneChange(e)}}
            />
            </div>
            <div className="form-datas textarea">
            <label htmlFor="comentarios">
              Envíanos tu consulta:
            </label>
            <textarea 
                    type="text" 
                    value={description}
                    onChange={(e) => {handleDescriptionChange(e)}}
            />
            </div>
            <input type="checkbox" />
            <span> *Acepto la <a href="#">política de privacidad.</a></span>
          <div className="btn-container">
            <button type="submit" value="enviar" onClick={(e) => {handleSubmit(e)}}>Enviar</button>
            <button type="reset" value="cancelar" onClick={(e) => {handleCancel(e)}}>Cancelar</button>
          </div>
          </form>
        </div>
 
  )
}