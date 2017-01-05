export class listitem{
public note:string;
public desc : string;
public title: string;
public image: string;

  constructor(note: string, desc: string, title: string, image: string) {
    this.note = note;
    this.desc = desc;
    this.title = title;
    this.image = image;
  }
}
