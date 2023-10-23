import Appointment from "../../entities/apponintment";

export interface AppointmentRepositoryInterface {
    create(appointment: Appointment): Promise<void>;
    findOverlappingAppointment(startsAt: Date, endsAt: Date): Promise<Appointment | null>;
    save(appointment: Appointment): Promise<Appointment>;

}