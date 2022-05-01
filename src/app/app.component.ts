import { Component, OnInit } from '@angular/core';
import { LaundryService } from '../services/laundry.service';
import { Laundry } from '../models/laundry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  top_row: Laundry[] = [] 
  bot_row: Laundry[] = []
  check :  boolean= true;

  constructor(private service : LaundryService) {
    
  }

  ngOnInit(){
    this.getDataFromAPI();
  }

  getDataFromAPI(){
    this.service.getLaundryData().subscribe(res => {
      for (var machine of res) {
        if (machine.mid <= 3) {
          this.top_row.push(machine)
        } else {
          this.bot_row.push(machine)
        }
      }
      // this.CountdownTimer(machine);

    })
  }

  // CountdownTimer(machine : Laundry){
  //   if (machine.isOn && machine.current_usage < machine.max_usage){
  //     machine.current_usage +=1;
  //   } else{
  //     alert ("Machine is out of use")
  //   }
  // }

  // CurrentUsage(machine : Laundry){
  //   if(machine.isOn && machine.current_usage < machine.max_usage){
  //     machine.current_usage +=1;
  //   }
  // }

  

}