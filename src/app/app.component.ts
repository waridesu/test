import { Component, OnInit } from '@angular/core';


interface item {
  id: number | null
  src: string | null
  name: string | null,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent implements OnInit {
  title = 'test';
  public array: any = [];

  public ngOnInit() {
    for (let i = 0; i < localStorage.length; i++) {
      let my = localStorage.getItem([i].toString());
      if (my != null) {
        let two = my.split('__');
        let item: item = {
          id: i,
          src: `\"${two[1]}`,
          name: two[0],
        };
        this.array.push(item);
      }
    }
  }

  onChange(event: any) {
    for (let i = 0; i < event.target.files.length; i++) {
      const file = event.target.files[i];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        return localStorage.setItem('' + [i], JSON.stringify(file.name + '__' + reader.result));
      };
    }
    for (let i = 0; i < localStorage.length; i++) {
      let my = localStorage.getItem([i].toString());
      if (my != null) {
        let two = my.split('__');
        let item: item = {
          id: i,
          src: `\"${two[1]}`,
          name: two[0],
        };
        this.array.push(item);
      }
    }
  }

  deleteLocal(key: string) {
    localStorage.removeItem(key);
    for (let i = 0; i < localStorage.length; i++) {
      let my = localStorage.getItem([i].toString());
      if (my != null) {
        let two = my.split('__');
        let item: item = {
          id: i,
          src: `\"${two[1]}`,
          name: two[0],
        };
        this.array.push(item);
      }
    }
  }
}
