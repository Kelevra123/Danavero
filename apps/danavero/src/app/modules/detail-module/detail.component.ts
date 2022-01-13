import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { AppService } from "../../app.service";
import { IUser } from "../types";



@Component({
  selector: '.detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DetailComponent implements OnInit {
  public userId: number = 0;
  public $userInfo: Observable<IUser> = new Observable<IUser>();

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _appService: AppService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: any) => {
      if (params.user) {
        this.userId = params.user
      }
    });
    this.$userInfo = this._appService.fetchOne(this.userId);
  }

}
