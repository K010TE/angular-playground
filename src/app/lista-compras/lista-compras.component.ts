import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemList } from './itemList';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {
  item = signal<string>('');
  list = signal<ItemList[]>([]);

  addItem() {
    
    if (this.item() !== '') {

      let itemList = new ItemList();
      itemList.name = this.item();
      itemList.id = this.list().length + 1;
      this.list.update(items => [...items, itemList]);
      this.item.set('');
    }


  }

  checkItem(item: ItemList) {
    item.checked = !item.checked;
    this.list.update(items => [...items]);
  }


  deleteItem(item: ItemList) {
    if (confirm(`Tem certeza que deseja remover o item ${item.name}?`)) {
      this.list.update(items => items.filter(i => i.id !== item.id));
    }
  }

  deleteList() {
    if (confirm('Tem certeza que deseja limpar toda a lista?')) {
      this.list.set([]);
    }
  }

}
