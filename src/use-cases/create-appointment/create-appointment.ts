import Appointment from "../../entities/apponintment";
import { CreateAppointmentRequest } from "./create-appointment-request";
import { CreateAppointmentResponse } from "./create-appointment-response";

export class CreateAppointment{

    async execute({
        customer,
        startsAt,
        endsAt
    }: CreateAppointmentRequest): Promise<CreateAppointmentResponse>{
        const appointment = new Appointment({
            customer,
            startsAt,
            endsAt,
        })

        return appointment;
    }
}