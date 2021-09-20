import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter';
  count: number = 0;

  DecreaseCount = () =>{
    if(this.count === 0){
      this.count = 0;
    }else{
      this.count -= 1;
    }
  }

  IncreaseCount = ()=>{
    if(this.count === 10){
      this.count = 10;
    }else{
      this.count += 1;
    }
  }

  ResetCount = ()=>{
    this.count = 0;
  }
}
