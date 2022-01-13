import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";
import { RoutePathKey } from "../../routes";
import { ITableElement } from "../types";



@Component({
  selector: '.block-element',
  templateUrl: './block-element.component.html',
  styleUrls: ['./block-element.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockElementComponent {
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
