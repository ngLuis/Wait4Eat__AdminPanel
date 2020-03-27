import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Form } from '../../enums/form.enum';
import { faFilter, faBroom } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {

  faFilter = faFilter;
  faBroom = faBroom;
  formVisible: boolean = false;

  @Input() formType: Form;
  @Output() dataFiltered: EventEmitter<any> = new EventEmitter();
  @Output() clearData: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  showForm() {
    this.formVisible = !this.formVisible;
  }

  filterData(formData) {
    this.dataFiltered.emit(formData);
  }

  clearList() {
    this.clearData.emit(true);
  }

}
