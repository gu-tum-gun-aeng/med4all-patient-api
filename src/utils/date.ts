const regexIso8601 = /^(\d{4}|\+\d{6})(?:-(\d{2})(?:-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2})\.(\d{1,})(Z|([\-+])(\d{2}):(\d{2}))?)?)?)?$/;

export function reviveDates(key, value) {
  let match;
  if (typeof value === 'string' && (match = value.match(regexIso8601))) {
    const milliseconds = Date.parse(match[0]);
    if (!isNaN(milliseconds)) {
      return new Date(milliseconds);
    }
  }
  return value;
}

export const toDate = (timestampSecond: number): Date => {
  return new Date(timestampSecond * 1000);
};

// ref: https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_15
export const getCurrentSecondsSinceEpochFrom = (date: Date): number => date.getTime() / 1000;

export const currentSecondsSinceEpoch = (): number => getCurrentSecondsSinceEpochFrom(new Date());
