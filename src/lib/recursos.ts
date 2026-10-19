export type Presentacion = {
  id: string;
  titulo: string;
  descripcion: string;
  driveId: string;
  /**
   * false cuando Google no logra convertir el .pptx a Presentaciones de Google y el visor
   * embebido responde con error 500. En ese caso se muestra la tarjeta de recurso en vez
   * del iframe, para no dejar el error del navegador expuesto en la página.
   */
  embedHabilitado: boolean;
};

export type Infografia = {
  id: string;
  titulo: string;
  descripcion: string;
  driveId: string;
  /** false cuando la imagen de Drive no es accesible públicamente. */
  embedHabilitado: boolean;
};

export const presentacionLinks = (driveId: string) => ({
  embed: `https://docs.google.com/presentation/d/${driveId}/embed?start=false&loop=false&delayms=5000`,
  view: `https://drive.google.com/file/d/${driveId}/view`,
  download: `https://drive.google.com/uc?export=download&id=${driveId}`,
});

export const infografiaLinks = (driveId: string) => ({
  image: `https://lh3.googleusercontent.com/d/${driveId}=w1600`,
  thumb: `https://lh3.googleusercontent.com/d/${driveId}=w600`,
  view: `https://drive.google.com/file/d/${driveId}/view`,
  download: `https://drive.google.com/uc?export=download&id=${driveId}`,
});

export const presentaciones: Presentacion[] = [
  {
    id: "paez-rural-biotech",
    titulo: "Páez Rural Biotech Blueprint",
    descripcion:
      "El veterinario como aliado estratégico: biotecnología y extensión rural en Páez, Boyacá.",
    driveId: "1MffdmFhA6tfI7h4fp6ndV6-9SPnzAC-y",
    embedHabilitado: true,
  },
  {
    id: "extension-agropecuaria",
    titulo: "Extensión Agropecuaria y Desarrollo Rural en Páez",
    descripcion:
      "Estrategias de extensión agropecuaria para el desarrollo rural del municipio de Páez.",
    driveId: "1R9ybSnemV9-VBTQzGDwGXz7UMd0lMh-h",
    embedHabilitado: false,
  },
  {
    id: "ecosistema-digital",
    titulo: "El Ecosistema Digital de la Cognición",
    descripcion:
      "Uso del ecosistema digital como herramienta de aprendizaje y participación comunitaria.",
    driveId: "1CsPA15xzx032GADLvTm-UhKIjRQjha6G",
    embedHabilitado: true,
  },
  {
    id: "cuaderno-de-campo",
    titulo: "El Cuaderno de Campo Vivo",
    descripcion: "Registro de campo para documentar y sacar conclusiones del entorno natural.",
    driveId: "1bLCMLvCCnn_VCHKO9nDV26siKRxbo6CZ",
    embedHabilitado: false,
  },
  {
    id: "digital-field-notebook",
    titulo: "Digital Field Notebook",
    descripcion:
      "Cuaderno de campo digital aplicado a la observación y seguimiento de la flora local.",
    driveId: "1-Y3AYsAAXXRuBNgDtSSkFH30aJa7QtsL",
    embedHabilitado: true,
  },
];

export const infografias: Infografia[] = [
  {
    id: "vocaciones-cientificas",
    titulo: "Vocaciones científicas en el Chocó",
    descripcion:
      "Panorama de las vocaciones científicas del departamento del Chocó y su relación con el territorio.",
    driveId: "1iccDn61EfRG3hBcA8Sw_5XXk6OHEyeW8",
    embedHabilitado: true,
  },
  {
    id: "desarrollo-rural-paez",
    titulo: "Desarrollo rural en Páez, Boyacá",
    descripcion: "Aspectos del desarrollo rural del municipio de Páez y sus principales retos.",
    driveId: "1TtN2fG0lCDl_KW62NSaaizNodtynEizq",
    embedHabilitado: true,
  },
  {
    id: "asistencia-agropecuaria",
    titulo: "Asistencia Agropecuaria en Páez",
    descripcion: "Datos y análisis de la asistencia agropecuaria en el municipio de Páez.",
    driveId: "1OTOhX2tF_dQWhB0US8a1GCxIJftAzHD3",
    embedHabilitado: true,
  },
  {
    id: "aprendizaje-innovacion",
    titulo: "Aprendizaje significativo e innovación digital",
    descripcion:
      "Relación entre aprendizaje significativo e innovación digital en la educación.",
    driveId: "1_vUnskn_aQwnRLZ_l_Yf9cxjm8gK760Y",
    embedHabilitado: true,
  },
  {
    id: "apps-identificar-naturaleza",
    titulo: "Apps para identificar la naturaleza",
    descripcion:
      "Aplicaciones móviles como recurso para identificar especies de la naturaleza.",
    driveId: "18GjqT30aPdWRPqL324eLrKZ45b6516q",
    embedHabilitado: false,
  },
];