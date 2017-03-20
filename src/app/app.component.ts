import { Component, OnInit } from '@angular/core';
import { Team, TeamService, TEAMS } from './team.service';
import { TeamDetailComponent } from './team-detail/team-detail.component'

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TeamService]
} )
export class AppComponent implements OnInit {
  selected_team: Team;
  teams: Team[];

  title = 'Shuhari';

  constructor( private team_service: TeamService ) { }

  ngOnInit(): void {
    this.getTeams();
  }

  onSelect( team: Team ): void {
    this.selected_team = team;
  }

  getTeams(): void {
    this.team_service.getTeams().then( teams => this.teams = teams );
  }
}
