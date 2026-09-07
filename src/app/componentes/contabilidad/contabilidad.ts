import { Component } from '@angular/core';

@Component({
  selector: 'app-contabilidad',
  imports: [],
  templateUrl: './contabilidad.html',
  styleUrl: './contabilidad.css'
})
export class Contabilidad {
  transacciones = [
    { fecha: '03/09/2026', tipo: 'Ingreso', concepto: 'Venta #482', origen: 'Venta', monto: 128.00 },
    { fecha: '02/09/2026', tipo: 'Egreso', concepto: 'Compra de insumos', origen: 'Compra', monto: 1560.00 },
    { fecha: '01/09/2026', tipo: 'Egreso', concepto: 'Pago de nómina', origen: 'Nómina', monto: 9500.00 },
  ];
}