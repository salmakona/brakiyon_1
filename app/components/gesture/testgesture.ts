import {Component} from '@angular/core';
import {FormControl, FormGroup,FormBuilder, Validators} from '@angular/forms';
import {Http,Response, Headers, RequestOptions}from '@angular/http';
import { FormsModule} from '@angular/forms';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'testgesture',
    templateUrl:'app/components/gesture/testgesture.html'
   
})

export class TestGestureComponent{

        gestureformModel: FormGroup;
           
        constructor(private gf:FormBuilder,private http:Http) {
         const fb = new FormBuilder();
            this.gestureformModel = fb.group({
                'label': [null,Validators.required],
                 //'name': [null, Validators.minLength(3)],
                'description': [null,Validators.required]
            })
        }

       onSubmit(formValue: any, isFormValid: boolean) {
                if (isFormValid) {
                    var url = "https://braykion.herokuapp.com/api/gestures";
                    console.log(formValue);
                    let headers = new Headers({ 'Content-Type': 'application/json' });
                    let options = new RequestOptions({ headers: headers });
                    console.log(this.http);
                    this.http.post(url, {"label":"This is From AG2","description":"test"}, options);
                    console.log('-----------COMPLITED--------');
                    }
                }
 
}


 
