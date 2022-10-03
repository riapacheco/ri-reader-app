import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { Component,  OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BREAKPOINT_VALUE } from 'src/app/enums/breakpoint.enums';
import { BookList } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

import { OcrService } from 'src/app/services/ocr.service';
import { ThemeService } from 'src/app/services/theme.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  bookCards!: any[];
  searchText = '';
  booksClassList: string[] = [];
  isMobile!: boolean;
  private sub = new Subscription();
  constructor(
    public ocr: OcrService,
    private book: BookService,
    private observer: BreakpointObserver,
    private theme: ThemeService,
    private platform: Platform
  ) { }

  /* -------------------------------------------------------------------------- */
  /*                               LIFECYCLE STUFF                              */
  /* -------------------------------------------------------------------------- */
  ngOnInit(): void {
    this.booksClassList = ['books'];
    this.sub.add(this.platformThemeState());
    // this.getBooks();
  }
  ngOnDestroy(): void { this.sub.unsubscribe(); }

  /* -------------------------------------------------------------------------- */
  /*                            CHECK COMPONENT STATE                           */
  /* -------------------------------------------------------------------------- */
  private platformThemeState() {
    this.observer.observe([BREAKPOINT_VALUE.mobile]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[BREAKPOINT_VALUE.mobile]) {
        this.isMobile = true;
        this.booksClassList.push('mobile');
      } else {
        this.isMobile = false;
        this.booksClassList = this.booksClassList.filter((s: any) => s !== 'mobile');
      }
    });

    if (this.platform.ANDROID || this.platform.IOS) {
      this.booksClassList.push('ios-android');
    } else { this.booksClassList = this.booksClassList.filter((s: any) => s !== 'ios-android'); }

    const theme = this.theme.getInitTheme();
    if (theme == 'dark') { this.booksClassList.push('dark'); }
    else if (theme == 'light') { this.booksClassList = this.booksClassList.filter((s: any) => s !== 'light'); }
  }

  /* -------------------------------------------------------------------------- */
  /*                               DATABASE STUFF                               */
  /* -------------------------------------------------------------------------- */
  getBooks() {
    this.book.getBookListData().then((data: any) => {
      this.bookCards = data;
      console.log(data);
    });
  }

  onSearch(data: any) {
    this.searchText = data;
  }
}
