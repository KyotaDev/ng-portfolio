import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  experiences = [
    {
      company: 'Clínica SANNA Sanchez Ferrer',
      companyWeb: 'https://www.sanna.pe/',
      position: 'Analista Desarrollador',
      startDate: 'Feb 2023',
      endDate: 'Actualidad',
      description: 'Proporciono soporte y desarrollo requerimientos para aplicaciones internas. Elaboro reportes utilizando SQL, ofrezco soporte a usuarios a través del servicio de asistencia, y brindo soporte básico para SAP Business One.',
      skills: ['ASP.NET', 'Angular', 'TypeScript', 'C#', 'Python', 'SQL', 'Git', 'SAP  Bussines One']
    },
    {
      company: 'Dermalia - Medclinic Group SAC',
      companyWeb: '#',
      position: 'Desarrollador Wordpress',
      startDate: 'Ago. 2022',
      endDate: 'Dic. 2022',
      description: 'Construí una plataforma de comercio electrónico para Dermalia, una tienda de productos dermatológicos, utilizando WordPress y WooCommerce para implementar funciones de compra, con pasarelas de pago integradas. Además del uso del plugin Elementor Pro y otros snippets de código para personalizar la tienda. ',
      skills: ['WordPress', 'WooCommerce', 'Elementor Pro', 'PHP', 'JavaScript', 'CSS']
    },
    {
      company: 'Janaq Software & Consultoría',
      companyWeb: 'https://janaq.com/',
      position: 'Desarrollador Frontend',
      startDate: 'Jul. 2021',
      endDate: 'Jul. 2022',
      description: 'Mantenimiento y desarrollo de requerimientos de las soluciones web para clientes de la empresa. Implementación de nuevas funcionalidades y corrección de errores en soluciones e-commerce existentes. Desarrollo de aplicaciones web utilizando Vue y Nuxt como herramientas principales.',
      skills: ['Vue.js', 'Nuxt.js', 'JavaScript', 'HTML', 'SCSS', 'Bootstrap', 'Figma', 'Git']
    }
  ];



  skills: string[] = ['JavaScript', 'React', 'Node.js', 'CSS'];
}
