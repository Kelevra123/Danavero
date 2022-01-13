import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";
import { RoutePathKey } from "../../routes";
import { ITableElement } from "../types";



@Component({
  selector: '.table-element',
  templateUrl: './table-element.component.html',
  styleUrls: ['./table-element.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableElementComponent {
  @Input() public element: ITableElement | null = null;

  constructor(
    private readonly _router: Router
  ) { }

  public redirect(): void {
    if (this.element) {
      this._router.navigate([`/${RoutePathKey.DETAIL}`, this.element.id]);
    }
  }

}
