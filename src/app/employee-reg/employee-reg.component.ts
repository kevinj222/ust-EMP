import { Component, OnInit } from '@angular/core';
import { EmployeeRegService } from '../employee-reg.service';
import { user } from '../user';

@Component({
  selector: 'app-employee-reg',
  templateUrl: './employee-reg.component.html',
  styleUrls: ['./employee-reg.component.css']
})
export class EmployeeRegComponent implements OnInit{
  user:user= new user("","",0,"");
  message: any;

  constructor(private service:EmployeeRegService)
  {

  }
  ngOnInit()
  {
  }
    public registerNow()
    {
      let resp=this.service.doRegistration(this.user);
      resp.subscribe((data=>this.message=data))
    }
  }




