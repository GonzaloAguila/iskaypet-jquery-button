# jQuery Iskaypet - Card Layout

Desafío 2 para el puesto de frontend: crear una card responsive usando HTML, CSS (SASS) y JavaScript (jQuery).

## Instalación

1. **Instalar dependencias:**
```bash
npm install
```

2. **Compilar SCSS:**
```bash
npm run build-css
```

## Estructura del Proyecto

```
jquery-iskaypet/
├── index.html              # Estructura HTML con BEM
├── script.js               # Interacción jQuery (toggle de colores)
├── styles.css              # CSS compilado (generado automáticamente)
├── package.json            # Configuración de dependencias
│
└── scss/                   # Código fuente SCSS (estructura modular)
    ├── styles.scss         # Archivo principal (importa todos los módulos)
    │
    ├── abstracts/          # Variables, mixins y funciones globales
    │   ├── _variables.scss      # Punto de entrada (importa todo)
    │   ├── _breakpoints.scss  
    │   ├── _colors.scss         
    │   ├── _typography.scss    
    │   └── _mixins.scss        
    │
    ├── base/               # Estilos base
    │   └── _body.scss          # Estilos del body
    │
    └── components/          # Componentes (cada uno en su carpeta y sus variables unicas)
        ├── card/
        │   ├── _card.scss          
        │   └── _card-variables.scss  
        │
        └── button/
            ├── _button.scss           
            └── _button-variables.scss  
```

## Características

- **Metodología BEM** para nombres de clases (`card`, `card__title`, `card__button`, etc.)
- **Responsive Design** con breakpoint a 768px (mobile/desktop)
- **Fuente Nunito** cargada desde Google Fonts
- **Interacción jQuery** para toggle de color del botón entre #7AB800 y #CC292B
- **Arquitectura SCSS modular** con componentes organizados en carpetas
- **Variables centralizadas** por componente para fácil mantenimiento

## Uso

1. Abrir el `index.html` en tu navegador
2. El botón "Compra ahora" cambiará de color entre #7AB800 (verde) y #CC292B (rojo) al hacer clic
3. La card es responsive: ajusta el tamaño de la ventana para ver los cambios en mobile (≤767px) y desktop (≥768px)

## Tecnologías

- **HTML5**
- **SCSS/SASS** 
- **jQuery 3.7.1** 

## Notas

- El archivo `styles.css` se genera automáticamente al compilar `scss/styles.scss`
- Solo edita los archivos en la carpeta `scss/`, nunca edites `styles.css` directamente
- Usa `npm run watch-css` durante el desarrollo para compilación automática
