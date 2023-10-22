import { describe, expect, it  } from "vitest";
import { CreateAppointment } from "./create-appointment";
import Appointment from "../../entities/apponintment";
import { InMemoryAppointmentRepository } from "../../repository/appointment/in-memory-appointment/in-memory-appointment";

describe('Create Appointment', () => {
    it('should be able create an appointment', () => {
        const appointmentsRepository = new InMemoryAppointmentRepository()
        const createAppointment = new CreateAppointment(appointmentsRepository);
    
        const startsAt = new Date();
        const endsAt = new Date();
        
        endsAt.setHours(endsAt.getHours() + 2);

        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt,
            endsAt
        })).resolves.toBeInstanceOf(Appointment)
    })
})