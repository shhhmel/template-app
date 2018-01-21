import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Template } from '../../models/template';
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-template-cmp',
  templateUrl: './template-cmp.component.html',
  styleUrls: ['./template-cmp.component.css']
})
export class TemplateCmpComponent implements OnInit {
  template: Template;
  isEdit: boolean;
  tmpText: string;
  tmpFontSize: number;
  target: HTMLElement;
  chosenElement: HTMLElement;
  editableElements;
  templateWrapper;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.template = this.dataService.getTemplate(id);

    this.isEdit = false;

    this.templateWrapper = document.querySelector('.card-body');
  }

  ngAfterViewInit() {
    this.editableElements = document.querySelectorAll('.editable');
  }

  onChooseTemplate(event) {
    const target = event.target;
    if(target.classList.value.indexOf('editable') != -1) {
      if (target.style.fontSize) {
        this.tmpFontSize = parseFloat(target.style.fontSize);
      } else {
        this.tmpFontSize = parseFloat(getComputedStyle(target).fontSize);
      }

      this.chosenElement = target;
      this.tmpText = target.innerText;
      this.isEdit = true;
    }
  }

  onSaveChanges() {
    this.chosenElement.innerText = this.tmpText;
    this.chosenElement.style.fontSize = `${this.tmpFontSize}px`;

    this.template.modified = Date.now();
    this.template.template = this.templateWrapper.innerHTML;

    this.dataService.changeTemplate(this.template);

    this.isEdit = false;

    this.flashMessagesService.show('Saved in Local Storage', { cssClass: 'alert-success text-center', timeout: 3000 });
  }

}
