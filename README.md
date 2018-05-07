# EXAMEN TÉCNICO DE CLARO VIDEO


El presente examén técnico emula dos vistas del sitio de Claro Video:
1. Vista general de las peliculas
2. Descripcion individual de cada pelicula una vez que el usuario da click a una pelicula del listado general.


##VISTA GENERAL
![](http://34.207.73.97/todo.png)

##VISTA INDIVIDUAL DE LA PELICULA

![](http://34.207.73.97/individual.png)


##MONTAR EL PROYECTO
1.- Una vez instalado Node, ejecutar en consola:
```
git clone https://github.com/cjonyivan/claro-prueba

```

2.Ejecutar en consola:
```
cd claro-prueba

```

3.Ejecutar en consola para instalar los modulos:
```
npm install

```
4.Iniciar el servidor:
```
npm start

```

5.Abrir el navegador e ir a:
```
http://localhost:8111

```


##TEST UNITARIOS
Se muestras dos ejemplos de test unitarios, uno para la vista general y otro para la vista individual.

1.- Una vez instalado Node, ejecutar en consola:
```
npm test

```
##Ejemplo de resultado:
![](http://34.207.73.97/test.png)

En caso de no contar con la libreria de Jest, necesario ejecutar el siguiente comando:
```
npm install jest -S -g

```






##EXAMEN TECNICO PRODUCCIÓN
El aplicativo esta montado en un servidor de Amazon Web Services,se puede consulta mediante la siguiente url:

@[](http://34.207.73.97/)
@[](http://ec2-34-207-73-97.compute-1.amazonaws.com)






Autor: JONY IVAN CRUZ DE LOS SANTOS



