import { Component } from "@angular/core";
import { routes } from "./app.routes";
import { FirstComponent, SecondComponent } from "./navigation-common";


@Component({
    selector: "my-app",   
    template: "<page-router-outlet></page-router-outlet>",
})

export class AppComponent {
}