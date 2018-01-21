import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Template } from '../../models/template';

@Component({
  selector: 'app-templates-table-cmp',
  templateUrl: './templates-table-cmp.component.html',
  styleUrls: ['./templates-table-cmp.component.css']
})
export class TemplatesTableCmpComponent implements OnInit {
  templates:Template[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.templates = this.dataService.getTemplates();
  }

}
