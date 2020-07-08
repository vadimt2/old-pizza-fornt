import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { OrderDataAppService } from '../services/order/order-data-app.service';
import { OrderService } from '../services/order/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GetCurrencyService } from '../services/get-currency/get-currency.service';
import { IBellingAndShippInfo } from '../interfaces/ibelling-shipping-info';
import { BellingAndShippInfo } from '../common/belling-and-shipp-info';
import { BellingOrShipping } from '../common/belling-or-shipping.enum';
import { OrderDetails } from '../common/order-details';
import { IOrderDetails } from '../interfaces/iorder-details';
import { IOrder } from '../interfaces/iorder';
import { IUser } from '../interfaces/iuser';
import { User } from '../common/user';
import { Order } from '../common/order';
import { CartService } from '../services/cart/cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  products: IProduct[] = [];
  isAddressTheSame: boolean = false;
  theSameAddress: string = "theSameAddress";
  shippingPrice: number = null;
  cartTotal: number = 0;
  subTotal: number = 0;
  delivery: boolean = false;
  getCartInfo = null;
  checkoutForm: FormGroup;
  euro:number = null;


  constructor(private cartService: CartService,
    private orderDataAppService: OrderDataAppService,
    private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private getCurrencyService:GetCurrencyService) { }

  ngOnInit(): void {
    this.getCurrencyService.getEuroCurr().subscribe(data => {
      if(data.quotes.USDEUR){
        this.euro = data.quotes.USDEUR;
      }
    });

    this.getCartInfo = this.orderDataAppService.tempCartInfo;
    // console.log(this.getCartInfo)
    this.products = this.cartService.orders;
    this.cartTotal = this.cartService.totalcartvalue;
     this.checkoutForm = this.formBuilder.group({
      firstNameB: new FormControl('', ),
      lastNameB: new FormControl('', Validators.required),
      emailB: new FormControl('', Validators.required),
      phoneB: new FormControl('', Validators.required),
      addressB: new FormControl('', Validators.required),
      address2B: new FormControl('', ),
      countryB: new FormControl('' , Validators.required),
      stateB: new FormControl('', Validators.required),
      zipB: new FormControl('', Validators.required),
      theSameAddress: new FormControl('',),
      firstNameSh: new FormControl('',),
      lastNameSh: new FormControl('', ),
      addressSh: new FormControl('', ),
      addressSh2: new FormControl('', ),
      countrySh: new FormControl('',),
      stateSh: new FormControl('',),
      zipSh: new FormControl('', ),
    });

    if (this.products.length > 0) {
 
      if (!this.getCartInfo) {
        this.router.navigate(['/cart'])
      }
      else {
        this.shippingPrice = this.getCartInfo.shipping.price;
          this.subTotal = this.cartService.getSubTotal();
          if(this.getCartInfo.shipping.title === "Delivery"){
            this.delivery = true;
          }

      }
      return;
    }
    this.router.navigate(['/home'])
  }



  onItemChange(event) {
    if (event.target.name === this.theSameAddress && event.target.checked) {
      this.isAddressTheSame = true;
      return;
    }

    this.isAddressTheSame = false;
  }

  onSubmit(form: FormGroup) {
    // It can be out at the service.


    console.log('Valid?', form.valid);
    if (form.valid) {

      // Belling:
      let biilingInfo: IBellingAndShippInfo = new BellingAndShippInfo();
      biilingInfo.firstName = form.value.firstNameB;
      biilingInfo.lastName = form.value.lastNameB;
      biilingInfo.email = form.value.emailB;
      biilingInfo.phone = form.value.phoneB;
      biilingInfo.address = form.value.addressBB;
      biilingInfo.address2 = form.value.address2B;
      biilingInfo.country = form.value.countryB;
      biilingInfo.state = form.value.stateB;
      biilingInfo.zip = form.value.zipB;
      biilingInfo.bellingOrShipping = BellingOrShipping.belling;
      // biilingInfo.order = null;
      // biilingInfo.orderId = 0;
      biilingInfo.isTheSame = false;
      biilingInfo.isSaved = false;


      //Shipping is the same
      let shippingAddInfo: IBellingAndShippInfo = new BellingAndShippInfo();
      if (this.isAddressTheSame) {
        shippingAddInfo = biilingInfo;
        shippingAddInfo.bellingOrShipping = BellingOrShipping.shipping;
        shippingAddInfo.isTheSame = true;
        biilingInfo.isTheSame = true;
      }
      else {
        shippingAddInfo.firstName = form.value.firstNameB
        shippingAddInfo.lastName = form.value.lastNameB;
        shippingAddInfo.email = form.value.emailB;
        shippingAddInfo.phone = form.value.phoneB;
        shippingAddInfo.address = form.value.addressB;
        shippingAddInfo.address2 = form.value.address2B;
        shippingAddInfo.country = form.value.countryB;
        shippingAddInfo.state = form.value.stateB;
        shippingAddInfo.zip = form.value.zipB;
        shippingAddInfo.isTheSame = false;
        shippingAddInfo.bellingOrShipping = BellingOrShipping.shipping;
      }


      //IF USER IS REGISTERED:
      // WILL ME A SERVICE CALL BY ID FROM THE LOGIN DATA AUTH SERVICE


      // NOT REGISTERED WILL BE CREATED!!!
      let user: IUser = new User();
      user.email = biilingInfo.email;
      user.firstName = biilingInfo.firstName;
      user.lastName = biilingInfo.lastName;
      user.isRegistered = false;
      user.phone = biilingInfo.phone;
      user.roleId = 2;


      let order: IOrder = new Order();
      order.id = 0;
      order.note = this.getCartInfo.note;
      order.shippingId = this.getCartInfo.shipping.id;
      order.tax = 0;
      order.userId = 0;
      order.user = user;
      order.total = this.cartService.getSubTotal() + this.shippingPrice;

      order.OrderDetails = new Array<OrderDetails>();
      this.cartService.orders.forEach(item => {
        let oderDetail: IOrderDetails = new OrderDetails();
        oderDetail.itemId = item.id;
        oderDetail.quantity = item.quantity;
        // will be chnaged as item price is not the sale price
        oderDetail.sellPrice = item.price;
        order.OrderDetails.push(oderDetail);
      })
      order.bellingAndShippInfo = new Array<IBellingAndShippInfo>();

      if (this.getCartInfo.shipping.id == 1) {
        order.bellingAndShippInfo.push(biilingInfo);
      }
      else {
        order.bellingAndShippInfo.push(biilingInfo);
        order.bellingAndShippInfo.push(shippingAddInfo);
      }

      this.orderService.inseret(order).subscribe((data: any) => {
        console.log(data)
        data.products = this.cartService.orders;
        // console.log(this.shippingPrice)
        // data.shipping.price = this.shippingPrice;
        // data.shipping.title = this.getCartInfo.shipping.title;
        this.cartService.totalcartvalue = 0;
        this.cartService.sendTotal(this.cartService.totalcartvalue);
        this.cartService.orders = [];
        this.cartService.deleteAllLocalSorage();
        // just for now

        this.router.navigate(['/thank-you'], { state: { data: { data } } })
      }, err => {
        console.log(err)
      });



    }


    //  form.value.shipping.title;


    // this.router.navigate(['/checkout'])
  }
}
