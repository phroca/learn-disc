import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

export async function set(cle: string, value: any): Promise<void> {
  await Storage.set({
    key: cle,
    value: JSON.stringify(value)
  });
}

export async function get(cle: string): Promise<any> {
  const item = await Storage.get({ key: cle });
  return JSON.parse(item.value);
}

export async function remove(cle: string): Promise<void> {
  await Storage.remove({
    key: cle
  });
}
