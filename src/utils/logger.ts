import Console from 'beautlog';
import moment from 'moment';

export class Logger {
  constructor(private context?: string) {}
  public info(value: string) {
    return Console.info(this.handleWithContext(value));
  }
  public log(value: string) {
    return Console.log(this.handleWithContext(value));
  }
  public ok(value: string) {
    return Console.ok(this.handleWithContext(value));
  }
  public error(value: string) {
    return Console.error(this.handleWithContext(value));
  }
  private handleWithContext(value: string) {
    return `${this.context || Logger.name}: ${value}... ${moment().format('YYYY-MM-DD HH:mm:ss')}`;
  }
}
export default new Logger();
