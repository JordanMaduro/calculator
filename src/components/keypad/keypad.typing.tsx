export enum KeyTypes {
  EXPRESSION = "EXPRESSION",
  FUNCTION = "FUNCTION"
}

export interface Key {
  value: string;
  label: string;
  type?: KeyTypes;
  keyBinding?: string;
  hidden?: boolean;
}
