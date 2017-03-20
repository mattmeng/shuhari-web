import { Component, Input } from '@angular/core';
import { Team } from '../team.service';

@Component( {
  selector: 'team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
} )

export class TeamDetailComponent {
  @Input()
  team: Team;
}
