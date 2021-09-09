/**
 * Entities: https://yandex.ru/dev/dialogs/alice/doc/naming-entities.html
 * Intents: https://yandex.ru/dev/dialogs/alice/doc/nlu.html
 */
export interface Nlu {
  tokens: string[];
  entities: Entity[];
  intents?: Record<string, Intent>;
}

export interface Intent {
  slots: Record<string, Slot>
}

// types
export enum YANDEX {
  FIO = 'YANDEX.FIO',
  GEO = 'YANDEX.GEO',
  DATETIME = 'YANDEX.DATETIME',
  NUMBER = 'YANDEX.NUMBER',
  STRING = 'YANDEX.STRING',
}

// built-in intents
export enum INTENTS {
  CONFIRM = 'YANDEX.CONFIRM',
  REJECT = 'YANDEX.REJECT',
  HELP = 'YANDEX.HELP',
  REPEAT = 'YANDEX.REPEAT',
}

export type Entity = YandexFio | YandexGeo | YandexDatetime | YandexNumber;
export type Slot = YandexFio | YandexGeo | YandexDatetime | YandexNumber | YandexString;

export interface Tokens {
  start: number;
  end: number;
}

export interface YandexFio {
  type: YANDEX.FIO;
  tokens: Tokens;
  value: {
    first_name?: string;
    patronymic_name?: string;
    last_name?: string;
  }
}

export interface YandexGeo {
  type: YANDEX.GEO;
  tokens: Tokens;
  value: {
    country?: string;
    city?: string;
    street?: string;
    house_number?: number;
    airport?: string;
  }
}

export interface YandexDatetime {
  type: YANDEX.DATETIME;
  tokens: Tokens;
  value: {
    year?: number;
    month?: number;
    day?: number;
    hour?: number;
    minute?: number;
    month_is_relative?: boolean;
    day_is_relative?: boolean;
    hour_is_relative?: boolean;
    minute_is_relative?: boolean;
  }
}

export interface YandexNumber {
  type: YANDEX.NUMBER;
  value: number;
}

export interface YandexString {
  type: YANDEX.STRING;
  value: string;
}
