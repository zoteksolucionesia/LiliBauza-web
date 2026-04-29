const ZOTEK_API = process.env.NEXT_PUBLIC_ZOTEK_API_URL ?? "https://zotek-ia.web.app";
const CLIENT_ID = process.env.NEXT_PUBLIC_ZOTEK_CLIENT_ID ?? "13";

export interface ZotekSchedule {
  id: number;
  schedule_date: string; // "YYYY-MM-DD"
  start_time: string;    // "HH:MM"
  end_time: string;      // "HH:MM"
}

export interface BookedSlot {
  date: string; // "YYYY-MM-DD"
  time: string; // "HH:MM"
}

export interface ZotekAppointment {
  id: number;
  name: string;
  phone: string;
  email: string;
  date_time: string; // ISO 8601
  status: "pending" | "confirmed" | "cancelled";
  notes?: string;
}

export interface BookingPayload {
  customer_name: string;
  phone_number: string;
  email: string;
  appointment_date: string; // "YYYY-MM-DD"
  appointment_time: string; // "HH:MM"
  notes?: string;
}

async function zotekFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${ZOTEK_API}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options?.headers },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => res.statusText);
    throw new Error(`Zotek API ${res.status}: ${text}`);
  }
  return res.json() as Promise<T>;
}

export async function getSchedules(): Promise<{ schedules: ZotekSchedule[]; booked: BookedSlot[]; sessionDuration: number }> {
  const data = await zotekFetch<
    { schedules?: ZotekSchedule[]; booked?: BookedSlot[]; session_duration?: number } | ZotekSchedule[]
  >(`/api/clients/${CLIENT_ID}/schedules`);
  if (Array.isArray(data)) return { schedules: data, booked: [], sessionDuration: 60 };
  return {
    schedules: data.schedules ?? [],
    booked: data.booked ?? [],
    sessionDuration: data.session_duration ?? 60,
  };
}

export function createAppointment(payload: BookingPayload): Promise<{ status: string; appointment_id: number }> {
  return zotekFetch(`/api/clients/${CLIENT_ID}/appointments`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function getAppointments(token: string): Promise<ZotekAppointment[]> {
  return zotekFetch<ZotekAppointment[]>(`/api/clients/${CLIENT_ID}/appointments`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

/** Genera slots dentro de un rango start_time..end_time según la duración de sesión (minutos). */
export function generateTimeSlots(start: string, end: string, durationMinutes = 60): string[] {
  const slots: string[] = [];
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);
  let cur = sh * 60 + sm;
  const endMins = eh * 60 + em;
  while (cur + durationMinutes <= endMins) {
    const h = String(Math.floor(cur / 60)).padStart(2, "0");
    const m = String(cur % 60).padStart(2, "0");
    slots.push(`${h}:${m}`);
    cur += durationMinutes;
  }
  return slots;
}
