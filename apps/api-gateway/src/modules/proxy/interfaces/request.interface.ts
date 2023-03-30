import { IncomingMessage } from 'http';
import { IServer } from 'libs/common/interfaces/server.interface';

export interface Request extends IncomingMessage {
  proxy?: {
    id: string;
    server?: IServer;
    uri: string;
    service?: string;
    parameters?: { [key: string]: string | number };
  };
}