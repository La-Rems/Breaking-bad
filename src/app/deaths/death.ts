export class Death {
  private _id: number;
  private _death: string;
  private _cause: string;
  private _responsible: string;
  private _last_words: string;
  private _season: number;
  private _episode: number;
  private _number_of_deaths: number


  constructor(id: number, death: string, cause: string, responsible: string, last_words: string, season: number, episode: number, number_of_deaths: number) {
    this._id = id;
    this._death = death;
    this._cause = cause;
    this._responsible = responsible;
    this._last_words = last_words;
    this._season = season;
    this._episode = episode;
    this._number_of_deaths = number_of_deaths;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get death(): string {
    return this._death;
  }

  set death(value: string) {
    this._death = value;
  }

  get cause(): string {
    return this._cause;
  }

  set cause(value: string) {
    this._cause = value;
  }

  get responsible(): string {
    return this._responsible;
  }

  set responsible(value: string) {
    this._responsible = value;
  }

  get last_words(): string {
    return this._last_words;
  }

  set last_words(value: string) {
    this._last_words = value;
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

  get number_of_deaths(): number {
    return this._number_of_deaths;
  }

  set number_of_deaths(value: number) {
    this._number_of_deaths = value;
  }
}
