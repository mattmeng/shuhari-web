import { Component, Input } from '@angular/core';
import { Team } from '../team.service';

@Component( {
  selector: 'shuhari-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
} )

export class TeamDetailComponent {
  @Input()
  team: Team;
}
