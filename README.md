# API para Asistente Virtual Inteligente

Esta es una API creada durante un hackatón para un asistente virtual diseñado para ayudar a los usuarios con diversas tareas, como generar referencias bancarias para pagos gubernamentales, proporcionar información sobre CURP, y más. El asistente utiliza OpenAI para procesamiento de lenguaje natural y está construido con Node.js, Express, y otras tecnologías modernas.

## Características

- **Generación de Referencias Bancarias**: El asistente puede generar referencias para pagos gubernamentales basándose en los datos proporcionados.
- **Consulta de CURP**: Permite consultar y verificar la CURP de los usuarios de manera rápida y precisa.
- **Asistente Virtual Inteligente**: Responde preguntas y proporciona información relevante utilizando la API de OpenAI.
- **API RESTful**: La API está diseñada con un enfoque REST, con rutas claras y bien definidas para facilitar su uso.
- **Escalabilidad**: El diseño modular permite agregar nuevas funcionalidades fácilmente en el futuro.

## Tecnologías Utilizadas

- **Node.js**: Para crear el servidor y manejar las solicitudes de la API.
- **Express**: Framework de Node.js utilizado para la creación de rutas y middleware.
- **OpenAI API**: Integración con OpenAI para tareas de procesamiento de lenguaje natural e inteligencia artificial.
- **MongoDB**: Base de datos no relacional para almacenar información de usuarios y consultas.
- **JWT (JSON Web Tokens)**: Para la autenticación y autorización de usuarios.

## Instalación

1. Clona este repositorio:

    ```bash
    git clone https://github.com/Josuecandia/API.git
    ```

2. Instala las dependencias:

    ```bash
    cd API
    npm install
    ```

3. Configura las variables de entorno:

    Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables:

    ```makefile
    OPENAI_API_KEY=tu_clave_de_API_de_OpenAI
    MONGO_URI=tu_uri_de_mongodb
    PORT=3000
    ```

4. Ejecuta la aplicación:

    ```bash
    npm start
    ```

## Endpoints Disponibles

### `GET /api/referencia`
Genera una referencia bancaria para pagos gubernamentales.

- **Parámetros**: `curp`, `nombre`, `monto`
- **Respuesta**: Código de referencia para el pago.

### `GET /api/curp`
Consulta y verifica la CURP de un usuario.

- **Parámetros**: `curp` (CURP del usuario).
- **Respuesta**: Información asociada a la CURP.

### `POST /api/asistente`
Realiza preguntas al asistente virtual.

- **Parámetros**: `pregunta` (Texto que se le pregunta al asistente).
- **Respuesta**: Respuesta generada por OpenAI.

## Pruebas

Para ejecutar las pruebas automatizadas:

```bash
npm test
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar, por favor sigue estos pasos:

1. Haz un fork de este repositorio.
2. Crea una rama para tus cambios:

    ```bash
    git checkout -b feature/mi-nueva-funcionalidad
    ```

3. Realiza tus cambios y haz commit:

    ```bash
    git commit -am 'Agregando nueva funcionalidad'
    ```

4. Haz push a tu rama:

    ```bash
    git push origin feature/mi-nueva-funcionalidad
    ```

5. Abre un pull request para que revisemos tus cambios.
