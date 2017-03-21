import { Component, OnInit } from '@angular/core';
import { Team, TeamService, TEAMS } from '../team.service';
import { TeamDetailComponent } from '../team-detail/team-detail.component'

@Component( {
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  providers: [TeamService]
} )
export class TeamsComponent implements OnInit {
  selected_team: Team;
  teams: Team[];

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
