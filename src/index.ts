import Appointment from "./entities/apponintment";

const startDate = new Date();
const endsAt = new Date();

const appointment = new Appointment({
    customer: 'John Doe',
    startsAt: startDate,
    endsAt: endsAt,
    });