# Cypress Monkey Testing en "Los Estudiantes"

Este repositorio contiene un conjunto de pruebas de Monkey Testing implementadas con Cypress para el sitio web "https://losestudiantes.co".

## Descripción

Monkey Testing es una técnica de pruebas que simula un usuario realizando acciones aleatorias en una aplicación. Se utiliza para descubrir errores que podrían no ser capturados mediante pruebas más predecibles y estructuradas.

## Requisitos

Antes de ejecutar las pruebas, asegúrate de tener lo siguiente instalado:
- Node.js (v18.10.0)
- npm (viene con Node.js)
- Cypress

Antes de comenzar, necesitarás tener instalado Node.js y npm. Puedes descargar e instalar Node.js desde su [sitio web oficial](https://nodejs.org/).

Cypress es compatible con macOS, Linux y Windows. Verifica que tu sistema cumpla con los [requisitos de sistema de Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements).

## Instalación

Sigue estos pasos para configurar el entorno de pruebas con Cypress:

1. Clona el repositorio:

   ```sh
   git clone https://github.com/soyrobert/random-testing.git
   cd random-testing
   npm install

## Ejecución de Pruebas

Para ejecutar las pruebas de Monkey Testing:
1. En la carpeta del proyecto:

   ```sh
   npx cypress open
2. En el Dashboard de Cypress, selecciona la opción 'E2E Testing'.
3. Elige un navegador en el que desees ejecutar las pruebas.
4. Busca y selecciona monkey_testing.cy.js de la lista de archivos de prueba.

Las pruebas se ejecutarán y podrás observar los resultados en el Dashboard de Cypress.

## Archivo de pruebas
La prueba de Monkey Testing se encuentra en:

```sh
cypress/e2e/monkey_testing.cy.js