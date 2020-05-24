export interface Device {
  id: string;
  name: string | null;
  fan: boolean;
  light: boolean;
}

export type MainNavigationParamList = {
  Device: {id: string};
};
