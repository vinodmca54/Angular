import { Component, Input, EventEmitter, Output, OnInit} from "@angular/core";
import { ActivatedRoute, Router, Params } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Http , Response } from '@angular/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: `./app/app.component.html`,
})

export class AppComponent implements OnInit {

   constructor(private _router: Router, private _http: Http){}  
    
    uname:string = '';
    umobilenum:string = '';
    uemail:string = '';
    upassword:string = '';
    userobj = {};

   submituserdetails():void{
     
     this.userobj ={
     	uname : this.uname,
     	umobilenum:this.umobilenum,
     	uemail:this.uemail,
     	upassword:this.upassword 
     }
    
  
   }

 }  
