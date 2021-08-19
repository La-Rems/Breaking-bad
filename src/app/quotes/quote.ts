export class Quote {
  private _id: number;
  private _quote: string;
  private _author: string;
  private _series: string;

  constructor(id: number, quote: string, author: string, series: string) {
    this._id = id;
    this._quote = quote;
    this._author = author;
    this._series = series;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get quote(): string {
    return this._quote;
  }

  set quote(value: string) {
    this._quote = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get series(): string {
    return this._series;
  }

  set series(value: string) {
    this._series = value;
  }
}
