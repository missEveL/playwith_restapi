export class NavItem {
  public label: string;
  public routerLink: string;

  constructor(label: string, routerLink: string) {
    this.label = label;
    this.routerLink = routerLink;
  }
}
