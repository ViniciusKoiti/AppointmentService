import { describe, expect, it  } from "vitest";
import { CreateAppointment } from "./create-appointment";
import Appointment from "../../entities/apponintment";

describe('Create Appointment', () => {
    it('should be able create an appointment', () => {
        const createAppointment = new CreateAppointment();
    
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