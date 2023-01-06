import { Injectable } from "@angular/core";
import { Product } from "../interfaces/product.interface";

@Injectable()
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'soap',
      price: '1',
      size: '100g',
      description: 'Washing dishes has never been easier with Axion and its new powerful formula against grease. Get to know the new formula of Axion liquid soap, 100% effective grease remover with lemon. Active foam. Eliminate Stuck Fat. Effective Fat Burner. Fight Odors.',
      img: 'soap.png',
    },
    {
      id: 2,
      name: 'Rice',
      price: '4',
      size: '1L',
      description: 'Enjoy the delicious flavor of husked rice from which the germ and bran have been totally removed by processing with the addition of vitamin A',
      img: 'rice.png'
    },
    {
      id: 3,
      name: 'Egg',
      price: '7',
      size: '30 unit',
      description: 'Eggs of the best quality',
      img: 'eggs.png'
    },
    {
      id: 4,
      name: 'olive oil',
      price: '2',
      size: '100ml',
      description: 'Our new Organic Extra Virgin Olive Oil is a healthy alternative for cooking and dressing your favorite foods!',
      img: 'oil.png'
    },
    {
      id: 5,
      name: 'cinnamon',
      price: '1',
      size: '100g',
      description: 'cinnamon of the best quality',
      img: 'cinnamon.png'
    },
    {
      id: 6,
      name: 'Beans Bush',
      price: '2',
      size: '28 OZ',
      description: 'Make a little magic with this chili starter, masterfully simmered to perfection. It’s the quickest way to whip up a hearty homemade chili. No wands required.',
      img: 'beans.png'
    },
    {
      id: 7,
      name: 'lettuce',
      price: '',
      size: '1 Unit',
      description: 'lettuce of the best quality',
      img: 'lettuce.png'
    },
    {
      id: 8,
      name: 'tomato',
      price: '1',
      size: '1 unit',
      description: 'Tomato of the best quality',
      img: 'tomato.png'
    },
    {
      id: 9,
      name: 'coffee',
      price: '3',
      size: '85g',
      description: 'This is a smooth and easy-to-prepare coffee, a must in your day-to-day life, since it is ideal to accompany breakfast, a mid-morning, share with those you love the most or make any moment a special moment.',
      img: 'coffe.png'
    },
    {
      id: 10,
      name: 'milk',
      price: '7',
      size: '1L',
      description: 'Alquería Entera 100% Creamy milk is ideal for those people who enjoy the original flavor of milk and all its creaminess.',
      img: 'milk.png'
    },
  ];

  public getProductList() {
    return this.products;
  }

}
