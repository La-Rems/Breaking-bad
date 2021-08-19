export class Character {
  private _char_id: number;
  private _name: string;
  private _birthday: string;
  private _occupation: any;
  private _img: string;
  private _status: string;
  private _nickname: string;
  private _appearance: any;
  private _portrayed: string;
  private _category: any;


  constructor(char_id: number, name: string, birthday: string, occupation: any, img: string, status: string, nickname: string, appearance: any, portrayed: string, category: any) {
    this._char_id = char_id;
    this._name = name;
    this._birthday = birthday;
    this._occupation = occupation;
    this._img = img;
    this._status = status;
    this._nickname = nickname;
    this._appearance = appearance;
    this._portrayed = portrayed;
    this._category = category;
  }


  get char_id(): number {
    return this._char_id;
  }

  set char_id(value: number) {
    this._char_id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get birthday(): string {
    return this._birthday;
  }

  set birthday(value: string) {
    this._birthday = value;
  }

  get occupation(): any {
    return this._occupation;
  }

  set occupation(value: any) {
    this._occupation = value;
  }

  get img(): string {
    return this._img;
  }

  set img(value: string) {
    this._img = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get nickname(): string {
    return this._nickname;
  }

  set nickname(value: string) {
    this._nickname = value;
  }

  get appearance(): any {
    return this._appearance;
  }

  set appearance(value: any) {
    this._appearance = value;
  }

  get portrayed(): string {
    return this._portrayed;
  }

  set portrayed(value: string) {
    this._portrayed = value;
  }

  get category(): any {
    return this._category;
  }

  set category(value: any) {
    this._category = value;
  }
}
