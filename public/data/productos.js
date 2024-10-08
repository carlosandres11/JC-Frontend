const productos = [
  {
    marca: "HP",
    nombre: "HP 85A",
    info: "Rinde hasta 1,600 páginas. Ideal para impresiones en blanco y negro de alta calidad.",
    id: 1,
    imagen: {
      miniatura: "../hp/miniatura/85a.webp",
      portada: "../hp/portada/85a.webp",
      detalle: "../hp/85a.webp",
    },
  },
  {
    marca: "HP",
    nombre: "HP 26A",
    info: "Rinde hasta 3,100 páginas. Alta capacidad para impresión profesional.",
    id: 2,
    imagen: {
      miniatura: "../hp/miniatura/1.webp",
      portada: "../hp/portada/1.webp",
      detalle: "../hp/1.webp",
    },
  },
  {
    marca: "HP",
    nombre: "HP 30A",
    info: "Rinde hasta 1,600 páginas. Buena relación costo-beneficio para impresiones diarias.",
    id: 3,
    imagen: {
      miniatura: "../hp/miniatura/2.webp",
      portada: "../hp/portada/2.webp",
      detalle: "../hp/2.webp",
    },
  },
  {
    marca: "HP",
    nombre: "HP 55A",
    info: "Rinde hasta 2,500 páginas. Ideal para oficinas con alta demanda de impresión.",
    id: 4,
    imagen: {
      miniatura: "../hp/miniatura/3.webp",
      portada: "../hp/portada/3.webp",
      detalle: "../hp/3.webp",
    },
  },
  {
    marca: "HP",
    nombre: "HP 410A",
    info: "Rinde hasta 2,400 páginas. Compatible con varios modelos para impresión colorida.",
    id: 5,
    imagen: {
      miniatura: "../hp/miniatura/4.webp",
      portada: "../hp/portada/4.webp",
      detalle: "../hp/4.webp",
    },
  },
  {
    marca: "HP",
    nombre: "HP 414A",
    info: "Rinde hasta 2,200 páginas. Impresión a color con alto rendimiento.",
    id: 6,
    imagen: {
      miniatura: "../hp/miniatura/5.webp",
      portada: "../hp/portada/5.webp",
      detalle: "../hp/5.webp",
    },
  },
  {
    marca: "HP",
    nombre: "HP 12A",
    info: "Rinde hasta 2,000 páginas. Toner estándar para impresión diaria.",
    id: 7,
    imagen: {
      miniatura: "../hp/miniatura/6.webp",
      portada: "../hp/portada/6.webp",
      detalle: "../hp/6.webp",
    },
  },
  {
    marca: "HP",
    nombre: "HP 131A",
    info: "Rinde hasta 1,400 páginas. Colores vibrantes y de alta calidad.",
    id: 8,
    imagen: {
      miniatura: "../hp/miniatura/7.webp",
      portada: "../hp/portada/7.webp",
      detalle: "../hp/7.webp",
    },
  },
  {
    marca: "HP",
    nombre: "HP 80A",
    info: "Rinde hasta 1,600 páginas. Calidad consistente para impresión negra.",
    id: 9,
    imagen: {
      miniatura: "../hp/miniatura/8.webp",
      portada: "../hp/portada/8.webp",
      detalle: "../hp/8.webp",
    },
  },
  {
    marca: "HP",
    nombre: "HP 650A",
    info: "Rinde hasta 6,000 páginas. Ideal para oficinas con alta demanda de impresión.",
    id: 10,
    imagen: {
      miniatura: "../hp/miniatura/9.webp",
      portada: "../hp/portada/9.webp",
      detalle: "../hp/9.webp",
    },
  },
  {
    marca: "HP",
    nombre: "HP 702A",
    info: "Rinde hasta 3,500 páginas. Rendimiento óptimo para impresoras láser.",
    id: 11,
    imagen: {
      miniatura: "../hp/miniatura/10.webp",
      portada: "../hp/portada/10.webp",
      detalle: "../hp/10.webp",
    },
  },
  {
    marca: "HP",
    nombre: "HP 97A",
    info: "Toner de alta calidad, hasta 1,500 páginas.",
    id: 12,
    imagen: {
      miniatura: "../hp/miniatura/11.webp",
      portada: "../hp/portada/11.webp",
      detalle: "../hp/11.webp",
    },
  },
  {
    marca: "HP",
    nombre: "HP 48A",
    info: "Rinde hasta 2,000 páginas. Opción económica para impresión negra.",
    id: 13,
    imagen: {
      miniatura: "../hp/miniatura/12.webp",
      portada: "../hp/portada/12.webp",
      detalle: "../hp/12.webp",
    },
  },
  {
    marca: "HP",
    nombre: "HP 64A",
    info: "Rinde hasta 2,500 páginas. Rendimiento consistente para oficinas.",
    id: 14,
    imagen: {
      miniatura: "../hp/miniatura/13.webp",
      portada: "../hp/portada/13.webp",
      detalle: "../hp/13.webp",
    },
  },
  {
    marca: "HP",
    nombre: "HP 337A",
    info: "Rinde hasta 3,500 páginas. Calidad de impresión profesional para color.",
    id: 15,
    imagen: {
      miniatura: "../hp/miniatura/14.webp",
      portada: "../hp/portada/14.webp",
      detalle: "../hp/14.webp",
    },
  },
  {
    marca: "HP",
    nombre: "HP 503A",
    info: "Rinde hasta 6,000 páginas. Compatible con varias impresoras, alto rendimiento.",
    id: 16,
    imagen: {
      miniatura: "../hp/miniatura/15.webp",
      portada: "../hp/portada/15.webp",
      detalle: "../hp/15.webp",
    },
  },
  {
    marca: "HP",
    nombre: "HP 41A",
    info: "Rinde hasta 3,500 páginas. Ideal para oficinas.",
    id: 17,
    imagen: {
      miniatura: "../hp/miniatura/19.webp",
      portada: "../hp/portada/19.webp",
      detalle: "../hp/19.webp",
    },
  },
  {
    marca: "HP",
    nombre: "HP 55X",
    info: "Rinde hasta 7,500 páginas. Alta capacidad para grandes volúmenes de impresión.",
    id: 18,
    imagen: {
      miniatura: "../hp/miniatura/20.webp",
      portada: "../hp/portada/20.webp",
      detalle: "../hp/20.webp",
    },
  },
  {
    marca: "Lexmark",
    nombre: "Lexmark 36K",
    info: "Rinde hasta 6,000 páginas. Diseñado para impresiones de alto volumen.",
    id: 19,
    imagen: {
      miniatura: "../lexmark/miniatura/1.webp",
      portada: "../lexmark/portada/1.webp",
      detalle: "../lexmark/1.webp",
    },
  },
  {
    marca: "Lexmark",
    nombre: "Lexmark 12A7462",
    info: "Rinde hasta 21,000 páginas. Ideal para grandes oficinas.",
    id: 20,
    imagen: {
      miniatura: "../lexmark/miniatura/2.webp",
      portada: "../lexmark/portada/2.webp",
      detalle: "../lexmark/2.webp",
    },
  },
  {
    marca: "Lexmark",
    nombre: "Lexmark 52D1H00",
    info: "Tóner de alto rendimiento, imprime hasta 25,000 páginas.",
    id: 21,
    imagen: {
      miniatura: "../lexmark/miniatura/3.webp",
      portada: "../lexmark/portada/3.webp",
      detalle: "../lexmark/3.webp",
    },
  },
  {
    marca: "Lexmark",
    nombre: "Lexmark 60F2H00",
    info: "Rinde hasta 10,000 páginas. Adecuado para entornos con volúmenes moderados de impresión.",
    id: 22,
    imagen: {
      miniatura: "../lexmark/miniatura/4.webp",
      portada: "../lexmark/portada/4.webp",
      detalle: "../lexmark/4.webp",
    },
  },
  {
    marca: "Lexmark",
    nombre: "Lexmark 50F2H00",
    info: "Rendimiento alto de hasta 5,000 páginas. Perfecto para uso regular en oficinas.",
    id: 23,
    imagen: {
      miniatura: "../lexmark/miniatura/5.webp",
      portada: "../lexmark/portada/5.webp",
      detalle: "../lexmark/5.webp",
    },
  },
  {
    marca: "Lexmark",
    nombre: "Lexmark 80C2HK0",
    info: "Imprime hasta 4,000 páginas. Diseñado para impresoras Lexmark a color.",
    id: 24,
    imagen: {
      miniatura: "../lexmark/miniatura/6.webp",
      portada: "../lexmark/portada/6.webp",
      detalle: "../lexmark/6.webp",
    },
  },
  {
    marca: "Lexmark",
    nombre: "Lexmark C792X1KG",
    info: "Rinde hasta 20,000 páginas. Calidad de impresión excepcional para gráficos.",
    id: 25,
    imagen: {
      miniatura: "../lexmark/miniatura/7.webp",
      portada: "../lexmark/portada/7.webp",
      detalle: "../lexmark/7.webp",
    },
  },
  {
    marca: "Lexmark",
    nombre: "Lexmark 74C2HKE",
    info: "Tóner negro, imprime hasta 8,000 páginas. Compatible con impresoras Lexmark color CS72x.",
    id: 26,
    imagen: {
      miniatura: "../lexmark/miniatura/8.webp",
      portada: "../lexmark/portada/8.webp",
      detalle: "../lexmark/8.webp",
    },
  },
  {
    marca: "Lexmark",
    nombre: "Lexmark 78C2UKE",
    info: "Extra alto rendimiento, hasta 20,000 páginas. Compatible con impresoras Lexmark XC6152.",
    id: 27,
    imagen: {
      miniatura: "../lexmark/miniatura/9.webp",
      portada: "../lexmark/portada/9.webp",
      detalle: "../lexmark/9.webp",
    },
  },
  {
    marca: "Lexmark",
    nombre: "Lexmark 82K2HC0",
    info: "Rinde hasta 17,000 páginas. Tóner cian para impresoras Lexmark color CX820.",
    id: 28,
    imagen: {
      miniatura: "../lexmark/miniatura/10.webp",
      portada: "../lexmark/portada/10.webp",
      detalle: "../lexmark/10.webp",
    },
  },
  {
    marca: "Lexmark",
    nombre: "Lexmark 74C2SK0",
    info: "Tóner negro, imprime hasta 3,000 páginas. Excelente relación calidad-precio.",
    id: 29,
    imagen: {
      miniatura: "../lexmark/miniatura/11.webp",
      portada: "../lexmark/portada/11.webp",
      detalle: "../lexmark/11.webp",
    },
  },
  {
    marca: "Lexmark",
    nombre: "Lexmark 78C0U10",
    info: "Rendimiento extra alto, hasta 20,000 páginas. Perfecto para volúmenes grandes de impresión.",
    id: 30,
    imagen: {
      miniatura: "../lexmark/miniatura/12.webp",
      portada: "../lexmark/portada/12.webp",
      detalle: "../lexmark/12.webp",
    },
  },
  {
    marca: "Lexmark",
    nombre: "Lexmark C925X76G",
    info: "Imprime hasta 7,500 páginas. Alta calidad de impresión a color.",
    id: 31,
    imagen: {
      miniatura: "../lexmark/miniatura/13.webp",
      portada: "../lexmark/portada/13.webp",
      detalle: "../lexmark/13.webp",
    },
  },
  {
    marca: "Lexmark",
    nombre: "Lexmark 82K2UK0",
    info: "Tóner negro, rinde hasta 32,000 páginas. Compatible con impresoras Lexmark CX825.",
    id: 32,
    imagen: {
      miniatura: "../lexmark/miniatura/14.webp",
      portada: "../lexmark/portada/14.webp",
      detalle: "../lexmark/14.webp",
    },
  },
  {
    marca: "Samsung",
    id: 33,
    nombre: "Samsung MLT-D111S",
    info: "Rendimiento estándar de hasta 1,000 páginas. Compatible con impresoras Samsung Xpress M2020 y M2070.",
    imagen: {
      miniatura: "../samsung/miniatura/1.webp",
      portada: "../samsung/portada/1.webp",
      detalle: "../samsung/1.webp",
    },
  },
  {
    marca: "Samsung",
    id: 34,
    nombre: "Samsung MLT-D116L",
    info: "Tóner de alto rendimiento, imprime hasta 3,000 páginas. Ideal para impresoras Samsung ProXpress.",
    imagen: {
      miniatura: "../samsung/miniatura/2.webp",
      portada: "../samsung/portada/2.webp",
      detalle: "../samsung/2.webp",
    },
  },
  {
    marca: "Samsung",
    id: 35,
    nombre: "Samsung MLT-D203E",
    info: "Rendimiento extra alto de hasta 10,000 páginas. Perfecto para grandes volúmenes de impresión.",
    imagen: {
      miniatura: "../samsung/miniatura/3.webp",
      portada: "../samsung/portada/3.webp",
      detalle: "../samsung/3.webp",
    },
  },
  {
    marca: "Samsung",
    id: 36,
    nombre: "Samsung MLT-D105L",
    info: "Alto rendimiento, hasta 2,500 páginas. Compatible con series ML y SCX.",
    imagen: {
      miniatura: "../samsung/miniatura/4.webp",
      portada: "../samsung/portada/4.webp",
      detalle: "../samsung/4.webp",
    },
  },
  {
    marca: "Samsung",
    id: 37,
    nombre: "Samsung CLT-K404S",
    info: "Tóner negro, rendimiento estándar de hasta 1,500 páginas. Para impresoras Samsung color Xpress.",
    imagen: {
      miniatura: "../samsung/miniatura/5.webp",
      portada: "../samsung/portada/5.webp",
      detalle: "../samsung/5.webp",
    },
  },
  {
    marca: "Samsung",
    id: 38,
    nombre: "Samsung CLT-C406S",
    info: "Tóner cian, rendimiento de hasta 1,000 páginas. Colores vibrantes y alta calidad de impresión.",
    imagen: {
      miniatura: "../samsung/miniatura/6.webp",
      portada: "../samsung/portada/6.webp",
      detalle: "../samsung/6.webp",
    },
  },
  {
    marca: "Samsung",
    id: 39,
    nombre: "Samsung MLT-D209L",
    info: "Alto rendimiento de hasta 5,000 páginas. Compatible con series SCX y ML de alto volumen.",
    imagen: {
      miniatura: "../samsung/miniatura/7.webp",
      portada: "../samsung/portada/7.webp",
      detalle: "../samsung/7.webp",
    },
  },
  {
    marca: "Samsung",
    id: 40,
    nombre: "Samsung CLT-M407S",
    info: "Tóner magenta, rendimiento de hasta 1,000 páginas. Colores consistentes y brillantes.",
    imagen: {
      miniatura: "../samsung/miniatura/8.webp",
      portada: "../samsung/portada/8.webp",
      detalle: "../samsung/8.webp",
    },
  },
  {
    marca: "Samsung",
    id: 41,
    nombre: "Samsung MLT-D104S",
    info: "Tóner de hasta 1,500 páginas. Fiabilidad en impresiones de alta calidad.",
    imagen: {
      miniatura: "../samsung/miniatura/9.webp",
      portada: "../samsung/portada/9.webp",
      detalle: "../samsung/9.webp",
    },
  },
  {
    marca: "Samsung",
    id: 42,
    nombre: "Samsung MLT-D204L",
    info: "Alto rendimiento de hasta 5,000 páginas. Apto para oficinas con gran carga de trabajo.",
    imagen: {
      miniatura: "../samsung/miniatura/10.webp",
      portada: "../samsung/portada/10.webp",
      detalle: "../samsung/10.webp",
    },
  },
  {
    marca: "Samsung",
    id: 43,
    nombre: "Samsung CLT-K407S",
    info: "Tóner negro, rinde hasta 1,500 páginas. Para impresoras Samsung a color de la serie Xpress.",
    imagen: {
      miniatura: "../samsung/miniatura/11.webp",
      portada: "../samsung/portada/11.webp",
      detalle: "../samsung/11.webp",
    },
  },
  {
    marca: "Samsung",
    id: 44,
    nombre: "Samsung MLT-D115L",
    info: "Rinde hasta 3,000 páginas. Fiabilidad y alto rendimiento para pequeñas oficinas.",
    imagen: {
      miniatura: "../samsung/miniatura/12.webp",
      portada: "../samsung/portada/12.webp",
      detalle: "../samsung/12.webp",
    },
  },
  {
    marca: "Samsung",
    id: 45,
    nombre: "Samsung CLT-C407S",
    info: "Tóner cian, rendimiento estándar de hasta 1,000 páginas. Impresiones claras y precisas.",
    imagen: {
      miniatura: "../samsung/miniatura/13.webp",
      portada: "../samsung/portada/13.webp",
      detalle: "../samsung/13.webp",
    },
  },
  {
    marca: "Samsung",
    id: 46,
    nombre: "Samsung MLT-D2092L",
    info: "Tóner negro, alto rendimiento de hasta 5,000 páginas. Para impresoras Samsung de gran capacidad.",
    imagen: {
      miniatura: "../samsung/miniatura/14.webp",
      portada: "../samsung/portada/14.webp",
      detalle: "../samsung/14.webp",
    },
  },
  {
    marca: "Samsung",
    id: 47,
    nombre: "Samsung CLT-M404S",
    info: "Tóner magenta de hasta 1,000 páginas. Colores vivos para impresiones profesionales.",
    imagen: {
      miniatura: "../samsung/miniatura/15.webp",
      portada: "../samsung/portada/15.webp",
      detalle: "../samsung/15.webp",
    },
  },
  {
    marca: "Samsung",
    id: 48,
    nombre: "Samsung MLT-D115S",
    info: "Rendimiento estándar de hasta 1,200 páginas. Tóner eficiente y confiable.",
    imagen: {
      miniatura: "../samsung/miniatura/16.webp",
      portada: "../samsung/portada/16.webp",
      detalle: "../samsung/16.webp",
    },
  },
  {
    marca: "Samsung",
    id: 49,
    nombre: "Samsung CLT-K406S",
    info: "Tóner negro, hasta 1,500 páginas. Ideal para impresoras Samsung color Xpress.",
    imagen: {
      miniatura: "../samsung/miniatura/17.webp",
      portada: "../samsung/portada/17.webp",
      detalle: "../samsung/17.webp",
    },
  },
  {
    marca: "Samsung",
    id: 50,
    nombre: "Samsung MLT-D103L",
    info: "Rinde hasta 2,500 páginas. Ideal para pequeñas oficinas y uso personal.",
    imagen: {
      miniatura: "../samsung/miniatura/18.webp",
      portada: "../samsung/portada/18.webp",
      detalle: "../samsung/18.webp",
    },
  },
  {
    marca: "Samsung",
    id: 51,
    nombre: "Samsung MLT-D205E",
    info: "Extra alto rendimiento, hasta 10,000 páginas. Perfecto para grandes oficinas con impresiones frecuentes.",
    imagen: {
      miniatura: "../samsung/miniatura/19.webp",
      portada: "../samsung/portada/19.webp",
      detalle: "../samsung/19.webp",
    },
  },
  {
    marca: "Samsung",
    id: 52,
    nombre: "Samsung MLT-D1042S",
    info: "Rendimiento estándar de hasta 1,500 páginas. Calidad de impresión consistente.",
    imagen: {
      miniatura: "../samsung/miniatura/20.webp",
      portada: "../samsung/portada/20.webp",
      detalle: "../samsung/20.webp",
    },
  },
  {
    marca: "Kyocera",
    nombre: "Kyocera TK-5140",
    info: "Rinde hasta 20,000 páginas, excelente para grandes volúmenes de impresión.",
    id: 53,
    imagen: {
      miniatura: "../kyocera/miniatura/1.webp",
      portada: "../kyocera/portada/1.webp",
      detalle: "../kyocera/1.webp",
    },
  },
  {
    marca: "Kyocera",
    nombre: "Kyocera TK-5230",
    info: "Imprime hasta 6,000 páginas con calidad constante.",
    id: 54,
    imagen: {
      miniatura: "../kyocera/miniatura/2.webp",
      portada: "../kyocera/portada/2.webp",
      detalle: "../kyocera/2.webp",
    },
  },
  {
    marca: "Kyocera",
    nombre: "Kyocera TK-5220",
    info: "Rendimiento de hasta 3,000 páginas, ideal para uso diario.",
    id: 55,
    imagen: {
      miniatura: "../kyocera/miniatura/3.webp",
      portada: "../kyocera/portada/3.webp",
      detalle: "../kyocera/3.webp",
    },
  },
  {
    marca: "Kyocera",
    nombre: "Kyocera TK-560",
    info: "Capacidad de hasta 12,000 páginas para oficinas de alta demanda.",
    id: 56,
    imagen: {
      miniatura: "../kyocera/miniatura/4.webp",
      portada: "../kyocera/portada/4.webp",
      detalle: "../kyocera/4.webp",
    },
  },
  {
    marca: "Kyocera",
    nombre: "Kyocera TK-5222",
    info: "Rinde hasta 2,500 páginas, óptimo para trabajos a corto plazo.",
    id: 57,
    imagen: {
      miniatura: "../kyocera/miniatura/5.webp",
      portada: "../kyocera/portada/5.webp",
      detalle: "../kyocera/5.webp",
    },
  },
  {
    marca: "Kyocera",
    nombre: "Kyocera TK-580",
    info: "Hasta 8,000 páginas, adecuado para impresiones a color de alta calidad.",
    id: 58,
    imagen: {
      miniatura: "../kyocera/miniatura/6.webp",
      portada: "../kyocera/portada/6.webp",
      detalle: "../kyocera/6.webp",
    },
  },
  {
    marca: "Kyocera",
    nombre: "Kyocera TK-1110",
    info: "Rinde hasta 2,500 páginas, eficiente para pequeñas empresas.",
    id: 59,
    imagen: {
      miniatura: "../kyocera/miniatura/7.webp",
      portada: "../kyocera/portada/7.webp",
      detalle: "../kyocera/7.webp",
    },
  },
  {
    marca: "Kyocera",
    nombre: "Kyocera TK-120",
    info: "Rinde hasta 2,000 páginas, recomendado para uso ocasional.",
    id: 60,
    imagen: {
      miniatura: "../kyocera/miniatura/8.webp",
      portada: "../kyocera/portada/8.webp",
      detalle: "../kyocera/8.webp",
    },
  },
  {
    marca: "Kyocera",
    nombre: "Kyocera TK-3170",
    info: "Capacidad de hasta 15,500 páginas, ideal para impresoras de alto volumen.",
    id: 61,
    imagen: {
      miniatura: "../kyocera/miniatura/9.webp",
      portada: "../kyocera/portada/9.webp",
      detalle: "../kyocera/9.webp",
    },
  },
  {
    marca: "Kyocera",
    nombre: "Kyocera TK-540",
    info: "Impresión de hasta 5,000 páginas, para impresiones a color precisas.",
    id: 62,
    imagen: {
      miniatura: "../kyocera/miniatura/10.webp",
      portada: "../kyocera/portada/10.webp",
      detalle: "../kyocera/10.webp",
    },
  },
];

