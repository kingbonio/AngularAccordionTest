import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  @Input() data: any;
  @Input() subTeamSection: boolean = false;

  public formattedTeamsData: any;
  public collapsed: boolean = true;

  ngOnInit() {
    this.formattedTeamsData = this.data;
    this.subTeamSection = this.subTeamSection;
  }

  /**
   * Handler for click event for this accordion header
   */
  public onClick($event: any): void {
    this.collapsed = !this.collapsed;
  }
}
