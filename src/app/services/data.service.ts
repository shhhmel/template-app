import { Injectable } from '@angular/core';
import { Template } from '../models/template';

import { data } from '../data/mock-data';

@Injectable()
export class DataService {
  templates:Template[];

  constructor() {
    if (localStorage.getItem('templates')) {
      this.templates = JSON.parse(localStorage.getItem('templates'));
    } else {
      this.templates = data;
    }
  }

  getTemplates(): Template[] {
    return this.templates;
  }

  getTemplate(id: number): Template {
    return this.templates.filter(tmp => tmp.id === +id)[0];
  }

  changeTemplate(changedTemplate: Template): void {
    this.templates.forEach((tmp, index) => {
      if (tmp.id === changedTemplate.id) {
        this.templates[index] = changedTemplate;
      }
    });

    localStorage.setItem('templates', JSON.stringify(this.templates));
  }

}