const masUsados = [
  {
    marca: "HP",
    nombre: "HP 85A",
    info: "Rinde hasta 1,600 páginas. Ideal para impresiones en blanco y negro de alta calidad.",
    id: 63,
    imagen: {
      miniatura: "../hp/miniatura/85a.webp",
      portada: "../hp/portada/85a.webp",
      detalle: "../hp/85a.webp",
    },
  },
  {
    marca: "Samsung",
    id: 64,
    nombre: "Samsung MLT-D111S",
    info: "Rendimiento estándar de hasta 1,000 páginas. Compatible con impresoras Samsung Xpress M2020 y M2070.",
    imagen: {
      miniatura: "../samsung/miniatura/1.webp",
      portada: "../samsung/portada/1.webp",
      detalle: "../samsung/1.webp",
    },
  },
  {
    marca: "Lexmark",
    nombre: "Lexmark 60F2H00",
    info: "Rinde hasta 10,000 páginas. Adecuado para entornos con volúmenes moderados de impresión.",
    id: 65,
    imagen: {
      miniatura: "../lexmark/miniatura/4.webp",
      portada: "../lexmark/portada/4.webp",
      detalle: "../lexmark/4.webp",
    },
  },
  {
    marca: "Kyocera",
    nombre: "Kyocera TK-540",
    info: "Impresión de hasta 5,000 páginas, para impresiones a color precisas.",
    id: 66,
    imagen: {
      miniatura: "../kyocera/miniatura/10.webp",
      portada: "../kyocera/portada/10.webp",
      detalle: "../kyocera/10.webp",
    },
  },
  {
    marca: "HP",
    nombre: "HP 80A",
    info: "Rinde hasta 1,600 páginas. Calidad consistente para impresión negra.",
    id: 67,
    imagen: {
      miniatura: "../hp/miniatura/8.webp",
      portada: "../hp/portada/8.webp",
      detalle: "../hp/8.webp",
    },
  },
  {
    marca: "HP",
    nombre: "HP 97A",
    info: "Toner de alta calidad, hasta 1,500 páginas.",
    id: 68,
    imagen: {
      miniatura: "../hp/miniatura/11.webp",
      portada: "../hp/portada/11.webp",
      detalle: "../hp/11.webp",
    },
  },
  {
    marca: "Kyocera",
    nombre: "Kyocera TK-5140",
    info: "Rinde hasta 20,000 páginas, excelente para grandes volúmenes de impresión.",
    id: 69,
    imagen: {
      miniatura: "../kyocera/miniatura/1.webp",
      portada: "../kyocera/portada/1.webp",
      detalle: "../kyocera/1.webp",
    },
  },
  {
    marca: "Samsung",
    id: 70,
    nombre: "Samsung MLT-D116L",
    info: "Tóner de alto rendimiento, imprime hasta 3,000 páginas. Ideal para impresoras Samsung ProXpress.",
    imagen: {
      miniatura: "../samsung/miniatura/2.webp",
      portada: "../samsung/portada/2.webp",
      detalle: "../samsung/2.webp",
    },
  },
  {
    marca: "Samsung",
    id: 71,
    nombre: "Samsung MLT-D115L",
    info: "Rinde hasta 3,000 páginas. Fiabilidad y alto rendimiento para pequeñas oficinas.",
    imagen: {
      miniatura: "../samsung/miniatura/12.webp",
      portada: "../samsung/portada/12.webp",
      detalle: "../samsung/12.webp",
    },
  },
];

export { productos, masUsados };
