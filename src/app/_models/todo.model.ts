export class TodoForListModel {
  id: number;
  title: string;
  description: string;

  constructor(id: number = 0, title: string = '', description: string = '') {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}
export class TodoForSaveModel {
  id: number;
  title: string;
  description: string;

  constructor(id: number = 0, title: string = '', description: string = '') {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}

