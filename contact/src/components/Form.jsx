
import '../styles.css'

export function Form() {
  return (
    
    <section>
      <div className="main-container">
        <div className="form-title">
          <h1>Formulario de contacto</h1>
        </div>
        <div className="form-container">
          <form action="" className="form">
          <div className="form-label">

            <label>
                Nombre:
            </label>
                <input type="text" />
          </div>
          <div className="form-label">

            <label>
                Apellidos:
            </label>
                <input type="text" />
          </div>
          <div className="form-label">
            <label>
                Dirección:
            </label>
                <input type="text" />
          </div>
          <div className="form-label">
            <label>
                Teléfono:
            </label>
                <input type="number" max="9" />
          </div>
          <div className="form-textarea">
            <label>
                <textarea type="text" placeholder="Coméntanos que deseas." />
            </label>
          </div>
          <div>

            <input type="checkbox" />
            <p>Acepto la <a href="#">política de privacidad.</a></p>
          </div>
            <button type="submit">Enviar</button>
            <button type="reset">Cancelar</button>
          </form>
          </div>
        </div>
      </section>
  )
}