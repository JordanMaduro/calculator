import { Key } from "../keypad.typing";

export const isAvailableKey =
  (keyList: Key[]) =>
  ({ key }: { key: string }) =>
    !!getByKey(keyList, key);

export const getByKey = (keyList: Key[], key: string) =>
  keyList.find((i) => i.keyBinding === key || i.value === key);

export const execKey =
  (keyList: Key[], onFound: (foundKey: Key) => void) =>
  ({ key }: { key: string }) => {
    const found = getByKey(keyList, key);
    if (found) {
      onFound(found);
    }
  };
