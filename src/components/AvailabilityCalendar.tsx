import { listing } from "../data/listing";
import "./AvailabilityCalendar.css";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

function buildMonth(year: number, month: number) {
  const first = new Date(year, month, 1);
  const startDay = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = Array(startDay).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

// STATIC per explicit instruction: this calendar is a visual reproduction
// only. Dates are not selectable, "Clear dates" is a no-op. The highlighted
// range mirrors the range shown in the reference recording (Oct 18 - Oct 23).
export default function AvailabilityCalendar() {
  const months = [
    { year: 2026, month: 9, name: "October 2026" }, // month is 0-indexed: 9 = October
    { year: 2026, month: 10, name: "November 2026" },
  ];

  const isInRange = (year: number, month: number, day: number | null) => {
    if (day == null) return false;
    // Reference recording showed the highlighted range entirely within October (18-23).
    return year === 2026 && month === 9 && day >= 18 && day <= 23;
  };
  const isEndpoint = (year: number, month: number, day: number | null) =>
    day != null && year === 2026 && month === 9 && (day === 18 || day === 23);

  return (
    <div className="availability">
      <h3>
        {listing.reserve.nightsCount} nights in Candolim
      </h3>
      <p className="availability__subrange">
        {listing.reserve.checkIn} - {listing.reserve.checkOut}
      </p>

      <div className="availability__months">
        {months.map((m) => (
          <div className="availability__month" key={m.name}>
            <h4>{m.name}</h4>
            <div className="availability__weekdays">
              {WEEKDAYS.map((w, i) => (
                <span key={i}>{w}</span>
              ))}
            </div>
            <div className="availability__grid">
              {buildMonth(m.year, m.month).map((day, i) => (
                <span
                  key={i}
                  className={
                    "availability__day" +
                    (day == null ? " availability__day--empty" : "") +
                    (isInRange(m.year, m.month, day) ? " availability__day--in-range" : "") +
                    (isEndpoint(m.year, m.month, day) ? " availability__day--endpoint" : "")
                  }
                >
                  {day ?? ""}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="availability__clear" type="button">
        Clear dates
      </button>
    </div>
  );
}
