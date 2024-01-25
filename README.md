# Nombre de tu Aplicación

## Instalación

Para instalar localmente la aplicación, asegúrate de tener Docker y Docker Compose instalados en tu computadora. Además, necesitarás cambiar el nombre de `env.example` dentro de cada carpeta (`back` y `front`) por `.env`.

Sigue estos pasos:

1. Clona este repositorio a tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. Renombra los archivos `env.example` a `.env` en las carpetas `back` y `front`.

3. Ve a la raíz del repositorio y ejecuta el siguiente comando para construir y levantar los contenedores de Docker:

   ```bash
   docker-compose up --build -d
   ```

   Este comando construirá las imágenes necesarias y levantará los contenedores en segundo plano.

4. ¡Listo! La aplicación de frontend estará disponible en el puerto http://localhost:3000 y la de backend en http://localhost:3001.

## Uso

Ahora puedes acceder a la aplicación en tu navegador web utilizando las siguientes direcciones:

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:3001](http://localhost:3001)

## Detener y Limpiar

Para detener y limpiar los contenedores de Docker, ejecuta el siguiente comando en la raíz del repositorio:

```bash
docker-compose down --rmi local -v
```
