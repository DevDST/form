
import '../styles.css'

export function Form() {
  return (

      <div className="container">
          <form action="" className="form">
            <div className="form-datas">
            <label for="nombre">
                Nombre:
            </label>
                <input type="text" />
            </div>
            <div className="form-datas">
            <label for="apellidos">
                Apellidos:
            </label>
                <input type="text" />
            </div>
            <div className="form-datas">
            <label for="direccion">
                Dirección:
            </label>
                <input type="text" />
            </div>
            <div className="form-datas">
            <label for="telefono">
                Teléfono:
            </label>
                <input type="text" />
            </div>
            <div className="form-datas textarea">
            <label for="comentarios">
              Déjanos tus comentarios:
            </label>
                <textarea type="text" />
            </div>
            <input type="checkbox" />
            <span>Acepto la <a href="#">política de privacidad.</a></span>
          <div className="btn">
            <button type="submit">Enviar</button>
            <button type="reset">Cancelar</button>
          </div>
          </form>
        </div>
 
  )
}