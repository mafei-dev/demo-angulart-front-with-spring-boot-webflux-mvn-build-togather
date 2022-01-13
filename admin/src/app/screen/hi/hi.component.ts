import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css']
})
export class HiComponent implements OnInit {
  msg: any = " loading..";

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<any>('test/hi').subscribe({
      next: data => {
        console.log("data > ", data)
        this.msg = data.msg;
      },
      error: error => {
        console.error("error > ", error)
      }
    })
  }
}
