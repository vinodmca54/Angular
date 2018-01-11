import { Component, Input, EventEmitter, Output, OnInit} from "@angular/core";
import { ActivatedRoute, Router, Params } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Http , Response } from '@angular/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'appmdf-root',
  templateUrl: `./app/appmdf.component.html`,
})

export class Appmdfcomponent implements OnInit{
  
   userForm1:FormGroup;

   constructor( privite _formBuildre: FormBuilder){}

   ngOnInit(){
    
      this.userForm1 = this._formBuildre.group({

           name:['vinod'],
           mobilenum:['9494437121'],
           mailid:['vinod@email.com'],
           pswd:[],

      })

   }

   onsubmit(){

      console.log(this.userForm1.value);

   }

}
