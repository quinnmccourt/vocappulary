import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AuthComponent } from "./auth/auth.component";
//import { CollectionsComponent } from "./components/collections/collections.component";
import { LandingComponent } from "./components/landing/landing.component";
import { IndividualCollectionComponent } from "./components/individual-collection/individual-collection.component";
import { ItemComponent } from './components/item/item.component'
// you can pass data to a path after component like 
// so: data: {anyData: 'anyValue}
//path could be ':anywordofchoice'  
//passing around dynamic data paths can have children


const routes: Routes = [
    { path: "", component: AuthComponent },
    { path: "landing", component: LandingComponent },
    { path: "collection", component: IndividualCollectionComponent},
    {path: "item", component: ItemComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
