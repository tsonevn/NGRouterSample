import { Component } from "@angular/core";
import {NativeScriptRouterModule, RouterExtensions} from "nativescript-angular/router"

@Component({
    selector: "first",
    template: `
        <GridLayout rows="*">
            <ListView [items]="myItems" (itemTap)="onItemTap($event)">
                <template let-item="item" let-i="index" let-odd="odd" let-even="even">
                    <StackLayout [class.odd]="odd" [class.even]="even">
                        <Label [text]='"index: " + i'></Label>
                        <Label [text]='"[" + item.id +"] " + item.name'></Label>
                    </StackLayout>
                </template>
            </ListView>
        </GridLayout>
    `
})
export class FirstComponent {

     public myItems: Array<DataItem>;
    private counter: number;

    constructor(private routerExtensions: RouterExtensions) {
        this.myItems = [];
        this.counter = 0;
        for (var i = 0; i < 50; i++) {
            this.myItems.push(new DataItem(i, "data item " + i));
            this.counter = i;
        }
    }

    public onItemTap(args) {
        console.log("------------------------ ItemTapped: " + args.index);
        this.routerExtensions.navigate(["/second"])
    }
 }

@Component({
    selector: "second",
    template: `
        <StackLayout>
            <Label text="Second component" class="title"></Label>
            <Button text="GO TO FIRST" [nsRouterLink]="['/first']" class="link"></Button>
        </StackLayout>
    `
})
export class SecondComponent { }


class DataItem {
    constructor(public id: number, public name: string) { }
}