import { expect, test } from 'vitest';
import Appointment from './apponintment';

test('create an appointment', () => {
    const startsAt = new Date();
    const endsAt = new Date();
    
    endsAt.setHours(endsAt.getHours() + 2);

    const appointment = new Appointment({
        customer: 'John Doe',
        startsAt: new Date(),
        endsAt: endsAt
    })

    expect(appointment).toBeInstanceOf(Appointment)
    expect(appointment.customer).toEqual('John Doe')
})

test('cannot create an appointment with date before start date'), () => {
    const startsAt = new Date();
    const endsAt = new Date();

    endsAt.setDate(endsAt.getDate() - 1)

    const appointment = new Appointment({
        customer: 'John Doe',
        startsAt: startsAt,
        endsAt: endsAt,
    })


    expect(() => {
        return new Appointment({
            customer: 'John Doe',
            startsAt,
            endsAt,
        })
    }).toThrow()


}