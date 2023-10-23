import { areIntervalsOverlapping } from "date-fns";
import Appointment from "../../../entities/apponintment";
import { AppointmentRepository } from "../appointment-repository";

export class InMemoryAppointmentRepository implements AppointmentRepository{
   
    public appointments: Appointment[] = []

    
    async create(appointment: Appointment): Promise<void> {
        this.appointments.push(appointment);
    }
    async save(appointment: Appointment): Promise<Appointment> {
        throw new Error("Method not implemented.");
    }

    async findOverlappingAppointment(startsAt: Date, endsAt: Date): Promise<Appointment | null> {
    
        const findOverlappingAppointment = this.appointments.find(appointment => {
            return areIntervalsOverlapping(
                { start: startsAt, end: endsAt},
                { start: appointment.startsAt, end: appointment.endsAt},
                    {inclusive: true}
            )
        })
        if(!findOverlappingAppointment){
            return null
        }

        return findOverlappingAppointment;
    }    
}