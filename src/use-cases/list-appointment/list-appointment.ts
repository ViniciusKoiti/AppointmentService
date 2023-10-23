import { AppointmentRepository } from "../../repository/appointment/appointment-repository";


export class ListAppointment{
    constructor(
        private appointmentsRepository: AppointmentRepository,
    ) { }


}