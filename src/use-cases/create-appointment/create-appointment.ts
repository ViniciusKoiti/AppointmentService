import Appointment from "../../entities/apponintment";
import { CreateAppointmentRequest } from "./create-appointment-request";
import { CreateAppointmentResponse } from "./create-appointment-response";
import {  } from "../../repository/appointment/appointment-repository";

export class CreateAppointment{

    constructor(
        private appointmentsRepository: AppointmentRepository,
    ){}
   
    async execute({
        customer,
        startsAt,
        endsAt
    }: CreateAppointmentRequest): Promise<CreateAppointmentResponse>{
        const findOverlappingAppointment = await this.appointmentsRepository.findOverlappingAppointment(
            startsAt,
            endsAt
        )

        if(findOverlappingAppointment){
            throw new Error("Another appointment overlaps this appointment dates");
        }
    
        
        const appointment = new Appointment({
            customer,
            startsAt,
            endsAt,
        })

        await this.appointmentsRepository.create(appointment)

        return appointment;
    }
}