# Proyecto E-commerce Runar 

Este proyecto fue creado con React aplicando los conocimiento adquiridos en el curse de React de Coderhouse. 
Dentro del proyecto se busca reclicar un E-commerce que cumpla con algunas funciones básicas para un cliente. 
En esta opertunidad el E-commerce esta enfocado al sector Runnig, con tres categorías que muestra diferentes productos
en función de las necesidades del cliente. 

## Estructura del Proyecto

Este este proyecto podrás encontrar las siguientes pages y componente que dan funcionalidad a esta web app

### `Catalogo`

Esta la página que muestra todos los productos del E-Commerce y esta conformada por los siguientes componentes: 

    `ItemListContainer` : Este componente a su vez renderiza el componente <Item> y <ItemList>. En conjunto estos componentes conformarn la estructura del catalogo. 
    El componente <Item> detalla como se muestra cada item que es renderizado. Y solo se utiliza como plantilla para el rendizado desde la base de datos. 
    Por su parte el componente <ItemList> tiene la estructura para iterar y renderizar el listado de productos.
    Finalmente estos componentes son pasados al componentes <ItemListContainer> el cual se encarga de renderizar y agrupar todos los productos que sean consultados en la base de datos. Dentro de este componente hacemos el llamado de la función de Firebase que hace la consulta de los productos. Se utiliza en este componente: 
        - useState: Para manejar el estado del Boton de like, el cual cambia cuando se da click en el corazón. Luego el useState para el CircularProgress que se muestra mientras la página carga los productos. Luego el useState de los productos para manejar el array de objetos de todos los productos. 
        -useEffect: En este caso se usa el useEffect para manejar el cambio de estado de los producto. Si en la base de datos de Firebase se ingresa un nuevo producto, este es renderizado en el componente. 
    Además dentro de este componente también utilizamos el renderizado condicional. En el cual, mostramos el componente <CircularProgress> cuando el estado loading es true, una vez este cambia a false, se renderiza el componente <ItemList> que maneja el mapeo de todos los produtos. 

### `Categories`

Este componente está creado para renderizar los productos filtrados por su categoria. Dentro podemos encontrar useState, useEffect, useParams, useContext y el llamado de la función del servicio de firebase que nos filtra los produtos por categoría.
    - useParams: Pasamos itemCategory de los productos para filtrarlos y renderizarlos. 
    - useContext: El use context es tomado para en caso de querer ingresar un producto al carrito, este pueda ser actualizado y recibido par actualizar el cartWidget y el componente Shopping con el listado de productos seleccionados. 

### `Shopping`

Es el componente que mayores funcionalidades posee ya que dentro encontramos el lista de productos seleccionados para confirmar o rechazar la compra. 
Este componente muestra en una tabla, con la ayuda del useContext el lista de productos seleccionado por el user. En este sentido podrá visualizar la catidad de productos seleccionados, el detalle de los productos y el todal sumada por productos y el total de la compra. 
Además el user podrá sacar de la tabla los productos que no desee carga.
Una vez que el usuario decide realizar la comprar deberá ingresar sus datos en un formulario para registralo con el tickte de su compra. 
Desde este componente utilizamos la función para agregar la orden a Firebase, una vez confirmada la orden que esta carga en el sistema, el user recibe una confirmación customizada con su número de código de comprar. Y al cerrar será redirigido a la página principal del E-commerce para seguir haciendo compras si así lo desea o navegar con el E-commerce.
