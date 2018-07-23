/**
 * Select item form.
 */
export class SelectItemForm {
  key: string;
  value: string;
  onSelected: boolean = false;

  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }
}
