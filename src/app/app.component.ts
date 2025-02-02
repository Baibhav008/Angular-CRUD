import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from './services/master.service';
import { AddProduct, Product } from './models/Product';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'products-console';
  service = inject(MasterService);

  productForm: FormGroup;
  categories: string[] = ['Electronics', 'Books', 'Clothing', 'Furniture'];

  isExisting : boolean = false;

  constructor() {
    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required, Validators.min(0)])
    });
  }

  products : Product[] = [];

  clearForm=()=>{this.productForm.reset();this.isExisting=false;}
  

  ngOnInit(): void {
   this.getProds();
    //this.service.addProduct(this.product).subscribe((e:any)=>console.log(e))
  }

  //FETCH THE PRODUCTS INTO TABLE-----------------------------------------
  getProds()
  {
    this.service.getProducts().subscribe((e:any)=>{
      this.products=e;
      console.log(this.products);
    })
  }

  //ADD THE PRODUCTS INTO TABLE-----------------------------------------
  onSubmit() 
  {
    if (this.productForm.valid)
      {
        console.log(this.productForm.value);
      
        const product: AddProduct = {
        name: this.productForm.value.name,
        category: this.productForm.value.category,
        description: this.productForm.value.description,
        price: this.productForm.value.price
        };

        this.service.addProduct(product).subscribe((e)=>
          {
            console.log(e);
            this.getProds();
            this.productForm.reset();
          })
        
      }
      else{alert("no")}
  }


  //DELETE THE PRODUCT FROM TABLE-----------------------------------------
  delProd(id:string)
  {
    const confirmation = confirm(`Are you sure you want to delete ?`);
    if(confirmation)
    {
      this.service.delete(id).subscribe((e)=>{
        console.log(e);
        this.getProds();
      })

    }
    
  }

  
  selectedProd :string='';

  editProd(product:Product)
  {
    this.productForm.setValue({
      name: product.name,
      category: product.category,
      description: product.description,
      price: product.price
    });
    this.selectedProd=product.id;

    this.isExisting=true;
  }
  editToDB(e:Event)
  {
    e.preventDefault();
    const eProd : AddProduct ={
        
        name: this.productForm.value.name,
        category: this.productForm.value.category,
        description: this.productForm.value.description,
        price: this.productForm.value.price
    }
    
    this.service.addUpdate(eProd,this.selectedProd).subscribe((e)=>
      {
        console.log(e);
        this.getProds();
        this.productForm.reset();
        this.isExisting=false;
      })
  }

}


