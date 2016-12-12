import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { platformNativeScriptDynamic, NativeScriptModule, NativeScriptRouterModule } from "nativescript-angular";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { FirstComponent, SecondComponent } from "./navigation-common";

@NgModule({
    declarations: [AppComponent, FirstComponent, SecondComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
