// See: https://yandex.ru/dev/dialogs/alice/doc/protocol.html#request

import { Nlu } from './nlu';
export * from './nlu';

export interface ReqBody {
  meta: Meta;
  request: Request;
  session: Session;
  state?: State;
  version: '1.0';
}

export interface Meta {
  locale: string;
  timezone: string;
  client_id: string;
  interfaces: {
    screen?: Record<string, never>;
    account_linking?: Record<string, never>;
  }
}

export interface Request {
  command: string;
  original_utterance: string;
  type: 'SimpleUtterance' | 'ButtonPressed';
  markup?: {
    dangerous_context?: true;
  };
  payload?: unknown;
  nlu?: Nlu;
}

export interface Session {
  message_id: number;
  session_id: string;
  skill_id: string;
  user_id: string;
  user?: {
    user_id: string;
    access_token: string;
  };
  application: {
    application_id: string;
  }
  new: boolean;
}

export interface State {
  session?: Record<string, unknown>;
  application?: Record<string, unknown>;
  user?: Record<string, unknown>;
}
