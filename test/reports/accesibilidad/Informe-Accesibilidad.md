\# Informe de Accesibilidad



\*\*Herramienta:\*\* Lighthouse 13.5.0 (Chrome, modo Desktop, categoría Accessibility)

\*\*Fecha:\*\* 16/11/2026

\*\*Entorno:\*\* aplicación ejecutada en local (http://localhost:5173)



\## Resumen



| Página | Ruta | Puntaje | Fallas detectadas |

|--------|------|---------|-------------------|

| Inicio | / | 93 | 2 |

| Noticias | /noticias | 93 | 2 |

| Login | /login | 94 | 2 (con 4 elementos de contraste) |



Los reportes completos de Lighthouse están en esta misma carpeta:

\- lighthouse-inicio.html

\- lighthouse-noticias.html

\- lighthouse-login.html



\## Problemas encontrados



| Nº | Problema | Elementos | Páginas | Gravedad | Corrección propuesta |

|----|----------|-----------|---------|----------|----------------------|

| 1 | El texto y el fondo no tienen suficiente contraste | div.footer-bottom, footer.site-footer | Inicio, Noticias, Login | Media | Aclarar el texto o oscurecer el fondo del footer hasta alcanzar una relación de contraste de 4.5:1 |

| 2 | Los encabezados no siguen un orden descendente (h4 sin un h3 previo) | h4 de la columna "ENLACES" del footer | Inicio, Noticias, Login | Baja | Cambiar el h4 por el nivel que corresponda (h3) y ajustar el tamaño visual con CSS |

| 3 | El texto y el fondo no tienen suficiente contraste | div.auth-divider (texto "¿No tenés cuenta?") | Login | Media | Aumentar el contraste del texto del separador |

| 4 | El texto y el fondo no tienen suficiente contraste | div.card (tarjeta del formulario de login) | Login | Media | Revisar los colores de los textos dentro de la tarjeta |



\## Análisis



Los problemas 1 y 2 están en el footer, que se repite en todas las páginas. Con una sola corrección en ese componente se resuelven en toda la aplicación. Los problemas 3 y 4 son propios de la página de login.



\## Revisión manual pendiente



Lighthouse marcó 10 puntos que una herramienta automática no puede verificar (por ejemplo, navegación con teclado y orden del foco). Quedan pendientes de revisión manual.



\## Conclusión



La aplicación tiene un nivel de accesibilidad alto (93 a 94 sobre 100) y no presenta fallas graves. Los problemas detectados son de contraste y de estructura de encabezados, y se concentran en el footer y en el login. Se recomienda corregir primero el footer, porque con eso se mejoran todas las páginas a la vez.

