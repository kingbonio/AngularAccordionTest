import { Component } from '@angular/core';
import { TeamsService } from './services/teams.service';
import * as teamsDataHelper from './helpers/teams-data.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public teamsData: any[] = [];
  public teamsDataReordered: any = {};
  private teamsService: TeamsService;

  constructor(teamsService: TeamsService) {
    this.teamsService = teamsService;
  }

  ngOnInit() {
    this.loadFormattedTeamsData();
  }

  /**
   * Loads teams data from teams service
   */
  private loadFormattedTeamsData() {
    this.teamsService.getTeamsData().subscribe((data) => {
      this.teamsData = teamsDataHelper.formatTeamsData(data.default);
    });
  }
}
