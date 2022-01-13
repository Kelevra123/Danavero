import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from "../app.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export type gitAnswer = {
  incomplete_results: boolean,
  items: [],
  total_count: number
}


@Component({
  selector: '.wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrapperComponent implements OnInit {
  public $tableContent: Observable<gitAnswer | null> = new Observable<gitAnswer | null>();
  public inputValue: string = '';
  public switch: boolean = false;

  constructor(
    private readonly _appService: AppService
  ) { }

  ngOnInit(): void {
    this.generateContent('js');
  }

  public onSearch(): void {
    this.generateContent(this.inputValue);
  }

  public onChangeValue(event: any): void {
    this.inputValue = event.target.value;
  }

  public generateContent(search: string): void {
    this.$tableContent = this._appService.fetch(search).pipe(map(data => data.items));
  }

  public onSwitch(value: boolean): void {
    this.switch = value;
  }
}
