
export function Form() {
  return (
    <section>
      <h1>Formulario de contacto</h1>
      <form action="">
        <label>
            Nombre:
            <input type="text" />
        </label>
        <label>
            Apellidos:
            <input type="text" />
        </label>
        <label>
            Dirección:
            <input type="text" />
        </label>
        <label>
            Teléfono:
            <input type="number" max="9" />
        </label>
        <label>
            <textarea type="text" placeholder="Coméntanos que deseas." />
        </label>

        <input type="checkbox" />
        <p>Acepto la <a href="#">política de privacidad.</a></p>
        <button type="submit">Enviar</button>
        <button type="reset">Cancelar</button>
      </form>
    </section>
  )
}