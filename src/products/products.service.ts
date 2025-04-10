import { Injectable} from '@nestjs/common';
import { Product } from './interfaces/product/product.interface';

@Injectable()
export class ProductsService {
    private products: Product[] = [
        {
            id: 1,
            name: 'Mazinger Z ',
            description: 'Figura de Accion Coleccion',
          },
          {
            id: 2,
            name: 'Grau 5.56',
            description: 'Arma Automatica replica de Warzone',
          },
          {
            id: 3,
            name: 'HDR',
            description: 'Calibre 50. Cerrojo',
          }
        ];
      
        getAll(): Product[] {
          return this.products;
        }
      
        getId(id: number): Product  | undefined {
          return this.products.find( (item: Product) => item.id == id);
        }
      
        insert(body: any) {
          this.products = [
            ...this.products,
            {
              id: this.lastId() + 1,
              name: body.name,
              description: body.description,
            }
          ];
        }
      
        update(id: number, body: any) {
          let product: Product = {
            id,
            name: body.name,
            description: body.description,
          }
          this.products = this.products.map( (item: Product) => {
            console.log(item, id, item.id == id);
            return item.id == id ? product : item;
          });
        }
      
        delete(id: number) {
          this.products = this.products.filter( (item: Product) => item.id != id );
        }
      
        private lastId(): number {
          return this.products[this.products.length - 1].id;
        }
      }

