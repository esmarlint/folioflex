import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Moon,
  Sun,
  Globe,
  Briefcase,
  GraduationCap,
  Star,
} from "lucide-react";

import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";

interface Skill {
  name: string;
  icon: string;
}

const name = "Nelson Rosario";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("es");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const skills: Skill[] = [
    { name: "JavaScript", icon: "javascript-icon.svg" },
    { name: "React", icon: "react-icon.svg" },
    { name: "Node.js", icon: "node-icon.svg" },
    { name: "C#", icon: "csharp-icon.svg" },
    { name: ".NET", icon: "dotnet-icon.svg" },
    { name: "SQL", icon: "sql-icon.svg" },
    { name: "Git", icon: "git-icon.svg" },
    { name: "AWS", icon: "aws-icon.svg" },
    { name: "TailwindCSS", icon: "tailwindcss-icon.svg" },
    { name: "Docker", icon: "docker-icon.svg" },
    { name: "TypeScript", icon: "typescript-icon.svg" },
    { name: "PHP", icon: "php-icon.svg" },
  ];

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
      <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container flex h-14 items-center'>
          <a className='flex items-center justify-center' href='#'>
            <span className='sr-only'>{name}</span>
            <img
              src='/profile.jpg'
              alt='Logo'
              className='h-8 w-8 rounded-full object-cover'
            />
          </a>
          <nav className='flex flex-1 items-center justify-end space-x-4'>
            <a
              className='text-sm font-medium hover:underline underline-offset-4'
              href='#about'
            >
              Sobre mí
            </a>
            <a
              className='text-sm font-medium hover:underline underline-offset-4'
              href='#skills'
            >
              Habilidades
            </a>
            <a
              className='text-sm font-medium hover:underline underline-offset-4'
              href='#projects'
            >
              Proyectos
            </a>
            <a
              className='text-sm font-medium hover:underline underline-offset-4'
              href='#experience'
            >
              Experiencia
            </a>
            <a
              className='text-sm font-medium hover:underline underline-offset-4'
              href='#education'
            >
              Educación
            </a>
            <Button variant='ghost' size='icon' onClick={toggleDarkMode}>
              {darkMode ? (
                <Sun className='h-4 w-4' />
              ) : (
                <Moon className='h-4 w-4' />
              )}
            </Button>
            <Button variant='ghost' size='icon' onClick={toggleLanguage}>
              <Globe className='h-4 w-4' />
            </Button>
          </nav>
        </div>
      </header>
      <main className='flex-1 bg-background text-foreground'>
        <section className='w-full py-12 md:py-24 lg:py-32' id='about'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left'>
              <img
                src='/profile2.jfif'
                alt={"Foto de perfil de " + name}
                className='rounded-full border-4 border-primary h-[300px] w-[300px] object-cover'
              />
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                  {name}
                </h1>
                <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
                  Ingeniero de Software | Especialista en backend con
                  experiencia en frontend, optimización, y escalabilidad de
                  aplicaciones.
                </p>
                <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
                  Soy un desarrollador apasionado, experto en .NET y C#, con
                  competencias adicionales en React, TypeScript, y TailwindCSS.
                  Entusiasta de la resolución de problemas y la creación de
                  productos digitales visualmente atractivos.
                </p>
                <div className='flex justify-center md:justify-start space-x-4 mt-4'>
                  <Button variant='outline' size='icon'>
                    <Mail className='h-4 w-4' />
                    <span className='sr-only'>Email</span>
                  </Button>
                  <Button
                    variant='outline'
                    size='icon'
                    onClick={() =>
                      window.open("https://github.com/esmarlint", "_blank")
                    }
                  >
                    <Github className='h-4 w-4' />
                    <span className='sr-only'>GitHub</span>
                  </Button>
                  <Button
                    variant='outline'
                    size='icon'
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/nelson-esmarlin-rosario-rodriguez",
                        "_blank"
                      )
                    }
                  >
                    <Linkedin className='h-4 w-4' />
                    <span className='sr-only'>LinkedIn</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className='w-full py-12 md:py-24 lg:py-32 bg-muted'
          id='skills'
        >
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8'>
              Tecnologías y Habilidades
            </h2>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
              {skills.map((skill) => (
                <div key={skill.name} className='flex items-center space-x-3'>
                  <img src={"/icons/" + skill.icon} className='h-6 w-6' />
                  <span className='text-lg font-medium '>{skill.name}</span>
                </div>
              ))}
            </div>
            <h3 className='text-2xl font-bold mt-12 mb-6'>Idiomas</h3>
            <div className='flex space-x-4'>
              <Badge className='text-lg py-1 px-3'>Español (Nativo)</Badge>
              <Badge className='text-lg py-1 px-3'>Inglés (B2)</Badge>
            </div>
          </div>
        </section>

        <section className='w-full py-12 md:py-24 lg:py-32' id='projects'>
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8'>
              Proyectos Destacados
            </h2>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              <Card className='overflow-hidden'>
                <CardHeader className='p-0'>
                  <img
                    src='/lapagination.png'
                    alt='Proyecto 1'
                    className='w-full h-48 object-cover'
                  />
                </CardHeader>
                <CardContent className='p-4'>
                  <CardTitle className='flex items-center space-x-2 text-lg font-bold mb-2'>
                    <Star className='h-5 w-5 text-yellow-400' />
                    <span>CorePagination</span>
                  </CardTitle>
                  <p className='text-sm text-muted-foreground mb-4'>
                    Librería para paginación en .NET para Entity FrameworkCore.
                  </p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    <Badge variant='secondary'>.NET</Badge>
                    <Badge variant='secondary'>C#</Badge>
                  </div>
                  <div className='flex space-x-2'>
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() =>
                        window.open(
                          "https://github.com/esmarlint/CorePagination",
                          "_blank"
                        )
                      }
                    >
                      <ExternalLink className='h-4 w-4 mr-2' />
                      Ver proyecto
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className='overflow-hidden'>
                <CardHeader className='p-0'>
                  <img
                    src='/promerica.png'
                    alt='Promerica web'
                    className='w-full h-48 object-cover'
                  />
                </CardHeader>
                <CardContent className='p-4'>
                  <CardTitle className='flex items-center space-x-2 text-lg font-bold mb-2'>
                    <Star className='h-5 w-5 text-yellow-400' />
                    <span>Promerica Web</span>
                  </CardTitle>
                  <p className='text-sm text-muted-foreground mb-4'>
                    Web app para el Banco Promerica con React y .NET
                  </p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    <Badge variant='secondary'>.NET</Badge>
                    <Badge variant='secondary'>C#</Badge>
                    <Badge variant='secondary'>SQL Server</Badge>
                    <Badge variant='secondary'>React</Badge>
                    <Badge variant='secondary'>Docker</Badge>
                  </div>
                  <div className='flex space-x-2'>
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() =>
                        window.open("https://www.promerica.com.do/", "_blank")
                      }
                    >
                      <ExternalLink className='h-4 w-4 mr-2' />
                      Ver proyecto
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className='overflow-hidden'>
                <CardHeader className='p-0'>
                  <img
                    src='/mdcalc.jpg'
                    alt='MDCalc'
                    className='w-full h-48 object-cover'
                  />
                </CardHeader>
                <CardContent className='p-4'>
                  <CardTitle className='flex items-center space-x-2 text-lg font-bold mb-2'>
                    <Star className='h-5 w-5 text-yellow-400' />
                    <span>MDCalc </span>
                  </CardTitle>
                  <p className='text-sm text-muted-foreground mb-4'>
                    MDCalc aplicación para calculos medicos y de salud y
                    formulas de medicina.
                  </p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    <Badge variant='secondary'>.NET</Badge>
                    <Badge variant='secondary'>C#</Badge>
                    <Badge variant='secondary'>SQL Server</Badge>
                    <Badge variant='secondary'>React</Badge>
                    <Badge variant='secondary'>Docker</Badge>
                  </div>
                  <div className='flex space-x-2'>
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() =>
                        window.open("https://www.mdcalc.com/", "_blank")
                      }
                    >
                      <ExternalLink className='h-4 w-4 mr-2' />
                      Ver proyecto
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className='overflow-hidden'>
                <CardHeader className='p-0'>
                  <img
                    src='/apsars.png'
                    alt='APS ARS'
                    className='w-full h-48 object-cover'
                  />
                </CardHeader>
                <CardContent className='p-4'>
                  <CardTitle className='flex items-center space-x-2 text-lg font-bold mb-2'>
                    <Star className='h-5 w-5 text-yellow-400' />
                    <span>APS ARS Authorization Page </span>
                  </CardTitle>
                  <p className='text-sm text-muted-foreground mb-4'>
                    Web para autorización de servicios médicos de APS ARS y
                    carnetización de afiliados en linea.
                  </p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    <Badge variant='secondary'>.NET</Badge>
                    <Badge variant='secondary'>PHP</Badge>
                    <Badge variant='secondary'>MySQL</Badge>
                  </div>
                  <div className='flex space-x-2'>
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() =>
                        window.open("https://apsars.do/", "_blank")
                      }
                    >
                      <ExternalLink className='h-4 w-4 mr-2' />
                      Ver proyecto
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className='overflow-hidden'>
                <CardHeader className='p-0'>
                  <img
                    src='/cuponazo.png'
                    alt='Cuponazo.do'
                    className='w-full h-48 object-cover'
                  />
                </CardHeader>
                <CardContent className='p-4'>
                  <CardTitle className='flex items-center space-x-2 text-lg font-bold mb-2'>
                    <Star className='h-5 w-5 text-yellow-400' />
                    <span>MDCalc </span>
                  </CardTitle>
                  <p className='text-sm text-muted-foreground mb-4'>
                    Aplicación para cupones y descuentos en republica
                    dominicana.
                  </p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    <Badge variant='secondary'>PHP</Badge>
                    <Badge variant='secondary'>Laravel</Badge>
                    <Badge variant='secondary'>My SQL</Badge>
                    <Badge variant='secondary'>React</Badge>
                  </div>
                  <div className='flex space-x-2'>
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() =>
                        window.open("https://cuponazo.do/", "_blank")
                      }
                    >
                      <ExternalLink className='h-4 w-4 mr-2' />
                      Ver proyecto
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          className='w-full py-12 md:py-24 lg:py-32 bg-muted'
          id='experience'
        >
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8'>
              Experiencia Laboral
            </h2>
            <div className='space-y-8'>
              {/* Babel Group */}
              <Card>
                <CardContent className='p-6'>
                  <div className='flex items-center space-x-4 mb-4'>
                    <Briefcase className='h-6 w-6 text-primary' />
                    <div>
                      <h3 className='text-xl font-bold'>
                        Ingeniero de Software & Asesor Técnico
                      </h3>
                      <h4 className='text-lg font-semibold text-muted-foreground'>
                        Babel Group
                      </h4>
                    </div>
                  </div>
                  <p className='text-sm text-muted-foreground mb-4'>
                    2023 - 2024
                  </p>
                  <ul className='list-disc list-inside space-y-2 text-sm text-muted-foreground mb-4'>
                    <li>Liderazgo Técnico y Mentoría en proyectos React.</li>
                    <li>Implementación de soluciones con .NET y React.</li>
                    <li>
                      Supervisión de cambios de código y desarrollo activo.
                    </li>
                    <li>
                      Diseño y ejecución de pruebas unitarias para garantizar la
                      calidad del software.
                    </li>
                  </ul>
                  <div className='flex flex-wrap gap-2'>
                    <Badge variant='outline'>.NET</Badge>
                    <Badge variant='outline'>C#</Badge>
                    <Badge variant='outline'>SQL Server</Badge>
                    <Badge variant='outline'>React</Badge>
                    <Badge variant='outline'>TypeScript</Badge>
                    <Badge variant='outline'>GIT</Badge>
                    <Badge variant='outline'>Azure</Badge>
                    <Badge variant='outline'>RabbitMQ</Badge>
                    <Badge variant='outline'>Docker</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-6'>
                  <div className='flex items-center space-x-4 mb-4'>
                    <Briefcase className='h-6 w-6 text-primary' />
                    <div>
                      <h3 className='text-xl font-bold'>
                        Desarrollador Full Stack
                      </h3>
                      <h4 className='text-lg font-semibold text-muted-foreground'>
                        GBH
                      </h4>
                    </div>
                  </div>
                  <p className='text-sm text-muted-foreground mb-4'>
                    2021 - 2023
                  </p>
                  <ul className='list-disc list-inside space-y-2 text-sm text-muted-foreground mb-4'>
                    <li>
                      Desarrollo de aplicaciones web usando JavaScript y
                      ReactJS.
                    </li>
                    <li>Gestión de bases de datos SQL y MongoDB.</li>
                    <li>Infraestructura en la nube con AWS.</li>
                    <li>
                      Automatización de procesos con Python y desarrollo en PHP.
                    </li>
                  </ul>
                  <div className='flex flex-wrap gap-2'>
                    <Badge variant='outline'>TypeScript</Badge>
                    <Badge variant='outline'>React</Badge>
                    <Badge variant='outline'>SQL</Badge>
                    <Badge variant='outline'>MongoDB</Badge>
                    <Badge variant='outline'>AWS</Badge>
                    <Badge variant='outline'>Node</Badge>
                    <Badge variant='outline'>PHP</Badge>
                    <Badge variant='outline'>Python</Badge>
                    <Badge variant='outline'>C#</Badge>
                    <Badge variant='outline'>GIT</Badge>
                    <Badge variant='outline'>Docker</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-6'>
                  <div className='flex items-center space-x-4 mb-4'>
                    <Briefcase className='h-6 w-6 text-primary' />
                    <div>
                      <h3 className='text-xl font-bold'>
                        Desarrollador Full Stack
                      </h3>
                      <h4 className='text-lg font-semibold text-muted-foreground'>
                        Banco Promerica
                      </h4>
                    </div>
                  </div>
                  <p className='text-sm text-muted-foreground mb-4'>2021</p>
                  <ul className='list-disc list-inside space-y-2 text-sm text-muted-foreground mb-4'>
                    <li>
                      Desarrollo y mantenimiento de aplicaciones con C#,
                      Node.js, y React.
                    </li>
                    <li>
                      Diseño de APIs e integración con sistemas bancarios de
                      terceros.
                    </li>
                    <li>Optimización y escalabilidad de bases de datos SQL.</li>
                  </ul>
                  <div className='flex flex-wrap gap-2'>
                    <Badge variant='outline'>C#</Badge>
                    <Badge variant='outline'>Node.js</Badge>
                    <Badge variant='outline'>React</Badge>
                    <Badge variant='outline'>SQL Server</Badge>
                    <Badge variant='outline'>GIT</Badge>
                    <Badge variant='outline'>Docker</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-6'>
                  <div className='flex items-center space-x-4 mb-4'>
                    <Briefcase className='h-6 w-6 text-primary' />
                    <div>
                      <h3 className='text-xl font-bold'>
                        Desarrollador Full Stack
                      </h3>
                      <h4 className='text-lg font-semibold text-muted-foreground'>
                        Newtech
                      </h4>
                    </div>
                  </div>
                  <p className='text-sm text-muted-foreground mb-4'>
                    2019 - 2021
                  </p>
                  <ul className='list-disc list-inside space-y-2 text-sm text-muted-foreground mb-4'>
                    <li>
                      Desarrollo y mantenimiento de aplicaciones con C#,
                      JavaScript y SQL Server.
                    </li>
                    <li>
                      Optimización de aplicaciones y bases de datos con técnicas
                      avanzadas.
                    </li>
                    <li>Gestión de datos utilizando Entity Framework.</li>
                  </ul>
                  <div className='flex flex-wrap gap-2'>
                    <Badge variant='outline'>C#</Badge>
                    <Badge variant='outline'>JavaScript</Badge>
                    <Badge variant='outline'>SQL Server</Badge>
                    <Badge variant='outline'>GIT</Badge>
                    <Badge variant='outline'>React</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-6'>
                  <div className='flex items-center space-x-4 mb-4'>
                    <Briefcase className='h-6 w-6 text-primary' />
                    <div>
                      <h3 className='text-xl font-bold'>
                        Software Engineer & DBA
                      </h3>
                      <h4 className='text-lg font-semibold text-muted-foreground'>
                        APS ARS
                      </h4>
                    </div>
                  </div>
                  <p className='text-sm text-muted-foreground mb-4'>
                    2016 - 2019
                  </p>
                  <ul className='list-disc list-inside space-y-2 text-sm text-muted-foreground mb-4'>
                    <li>
                      Desarrollo y mantenimiento de aplicaciones utilizando C#,
                      JavaScript y SQL Server.
                    </li>
                    <li>
                      Optimización de consultas y tareas asíncronas para mejorar
                      la eficiencia.
                    </li>
                    <li>
                      Gestión de versiones y colaboración en equipo con Git.
                    </li>
                  </ul>
                  <div className='flex flex-wrap gap-2'>
                    <Badge variant='outline'>C#</Badge>
                    <Badge variant='outline'>JavaScript</Badge>
                    <Badge variant='outline'>SQL Server</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className='w-full py-12 md:py-24 lg:py-32' id='education'>
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8'>
              Educación
            </h2>
            <div className='space-y-8'>
              <Card>
                <CardContent className='p-6'>
                  <div className='flex items-center space-x-4 mb-4'>
                    <GraduationCap className='h-6 w-6 text-primary' />
                    <div>
                      <h3 className='text-xl font-bold'>
                        Licenciatura en Ciencias Informáticas
                      </h3>
                      <h4 className='text-lg font-semibold text-muted-foreground'>
                        Universidad del Caribe
                      </h4>
                    </div>
                  </div>
                  <p className='text-sm text-muted-foreground mb-2'>
                    2017 - 2021
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    Programa integral de ingeniería de software con enfoque en
                    desarrollo web, bases de datos, algoritmos y estructuras de
                    datos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-6'>
                  <div className='flex items-center space-x-4 mb-4'>
                    <GraduationCap className='h-6 w-6 text-primary' />
                    <div>
                      <h3 className='text-xl font-bold'>
                        Agile Project Management
                      </h3>
                      <h4 className='text-lg font-semibold text-muted-foreground'>
                        Cobalto Consulting
                      </h4>
                    </div>
                  </div>
                  <p className='text-sm text-muted-foreground mb-2'>2021</p>
                  <p className='text-sm text-muted-foreground'>
                    Certificación en gestión de proyectos ágiles con Scrum
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-6'>
                  <div className='flex items-center space-x-4 mb-4'>
                    <GraduationCap className='h-6 w-6 text-primary' />
                    <div>
                      <h3 className='text-xl font-bold'>
                        Técnico en Desarrollo de aplicaciones
                      </h3>
                      <h4 className='text-lg font-semibold text-muted-foreground'>
                        Instituto Nacional De Foramación Técnico Profesional
                      </h4>
                    </div>
                  </div>
                  <p className='text-sm text-muted-foreground mb-2'>2016</p>
                  <p className='text-sm text-muted-foreground'>
                    Programa de formación técnica en desarrollo de aplicaciones
                    Algoritmia, programación, bases de datos y desarrollo web.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-muted-foreground'>
          © 2023 {name}. Todos los derechos reservados.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <a className='text-xs hover:underline underline-offset-4' href='#'>
            Términos de Servicio
          </a>
          <a className='text-xs hover:underline underline-offset-4' href='#'>
            Política de Privacidad
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
