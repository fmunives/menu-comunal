import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { MenuInterface } from "src/app/models/options.model";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
export class MenuComponent implements OnInit {
  options: MenuInterface[] = [
    {
      imageUrl:
        "https://raw.githubusercontent.com/fmunives/menu-comunal/4ad9a9842232017c797e89ed8829d71a46bb3a8f/src/assets/images/room.svg",
      text: "Reserva de salas",
      visible: true,
    },
    {
      imageUrl:
        "https://raw.githubusercontent.com/fmunives/menu-comunal/4ad9a9842232017c797e89ed8829d71a46bb3a8f/src/assets/images/problem.svg",
      text: "Reporte de problemas",
      visible: true,
    },
    {
      imageUrl:
        "https://raw.githubusercontent.com/fmunives/menu-comunal/4ad9a9842232017c797e89ed8829d71a46bb3a8f/src/assets/images/team.svg",
      text: "Mi equipo",
      visible: true,
    },
    {
      imageUrl:
        "https://raw.githubusercontent.com/fmunives/menu-comunal/4ad9a9842232017c797e89ed8829d71a46bb3a8f/src/assets/images/new.svg",
      text: "Comunicados",
      visible: true,
    },
    {
      imageUrl:
        "https://raw.githubusercontent.com/fmunives/menu-comunal/f4bdff93abd724b4153a348fe5e52948615bc679/src/assets/images/form.svg",
      text: "Ficha de sintomatología",
      visible: true,
    },
  ];

  activeOptions: MenuInterface[] = [];

  constructor() {}

  ngOnInit() {
    this.activeOptions = this.options.filter((option) => option.visible);
  }

  showMessage(option: MenuInterface) {
    Swal.fire(`You clicked: ${option.text}`);
  }
}
