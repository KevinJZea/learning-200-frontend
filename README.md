# Learningator -- Hackathon Platzi Master 2020

## Sobre el Proyecto :bulb:

Learningator es la herramienta que revolucionará la manera en la que los estudiantes aprenden durante su paso en Platzi Master. Con esta herramienta, los procesos de generación de Learning Paths (LP) serán 80% más rápidos y los coaches podrán brindar mayor acompañamiento a sus estudiantes.

## Problema :dart:

Cuando un estudiante de Platzi es seleccionado para el programa de élite Platzi Master, escoge un área de interés: Frontend, Backend o Data Science. Consecuentemente, se le asigna un coach académico que hace seguimiento durante el proceso y genera un LP manualmente. En conjunto, el coach lidera a un equipo de diferentes áreas para realizar un proyecto final.

Sin embargo, existe un problema cuando los coaches crean LP que están fuera de su expertise. Las experiencias de los estudiantes dependen del conocimiento que tenga su coach en el área que les interesa. Por ejemplo, un coach con especialización en Frontend puede tener problemas para crear un LP para Data Science. 

Para entender el problema, se levantaron datos que validaran la hipótesis. Se solicitó a 8 coaches académicos que compartieran sus experiencias en este proceso


El primer descubrimiento es que 5 coaches son Full Stack, 2 Frontend y 1 Backend.

![Área Expertise](https://github.com/Learningator/learning-200-documentacion/blob/main/Captura%20de%20pantalla%20de%202020-12-18%2006-43-33.png)


Cuando se preguntó sobre la dificultad general para hacer un LP promedio, la mayoría de los coaches enfrentaron una dificultad intermedia:

![Dificultad](https://github.com/Learningator/learning-200-documentacion/blob/main/Captura%20de%20pantalla%20de%202020-12-18%2006-44-53.png)


El área con menos dificultad para armar LP es Frontend, recordando que la mayoría de los coaches son de esta disciplina en particular o Full Stack.

![Dificultad front](https://github.com/Learningator/learning-200-documentacion/blob/main/Captura%20de%20pantalla%20de%202020-12-18%2006-45-02.png)


Sin embargo, los coaches académicos tienen una mayor dificultad con LP de Backend:

![Dificultad back](https://github.com/Learningator/learning-200-documentacion/blob/main/Captura%20de%20pantalla%20de%202020-12-18%2006-45-02%20(1).png?raw=true)


El área donde más problemas es Data Science, donde 7 de 8 coaches encuentra difícil o muy difícil hacer un LP:

![Dificultad data](https://github.com/Learningator/learning-200-documentacion/blob/main/Captura%20de%20pantalla%20de%202020-12-18%2006-45-06.png?raw=true)


Como se puede ver, el expertise del coach puede estar a favor o en contra.

Una de las grandes ventajas para un estudiante es trabajar en equipos multidisciplinarios, por lo cual conseguir coaches que solo dirigan a estudiantes de su área de expertise le resta valor a la experiencia. 

Otro problema es el tiempo que toma realizar un LP. En promedio, un LP puede tomar de 4 a 5 horas. Esto esta sujeto a modificaciones y cambios de enfoque del estudiante. Según el testimonio de un coach, puede tomar hasta 12 horas hacer un LP con ajustes posteriores. 

Un problema adicional es que el modelo actual no es escalable porque a medida que se integren nuevos estudiantes a Platzi Master se necesitan más coaches generando manualmente nuevos LP.

## Solución :heavy_check_mark:

Learningator automatiza la creación de learning paths, recortando el tiempo de creación sin que dependa del conocimiento del coach académico respecto al área de interés del estudiante. Con esto podemos mejorar su experiencia y darle soporte al coach académico. De esta manera, el coach puede enfocarse en realizar acciones de seguimiento y apoyo al estudiante. 

Al automatizar este proceso, es posible escalar el número de estudiantes que pueden ser atendidos a la vez. 

El producto final es un generador de LP, teniendo en cuenta los conocimientos del estudiante, sus objetivos y experiencia.

El viaje de usuario es el siguiente:

![Viaje de usuario](https://github.com/Learningator/learning-200-documentacion/blob/main/User_journey.png?raw=true)

El mockup en Figma original de este flujo se puede consultar [aquí](https://www.figma.com/file/yKbJ5ibbh79TUOh2ZL7SSj/Learningator?node-id=0%3A1)

La arquitectura del proyecto es la siguiente: 

![Arquitectura](https://github.com/Learningator/learning-200-documentacion/blob/main/Learning%20200%20arquitectura.png?raw=true)

Utilizamos una arquitectura simple, la cual depende solo de los datos que se intercambia entre el servidor, Platzi y el algoritmo de Machine Learning. El cliente genera dos data points. Uno es la especialización deseada por el usuario y el otro es el perfil de estudiante. La especialización es mandada directamente al algoritmo de Machine Learning, mientras que el perfil es pedido a Platzi quien resuelve con una API que será consumida por el servidor y el modelo entrenado. 

El algoritmo de machine learning regresa una respuesta que enlista una serie de cursos y retos para el estudiante durante el primer mes. Esta respuesta es mandada entonces al cliente para ser mostrada en la pantalla final de la interfaz. 

## Equipo :muscle:

- **Kevin Zea:** Frontend, UX/UI

- **Ulises Sámano:** Frontend, Backend

- **Joel Gaspar:** Backend, Ingeniería de Datos

- **David Jaramillo:** Ingeniería y Arquitectura de Datos

- **Felipe Martinez** Data Science, Machine Learning

- **Xavier Carrera:** Data Science, Machine Learning


## Stack Tecnológico :wrench:
- Javascript
- ReactJS 
- Sass
- Node.js
- Express.js
- Postman
- Python
- Pandas
- Requests
- BeatifulSoup 4
- Flask
- Scickit Learn
- Heroku

## Licencia :scroll:

Este projecto está bajo Licenica MIT
