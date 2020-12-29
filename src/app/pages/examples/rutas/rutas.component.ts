import { Component, OnInit,OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-rutas',
  templateUrl: 'rutas.component.html'
})
export class RutasComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  constructor() { }

  ngOnInit(): void {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("ruta-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("ruta-page");
  }

}
