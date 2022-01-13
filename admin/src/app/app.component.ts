import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'admin';
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
