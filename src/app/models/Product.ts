export class Product
{
    id : string;
    name : string;
    category : string;
    description : string;
    price : number;

    constructor()
    {
        this.id='';
        this.name='';
        this.category='';
        this.description='';
        this.price=0;
    }
}

export class AddProduct 
{
   
    name : string;
    category : string;
    description : string;
    price : number;

    constructor()
    {
    
        this.name='';
        this.category='';
        this.description='';
        this.price=0;
    }
}