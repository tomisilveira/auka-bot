# Auka-Bot

Auka-Bot es un chatbot diseñado para leer archivos PDF y proporcionar respuestas utilizando una API de inteligencia artificial.

## Requisitos

- Node.js (versión 14 o superior)
- npm (gestor de paquetes de Node.js)

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/auka-bot.git
    cd auka-bot
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Configura las variables de entorno:

    Crea un archivo `.env` en la raíz del proyecto y añade tu clave API:

    ```plaintext
    API_KEY=tu_api_key
    ```

## Uso

1. Para iniciar el servidor:

    ```bash
    node app.js
    ```

2. Envía una solicitud POST al endpoint `/message` con el siguiente formato:

    ```json
    {
      "message": "Tu mensaje aquí"
    }
    ```

    Ejemplo con `curl`:

    ```bash
    curl -X POST http://localhost:3000/message -H "Content-Type: application/json" -d '{"message": "Hola Auka-Bot"}'
    ```

## Estructura del Proyecto

- `app.js`: Archivo principal que configura el servidor y los endpoints.
- `aiService.js`: Módulo para interactuar con la API de inteligencia artificial.
- `pdfService.js`: Módulo para leer y procesar archivos PDF.
- `pdfs/`: Carpeta donde almacenar los archivos PDF.
- `.env`: Archivo de configuración de variables de entorno (NO incluir en el repositorio).

## Despliegue

Para desplegar tu bot en Railway:

1. Configura tu proyecto en Railway e integra tu repositorio GitHub.
2. Añade las variables de entorno necesarias en Railway.
3. Despliega el proyecto desde la interfaz de Railway.

## Contribuciones

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios necesarios y haz un commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Empuja los cambios (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, revisa el archivo `LICENSE`.
