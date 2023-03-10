const Politicas = () => {
    return(
        <div className="col m-10 m-5">
            <div className="row">
                <div className="container my-5">
                    <h3>Políticas de Compra y Devolución</h3>
                    <div className="compra my-5">
                    <h4>Políticas de Compra</h4>
                        <h6 className="muted"> <a href={"/"} data-bs-toggle="tooltip" data-bs-title="Default tooltip">Inicio </a>
                            <p>En esta página te sugerimos que indiques todas las instrucciones para realizar una compra en tu tienda. Por ejemplo:</p>
                        <ol class="list-group list-group-numbered">
                        <li class="list-group-item">Elige el producto que deseas comprar.</li>
                        <li class="list-group-item">Haz clic en el botón de "Agregar al carrito". Esto agregará el producto a tu carrito y te llevará al mismo.</li>
                        <li class="list-group-item">Puedes seguir agregando otros productos al carrito o sino haz clic en "Iniciar Compra".</li>
                        <li class="list-group-item">Completa tus datos de contacto y haz clic en "Continuar".</li>
                        <li class="list-group-item">Ingresa la dirección a donde deseas recibir el producto. Luego haz clic en "Continuar".</li>
                        <li class="list-group-item">Selecciona el método de envío que desees y haz clic en "Continuar".</li>
                        <li class="list-group-item">Elige el medio de pago.</li>
                        <li class="list-group-item">Una vez que hayas elegido el medio de pago, haz clic en "Continuar".</li>
                        <li class="list-group-item">Finalmente en la página de Confirmación de compra puedes revisar toda la información de la compra. Luego haz clic en "Continuar".</li>
                        <li class="list-group-item">Ahí serás redirigido a otra pantalla para que completes los datos sobre la forma de pago elegida. Después de confirmar la compra recibirás un correo de nuestra parte, ese no será un comprobante de pago.</li>
                        <li class="list-group-item">Una vez acreditado el pago, haremos el envío correspondiente de los productos que hayas comprado.</li>
                        </ol></h6>
                        </div>
                    <div className="devolucion my-5">
                    <h4>Políticas de Devolución</h4>
                        <h6>Si no estás conforme con nuestro producto, puedes realizar un cambio del mismo de alguna de las siguientes formas: En cualquiera de nuestras tiendas podrás cambiarlo por un artículo del mismo valor. Desde tu domicilio. Para eso ponete en contacto a lacresta@yahoo.com.ar o a nuestro WhatsApp y nosotros nos encargaremos de que la empresa de Correo pase a retirar el producto. Este podrás cambiarlo por otro del mismo valor, que también será enviado a tu domicilio. Las devoluciones sólo pueden ser realizadas durante los 15 días siguientes a la compra. Los costos del envío estará a cargo del comprador.</h6>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Politicas;



