import {Component, OnInit} from '@angular/core';
import {Logger} from 'angular2-logger/core';
import {AppService, DataStore, User} from '../../app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [AppService]

})
export class FooterComponent implements OnInit {

  DataStore = DataStore;
  User = User;

  constructor(private _appService: AppService,
              private _logger: Logger) {
    this._logger.log('nav.ts:NavComponent');
    // this._appService.getnav()
  }

  ngOnInit() {
  }

}