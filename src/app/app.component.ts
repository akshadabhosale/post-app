import { Component } from "@angular/core";

@Component({
  selector:"app-root",
  templateUrl:"./app.component.html"
})
export class AppComponent{

  addPost=(content:HTMLTextAreaElement)=>{
    // to get value of this html content dir is user
    console.dir(content)
    console.log(content.value)
    console.log("Click Event Fired ")
  }
}