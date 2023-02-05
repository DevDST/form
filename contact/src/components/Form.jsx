
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

    const handleSubmit=(e)=>{

        if(!name || !surname || !email || !phone) {

            console.log('Los datos introducidos son erróneos.');
        }else {
            console.log('Hola ' + name + '. ' + '\n' +
            'Te contactaremos al email: ' + email + ' o al teléfono ' + phone + '.');
        }
        e.preventDefault();
   
      }

    // below function will be reset info when user
    // click on cancel button .

      const handleCancel=(e)=>{
        setName('');
        setSurname('');
        setEmail('');
        setPhone('');
        setDescription('');
        console.log('Cancelado');
        e.preventDefault();
   
      }

  return (

      <div className="container">
          <form action="" className="form">
            <div className="personal-info">
            <div className="form-datas name">
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
            <div className="form-datas surname">
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
            </div>
            <div className="contact-info">
            <div className="form-datas">
            <label htmlFor="email">
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