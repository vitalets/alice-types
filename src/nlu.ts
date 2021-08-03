export interface Nlu {
  tokens: string[];
  entities: NluEntity[];
  intents?: Record<string, unknown>;
}

export type NluEntity = YandexFio | YandexGeo | YandexDatetime | YandexNumber;

export interface YandexBaseEntity {
  tokens: {
    start: number;
    end: number;
  };
}

export interface YandexFio extends YandexBaseEntity {
  type: 'YANDEX.FIO';
  value: {
    first_name?: string;
    patronymic_name?: string;
    last_name?: string;
  }
}

export interface YandexGeo extends YandexBaseEntity {
  type: 'YANDEX.GEO';
  value: {
    country?: string;
    city?: string;
    street?: string;
    house_number?: number;
    airport?: string;
  }
}

export interface YandexDatetime extends YandexBaseEntity {
  type: 'YANDEX.DATETIME';
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

export interface YandexNumber extends YandexBaseEntity {
  type: 'YANDEX.NUMBER';
  value: number;
}
