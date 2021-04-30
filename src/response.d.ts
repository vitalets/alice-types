// See: https://yandex.ru/dev/dialogs/alice/doc/protocol.html#response

import { Card } from './images';
export * from './images';

export interface ResBody {
  response: Response;
  version: '1.0';
  analytics?: Analytics;
  session_state?: unknown;
  application_state?: unknown;
  user_state_update?: unknown;
}

export interface Response {
  text: string;
  tts?: string;
  card?: Card;
  buttons?: Button[];
  end_session: boolean;
}

export interface Button {
  title: string;
  url?: string;
  payload?: unknown;
  hide?: boolean;
}

export interface Analytics {
  events: AnalyticsEvent[];
}

export interface AnalyticsEvent {
  name: string;
  value?: Record<string, unknown>;
}
