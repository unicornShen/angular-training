import { SelectItemForm } from "./SelectItemForm.model";

/**
 * Multi select form.
 */
export class MultiSelectForm {
  title: string = ''; // 表頭.
  selectList: SelectItemForm[] = []; // 來源清單.
  onSelectItems: SelectItemForm[] = []; // 目標清單.
}
