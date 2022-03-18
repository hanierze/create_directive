import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directive';
  currentPage :number = 0
  setCurrentPage(index : number) {
    return index == this.currentPage ?  'active' : ''
  }
  checkWindowIndex(index : number){
    return   Math.abs(this.currentPage - index)<5
  }
  images=[
    {title : 'salam',url : 'https://arga-mag.com/file/img/2016/02/nature-of-Iran-16-1-570x404.jpg'},
    {title : 'khobi',url : 'https://arga-mag.com/file/img/2020/04/View-of-the-flower-plain-570x404.jpg'},
    {title : 'man',url : 'https://popimage.ir/wp-content/uploads/2020/12/%D8%B9%DA%A9%D8%B3-%D9%BE%D8%B1%D9%88%D9%81%D8%A7%DB%8C%D9%84-%D8%B7%D8%A8%DB%8C%D8%B9%D8%AA-25.jpg'},
    {title : 'are',url : 'https://www.talab.org/wp-content/uploads/2018/04/23655475-talab-org.jpg'},
    {title : 'shokr',url : 'https://i1.delgarm.com/images/news/a766/1396/01/15/V7dI0.jpg'},
    {title : 'salam',url : 'https://arga-mag.com/file/img/2016/02/nature-of-Iran-16-1-570x404.jpg'},
    {title : 'khobi',url : 'https://arga-mag.com/file/img/2020/04/View-of-the-flower-plain-570x404.jpg'},
    {title : 'man',url : 'https://popimage.ir/wp-content/uploads/2020/12/%D8%B9%DA%A9%D8%B3-%D9%BE%D8%B1%D9%88%D9%81%D8%A7%DB%8C%D9%84-%D8%B7%D8%A8%DB%8C%D8%B9%D8%AA-25.jpg'},
    {title : 'are',url : 'https://www.talab.org/wp-content/uploads/2018/04/23655475-talab-org.jpg'},
    {title : 'shokr',url : 'https://i1.delgarm.com/images/news/a766/1396/01/15/V7dI0.jpg'}

  ]
}
