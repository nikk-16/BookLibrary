import { Component, EventEmitter, Input, Output } from '@angular/core';

interface PriceDetails {
  currency: string;
  value: number; 
  displayValue: string;
}

interface Book{
  ISBN:number;
  title:string;
  author:string;
  summary:string;
  image:string;
  price: PriceDetails;
}

interface CartItem{
  book: Book;
  quantity: number;
}

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() cartItem : CartItem | undefined;
  @Output() removeFromCartEvent = new EventEmitter<CartItem>();
  @Output() increaseQuantityEvent = new EventEmitter<CartItem>();
  @Output() decreaseQuantityEvent = new EventEmitter<CartItem>();
  
  removeFromCart(cartItem:CartItem){
    this.removeFromCartEvent.emit(cartItem);
  }
  
  increaseQuantity(cartItem:CartItem){
    this.increaseQuantityEvent.emit(cartItem)
  }
  
  decreaseQuantity(cartItem:CartItem){
    this.decreaseQuantityEvent.emit(cartItem)
  }
  }
