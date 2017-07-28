import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  users:Array<any> = [
    {"index":19,
    "romIndex": 19,
    "name":"刘雨飏",
      "sex":"Male",
      "name_en":"Ryane",
      "github":"ryanemax",
      "exam1":66,
      "exam2":66,
      "exam3":66},
      {"index":7,
      "romIndex": 7,
      "name":"小明",
      "sex":"Male",
      "name_en":"Ryane",
      "github":"ryanemax",
      "exam1":66,
      "exam2":66,
      "exam3":66},
      {"index":14,
      "romIndex": 14,
      "name":"Chunk",
      "sex":"Male",
      "name_en":"Chunk",
      "github":"chunk",
      "exam1":76,
      "exam2":76,
      "exam3":76}
  ]



deleteLast(){
  this.users.pop()
}
saveNewUser(){
  this.users.push({
     "index":666,
     "romIndex":666,
      "name":"New User",
      "sex":"Male",
      "name_en":"new_user",
      "github":"new_user",
      "exam1":76,
      "exam2":76,
      "exam3":76
  })
}

  sortByAsccending(){
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.users.sort(function (a, b){
      return a.index - b.index;
    });

  }

  sortByDesccending(){
    this.users.sort(function (a, b){
      return b.index - a.index;
    });
    
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
  }
  sortByRadom(){
    this.users.forEach(user=>{ 
      user.romIndex = Math.random();
    });

    this.users.sort(function (a, b){
      return a.romIndex - b.romIndex;
    });
    
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  }
  constructor(meta: Meta, title: Title) {
    title.setTitle('My Home Page');

    meta.addTags([ 
      {
        name: 'author', content: 'eddic'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ])
  }

  ngOnInit() {
  }

}
