import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface PriceDetails {
  currency: string;
  value: number;
  displayValue: string;
}

interface Book {
  ISBN: number;
  title: string;
  author: string;
  summary: string;
  image: string;
  price: PriceDetails;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() Book: Book | undefined;
  // @Input() price: object | undefined;
  @Output() eventClicked: EventEmitter<Book> = new EventEmitter<Book>();
  addToCart(Book: Book) {
    this.eventClicked.emit(Book);
  }


  function() {
    console.log(this.Book);
  }

  ngOnInit() {
    const ps = document.querySelectorAll('p');
    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        entry.target.classList[entry.target.scrollHeight > entry.contentRect.height ? 'add' : 'remove']('truncated');
      }
    });

    ps.forEach(p => {
      observer.observe(p);
    });
  }
}
