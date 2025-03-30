# Aplicación de Sistema de Blog en Angular

El objetivo del ejercicio es desarrollar un sistema de blog en angular a través de un array de datos estático creado en el propio servicio de Angular. Es decir no hay que hacer conexión HTTP a ninguna API, es todo desde un array multidimensional de JSON.

## Descripción del ejercicio

**Blog Angular:**

- Permitir a los usuarios crear publicaciones de viajes de blog a través de un formulario y visualizarlas
- El blog tiene que tener un listado de noticias y poder visualizar la noticia
- También podrá filtrar por categoria de los viajes y por titulo.

La aplicación que desarrollemos dispondrá de tres rutas

**/home**. Se trata de la ruta de acceso al blog donde aparecen el listado de Post que tengamos en el array antes mencionado

**/new**. Dentro de esta ruta encontramos el formulario que nos permita agregar post a nuestro blog. Los datos del blog son los siguientes.

- Titulo de la publicación
- Texto de la publicación
- Imagen del blog (en formato url no tenéis que subir el archivo físico)
- categoría de blog. (Categoría tendrá su propio interfaz)
- fecha de publicación.

Todos los campos son obligatorios y el formulario tendrá que validar que se introducen correctamente, tendrías que crear un validador propio que permita comprobar que la url esta correcta a través de una expresión regular (tal y como hicimos en el DNI)

El selector de categorías se llenará de un array de categorías que estará en el su propio servicio.

**/post/:idpost**. Esta vista mostrará la vista del post con toda la información de la publicación

**Categorías de Post:**

- El selector de categorías podréis colocarlo donde queráis, teniendo en cuenta donde este, deberéis usar una técnica u otra para obtener la categoría. Output o QueryParams.

**Filtros y Búsquedas:**

- Permitir al usuario filtrar los post por categoria .
- Implementar un campo de búsqueda para encontrar post específicos por titulo.

La maquetación la tendréis que hacer con CSS y Bootstrap como framework de css para ayudaros a

**PASOS A SEGUIR:**

Definir el interfaz de datos de nuestra aplicación. En este caso tendremos que definir el interfaz Post que cuenta con las siguientes propiedades:

- **id, Titulo, texto, autor, imagen (puede ser una url), fecha, categoria:ICategory**

Y el interfaz de Category que cuenta con las siguientes propiedades.

- **id, Titulo**

El siguiente paso es la creación del Servicio que se encargará de manejar la información de nuestra aplicación.

Dentro del servicio necesitamos definir un array como propiedad del mismo donde insertaremos los diferentes Post. Y otro array como propiedad donde crearemos 5 categorías, Playa, Montaña, Ciudad, Rural, Festivales.

Dicho servicio dispondrá de un método **insert(Post)** que nos permitirá agregar los Post cuando lo indiquemos desde el formulario

Además incluiremos el método **getAll** para recuperar todos los Post de nuestro blog

Y por último definiremos el método **getByCategoria(cat)** para que nos devuelva los post de una categoría concreta

El siguiente elemento a definir es el componente **BlogComponent** Se trata de un componente que, recibe del servicio todos los Post y los muestra de manera ordenada.

Disponer de un selector de categorías que nos permitan filtrar por categoría. Este se llenará desde una array de categorías del servicio el servicio a través de un método **getAllCategories()**

Método **getById(id)** que me devolverá la información de un solo post.

Desarrollaremos el componente FormularioComponent Este componente representa un formulario con los diferentes campos del modelo Post. Cuando pulsemos el botón enviar, el formulario debe mandar al servicio la información del nuevo Post para que se almacene junto a los demás, previamente de haberlo validado.

Desarrollaremos el componente ViewPost donde se muestra la información del post individualmente

## Requisitos Técnicos

- Componentes Angular: Crear componentes para la lista de gastos, formulario de creación y estadísticas.
- Servicios Angular: Implementar servicios para la gestión de los gastos y las estadísticas.
- Formularios Reactivos: Utilizar formularios reactivos para añadir y editar los gastos, con validaciones adecuadas.
- Interfaces: Tipas correctamente los datos

## Entregables

- Código completo de la aplicación en Angular.
- Repositorio de código en github por tareas, y muchos commit.

## Que necesito

### Pages (3)

### Páginas (3)

1. Página de inicio (/home) - Muestra todas las publicaciones del blog
2. Página de nueva publicación (/new) - Contiene el formulario para crear publicaciones
3. Página de detalle de publicación (/post/:idpost) - Muestra los detalles de una publicación individual

### Componentes (3 principales + potencialmente más)

1. BlogComponent - Muestra la lista de publicaciones
2. FormularioComponent - Formulario para crear nuevas publicaciones
3. ViewPostComponent - Muestra los detalles de una publicación individual
4. Podrías necesitar componentes adicionales para filtrado, navegación, etc.

### Servicios (1-2)

1. Servicio de publicaciones (Post service) - Servicio principal con métodos:
   - getAll() - Devuelve todas las publicaciones
   - insert(post) - Inserta una nueva publicación en el array
   - getByCategoria(cat) - Devuelve publicaciones filtradas por categoría
   - getById(id) - Devuelve una sola publicación por ID
2. Potencialmente un servicio separado para categorías (Category service) - El README no deja claro si esto es independiente

### Interfaces (2)

1. Interfaz de publicación (Post interface) - Con propiedades: id, Titulo, texto, autor, imagen, fecha, categoria
2. Interfaz de categoría (Category interface) - Con propiedades: id, Titulo

## Implementaciones

- **Angular**: Utilizar Angular para la creación de la aplicación.
- **Bootstrap**: Utilizar Bootstrap para el diseño y la maquetación de la aplicación.
- **Formularios Reactivos**: Debes usar formularios reactivos para la página de nueva publicación, no formularios basados en plantillas.
- **Validador Personalizado**: Necesitas crear un validador personalizado para verificar URLs utilizando expresiones regulares.
- **Filtrado y Búsqueda**:
  - Implementar filtrado por categoría.
  - Implementar funcionalidad de búsqueda por título.
- **Patrón de Datos**: Usar arrays estáticos en los servicios (sin conexiones a API HTTP).
- **Rutas Angular**: Implementar enrutamiento con las tres rutas especificadas.
- **Selector de Categorías**: Implementar un selector de categorías que será llenado desde el servicio.
- **Técnicas de Comunicación**: Usar Output o QueryParams para manejar la selección de categorías (dependiendo de la ubicación del componente).
