import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
export class MenuComponent implements OnInit {
  options: any = [
    {
      imageUrl: "",
      text: "Reserva de salas",
      visible: false,
    },
    {
      imageUrl: "",
      text: "Reporte de problemas",
      visible: true,
    },
    {
      imageUrl: "",
      text: "Mi equipo",
      visible: true,
    },
    {
      imageUrl: "",
      text: "Comunicados",
      visible: true,
    },
    {
      imageUrl: "",
      text: "Ficha de sintomatología",
      visible: true,
    },
  ];

  constructor() {}

  ngOnInit() {}

  showMessage(option: any) {
    Swal.fire(`You clicked: ${option.text}`);
  }
}
