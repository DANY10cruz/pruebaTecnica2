import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActualizarDepartamento } from './components/actualizar-departamento/actualizar-departamento';
import { ActualizarEmpleado } from './components/actualizar-empleado/actualizar-empleado';
import { AgregarDepartamento } from './components/agregar-departamento/agregar-departamento';
import { AgregarEmpleado } from './components/agregar-empleado/agregar-empleado';
import { EmpleadosDepartamentos } from './components/shared/empleados-departamentos/empleados-departamentos';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ActualizarDepartamento,
    ActualizarEmpleado,
    AgregarDepartamento,
    AgregarEmpleado,
    EmpleadosDepartamentos,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('pruebaTecnica2');
}
