# Miss Star International Website

Sitio web oficial de Miss Star International, una plataforma global de concursos de belleza que celebra la diversidad y el empoderamiento.

## URL

- Producción: https://missstarinternational-website.vercel.app
- Desarrollo local: http://localhost:3000

## Estructura del Proyecto

El proyecto está construido usando Next.js y está estructurado de la siguiente manera:

- `/src/pages`: Contiene todas las páginas del sitio
- `/src/components`: Componentes reutilizables
- `/src/styles`: Estilos globales y configuración de Tailwind CSS
- `/public`: Archivos estáticos como imágenes

## Configuración de Desarrollo Local

1. Clona el repositorio
```bash
git clone <url-del-repositorio>
cd missstarinternational_website
```

2. Instala las dependencias
```bash
npm install
```

3. Inicia el servidor de desarrollo
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## Despliegue

### Despliegue de Previsualización
```bash
npm run deploy:preview
```

### Despliegue a Producción
```bash
npm run deploy
```

## Internacionalización

El sitio soporta múltiples idiomas:

- Inglés (en)
- Español (es)
- Portugués (pt)
- Tailandés (th)
- Vietnamita (vi)

Los archivos de traducción se encuentran en `/public/locales/[idioma]/common.json`.

## Mantenimiento

Para actualizar contenido:

1. Modifica los archivos correspondientes en `/src/pages` o `/src/components`
2. Prueba los cambios localmente con `npm run dev`
3. Despliega los cambios con `npm run deploy`

## Edición de Contenido

El sitio web incluye un sistema de edición de contenido que permite actualizar textos y secciones sin necesidad de editar el código directamente.

### Edición en Modo Desarrollo

1. Inicia el servidor de desarrollo con Turbopack (para mejor rendimiento):
```bash
npm run dev:turbo
```

2. Accede a la página que deseas editar (por ejemplo, http://localhost:3000/)

3. Verás un botón ⚙️ Admin en la esquina inferior derecha. Haz clic para acceder al panel de administración o haz clic directamente en los textos para editarlos en línea.

4. Los cambios se guardan automáticamente en el localStorage de tu navegador.

### Panel de Administración

El panel de administración se encuentra en http://localhost:3000/admin y permite:

- Editar cada sección del sitio en formato JSON
- Exportar los cambios para respaldarlos
- Importar contenido previamente exportado

### Sincronización y Despliegue

Para aplicar permanentemente los cambios editados:

1. Exporta los cambios desde el panel de administración
2. Ejecuta el script de sincronización:
```bash
npm run sync-content
```

3. Pega el JSON exportado cuando se te solicite
4. Despliega los cambios a producción:
```bash
npm run deploy
```

O a un entorno de vista previa:
```bash
npm run deploy:preview
``` 