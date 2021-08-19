export class Episode {
  private _episode_id: number;
  private _title: string;
  private _season: number;
  private _episode: number;
  private _air_date: string;
  private _characters: any;
  private _series: string;

  constructor(episode_id: number, title: string, season: number, episode: number, air_date: string, characters: any, series: string) {
    this._episode_id = episode_id;
    this._title = title;
    this._season = season;
    this._episode = episode;
    this._air_date = air_date;
    this._characters = characters;
    this._series = series;
  }

  get episode_id(): number {
    return this._episode_id;
  }

  set episode_id(value: number) {
    this._episode_id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get season(): number {
    return this._season;
  }

  set season(value: number) {
    this._season = value;
  }

  get episode(): number {
    return this._episode;
  }

  set episode(value: number) {
    this._episode = value;
  }

  get air_date(): string {
    return this._air_date;
  }

  set air_date(value: string) {
    this._air_date = value;
  }

  get characters(): any {
    return this._characters;
  }

  set characters(value: any) {
    this._characters = value;
  }

  get series(): string {
    return this._series;
  }

  set series(value: string) {
    this._series = value;
  }
}
