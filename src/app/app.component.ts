import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { HttpClient } from '@angular/common/http';

interface Article {
  IinputData: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.typeInputData = 'String';
    this.typeOutputData = 'String';
  }
  title = 'Project01_FE';
  inputData: any;
  typeInputData: any;
  typeOutputData: any;
  outputData: any;
  listValue: any = [];
  constructor(private service: SharedService, private http: HttpClient) {}
  sendDataToDotNetCore() {
    if (this.inputData != null) {
      var val = {
        valueInputData: this.inputData,
        typeInputData: this.typeInputData,
        typeOutputData: this.typeOutputData,
      };
      try {
        this.service.getValueInputAPI(val).subscribe((response) => {
          this.listValue = response;
          console.log(this.listValue);
          this.outputData = this.listValue;
        });
      } catch (e) {
        console.log(e);
      }
    }
  }
}
