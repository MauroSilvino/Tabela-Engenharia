import { IDateProvider } from "../IDateProvider";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

class DayJsDateProvider implements IDateProvider {
  compareInHours(start_date: Date, end_date: Date): number {
    const end_date_UTC = this.convertToUTC(end_date);
    const start_date_UTC = this.convertToUTC(start_date);
    return dayjs(end_date_UTC).diff(start_date_UTC, "hours");
  }

  compareInDays(start_date: Date, end_date: Date): number {
    const end_date_UTC = this.convertToUTC(end_date);
    const start_date_UTC = this.convertToUTC(start_date);
    return dayjs(end_date_UTC).diff(start_date_UTC, "days");
  }

  convertToUTC(date: Date): string {
    return dayjs(date).utc().local().format();
  }

  dateNow(): Date {
    return dayjs().toDate();
  }

  addDays(days: number): Date {
    return dayjs().add(days, "days").toDate();
  }

  addHours(hours: number): Date {
    return dayjs().add(hours, "hours").toDate();
  }

  beforeComparison(start_date: Date, end_date: Date): boolean {
    return dayjs(start_date).isBefore(end_date);
  }
}

export { DayJsDateProvider };
