# API REST con Node.js, Express y Firebase

## Descripcion de la API

API REST conNode.JS se usa para gestionar productos usando el servidor Express con Firebase.

- Listado completo de productos
- Búsqueda de productos por ID
- Alta, modificación y eliminación de productos
- Autenticación con Json WEB Token (JWT)

## Instalación

1. Clonar el repositorio de Github: https://github.com/DenisPetrasso77/api-rest-node

```bash
git 
cd api-rest-node
```
2. Instalar todas las dependencias necesarias para que la API funcione Correctamente:

```bash
npm install
```

3. Configurar variables de entorno:

```bash
# Copiar el archivo .env de ejemplo y completar con los datos requeridos
cp .env-example .env
```

Luego editar ela archivo '.env' con los valores correspondientes para su entorno.

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```


## Documentación de la API

### Obtener todos los productos 

- **GET** `/products`
- **Descripción:** Devuelve todos los productos.
- **Respuesta Ejemplo.**

```json
[
{"id": 1, "name": "Camiseta Deportiva", "price": 150 },
{"id": 2, "name": "Ropa GYM", "price": 100 },
{"id": 3, "name": "Mochila Escolar", "price": 350 },
]
```
### Buscar productos por nombre

- **GET** `/products/search?name=palabra`
- **Descripción:** Devuelve los productos cuyo nombre contiene la palabra solicitada.
- **Parámetros:**
- `name`(query, requerido): texto a buscar en el nombre del producto.
**Ejemplo de uso:** `/products/search?name=camiseta`
- **Respuesta ejemplo:**

```json
[{"id": 1, "name": "Camiseta Deportiva", "price": 150 }]
```

### Buscar productos por ID

- **GET** `/products/:id`
- **Descripción:** Devuelve un producto especifico por su ID
- **Parametros:**
- `id` (path, requerido): ID del producto  
**Ejemplo de uso:** `/products/1`
- **Respuesta ejemplo:**

```json
[{"id": 1, "name": "Camiseta Deportiva", "price": 150 }]
```


### Crear un producto

- **POST:**
- **Descripción:** Crea un nuevo producto
- **Body (JSON):**
 
```json
{ "name": "Nuevo Producto", "price": 777 }
```

- **Respuesta Ejemplo:**

```json
{ "id": "RX3AHiW8agb4nPilR1BJ", "name": "Nuevo Producto", "price": 777 }
```

## Eliminar un producto 

- **DELETE** `/products/:id`
- **Descripcion:** Elimina un producto por su ID
- **Parametros:**
- `id`(path, requerido): ID del producto a eliminar



## Modificar un producto

- **Modificar** `/products/:id`
- **Descripcion:** Modifica un producto por su ID
- **Parametros:**
- `id`(path, requerido): ID del producto a modificar


##  Tecnologías usadas en el proyecto

- Node.js
- Express.js
- Firebase - Firestore
- Json WEB Token (JWT)
- Vercel

## API en producción Vercel

https://api-rest-node-mu.vercel.app/

##  Autor de la API

**Franco Denis Petrasso**  
Correo: denispetrasso77@gmail.com  
