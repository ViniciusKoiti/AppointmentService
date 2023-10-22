import { expect, test } from 'vitest';
import Appointment from './apponintment';
import { getFutureDate } from '../test/utils/get-future-date';
import { format } from 'date-fns';

test('create an appointment', () => {
    const dateNow = new Date();
    const dateEndAppointment = new Date();
    dateEndAppointment.setHours(dateEndAppointment.getHours() + 2);
    const startsAtString = format(dateNow, 'yyyy-MM-dd HH:mm:ss');
    const endsAtString = format(dateEndAppointment, 'yyyy-MM-dd HH:mm:ss');
    const startsAt = getFutureDate(startsAtString);
    const endsAt = getFutureDate(endsAtString);

    const appointment = new Appointment({
        customer: 'John Doe',
        startsAt: startsAt,
        endsAt: endsAt
    })

    expect(appointment).toBeInstanceOf(Appointment)
    expect(appointment.customer).toEqual('John Doe')
})

test('cannot create an appointment with date before start date'), () => {
    const startsAt = new Date();
    const endsAt = new Date();

    endsAt.setDate(endsAt.getDate() - 1)

    expect(() => {
        return new Appointment({
            customer: 'John Doe',
            startsAt,
            endsAt,
        })
    }).toThrow()
}

test('cannot create an appointment with date before start date'), () => {
    const startsAt = new Date();
    const endsAt = new Date();

  
    startsAt.setDate(startsAt.getDate())

    expect(() => {
        return new Appointment({
            customer: 'John Doe',
            startsAt,
            endsAt,
        })
    }).toThrow()


}