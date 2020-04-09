import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }
  
  feed:any = {
    edge_followed_by:{}
  }
  
  ngOnInit(): void {
    this.loadInstagramUser()
  }

  loadInstagramUser() {
    this.http.get('https://www.instagram.com/mariliamendoncacantora?__a=1').subscribe((res:any) => {
      console.log('Resposta:');
      console.log(res);
      this.feed = res.graphql.user;
    })
  }

  mascaraNome(nome) {
    return nome.toUpperCase()
  }
}
