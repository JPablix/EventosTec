# EventosTec v1.0.0
EventosTec es una solución integral desarrollada para facilitar la planificación, administración y ejecución de eventos en el entorno universitario. Este repositorio contiene el código fuente de la aplicación móvil destinadas a la gestión eficiente de dichos eventos.
## Descripción

En las universidades, las asociaciones juegan un papel vital en la organización de eventos educativos y recreativos. Esta plataforma busca maximizar la participación estudiantil y asegurar el éxito de cada evento a través de herramientas digitales de fácil uso tanto en aplicaciones web como móviles.

## Funcionalidades

### Gestión de Asociaciones

- **CRUD de Asociaciones**: Registro, actualización y eliminación de asociaciones.
- **Asignación de Colaboradores**: Gestión de colaboradores para los eventos.
- **Creación de Eventos**: Creación y gestión de nuevos eventos académicos y sociales.
- **Programación de Actividades/Agenda**: Planificación detallada de las actividades del evento.
- **Control de Capacidad**: Monitoreo y control de la capacidad de los eventos.
- **Control de Accesos**: Sistema de validación de asistencia mediante códigos QR.

### Gestión de Estudiantes

- **Registro de Estudiantes**: Inscripción de estudiantes en la plataforma.
- **Calendario de Eventos**: Visualización y gestión de eventos programados.
- **Inscripción a Eventos**: Sistema de inscripción y cancelación a eventos.

### Evaluación y Retroalimentación

- **Informes y Estadísticas**: Generación de informes detallados de los eventos.
- **Encuestas y Evaluaciones**: Recopilación de feedback de los participantes.
- **Notificaciones Automáticas**: Envío de correos electrónicos sobre actualizaciones de eventos.

## Tecnologías Utilizadas

- **Front-end**: React Native y Expo para la aplicación móvil.
- **Back-end**: Node.js y MongoDB.
- **Hosting/Deployment**: Heroku.

## Instalación

```bash
# Clona este repositorio
git clone url_del_repositorio

# Entra al directorio del proyecto
cd directorio_del_proyecto

# Instala las dependencias
npm install

# Ejecuta la aplicación en modo de desarrollo
npm start
```

## Lista de Pendientes

- [X] Al final de la tarjeta de Evento mostrar:
    - Por usuario:
        - [X] Inscribirse
        - [X] Cancelar inscripción
    - Por asociación:
        - [X] Editar
        - [X] Borrar
        - [X] Agregar actividades

- [X] Arreglar warnings de la consola

- [ ] Pantalla para agregar o eliminar colaboradores
- [ ] Aplicar la funcionalidad de Eliminar Perfil

## Estado de las funcionalidades

| Implementaciones                    | Valor | Estado                        |
|-------------------------------------|-------|-------------------------------|
| CRUD de asociaciones                | 7     | Falta eliminar cuentas        |
| Asignación de colaboradores         | 5     | Pendiente                     |
| Crear eventos                       | 5     | Listo                         |
| Programar actividades               | 5     | Listo                         |
| Establecer control de capacidad     | 5     | Listo                         |
| Gestionar el control de accesos     | 5     | Listo                         |
| Registro de estudiantes             | 5     | Listo                         |
| Visualizar calendario de eventos    | 5     | Listo                         |
| Inscripción a eventos               | 6     | Listo                         |
| Formulario de propuestas            | 6     | Pendiente                     |
| Informes y estadísticas             | 8     | Pendiente                     |
| Encuestas y evaluaciones            | 8     | Pendiente                     |
| Notificaciones automáticas          | 8     | Pendiente                     |
| Total                               | 65    |                               |