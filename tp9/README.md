# Aplicación de Pronóstico del Clima

Esta es una aplicación web de pronóstico del clima desarrollada con React y Vite, que permite consultar el clima actual de cualquier ciudad del mundo.

## Características

- ✅ **Búsqueda de ciudades**: Busca el clima de cualquier ciudad del mundo
- ✅ **Ubicación actual**: Usa tu ubicación actual para ver el clima
- ✅ **Cambio de unidades**: Alterna entre Celsius y Fahrenheit
- ✅ **Tema claro/oscuro**: Cambia entre modo claro y oscuro
- ✅ **Context API**: Gestión global del estado con Context
- ✅ **Responsive**: Diseño adaptativo para todos los dispositivos
- ✅ **En español**: Todo el código y la interfaz están en español

## Tecnologías utilizadas

- **React 19** con Vite
- **Context API** para gestión de estado
- **CSS** con variables de tema
- **OpenWeatherMap API** para datos del clima

## Instalación

1. Clona el repositorio
2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto y agrega tu API key:
   ```
   VITE_API_KEY=tu_api_key_aqui
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Uso

1. **Buscar ciudad**: Escribe el nombre de una ciudad y presiona "Buscar"
2. **Usar ubicación**: Haz clic en "Usar mi ubicación" para obtener el clima de tu ubicación actual
3. **Cambiar unidades**: Usa el selector de unidades para cambiar entre Celsius y Fahrenheit
4. **Cambiar tema**: Usa el botón de tema para alternar entre modo claro y oscuro

## Estructura del proyecto

```
src/
├── componentes/          # Componentes de la aplicación
├── contextos/            # Contextos de React
├── servicios/            # Servicios y llamadas a la API
├── App.jsx               # Componente principal
├── App.css               # Estilos principales
└── main.jsx              # Punto de entrada
```

## API utilizada

Esta aplicación utiliza la API de [OpenWeatherMap](https://openweathermap.org/api) para obtener los datos del clima.

## Notas importantes

- Asegúrate de tener una conexión a internet activa para obtener los datos del clima
- La aplicación almacena tus preferencias (tema y unidades) en el almacenamiento local del navegador
- Todos los textos y mensajes están en español
