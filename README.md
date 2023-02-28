
# PokeBCI

La página es una aplicación web que permite generar una lista de pokemons que se van descargando a medida que navegac por la pagina, utiliza dos API diferentes: PokeAPI y un repositorio de imágenes. La página se encarga de descargar y almacenar localmente la información de los Pokémon, incluyendo sus nombres, tipos, evoluciones, ataques, habilidades y lugares donde se pueden encontrar.

La página cuenta con una interfaz de usuario intuitiva que permite navegar por la lista de los 151 Pokémon y buscarlos por nombre.

La página también ofrece una serie de submenús que permiten filtrar por habilidades y movimientos. Además, se puede realizar búsquedas incluso sin conexión a Internet, gracias al almacenamiento local de la información de los Pokémon.

Esta es la URL del proyecto desplegado para una rápida visualización
https://pokebci.vercel.app/

## Installation

Instalar proyecto

```bash
  cd pokebci
  npm install
```

Ejecutar Proyecto en local
```bash
  npm run dev
```

Ejecutar StoryBook
```bash
  npm run storybook
```

Ejecutar tests 
```bash
  npm run test
```
## Optimizations

Como mejora del proyecto, se pueden hacer varias optimizaciones de codigo y de funcionalidad, entre ellas se puede 
* usar NextJS para generar de forma estatica la información de los pokemons de esta forma disminuye el tiempo de carga de la aplicación y mejora el SEO. 

* Otra optimización interesante puede ser el hecho de aplicar caching al servicio que arma las consultas de los pokemons.

* Utilizar WebWorkers para ejecutar los filtros fuera del hilo principal de la aplicación, con esto también se incrementaría el tiempo de filtrado y evitaría posibles pausas en la UI cuando hay muchos datos que filtrar.

a nivel de funcionalidades sería interesante:
 
* Cambiar el tema de la ui en función de elegir un pokemon como favorito

* Agregar mas interacciones únicas implementando APIS de IA como Co:Here o ChatGPT, con esto se puede expandir la experiencia de usuario creando funciones únicas

